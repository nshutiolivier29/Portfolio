import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ChatWidget from "./components/ChatWidget";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hirwa — Designer Portfolio",
  description: "Hirwa — Designer. Websites, Apps, Mockups and many more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
