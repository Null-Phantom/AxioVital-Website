import type { Metadata } from "next";
import HomeView from "./HomeView";

export const metadata: Metadata = {
  title: "AxioVital — Next-Gen AI Healthcare Operating System & Enterprise EHR",
  description: "AxioVital is the next-generation, AI-powered healthcare operating system connecting hospitals, clinics, labs, and patients with secure FHIR/EHR interoperability.",
  alternates: {
    canonical: "https://axiovital.quantaforze.com",
  },
  openGraph: {
    title: "AxioVital — Next-Gen AI Healthcare Operating System & Enterprise EHR",
    description: "AxioVital is the next-generation, AI-powered healthcare operating system connecting hospitals, clinics, labs, and patients with secure FHIR/EHR interoperability.",
    url: "https://axiovital.quantaforze.com",
    siteName: "AxioVital Health Platform",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AxioVital — Next-Gen AI Healthcare Operating System & Enterprise EHR",
    description: "AxioVital is the next-generation, AI-powered healthcare operating system connecting hospitals, clinics, labs, and patients with secure FHIR/EHR interoperability.",
  },
};

export default function Home() {
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "AxioVital Health Operating System",
    "operatingSystem": "Web, iOS, Android",
    "applicationCategory": "HealthApplication",
    "description": "AxioVital is an integrated healthcare technology platform developed and operated by QuantaForze, connecting patients, doctors, hospitals, clinics, and laboratories.",
    "publisher": {
      "@type": "Organization",
      "name": "QuantaForze",
      "url": "https://quantaforze.com"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How does AxioVital integrate with existing hospital EMR systems?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AxioConnect features native HL7 v2 and FHIR R4 adaptors that link directly with existing hospital software without interrupting active operations."
        }
      },
      {
        "@type": "Question",
        "name": "Can patients book appointment slots online before visiting?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Patients can search for doctors, view available slots, and reserve appointment times online via the MyHealthcare mobile app or web portal."
        }
      },
      {
        "@type": "Question",
        "name": "How does the AXIO Card NFC kiosk check-in work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Patients simply tap their hardware AXIO Card at hospital reception kiosks to confirm check-in, verify eligibility, and load offline emergency medical tags."
        }
      },
      {
        "@type": "Question",
        "name": "Is patient medical data stored securely?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "All medical records are encrypted using AES-256 keys at rest and TLS 1.3 in transit, fully complying with HIPAA and GDPR regulations."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HomeView />
    </>
  );
}
