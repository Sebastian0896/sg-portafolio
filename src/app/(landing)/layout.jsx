import "./globals.css";

export default function LandingLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-black">{children}</body>
    </html>
  );
}
