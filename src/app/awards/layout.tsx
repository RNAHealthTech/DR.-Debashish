import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Awards & Recognition",
  description: "Explore the global recognition and prestigious awards received by Dr. Debashish Chowdhury for his lifetime dedication to neurological sciences.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
