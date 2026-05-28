import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Patient Resources & Neurological Education | Dr. Debashish Chowdhury",
  description: "Access patient education guides, stroke recognition tips, headache diaries, and FAQs compiled by leading neurologist Dr. Debashish Chowdhury.",
  keywords: [
    "headache diary template",
    "stroke symptoms awareness",
    "patient education neurology",
    "migraine management resources"
  ]
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
