---
title: "Redis Pub/Sub và Streams trong hệ thống ngân hàng phân tán"
date: "2026-05-20"
excerpt: "Cả hai đều trông giống messaging. Chỉ một cái có trí nhớ. Cách chúng tôi chọn giữa Redis Pub/Sub và Streams cho giao tiếp bất đồng bộ trong nền tảng thanh toán."
tags: ["Redis", "Messaging", "Distributed Systems"]
---

Redis cho bạn hai cách để các dịch vụ nói chuyện bất đồng bộ: **Pub/Sub** và **Streams**. Nhìn từ xa chúng khá giống nhau — publish ở đây, consume ở kia — nhưng chúng trả lời hai câu hỏi rất khác nhau. Chọn sai là loại sai lầm mà bạn chỉ phát hiện ra giữa một sự cố production.

## Khác biệt trong một câu

**Pub/Sub là phát thanh trực tiếp; Streams là máy ghi âm.**

Với Pub/Sub, message chỉ tồn tại đúng khoảnh khắc được phát. Nếu subscriber đang down, đang redeploy, hay chậm một nhịp — message biến mất. Với Streams, message được ghi vào một log bền vững; consumer đọc theo tốc độ của mình, xác nhận (ack) những gì đã xử lý, và có thể đọc lại những gì đã lỡ.

## Chúng tôi dùng Pub/Sub ở đâu

Trong nền tảng thanh toán, Pub/Sub mang các **tín hiệu tức thời, nơi trạng thái mới nhất là tất cả những gì quan trọng**:

- vô hiệu hóa cache giữa các instance của dịch vụ,
- thông báo reload cấu hình,
- các tín hiệu "dậy kiểm tra đi" giữa các thành phần.

Tính chất chung: nếu subscriber lỡ một message, không có gì mất mát — tín hiệu tiếp theo hoặc chu kỳ refresh định kỳ sẽ bù lại. Pub/Sub hoàn hảo ở đây chính *vì* nó không có trí nhớ: không consumer group phải quản lý, không log phải cắt tỉa, độ trễ gần như bằng không.

## Chúng tôi dùng Streams ở đâu

Streams mang mọi thứ **phải sống sót qua một lần restart**:

- sự kiện vòng đời giao dịch mà các dịch vụ hạ nguồn tiêu thụ,
- các work item cấp cho những processor bất đồng bộ,
- thông báo liên quan đến audit.

Ba tính năng của Streams gánh phần nặng nhất:

1. **Consumer group** — nhiều instance của một dịch vụ chia nhau một stream, mỗi message được giao cho đúng một thành viên. Scale ngang gần như miễn phí.
2. **Ack và pending list** — message ở trạng thái "pending" cho đến khi consumer ack. Nếu một instance chết giữa chừng, instance khác có thể nhận lại và retry message đó (`XAUTOCLAIM`).
3. **Replay** — một consumer mới, hoặc một consumer vừa sửa xong bug, có thể đọc lại từ bất kỳ điểm nào trong log.

Trong ngân hàng, pending list không phải thứ "có thì tốt". "Consumer crash sau khi trừ tiền nhưng trước khi ack" là kịch bản bạn *chắc chắn* sẽ gặp, và Streams cho bạn công cụ để phát hiện và phục hồi.

## Checklist chúng tôi rút ra

Hỏi một câu trước tiên: **"Có chấp nhận mất message này nếu consumer tình cờ đang down không?"**

- **Có** → Pub/Sub. Tận hưởng sự đơn giản.
- **Không** → Streams, với consumer group và ack tường minh.

Hai câu hỏi phụ đáng hỏi tiếp:

- *Có cần replay lịch sử không?* Chỉ Streams làm được.
- *Consumer có chậm hơn producer không?* Pub/Sub "xử lý" backpressure bằng cách vứt dữ liệu (hoặc phình buffer phía client); Streams hấp thụ burst vào log — nhớ đặt `MAXLEN` để log không hấp thụ luôn cả RAM của bạn.

## Một điều khiến chúng tôi bất ngờ

Ban đầu chúng tôi coi Streams là "Kafka thu nhỏ" — và với messaging nội bộ nền tảng, trực giác đó phần lớn đúng. Khác biệt quan trọng về mặt vận hành: Redis giữ log trong RAM. Chính sách trim không phải chuyện tính sau; nó là một phần của thiết kế. Hãy quyết định *ngay từ khi thiết kế* mỗi stream giữ bao nhiêu lịch sử và điều gì xảy ra với consumer bị tụt lại xa hơn mức đó.

Cả hai công cụ đều có chỗ đứng. Sai lầm không nằm ở việc chọn cái nào — mà ở việc dùng cái loa phát thanh cho những message mà đáng ra bạn cần cái máy ghi âm.
