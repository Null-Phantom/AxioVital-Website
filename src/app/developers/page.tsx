import type { Metadata } from "next";
import Link from "next/link";
import { 
  Code, Terminal, FileCode, Cpu, ShieldCheck, Database, Layers, ArrowRight, CheckCircle2, ChevronRight, Copy
} from "lucide-react";

export const metadata: Metadata = {
  title: "Developer Portal — AxioVital Medical API & SDKs",
  description: "Developer hub for AxioVital FHIR R4 APIs, TypeScript & Python SDKs, webhooks, and clinical data integration.",
  alternates: {
    canonical: "https://axiovital.quantaforze.com/developers",
  },
};

export default function DevelopersPage() {
  const sdkList = [
    { name: "TypeScript / Node.js SDK", pkg: "npm i @axio/medical-sdk", desc: "Official Node.js and TypeScript client library with full auto-completion and FHIR R4 types.", icon: Code },
    { name: "Python Medical Client", pkg: "pip install axio-medical", desc: "Python 3.9+ library for async record retrieval, pandas FHIR conversions, and AI context pipelines.", icon: Terminal },
    { name: "cURL & REST OpenAPI", pkg: "https://api.axiovital.com/v1", desc: "OpenAPI 3.0 specification, Postman collection, and interactive Swagger UI documentation.", icon: FileCode }
  ];

  return (
    <div className="bg-white min-h-screen font-sans text-slate-900 selection:bg-blue-500 selection:text-white">
      
      {/* HERO SECTION */}
      <section className="bg-slate-50 border-b border-slate-200 py-16 sm:py-24 relative overflow-hidden">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 text-center space-y-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-100/80 border border-blue-200 px-3.5 py-1.5 rounded-full shadow-2xs">
            <Code className="h-3.5 w-3.5 text-blue-600" />
            AxioVital Developer Hub
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
            Build healthcare apps <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              in hours, not months.
            </span>
          </h1>

          <p className="text-slate-600 text-lg leading-relaxed">
            One unified API gateway to connect national health networks, retrieve consolidated patient charts, and receive real-time clinical webhooks.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link 
              href="/documentation" 
              className="btn-primary-bright"
            >
              Explore Full API Reference <ChevronRight className="h-4 w-4 text-slate-400" />
            </Link>
          </div>
        </div>
      </section>

      {/* OFFICIAL SDKs SECTION */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Official SDKs & Libraries
            </h2>
            <p className="text-slate-600 text-base">
              Production-ready client libraries maintained directly by the QuantaForze engineering team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sdkList.map((sdk, idx) => {
              const Icon = sdk.icon;
              return (
                <div key={idx} className="bg-white border border-slate-200 rounded-3xl p-8 space-y-5 shadow-2xs hover:shadow-lg transition-all">
                  <div className="h-12 w-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{sdk.name}</h3>
                  <div className="bg-slate-900 text-blue-400 font-mono text-xs p-3 rounded-xl border border-slate-800 flex items-center justify-between">
                    <code>{sdk.pkg}</code>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">{sdk.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* QUICK API DOCUMENTATION LINK */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl font-extrabold">Ready to start integration?</h2>
          <p className="text-slate-300 text-sm max-w-lg mx-auto">
            Check out our interactive FHIR R4 schema documentation and authentication guides.
          </p>
          <div className="pt-2">
            <Link href="/documentation" className="btn-blue-accent">
              View Developer Documentation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
