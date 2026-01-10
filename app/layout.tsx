import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kartik Kumar - Portfolio",
  description: "B.Tech AI-DS Student | Web & App Developer | React, Node.js, Flutter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}



