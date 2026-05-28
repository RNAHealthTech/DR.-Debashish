import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Dr. Debashish Chowdhury",
  description: "Privacy policy and patient data security guidelines for the official portal of Dr. Debashish Chowdhury, Neurologist.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
