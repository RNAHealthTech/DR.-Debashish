import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Appointments",
  description: "Consult Dr. Debashish Chowdhury at BLK-Max Super Speciality Hospital, New Delhi. Get contact details and book your neurology consultation today.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
