import type { Metadata } from "next";
import { Outfit, Inter, EB_Garamond } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const ebGaramond = EB_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dr. (Prof.) Debashish Chowdhury | International Authority in Neurology",
  description: "Official website of Dr. Debashish Chowdhury, a global leader in headache management, stroke medicine, and neurodegenerative disorders. Vice Chairman & Academic Head – Neurology at BLK-Max Hospital.",
  keywords: ["Neurologist", "Headache Specialist Delhi", "Stroke Specialist", "BLK-Max Neurology", "Dr. Debashish Chowdhury", "Neurology India"],
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingBlobs from "@/components/FloatingBlobs";
import CustomCursor from "@/components/CustomCursor";
import ProgressBar from "@/components/ProgressBar";
import FloatingWidgets from "@/components/FloatingWidgets";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable} ${ebGaramond.variable} scroll-smooth`}>
      <body className="font-outfit antialiased selection:bg-accent/20 bg-background text-foreground relative min-h-screen mesh-gradient">
        <CustomCursor />
        <ProgressBar />
        <FloatingBlobs />
        <Navbar />
        {children}
        <FloatingWidgets />
        <Footer />
      </body>
    </html>
  );
}
