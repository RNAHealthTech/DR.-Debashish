import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Dr. Debashish Chowdhury | Book Neurology Appointment Delhi",
  description: "Book a consultation with Dr. Debashish Chowdhury at BLK-Max Hospital, New Delhi. Find clinic location address, timing, phone number, and direct inquiry form.",
  keywords: [
    "book neurologist appointment Delhi",
    "Dr. Debashish Chowdhury contact",
    "headache doctor near Karol Bagh Delhi",
    "neurology clinic Karol Bagh",
    "OPD clinic Pusa Road"
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Dr. Debashish Chowdhury | Book Neurology Appointment Delhi",
    description: "Book a consultation with Dr. Debashish Chowdhury at BLK-Max Hospital, New Delhi. Find clinic location address, timing, phone number, and direct inquiry form.",
    url: "https://headachespecialistindia.com/contact",
  },
  twitter: {
    title: "Contact Dr. Debashish Chowdhury | Book Neurology Appointment Delhi",
    description: "Book a consultation with Dr. Debashish Chowdhury at BLK-Max Hospital, New Delhi. Find clinic location address, timing, phone number, and direct inquiry form.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
