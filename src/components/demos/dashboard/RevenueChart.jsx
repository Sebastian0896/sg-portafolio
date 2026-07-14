"use client";

import { useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { revenuePeriods } from "@/lib/dashboardData";

const W = 720;
const H = 220;
const PAD_TOP = 16;
const PAD_BOTTOM = 28;
const PLOT_H = H - PAD_TOP - PAD_BOTTOM;
const GRID_STEPS = [0.25, 0.5, 0.75, 1];

const periodLabels = {
  "7D": "Últimos 7 días",
  "30D": "Últimos 30 días",
  "12M": "Últimos 12 meses",
};

const formatCurrency = (v) => (v >= 10000 ? `$${Math.round(v / 1000)}k` : `$${Math.round(v)}`);

export default function RevenueChart() {
  const containerRef = useRef(null);
  const [period, setPeriod] = useState("12M");
  const [hoverIndex, setHoverIndex] = useState(null);

  const data = revenuePeriods[period];

  const { xAt, yAt, linePoints, areaPoints, max } = useMemo(() => {
    const values = data.map((d) => d.value);
    const maxValue = Math.max(...values);
    const range = maxValue || 1;

    const x = (i) => (i / (data.length - 1)) * W;
    const y = (v) => PAD_TOP + PLOT_H - (v / range) * PLOT_H;

    const line = data.map((d, i) => `${x(i)},${y(d.value)}`).join(" ");
    const area = `${x(0)},${y(0)} ${line} ${x(data.length - 1)},${y(0)}`;

    return { xAt: x, yAt: y, linePoints: line, areaPoints: area, max: maxValue };
  }, [data]);

  const handleMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const fraction = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
    const index = Math.round(fraction * (data.length - 1));
    setHoverIndex(index);
  };

  const hovered = hoverIndex !== null ? data[hoverIndex] : null;
  const hoverXPercent = hoverIndex !== null ? (xAt(hoverIndex) / W) * 100 : null;

  // Thin out x-axis labels so they don't collide on the 30-day view.
  const labelStep = data.length > 12 ? Math.ceil(data.length / 8) : 1;

  return (
    <div className="rounded-2xl bg-white/[0.03] p-6 ring-1 ring-white/10">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-sm font-medium text-neutral-400">Ingresos</h2>
          <p className="text-2xl font-bold text-white">
            ${data[data.length - 1].value.toLocaleString()}
          </p>
        </div>

        <div className="flex items-center gap-1 rounded-full bg-white/5 p-1 ring-1 ring-white/10">
          {Object.keys(revenuePeriods).map((key) => (
            <button
              key={key}
              onClick={() => {
                setPeriod(key);
                setHoverIndex(null);
              }}
              className={cn(
                "rounded-full px-3 py-1 text-xs font-medium transition-colors",
                period === key ? "bg-cyan-500 text-neutral-950" : "text-neutral-400 hover:text-white"
              )}
            >
              {key}
            </button>
          ))}
        </div>
      </div>

      <p className="mb-2 text-xs text-neutral-500">{periodLabels[period]}</p>

      <div
        ref={containerRef}
        className="relative"
        onMouseMove={handleMove}
        onMouseLeave={() => setHoverIndex(null)}
      >
        <svg viewBox={`0 0 ${W} ${H}`} className="h-56 w-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="revenueFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3987e5" stopOpacity="0.28" />
              <stop offset="100%" stopColor="#3987e5" stopOpacity="0" />
            </linearGradient>
          </defs>

          {GRID_STEPS.map((step) => {
            const y = PAD_TOP + PLOT_H - step * PLOT_H;
            return (
              <g key={step}>
                <line x1={0} x2={W} y1={y} y2={y} stroke="#2c2c2a" strokeWidth="1" />
                <text x={4} y={y - 4} fontSize="11" fill="#898781">
                  {formatCurrency(step * max)}
                </text>
              </g>
            );
          })}

          <polygon points={areaPoints} fill="url(#revenueFill)" />
          <polyline
            points={linePoints}
            fill="none"
            stroke="#3987e5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {data.map((d, i) => {
            if (i % labelStep !== 0 && i !== data.length - 1) return null;
            return (
              <text
                key={`${period}-${d.label}-${i}`}
                x={xAt(i)}
                y={H - 6}
                fontSize="11"
                fill="#898781"
                textAnchor={i === 0 ? "start" : i === data.length - 1 ? "end" : "middle"}
              >
                {d.label}
              </text>
            );
          })}

          {hoverIndex !== null && (
            <>
              <line
                x1={xAt(hoverIndex)}
                x2={xAt(hoverIndex)}
                y1={PAD_TOP}
                y2={PAD_TOP + PLOT_H}
                stroke="#383835"
                strokeWidth="1"
              />
              <circle cx={xAt(hoverIndex)} cy={yAt(hovered.value)} r="4" fill="#3987e5" stroke="#1a1a19" strokeWidth="2" />
            </>
          )}
        </svg>

        {hovered && (
          <div
            className="pointer-events-none absolute top-0 -translate-x-1/2 rounded-lg bg-neutral-900 px-3 py-2 text-xs shadow-lg ring-1 ring-white/10"
            style={{ left: `${hoverXPercent}%` }}
          >
            <p className="text-neutral-400">{hovered.label}</p>
            <p className="font-semibold text-white">${hovered.value.toLocaleString()}</p>
          </div>
        )}
      </div>
    </div>
  );
}
