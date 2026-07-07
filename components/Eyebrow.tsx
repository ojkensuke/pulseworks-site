export function Eyebrow({ label, tone = "ink" }: { label: string; tone?: "ink" | "accent" }) {
  const color = tone === "accent" ? "var(--ac)" : "var(--ink)";
  return (
    <div className="mb-[22px] flex items-center gap-3">
      <span className="h-px w-6" style={{ background: color }} />
      <span
        className="font-mono text-[11.5px] font-medium uppercase tracking-[0.16em]"
        style={{ color }}
      >
        {label}
      </span>
    </div>
  );
}
