import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cao Phúc Hà - AI & Robotics Researcher",
  description: "AI Engineering student specializing in computer vision, NLP, and embedded systems. Building intelligent systems that bridge deep learning and control theory.",
  keywords: "AI Engineer, Robotics, Computer Vision, NLP, Deep Learning, Autonomous Systems",
  authors: [{ name: "Cao Phúc Hà" }],
  openGraph: {
    title: "Cao Phúc Hà - AI & Robotics Researcher",
    description: "Building intelligent systems that bridge deep learning and control theory",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
