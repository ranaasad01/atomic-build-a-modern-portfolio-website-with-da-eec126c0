import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rao Muhammad Ali — SQA Engineer",
  description:
    "Software Quality Assurance Engineer at DaticsAI specializing in manual testing, API testing with Postman, test automation with Playwright, and performance testing with JMeter.",
  keywords: ["SQA", "QA Engineer", "Test Automation", "Playwright", "Postman", "JMeter", "Software Testing", "portfolio"],
  authors: [{ name: "Rao Muhammad Ali" }],
  openGraph: {
    title: "Rao Muhammad Ali — SQA Engineer",
    description:
      "Software Quality Assurance Engineer at DaticsAI specializing in manual testing, API testing with Postman, test automation with Playwright, and performance testing with JMeter.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body className="bg-[#0a0a0a] text-white antialiased font-sans selection:bg-purple-500/30 selection:text-purple-200">
        <ParticleBackground />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
