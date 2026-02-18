import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DEV HOOD - Custom App & Web Development Agency",
  description: "Custom app and web development agency. We build innovative web applications and mobile apps tailored to your business needs.",
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



