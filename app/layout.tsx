import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kartik Kumar",
  description: "I’m Kartik Kumar, an App and Web Developer passionate about building modern, user-friendly digital experiences. I specialize in creating responsive web applications and scalable solutions while continuously exploring AI, Data Science, and emerging technologies",
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



