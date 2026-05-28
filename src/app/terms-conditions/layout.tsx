import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Dr. Debashish Chowdhury",
  description: "Terms of service and booking conditions for consultations with Dr. Debashish Chowdhury at BLK-Max Hospital and clinic.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
