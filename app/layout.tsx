import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rao Ali — SQA Engineer",
  description:
    "Software Quality Assurance Engineer specializing in test automation, manual testing, and quality engineering to deliver bug-free digital products.",
  keywords: ["SQA", "QA Engineer", "Test Automation", "Software Testing", "Selenium", "Cypress", "portfolio"],
  authors: [{ name: "Rao Ali" }],
  openGraph: {
    title: "Rao Ali — SQA Engineer",
    description:
      "Software Quality Assurance Engineer specializing in test automation, manual testing, and quality engineering to deliver bug-free digital products.",
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
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
