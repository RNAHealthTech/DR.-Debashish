import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Publications & Research",
  description: "Access Dr. Debashish Chowdhury's extensive research portfolio, including 100+ research papers, edited books, and global abstracts in neurology and headache medicine.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
