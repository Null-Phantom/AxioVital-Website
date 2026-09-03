import type { Metadata } from "next";
import ResourcesView from "./ResourcesView";

export const metadata: Metadata = {
  title: "Healthcare Insights, Technical Guides & Compliance Resources",
  description: "Access healthcare whitepapers, FHIR integration documentation, HIPAA compliance guides, and EHR operational best practices.",
  alternates: {
    canonical: "https://axiovital.quantaforze.com/resources",
  },
  openGraph: {
    title: "Healthcare Insights, Technical Guides & Compliance Resources",
    description: "Access healthcare whitepapers, FHIR integration documentation, HIPAA compliance guides, and EHR operational best practices.",
    url: "https://axiovital.quantaforze.com/resources",
    siteName: "AxioVital Health Platform",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Healthcare Insights, Technical Guides & Compliance Resources",
    description: "Access healthcare whitepapers, FHIR integration documentation, HIPAA compliance guides, and EHR operational best practices.",
  },
};

export default function Resources() {
  return <ResourcesView />;
}
