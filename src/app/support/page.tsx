import type { Metadata } from "next";
import SupportView from "./SupportView";

export const metadata: Metadata = {
  title: "Customer Support, Technical Help & Enterprise Onboarding",
  description: "Get technical assistance, system status updates, documentation help, and enterprise deployment support from the AxioVital team.",
  alternates: {
    canonical: "https://axiovital.quantaforze.com/support",
  },
  openGraph: {
    title: "Customer Support, Technical Help & Enterprise Onboarding",
    description: "Get technical assistance, system status updates, documentation help, and enterprise deployment support from the AxioVital team.",
    url: "https://axiovital.quantaforze.com/support",
    siteName: "AxioVital Health Platform",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Customer Support, Technical Help & Enterprise Onboarding",
    description: "Get technical assistance, system status updates, documentation help, and enterprise deployment support from the AxioVital team.",
  },
};

export default function SupportPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I book an appointment?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Patients can book appointments directly through the AxioVital Patient Mobile App or Web Portal by selecting a doctor, clinic location, and available time slot. If you encounter issues, navigate to Account Recovery or Contact Support."
        }
      },
      {
        "@type": "Question",
        "name": "How do I access my medical records?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Your Electronic Health Records (EHR) are securely stored under your verified AxioVital Patient Account. Log into the Patient Portal and click 'My Medical History' or scan your AXIO Smart Card at participating clinics."
        }
      },
      {
        "@type": "Question",
        "name": "How can doctors issue digital prescriptions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Licensed physicians can log into the AxioVital Doctor Portal, select a patient chart, and generate cryptographically signed digital prescriptions (E-RX) sent directly to integrated e-pharmacies."
        }
      },
      {
        "@type": "Question",
        "name": "How can hospitals onboard to AxioVital?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Hospital administrators can request enterprise onboarding by reaching out to our Hospital Enterprise Support team via the Contact Us page. Our integration engineers assist with HL7/FHIR setup and EHR data migration."
        }
      },
      {
        "@type": "Question",
        "name": "How does the AXIO Card NFC Kiosk check-in work?",
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

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://axiovital.quantaforze.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Support",
        "item": "https://axiovital.quantaforze.com/support"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <SupportView />
    </>
  );
}
