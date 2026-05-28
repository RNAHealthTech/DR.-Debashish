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
  ]
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
