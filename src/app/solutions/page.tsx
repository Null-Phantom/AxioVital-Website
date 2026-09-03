import type { Metadata } from "next";
import SolutionsView from "./SolutionsView";

export const metadata: Metadata = {
  title: "Healthcare Segment Solutions & Digital Transformation",
  description: "Tailored digital healthcare solutions connecting multi-facility hospitals, outpatient clinics, diagnostics labs, and patient networks.",
  alternates: {
    canonical: "https://axiovital.quantaforze.com/solutions",
  },
  openGraph: {
    title: "Healthcare Segment Solutions & Digital Transformation",
    description: "Tailored digital healthcare solutions connecting multi-facility hospitals, outpatient clinics, diagnostics labs, and patient networks.",
    url: "https://axiovital.quantaforze.com/solutions",
    siteName: "AxioVital Health Platform",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Healthcare Segment Solutions & Digital Transformation",
    description: "Tailored digital healthcare solutions connecting multi-facility hospitals, outpatient clinics, diagnostics labs, and patient networks.",
  },
};

export default function Solutions() {
  return <SolutionsView />;
}
