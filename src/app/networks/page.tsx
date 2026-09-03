import type { Metadata } from "next";
import Link from "next/link";
import { Building2, X, CheckCircle2, ArrowRight, ChevronRight, Activity, Layers, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Healthcare Networks Ecosystem Solution | AxioVital",
  description: "Transform isolated healthcare islands into one connected, patient-centered health network.",
};

export default function HealthcareNetworksSolutionPage() {
  return (
    <div className="bg-white min-h-screen font-sans text-slate-900 selection:bg-blue-500 selection:text-white antialiased">
      
      {/* HERO SECTION */}
      <section className="bg-slate-50 border-b border-slate-200 py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[350px] bg-blue-100/40 rounded-full blur-[130px] pointer-events-none" />

        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-800 bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded-full shadow-2xs">
            <Globe className="h-3.5 w-3.5 text-blue-600" />
            Ecosystem Network Solution
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
            Connecting fragmented <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-blue-600 via-teal-600 to-indigo-600 bg-clip-text text-transparent">
              healthcare ecosystems.
            </span>
          </h1>

          <p className="text-slate-600 text-lg sm:text-xl font-medium leading-relaxed">
            AxioVital, AxioID, and AxioCard operate together across participating providers to create true continuity of care for health networks.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-extrabold shadow-sm transition-all flex items-center gap-2">
              Connect Your Network <ChevronRight className="h-4 w-4 text-slate-400" />
            </Link>
          </div>
        </div>
      </section>

      {/* ISOLATED ISLANDS VS ONE CONNECTED NETWORK */}
      <section className="py-20 sm:py-28 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Ecosystem Transformation
            </h2>
            <p className="text-slate-600 text-base">
              Move from isolated data islands to an integrated health ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Isolated Islands */}
            <div className="bg-slate-100/90 border border-slate-200 rounded-3xl p-8 space-y-4">
              <div className="text-xs font-extrabold uppercase tracking-wider text-slate-500">CURRENT ISOLATED ISLANDS</div>
              <div className="grid grid-cols-2 gap-2 text-center text-xs font-mono font-bold text-slate-600">
                <div className="bg-white p-3 rounded-xl border border-slate-200">Hospital A</div>
                <div className="bg-white p-3 rounded-xl border border-slate-200">Hospital B</div>
                <div className="bg-white p-3 rounded-xl border border-slate-200">Lab</div>
                <div className="bg-white p-3 rounded-xl border border-slate-200">Pharmacy</div>
              </div>
            </div>

            {/* One Connected Network */}
            <div className="bg-slate-900 text-white rounded-3xl p-8 space-y-4 shadow-xl">
              <div className="text-xs font-extrabold uppercase tracking-wider text-teal-400">ONE CONNECTED HEALTHCARE NETWORK</div>
              <div className="bg-slate-800 border border-slate-700 p-4 rounded-2xl text-center space-y-2 font-mono">
                <div className="text-teal-300 font-extrabold text-sm">AXIOID CONTINUITY LAYER</div>
                <div className="text-slate-400 text-xs">Participating Providers Connected</div>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
