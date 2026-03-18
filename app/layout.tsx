import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Stefan O. Juma | AI Engineer & ML Developer",
  description: "AI Engineer, ML Engineer, and Full-Stack Developer based in Kenya. Building intelligent systems and beautiful interfaces with modern technologies.",
  keywords: ["AI Engineer", "ML Engineer", "Full-Stack Developer", "React", "Python", "TypeScript", "LLM", "Ollama"],
  authors: [{ name: "Stefan O. Juma" }],
  openGraph: {
    title: "Stefan O. Juma | AI Engineer & ML Developer",
    description: "Building intelligent systems and beautiful interfaces",
    type: "website",
    url: "https://steph500.github.io/portfolio-2026",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stefan O. Juma | AI Engineer & ML Developer",
    description: "Building intelligent systems and beautiful interfaces",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen bg-[rgb(var(--background))] text-[rgb(var(--foreground))]">
        {children}
      </body>
    </html>
  );
}
