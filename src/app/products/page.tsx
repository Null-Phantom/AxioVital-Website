import type { Metadata } from "next";
import Link from "next/link";
import { CreditCard, ShieldCheck, Cpu, Database, Activity, Layers, ArrowRight, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "AxioVital Product Suite — AXIO-ID, Smart Cards & AxioAI",
  description: "Explore AxioVital's product suite including AXIO-ID, AXIO Smart NFC Cards, AxioAI Assistant, AxioInsights Analytics, and AxioConnect FHIR Engine.",
  alternates: {
    canonical: "https://axiovital.quantaforze.com/products",
  },
};

export default function Products() {
  const products = [
    { 
      id: "medical-data-engine", 
      title: "Unified Medical Data Engine", 
      badge: "Core Infrastructure",
      desc: "Connects directly to national health networks (Carequality, CommonWell) and major EHRs to pull, de-duplicate, and standardize patient charts.", 
      icon: Database,
      docLink: "/documentation#medical-data-engine"
    },
    { 
      id: "axio-id", 
      title: "AXIO-ID Digital Identity Token", 
      badge: "Security & Auth",
      desc: "Universal cryptographic identity token for cross-facility patient identity resolution and zero-trust authentication.", 
      icon: ShieldCheck,
      docLink: "/documentation#axio-id"
    },
    { 
      id: "axio-card", 
      title: "AXIO Smart NFC Health Card", 
      badge: "Hardware & Kiosk",
      desc: "Physical NTAG216 contactless NFC key providing sub-500ms patient check-in at hospital kiosks.", 
      icon: CreditCard,
      docLink: "/documentation#axio-card"
    },
    { 
      id: "axioai", 
      title: "AxioAI Clinical Assistant", 
      badge: "Clinical AI",
      desc: "Transforms noisy, unstructured EHR charts into clean, structured context payloads for LLMs and care teams.", 
      icon: Cpu,
      docLink: "/documentation#axioai"
    },
    { 
      id: "axioinsights", 
      title: "AxioInsights Analytics", 
      badge: "Telemetry & Metrics",
      desc: "Real-time population health analytics, facility bed occupancy telemetry, and diagnostic trend dashboards.", 
      icon: Activity,
      docLink: "/documentation#axioinsights"
    },
    { 
      id: "axioconnect", 
      title: "AxioConnect FHIR Pipeline & Webhooks", 
      badge: "Real-Time Streaming",
      desc: "High-throughput FHIR R4 streaming pipeline with automated HMAC-signed webhook event notifications.", 
      icon: Zap,
      docLink: "/documentation#axioconnect"
    },
    { 
      id: "ehr-pipeline", 
      title: "C-CDA & PDF Document Parser", 
      badge: "Document Engine",
      desc: "Converts legacy C-CDA XML clinical summaries and unstructured lab PDFs into standardized FHIR R4 JSON.", 
      icon: Layers,
      docLink: "/documentation#ehr-pipeline"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-16 sm:py-24 font-sans text-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            Enterprise Product Suite
          </span>
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl">
            AxioVital Platform Products
          </h1>
          <p className="text-lg text-slate-600">
            Explore the products that power our interoperable healthcare data operating system. Click any product to view its technical documentation.
          </p>
        </div>

        {/* Products Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {products.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div 
                key={idx} 
                id={p.id} 
                className="bg-white border border-slate-200 rounded-3xl p-8 shadow-2xs flex flex-col justify-between space-y-6 hover:shadow-md transition-all scroll-mt-20"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="h-12 w-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-200">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
                      {p.badge}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">{p.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mt-2">{p.desc}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <Link 
                    href={p.docLink}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 hover:underline"
                  >
                    Read Technical Specs & Architecture Docs <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
