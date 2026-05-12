import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Dr. Debashish Chowdhury's 40+ years of clinical excellence, academic leadership, and pioneering work in global neurology.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
