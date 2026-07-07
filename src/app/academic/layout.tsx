import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Academic Profile & Credentials | Dr. (Prof.) Debashish Chowdhury",
  description: "Academic journey and medical leadership of Dr. Debashish Chowdhury. Learn about his training in Cambridge & Edinburgh, and his work at G.B. Pant Hospital and BLK-Max.",
  keywords: [
    "Dr. Debashish Chowdhury academic profile",
    "G.B. Pant Hospital neurology",
    "Maulana Azad Medical College",
    "Cambridge University neurology",
    "Edinburgh stroke fellowship"
  ],
  alternates: {
    canonical: "/academic",
  },
  openGraph: {
    title: "Academic Profile & Credentials | Dr. (Prof.) Debashish Chowdhury",
    description: "Academic journey and medical leadership of Dr. Debashish Chowdhury. Learn about his training in Cambridge & Edinburgh, and his work at G.B. Pant Hospital and BLK-Max.",
    url: "https://headachespecialistindia.com/academic",
  },
  twitter: {
    title: "Academic Profile & Credentials | Dr. (Prof.) Debashish Chowdhury",
    description: "Academic journey and medical leadership of Dr. Debashish Chowdhury. Learn about his training in Cambridge & Edinburgh, and his work at G.B. Pant Hospital and BLK-Max.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
