import "./globals.css";
import DemoBackBadge from "@/components/demos/DemoBackBadge";

export default function DemosLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {children}
        <DemoBackBadge />
      </body>
    </html>
  );
}
