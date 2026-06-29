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
  title: "Alex Rivera — Creative Developer",
  description:
    "Full-stack developer and creative technologist crafting digital experiences that live at the intersection of design and engineering.",
  keywords: ["developer", "portfolio", "full-stack", "creative", "React", "Next.js"],
  authors: [{ name: "Rao Ali" }],
  openGraph: {
    title: "Alex Rivera — Creative Developer",
    description:
      "Full-stack developer and creative technologist crafting digital experiences.",
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