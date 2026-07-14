import { TrendingUp, TrendingDown } from "lucide-react";
import { stats } from "@/lib/dashboardData";

function Sparkline({ points, positive }) {
  const min = Math.min(...points);
  const max = Math.max(...points);
  const range = max - min || 1;
  const w = 100;
  const h = 32;

  const coords = points.map((p, i) => {
    const x = (i / (points.length - 1)) * w;
    const y = h - ((p - min) / range) * h;
    return `${x},${y}`;
  });

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="h-8 w-full" preserveAspectRatio="none" aria-hidden="true">
      <polyline
        points={coords.join(" ")}
        fill="none"
        stroke={positive ? "#0ca30c" : "#e66767"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function StatCards() {
  return (
    <div className="grid gap-4 px-6 py-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
      {stats.map((s) => {
        const positive = s.delta >= 0;
        return (
          <div key={s.label} className="rounded-2xl bg-white/[0.03] p-5 ring-1 ring-white/10">
            <p className="text-sm text-neutral-400">{s.label}</p>
            <div className="mt-1 flex items-end justify-between">
              <span className="text-2xl font-bold text-white">{s.value}</span>
              <span
                className={`flex items-center gap-1 text-xs font-medium ${
                  positive ? "text-[#0ca30c]" : "text-[#e66767]"
                }`}
              >
                {positive ? <TrendingUp className="h-3.5 w-3.5" /> : <TrendingDown className="h-3.5 w-3.5" />}
                {Math.abs(s.delta)}%
              </span>
            </div>
            <div className="mt-3">
              <Sparkline points={s.trend} positive={positive} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
