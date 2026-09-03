import type { Metadata } from "next";
import ContactView from "./ContactView";

export const metadata: Metadata = {
  title: "Contact AxioVital Sales & Enterprise Onboarding",
  description: "Speak with our healthcare solutions team to schedule a custom demo, request enterprise pricing, or discuss EMR/EHR system integration.",
  alternates: {
    canonical: "https://axiovital.quantaforze.com/contact",
  },
  openGraph: {
    title: "Contact AxioVital Sales & Enterprise Onboarding",
    description: "Speak with our healthcare solutions team to schedule a custom demo, request enterprise pricing, or discuss EMR/EHR system integration.",
    url: "https://axiovital.quantaforze.com/contact",
    siteName: "AxioVital Health Platform",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact AxioVital Sales & Enterprise Onboarding",
    description: "Speak with our healthcare solutions team to schedule a custom demo, request enterprise pricing, or discuss EMR/EHR system integration.",
  },
};

export default function Contact() {
  return <ContactView />;
}
