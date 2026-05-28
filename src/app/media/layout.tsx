import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Media Interviews, TV Appearances & Press | Dr. Debashish Chowdhury",
  description: "Watch latest TV interviews, news columns, and public awareness lectures on stroke prevention and migraine treatment by Dr. Debashish Chowdhury.",
  keywords: [
    "Dr. Debashish Chowdhury media",
    "neurology TV interviews",
    "stroke awareness public lectures",
    "health awareness programs Delhi"
  ]
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
