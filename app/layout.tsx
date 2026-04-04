import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mukesh Raj Khadka – QA Manager & Automation Engineer",
  description:
    "QA Manager with 7+ years in software quality assurance, test automation, and team leadership. Expert in Selenium, Cypress, JMeter, API testing, and agile methodologies.",
  keywords: [
    "QA Manager",
    "QA Engineer",
    "Test Automation",
    "Selenium",
    "Cypress",
    "JMeter",
    "API Testing",
    "Software Quality Assurance",
    "Nepal",
  ],
  openGraph: {
    title: "Mukesh Raj Khadka – QA Manager & Automation Engineer",
    description:
      "QA Manager with 7+ years in software quality assurance, test automation, and team leadership.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-[#07070f] text-slate-100 overflow-x-hidden">
        {/* Persistent background blobs — glassmorphism needs depth behind it */}
        <div className="fixed inset-0 pointer-events-none z-0" aria-hidden>
          <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-indigo-700/20 blur-[140px]" />
          <div className="absolute top-[30%] right-[-10%] w-[500px] h-[500px] rounded-full bg-violet-700/15 blur-[120px]" />
          <div className="absolute bottom-[10%] left-[20%] w-[400px] h-[400px] rounded-full bg-indigo-500/10 blur-[100px]" />
        </div>
        <CursorGlow />
        <Navbar />
        <main className="flex-1 relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
