import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Doctors & Referrals | Neurologist Dr. Debashish Chowdhury",
  description: "Collaborate and refer patients to Dr. Debashish Chowdhury for specialized care in complex headache, epilepsy, stroke intervention, and memory disorders.",
  keywords: [
    "doctor referrals neurology",
    "refer neurology patient Delhi",
    "Dr. Debashish Chowdhury referrals",
    "medical collaboration neurology"
  ]
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
