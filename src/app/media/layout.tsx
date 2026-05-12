import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Media & Press",
  description: "Watch latest interviews, articles, and public health awareness features by Dr. Debashish Chowdhury across national and international media platforms.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
