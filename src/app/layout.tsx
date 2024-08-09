import type { Metadata } from "next";
import '@fontsource-variable/onest';
import "./globals.css";

// Supports weights 100-900

export const metadata: Metadata = {
  title: "La cancha de tus sueños",
  description: "Aplicacion para crear el equipo que siempre deseaste",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body  >{children}</body>
    </html>
  );
}
