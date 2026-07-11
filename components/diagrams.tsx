/**
 * Hand-drawn SVG architecture diagrams, one per project case study.
 * All colors come from the theme tokens so they adapt to dark mode.
 */

function Box({
  x,
  y,
  w,
  h,
  label,
  sub,
  accent = false,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  sub?: string;
  accent?: boolean;
}) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={12}
        className={
          accent
            ? "fill-accent-soft stroke-accent"
            : "fill-background stroke-border-soft"
        }
        strokeWidth={1.5}
      />
      <text
        x={x + w / 2}
        y={sub ? y + h / 2 - 6 : y + h / 2 + 1}
        textAnchor="middle"
        dominantBaseline="middle"
        className={`text-[13px] font-medium ${accent ? "fill-accent-strong" : "fill-foreground"}`}
      >
        {label}
      </text>
      {sub && (
        <text
          x={x + w / 2}
          y={y + h / 2 + 12}
          textAnchor="middle"
          dominantBaseline="middle"
          className="fill-muted text-[10px]"
        >
          {sub}
        </text>
      )}
    </g>
  );
}

function Arrow({
  x1,
  y1,
  x2,
  y2,
  dashed = false,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  dashed?: boolean;
}) {
  return (
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      className="stroke-muted"
      strokeWidth={1.5}
      strokeDasharray={dashed ? "4 4" : undefined}
      markerEnd="url(#arrowhead)"
    />
  );
}

function Defs() {
  return (
    <defs>
      <marker
        id="arrowhead"
        markerWidth="8"
        markerHeight="8"
        refX="7"
        refY="4"
        orient="auto"
      >
        <path d="M0,0 L8,4 L0,8 z" className="fill-muted" />
      </marker>
    </defs>
  );
}

export function CoreBankingDiagram() {
  return (
    <svg viewBox="0 0 800 430" className="h-auto w-full" role="img" aria-label="Core banking microservice platform architecture">
      <Defs />
      <Box x={20} y={60} w={140} h={64} label="Banking Channels" sub="internal services" />
      <Arrow x1={160} y1={92} x2={215} y2={92} />
      <Box x={220} y={60} w={130} h={64} label="Platform Entry" sub="Quarkus" />
      <Arrow x1={350} y1={92} x2={405} y2={92} />

      {/* Camel routing area */}
      <rect x={410} y={20} width={240} height={200} rx={16} className="fill-surface-2 stroke-border-soft" strokeWidth={1.5} />
      <text x={530} y={44} textAnchor="middle" className="fill-foreground text-[13px] font-semibold">
        Dynamic Camel Routes
      </text>
      <text x={530} y={60} textAnchor="middle" className="fill-muted text-[10px]">
        YAML + Java DSL configuration
      </text>
      <Box x={430} y={74} w={200} h={38} label="Validate" sub="schema, load-time checks" />
      <Arrow x1={530} y1={112} x2={530} y2={126} />
      <Box x={430} y={128} w={200} h={38} label="Standardized Processors" sub="shared business components" />
      <Arrow x1={530} y1={166} x2={530} y2={180} />
      <Box x={430} y={182} w={200} h={30} label="Author-then-MAC" accent />

      <Arrow x1={650} y1={92} x2={705} y2={92} />
      <Box x={660} y={60} w={120} h={64} label="Core Banking" sub="Oracle · JPA" />

      {/* Error channel */}
      <Box x={220} y={250} w={430} h={44} label="Centralized Error Handling" sub="retry · rejection · dead letter" accent />
      <Arrow x1={530} y1={220} x2={530} y2={248} dashed />

      {/* Redis */}
      <Box x={20} y={330} w={250} h={64} label="Redis" sub="cache · Pub/Sub · Streams" />
      <Arrow x1={270} y1={352} x2={430} y2={230} dashed />

      {/* Reporting */}
      <Box x={430} y={330} w={220} h={64} label="Reporting & Scheduled Jobs" sub="JasperReports · file monitoring" />
      <Arrow x1={540} y1={328} x2={540} y2={300} dashed />
    </svg>
  );
}

export function VikkiDiagram() {
  return (
    <svg viewBox="0 0 800 400" className="h-auto w-full" role="img" aria-label="Vikki Bank core banking architecture">
      <Defs />
      <Box x={40} y={30} w={200} h={60} label="Onboarding" sub="Jmix · Spring Boot" />
      <Box x={300} y={30} w={200} h={60} label="Accounts" sub="lifecycle management" />
      <Box x={560} y={30} w={200} h={60} label="Transactions" sub="ACID REST APIs" />

      {/* Kafka bus */}
      <rect x={40} y={160} width={720} height={50} rx={12} className="fill-accent-soft stroke-accent" strokeWidth={1.5} />
      <text x={400} y={182} textAnchor="middle" className="fill-accent-strong text-[13px] font-semibold">
        Apache Kafka — event bus
      </text>
      <text x={400} y={198} textAnchor="middle" className="fill-muted text-[10px]">
        reliable inter-service transaction events
      </text>

      <Arrow x1={140} y1={90} x2={140} y2={156} />
      <Arrow x1={400} y1={90} x2={400} y2={156} />
      <Arrow x1={660} y1={90} x2={660} y2={156} />

      <Box x={40} y={280} w={200} h={60} label="Redis" sub="high-concurrency cache" />
      <Box x={300} y={280} w={200} h={60} label="PostgreSQL" sub="transactional store" />
      <Box x={560} y={280} w={200} h={60} label="Prometheus · Grafana" sub="monitoring, Docker deploys" />

      <Arrow x1={140} y1={276} x2={140} y2={214} dashed />
      <Arrow x1={400} y1={214} x2={400} y2={276} />
      <Arrow x1={660} y1={276} x2={660} y2={214} dashed />
    </svg>
  );
}

export const diagramBySlug: Record<string, () => React.ReactElement> = {
  "core-banking-microservice-platform": CoreBankingDiagram,
  "vikki-bank-core-banking": VikkiDiagram,
};
