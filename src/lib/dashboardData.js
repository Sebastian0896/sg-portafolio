const revenue12m = [
  { label: "Ene", value: 18200 },
  { label: "Feb", value: 19800 },
  { label: "Mar", value: 21100 },
  { label: "Abr", value: 20400 },
  { label: "May", value: 23600 },
  { label: "Jun", value: 25900 },
  { label: "Jul", value: 24700 },
  { label: "Ago", value: 27300 },
  { label: "Sep", value: 29800 },
  { label: "Oct", value: 31200 },
  { label: "Nov", value: 33500 },
  { label: "Dic", value: 36100 },
];

// Deterministic (no Math.random) so server and client render the same data.
function generateSeries(n, base, amplitude, makeLabel) {
  return Array.from({ length: n }, (_, i) => ({
    label: makeLabel(i),
    value: Math.round(base + i * (amplitude * 0.12) + amplitude * Math.sin(i / 2.4)),
  }));
}

const dayNames = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];
const revenue7d = generateSeries(7, 1100, 260, (i) => dayNames[i]);
const revenue30d = generateSeries(30, 900, 220, (i) => String(i + 1));

export const revenuePeriods = {
  "7D": revenue7d,
  "30D": revenue30d,
  "12M": revenue12m,
};

export const stats = [
  {
    label: "Ingresos",
    value: "$36,100",
    delta: 12.4,
    trend: [18, 20, 19, 22, 24, 23, 26, 28, 27, 30, 33, 36],
  },
  {
    label: "Usuarios activos",
    value: "8,420",
    delta: 6.1,
    trend: [5, 5.5, 6, 6, 6.8, 7, 7.2, 7.5, 7.8, 8, 8.2, 8.4],
  },
  {
    label: "Conversión",
    value: "4.8%",
    delta: -0.6,
    trend: [5.6, 5.5, 5.3, 5.4, 5.2, 5.1, 5.0, 4.9, 5.0, 4.9, 4.8, 4.8],
  },
  {
    label: "Retención",
    value: "92.3%",
    delta: 1.8,
    trend: [88, 88.5, 89, 89.2, 89.8, 90, 90.3, 90.8, 91.2, 91.6, 92, 92.3],
  },
];

export const transactions = [
  { id: "TX-3821", client: "Acme Corp", amount: 1250, status: "Pagado", date: "12 jul" },
  { id: "TX-3820", client: "Nova Studio", amount: 480, status: "Pagado", date: "12 jul" },
  { id: "TX-3819", client: "Lunra Tech", amount: 920, status: "Pendiente", date: "11 jul" },
  { id: "TX-3818", client: "Fintra SRL", amount: 3100, status: "Pagado", date: "10 jul" },
  { id: "TX-3817", client: "Bright Labs", amount: 210, status: "Fallido", date: "10 jul" },
  { id: "TX-3816", client: "Orbit Media", amount: 675, status: "Pagado", date: "09 jul" },
];
