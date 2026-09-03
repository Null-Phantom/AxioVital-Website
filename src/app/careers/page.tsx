import type { Metadata } from "next";
import CareersView from "./CareersView";

export const metadata: Metadata = {
  title: "Careers at AxioVital — Join Our HealthTech Engineering Team",
  description: "Build the future of healthcare software. Explore open positions in software engineering, AI research, healthcare compliance, and product design.",
  alternates: {
    canonical: "https://axiovital.quantaforze.com/careers",
  },
  openGraph: {
    title: "Careers at AxioVital — Join Our HealthTech Engineering Team",
    description: "Build the future of healthcare software. Explore open positions in software engineering, AI research, healthcare compliance, and product design.",
    url: "https://axiovital.quantaforze.com/careers",
    siteName: "AxioVital Health Platform",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers at AxioVital — Join Our HealthTech Engineering Team",
    description: "Build the future of healthcare software. Explore open positions in software engineering, AI research, healthcare compliance, and product design.",
  },
};

export default function Careers() {
  return <CareersView />;
}
