import type { Metadata } from "next";
import { Geist, Geist_Mono, Caveat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
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

// Stamps the theme on <html> before the browser paints, so the page never
// flashes the wrong colours. Kept out of the component tree on purpose —
// React won't re-run an inline script it renders on the client.
// Light is the default; the OS setting is ignored until the visitor
// picks a side with the toggle.
const themeInit = `(function(){try{var s=localStorage.getItem('theme');var t=(s==='light'||s==='dark')?s:'light';document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} ${caveat.variable} h-full`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground overflow-x-hidden">
        <Navbar />
        <main className="flex-1 relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
