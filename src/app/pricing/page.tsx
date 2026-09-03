import type { Metadata } from "next";
import PricingView from "./PricingView";

export const metadata: Metadata = {
  title: "Healthcare Platform Pricing & Enterprise Licensing Plans",
  description: "Transparent pricing for clinics, single facility hospitals, and multi-network health enterprise deployments with HIPAA compliance included.",
  alternates: {
    canonical: "https://axiovital.quantaforze.com/pricing",
  },
  openGraph: {
    title: "Healthcare Platform Pricing & Enterprise Licensing Plans",
    description: "Transparent pricing for clinics, single facility hospitals, and multi-network health enterprise deployments with HIPAA compliance included.",
    url: "https://axiovital.quantaforze.com/pricing",
    siteName: "AxioVital Health Platform",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Healthcare Platform Pricing & Enterprise Licensing Plans",
    description: "Transparent pricing for clinics, single facility hospitals, and multi-network health enterprise deployments with HIPAA compliance included.",
  },
};

export default function Pricing() {
  return <PricingView />;
}
