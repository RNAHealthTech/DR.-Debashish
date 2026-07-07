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

export const viewport = {
  themeColor: '#0a0f1c',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://headachespecialistindia.com'),
  title: {
    default: "Dr. Debashish Chowdhury | Best Headache Specialist & Neurologist in Karol Bagh, Delhi, India",
    template: "%s | Dr. Debashish Chowdhury"
  },
  description: "Consult Dr. Debashish Chowdhury, a leading headache specialist and neurologist at BLK-Max Hospital in Karol Bagh, Delhi. Expert care for migraine, stroke, epilepsy, and neurodegenerative disorders across India.",
  alternates: {
    canonical: '/',
  },
  manifest: '/manifest.json',
  appleWebApp: {
    title: 'Dr. Debashish Chowdhury',
    statusBarStyle: 'default',
  },
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
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://headachespecialistindia.com/#website",
      "url": "https://headachespecialistindia.com/",
      "name": "Dr. Debashish Chowdhury",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://headachespecialistindia.com/search?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "MedicalClinic",
      "@id": "https://headachespecialistindia.com/#clinic",
      "name": "Dr. Debashish Chowdhury Neurology Clinic",
      "image": "https://headachespecialistindia.com/images/dr/portrait.jpg",
      "url": "https://headachespecialistindia.com",
      "telephone": "+91-92177-07822",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Room No. 64, Ground Floor, OPD 14, Pusa Rd, Rajinder Nagar",
        "addressLocality": "New Delhi",
        "addressRegion": "Delhi",
        "postalCode": "110005",
        "addressCountry": "IN"
      }
    },
    {
      "@type": "Organization",
      "@id": "https://headachespecialistindia.com/#organization",
      "name": "Dr. Debashish Chowdhury",
      "url": "https://headachespecialistindia.com",
      "logo": "https://headachespecialistindia.com/images/dr/portrait.jpg",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-92177-07822",
        "contactType": "customer service"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://headachespecialistindia.com/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://headachespecialistindia.com/"
        }
      ]
    },
    {
      "@type": "Physician",
      "@id": "https://headachespecialistindia.com/#physician",
      "name": "Dr. Debashish Chowdhury",
      "image": "https://headachespecialistindia.com/images/dr/portrait.jpg",
      "url": "https://headachespecialistindia.com",
      "telephone": "+91-92177-07822",
      "jobTitle": "Vice Chairman & Academic Head – Neurology",
      "logo": "https://headachespecialistindia.com/images/dr/portrait.jpg",
      "priceRange": "$$",
      "medicalSpecialty": [
        "Neurology",
        "HeadacheMedicine",
        "StrokeMedicine"
      ],
  "knowsAbout": [
    "Neurology",
    "Headache",
    "Migraine",
    "Stroke",
    "Epilepsy",
    "Vertigo",
    "Dizziness",
    "Alzheimer's Disease",
    "Parkinson's Disease"
  ],
  "worksFor": {
    "@type": "Hospital",
    "name": "BLK-Max Super Speciality Hospital",
    "url": "https://www.blkmaxhospital.com"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Room No. 64, Ground Floor, OPD 14, Pusa Rd, Rajinder Nagar",
    "addressLocality": "New Delhi",
    "addressRegion": "Delhi",
    "postalCode": "110005",
    "addressCountry": "IN"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "09:00",
    "closes": "16:30"
  },
  "sameAs": [
    "https://www.blkmaxhospital.com/doctor/debashish-chowdhury",
    "https://scholar.google.com/citations?user=DrDebashishChowdhury"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "4",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Rajesh Kumar"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "reviewBody": "Dr. Chowdhury's approach changed my life. I had been suffering for 15 years, and his specialized headache clinic provided the breakthrough I needed."
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Sarah Williams"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "reviewBody": "Exceptional care and empathy. The team's expertise in stroke rehabilitation and Dr. Chowdhury's guidance were instrumental in my recovery journey."
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Amitabh Gupta"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "reviewBody": "Highly professional and knowledgeable. He takes the time to explain the condition and the rationale behind the treatment plan."
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Meena Devi"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "reviewBody": "The best neurologist in Delhi. His clinical insight is unmatched, and he treats patients with immense respect and care."
    }
  ]
    }
  ]
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
      <body className="font-outfit antialiased selection:bg-accent/20 bg-background text-foreground relative min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <CustomCursor />
        <ProgressBar />
        <Navbar />
        {children}
        <FloatingWidgets />
        <Footer />
      </body>
    </html>
  );
}
