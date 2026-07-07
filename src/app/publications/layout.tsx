import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Publications, Books & Research | Dr. Debashish Chowdhury",
  description: "Access Dr. Debashish Chowdhury's extensive academic portfolio: over 100 research papers, 9 edited neurology books, and international abstracts in headache medicine.",
  keywords: [
    "Dr. Debashish Chowdhury publications",
    "headache medicine research papers",
    "neurology books edited",
    "Journal of Headache and Pain consensus paper",
    "Cephalalgia cluster headache study"
  ],
  alternates: {
    canonical: "/publications",
  },
  openGraph: {
    title: "Publications, Books & Research | Dr. Debashish Chowdhury",
    description: "Access Dr. Debashish Chowdhury's extensive academic portfolio: over 100 research papers, 9 edited neurology books, and international abstracts in headache medicine.",
    url: "https://headachespecialistindia.com/publications",
  },
  twitter: {
    title: "Publications, Books & Research | Dr. Debashish Chowdhury",
    description: "Access Dr. Debashish Chowdhury's extensive academic portfolio: over 100 research papers, 9 edited neurology books, and international abstracts in headache medicine.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
