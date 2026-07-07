import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Awards, Honors & Memberships | Dr. Debashish Chowdhury",
  description: "Explore the prestigious awards, national healthcare honors, and international society memberships (AAN, IHS, IAN) received by Dr. Debashish Chowdhury.",
  keywords: [
    "Dr. Debashish Chowdhury awards",
    "Delhi State Healthcare Award",
    "Maulana Azad Medical College alumnus",
    "American Academy of Neurology member",
    "International Headache Society representative"
  ],
  alternates: {
    canonical: "/awards",
  },
  openGraph: {
    title: "Awards, Honors & Memberships | Dr. Debashish Chowdhury",
    description: "Explore the prestigious awards, national healthcare honors, and international society memberships (AAN, IHS, IAN) received by Dr. Debashish Chowdhury.",
    url: "https://headachespecialistindia.com/awards",
  },
  twitter: {
    title: "Awards, Honors & Memberships | Dr. Debashish Chowdhury",
    description: "Explore the prestigious awards, national healthcare honors, and international society memberships (AAN, IHS, IAN) received by Dr. Debashish Chowdhury.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
