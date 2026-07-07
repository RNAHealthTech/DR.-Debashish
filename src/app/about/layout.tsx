import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Dr. Debashish Chowdhury | Expert Neurologist & Headache Specialist",
  description: "Learn about Dr. Debashish Chowdhury's 40+ years of clinical excellence, pioneering work establishing India's first dedicated headache clinic, and neurology leadership at G.B. Pant Hospital and BLK-Max.",
  keywords: [
    "Dr. Debashish Chowdhury",
    "best headache specialist Delhi",
    "neurologist in Delhi",
    "About Dr. Debashish Chowdhury",
    "G.B. Pant Hospital neurology",
    "BLK-Max hospital neurologist"
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Dr. Debashish Chowdhury | Expert Neurologist & Headache Specialist",
    description: "Learn about Dr. Debashish Chowdhury's 40+ years of clinical excellence, pioneering work establishing India's first dedicated headache clinic, and neurology leadership at G.B. Pant Hospital and BLK-Max.",
    url: "https://headachespecialistindia.com/about",
  },
  twitter: {
    title: "About Dr. Debashish Chowdhury | Expert Neurologist & Headache Specialist",
    description: "Learn about Dr. Debashish Chowdhury's 40+ years of clinical excellence, pioneering work establishing India's first dedicated headache clinic, and neurology leadership at G.B. Pant Hospital and BLK-Max.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
