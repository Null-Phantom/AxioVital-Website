import type { Metadata } from "next";
import { FlaskConical, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Laboratory Information System & Diagnostic Integration Gateway",
  description: "Automate diagnostic test result delivery, link lab reports to patient portals, and integrate directly with hospital EMRs via AxioVital.",
  alternates: {
    canonical: "https://axiovital.quantaforze.com/laboratories",
  },
  openGraph: {
    title: "Laboratory Information System & Diagnostic Integration Gateway",
    description: "Automate diagnostic test result delivery, link lab reports to patient portals, and integrate directly with hospital EMRs via AxioVital.",
    url: "https://axiovital.quantaforze.com/laboratories",
    siteName: "AxioVital Health Platform",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Laboratory Information System & Diagnostic Integration Gateway",
    description: "Automate diagnostic test result delivery, link lab reports to patient portals, and integrate directly with hospital EMRs via AxioVital.",
  },
};

export default function Laboratories() {
  const steps = [
    { title: "Digital Lab Ordering", desc: "Clinicians route order instructions directly to diagnostics systems via FHIR APIs." },
    { title: "AXIO-ID Verification", desc: "Specimens are bound to the patient's unique AXIO-ID, eliminating mislabeling." },
    { title: "Automated Result Delivery", desc: "Results route directly to provider EHR systems and patient portals instantly." }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">For Diagnostics Laboratories</span>
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl">
            AxioLab Infrastructure
          </h1>
          <p className="text-lg text-slate-600">
            Speed up diagnostic cycles, secure specimen chains, and verify order routes instantly.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((s, idx) => (
            <div key={idx} className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm space-y-3">
              <div className="h-8 w-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm">{idx + 1}</div>
              <h3 className="text-lg font-bold text-slate-900">{s.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Specimen Integrity Section */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 max-w-4xl mx-auto shadow-sm grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
              <FlaskConical className="text-blue-600 h-6 w-6" /> Zero-Error Sample Processing
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              AxioLab connects clinical orders to specimen containers dynamically using the AXIO-ID token system. Eliminate processing mistakes and deliver results faster.
            </p>
          </div>
          <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl space-y-3">
            <div className="text-xs font-semibold text-slate-400">CONNECTIVITY STATUS</div>
            <div className="flex justify-between items-center text-sm font-semibold text-slate-800 border-b border-slate-200/80 pb-2">
              <span>LIMS Database Sync</span>
              <span className="text-emerald-600 flex items-center gap-1"><CheckCircle className="h-3 w-3" /> Online</span>
            </div>
            <div className="flex justify-between items-center text-sm font-semibold text-slate-800">
              <span>FHIR Message Queue</span>
              <span className="text-emerald-600 flex items-center gap-1"><CheckCircle className="h-3 w-3" /> Active</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
