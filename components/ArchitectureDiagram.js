// Request flow for the AWS Banking Simulator, drawn to scale in one SVG.
const nodes = [
  { id: 'client', x: 10, y: 78, label: 'React client', sub: 'S3' },
  { id: 'api', x: 136, y: 78, label: 'REST API', sub: 'Lambda' },
  { id: 'sns', x: 262, y: 78, label: 'Publish', sub: 'SNS' },
  { id: 'sqs', x: 388, y: 78, label: 'Queue', sub: 'SQS' },
  { id: 'worker', x: 514, y: 78, label: 'Processor', sub: 'Lambda' },
  { id: 'ddb', x: 650, y: 18, label: 'Balances', sub: 'DynamoDB' },
  { id: 'aurora', x: 650, y: 138, label: 'Audit log', sub: 'Aurora PG' },
];
const W = 104;
const H = 46;

const edges = [
  ['client', 'api'],
  ['api', 'sns'],
  ['sns', 'sqs'],
  ['sqs', 'worker'],
  ['worker', 'ddb'],
  ['worker', 'aurora'],
];

const byId = Object.fromEntries(nodes.map((n) => [n.id, n]));

function path(a, b) {
  const x1 = a.x + W;
  const y1 = a.y + H / 2;
  const x2 = b.x;
  const y2 = b.y + H / 2;
  if (y1 === y2) return `M${x1} ${y1} H${x2 - 6}`;
  const mx = (x1 + x2) / 2;
  return `M${x1} ${y1} C${mx} ${y1}, ${mx} ${y2}, ${x2 - 6} ${y2}`;
}

export default function ArchitectureDiagram() {
  return (
    <div className="overflow-x-auto rounded-lg border border-line bg-subtle/60 p-4">
      <svg viewBox="0 0 770 202" className="min-w-[640px] w-full" role="img" aria-label="Request flow: React client to Lambda API to SNS to SQS to a processor Lambda, which writes balances to DynamoDB and an audit log to Aurora PostgreSQL.">
        <defs>
          <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0 0 L10 5 L0 10 z" className="fill-muted" />
          </marker>
        </defs>
        {edges.map(([a, b]) => (
          <path
            key={a + b}
            d={path(byId[a], byId[b])}
            className="flow fill-none stroke-muted"
            strokeWidth="1.4"
            strokeDasharray="5 5"
            markerEnd="url(#arrow)"
          />
        ))}
        {nodes.map((n) => (
          <g key={n.id}>
            <rect x={n.x} y={n.y} width={W} height={H} rx="8" className="fill-surface stroke-line" strokeWidth="1.2" />
            <text x={n.x + W / 2} y={n.y + 20} textAnchor="middle" className="fill-fg" style={{ fontSize: 13, fontWeight: 600 }}>
              {n.label}
            </text>
            <text x={n.x + W / 2} y={n.y + 36} textAnchor="middle" className="fill-muted font-mono" style={{ fontSize: 11 }}>
              {n.sub}
            </text>
          </g>
        ))}
      </svg>
      <style>{`.flow{animation:flow 1.6s linear infinite}@keyframes flow{to{stroke-dashoffset:-20}}@media (prefers-reduced-motion:reduce){.flow{animation:none}}`}</style>
    </div>
  );
}
