---
title: "Redis Pub/Sub vs Streams in Distributed Banking Services"
date: "2026-05-20"
excerpt: "Both look like messaging. Only one remembers. How we chose between Redis Pub/Sub and Streams for asynchronous communication in a payment platform."
tags: ["Redis", "Messaging", "Distributed Systems"]
---

Redis gives you two ways to make services talk asynchronously: **Pub/Sub** and **Streams**. They look similar from a distance — publish here, consume there — but they answer two very different questions. Picking wrong is the kind of mistake you only discover during an incident.

## The one-line difference

**Pub/Sub is a radio broadcast; Streams is a tape recorder.**

With Pub/Sub, a message exists only at the instant of delivery. If a subscriber is down, redeploying, or momentarily slow — the message is gone. With Streams, messages are appended to a persistent log; consumers read at their own pace, acknowledge what they processed, and can replay what they missed.

## Where we used Pub/Sub

In our payment platform, Pub/Sub carries **ephemeral signals where the latest state is all that matters**:

- cache invalidation between service instances,
- configuration reload notifications,
- "wake up and check" pings between components.

The common property: if a subscriber misses one message, nothing is lost — the next signal or a periodic refresh covers it. Pub/Sub is perfect here precisely *because* it has no memory: no consumer groups to manage, no log to trim, near-zero latency.

## Where we used Streams

Streams carry everything that **must survive a restart**:

- transaction lifecycle events consumed by downstream services,
- work items feeding asynchronous processors,
- audit-relevant notifications.

Three Stream features do the heavy lifting:

1. **Consumer groups** — several instances of a service share one stream, each message delivered to exactly one member. Horizontal scaling comes for free.
2. **Acknowledgements and pending lists** — a message stays "pending" until the consumer acks it. If an instance dies mid-processing, another can claim and retry the message (`XAUTOCLAIM`).
3. **Replay** — a new consumer, or one recovering from a bug, can re-read from any point in the log.

In banking, that pending list is not a nice-to-have. "The consumer crashed after debiting but before acking" is a scenario you *will* meet, and Streams gives you the primitives to detect and recover from it.

## The checklist we ended up with

Ask one question first: **"Is it acceptable to lose this message if the consumer happens to be down?"**

- **Yes** → Pub/Sub. Enjoy the simplicity.
- **No** → Streams, with consumer groups and explicit acks.

Two follow-ups worth asking:

- *Do you need to replay history?* Only Streams can.
- *Is the consumer slower than the producer?* Pub/Sub applies backpressure by dropping data (or ballooning client buffers); Streams absorbs bursts in the log — just set `MAXLEN` so the log doesn't absorb your RAM too.

## One thing that surprised us

We initially treated Streams as "Kafka but smaller" — and for intra-platform messaging that intuition mostly holds. The difference that matters operationally: Redis holds the log in memory. Trimming policy is not an afterthought; it's part of the design. Decide *at design time* how much history each stream keeps and what happens to consumers that fall further behind than that.

Both tools earn their place. The failure mode is not choosing one — it's using the broadcast tool for messages you needed the tape recorder for.
