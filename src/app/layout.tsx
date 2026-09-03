import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./Header";
import Footer from "./Footer";
import { siteConfig } from "./config";

export const metadata: Metadata = {
  title: {
    default: "AxioVital - Enterprise Healthcare Operating System",
    template: "%s | AxioVital"
  },
  description: siteConfig.entity.description,
  keywords: ["Healthcare Platform", "Enterprise EHR", "Digital Identity", "AxioVital", "Axio Vital", "AxioVital HealthTech", "AxioVital QuantaForze", "AxioAI"],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": siteConfig.entity.name,
    "legalName": siteConfig.entity.legalName,
    "alternateName": siteConfig.entity.alternateNames,
    "url": siteConfig.entity.url,
    "logo": siteConfig.entity.logo,
    "description": siteConfig.entity.description,
    "parentOrganization": {
      "@type": "Organization",
      "name": siteConfig.entity.parentOrganization.name,
      "url": siteConfig.entity.parentOrganization.url
    },
    "sameAs": siteConfig.entity.sameAs,
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": siteConfig.entity.contactPoint.contactType,
      "email": siteConfig.entity.contactPoint.email
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": siteConfig.entity.name,
    "alternateName": "Axio Vital",
    "url": siteConfig.entity.url,
    "publisher": {
      "@type": "Organization",
      "name": siteConfig.entity.parentOrganization.name,
      "url": siteConfig.entity.parentOrganization.url
    }
  };

  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-slate-50 text-slate-900">
        {/* Google Tag (gtag.js) via Next.js Script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0TL3DMNEG6"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-0TL3DMNEG6');
          `}
        </Script>

        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
