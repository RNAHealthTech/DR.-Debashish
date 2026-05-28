import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Patient Testimonials & Reviews | Dr. Debashish Chowdhury",
  description: "Read patient experiences and success stories from individuals treated by Dr. Debashish Chowdhury for chronic headache, migraine, stroke, and epilepsy in Delhi.",
  keywords: [
    "Dr. Debashish Chowdhury patient reviews",
    "neurologist testimonials Delhi",
    "migraine doctor reviews Delhi",
    "best migraine doctor reviews"
  ]
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
