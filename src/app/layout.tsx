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
  title: {
    default: "Dr. Debashish Chowdhury | Best Headache Specialist & Neurologist in Karol Bagh, Delhi, India",
    template: "%s | Dr. Debashish Chowdhury"
  },
  description: "Consult Dr. Debashish Chowdhury, a leading headache specialist and neurologist at BLK-Max Hospital in Karol Bagh, Delhi. Expert care for migraine, stroke, epilepsy, and neurodegenerative disorders across India.",
  keywords: ["Dr. Debashish Chowdhury", "headache specialist", "neurologist", "migraine treatment", "stroke specialist", "epilepsy care", "Alzheimer's care", "neurodegenerative disorders", "Karol Bagh", "Delhi", "India", "BLK-Max Hospital"],
  authors: [{ name: "Dr. Debashish Chowdhury" }],
  creator: "Dr. Debashish Chowdhury",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://headachespecialistindia.com",
    siteName: "Dr. Debashish Chowdhury",
    title: "Dr. Debashish Chowdhury | Best Headache Specialist & Neurologist in Karol Bagh, Delhi, India",
    description: "Consult Dr. Debashish Chowdhury, a leading headache specialist and neurologist at BLK-Max Hospital in Karol Bagh, Delhi. Expert care for migraine, stroke, epilepsy, and neurodegenerative disorders across India.",
    images: [
      {
        url: "https://headachespecialistindia.com/images/dr/portrait.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Debashish Chowdhury"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Debashish Chowdhury | Best Headache Specialist & Neurologist",
    description: "Consult Dr. Debashish Chowdhury, a leading headache specialist and neurologist at BLK-Max Hospital in Karol Bagh, Delhi.",
    images: ["https://headachespecialistindia.com/images/dr/portrait.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Physician",
  "name": "Dr. Debashish Chowdhury",
  "image": "https://drdebashish.com/images/dr/portrait.jpg",
  "url": "https://drdebashish.com",
  "telephone": "+91-11-30403040",
  "jobTitle": "Vice Chairman & Academic Head – Neurology",
  "medicalSpecialty": ["Neurology", "Headache Medicine", "Stroke Medicine"],
  "worksFor": {
    "@type": "Hospital",
    "name": "BLK-Max Super Speciality Hospital"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Pusa Road, Rajinder Nagar",
    "addressLocality": "New Delhi",
    "postalCode": "110005",
    "addressCountry": "IN"
  }
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
