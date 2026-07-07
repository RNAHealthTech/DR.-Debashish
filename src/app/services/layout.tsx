import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Neurological Services & Treatments in Karol Bagh, Delhi | Dr. Debashish Chowdhury",
  description: "Explore specialized neurological services by Dr. Debashish Chowdhury. Leading treatments for chronic migraine, stroke, vertigo, epilepsy, and Alzheimer's care in Delhi.",
  keywords: [
    "neurological services Delhi",
    "migraine treatment Karol Bagh",
    "stroke specialist Delhi",
    "vertigo treatment Delhi",
    "epilepsy care Delhi",
    "Alzheimer's care Delhi",
    "Dr. Debashish Chowdhury"
  ],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Neurological Services & Treatments in Karol Bagh, Delhi | Dr. Debashish Chowdhury",
    description: "Explore specialized neurological services by Dr. Debashish Chowdhury. Leading treatments for chronic migraine, stroke, vertigo, epilepsy, and Alzheimer's care in Delhi.",
    url: "https://headachespecialistindia.com/services",
  },
  twitter: {
    title: "Neurological Services & Treatments in Karol Bagh, Delhi | Dr. Debashish Chowdhury",
    description: "Explore specialized neurological services by Dr. Debashish Chowdhury. Leading treatments for chronic migraine, stroke, vertigo, epilepsy, and Alzheimer's care in Delhi.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
