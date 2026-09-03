import type { Metadata } from "next";
import Link from "next/link";
import { Globe, Building2, User, Activity, Radio, Pill, ArrowRight, ShieldCheck, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Connected Healthcare Network Solution | AxioVital",
  description: "Connect fragmented healthcare ecosystems across participating hospitals, doctors, laboratories, radiology, and pharmacies.",
};

export default function ConnectedHealthcarePage() {
  return (
    <div className="bg-white min-h-screen font-sans text-slate-900 selection:bg-teal-500 selection:text-white antialiased">
      
      {/* HERO SECTION */}
      <section className="bg-slate-950 text-white border-b border-slate-800 py-20 sm:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-teal-500/10 rounded-full blur-[160px] pointer-events-none" />

        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-extrabold uppercase tracking-widest text-teal-400 bg-teal-950 border border-teal-800 px-3.5 py-1.5 rounded-full">
            <Globe className="h-3.5 w-3.5 text-teal-400" />
            Connected Healthcare Ecosystem
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
            Healthcare shouldn't be a collection of <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              disconnected islands.
            </span>
          </h1>

          <p className="text-slate-300 text-lg sm:text-xl font-medium leading-relaxed max-w-2xl mx-auto">
            AxioVital, AxioID, and AxioCard operate together across participating providers to create true continuity of care for health networks.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="px-6 py-3.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-extrabold text-sm transition-all shadow-md flex items-center gap-2">
              Book a Network Briefing <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/axiovital" className="px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 text-white font-extrabold text-sm transition-all">
              Explore AxioVital Platform
            </Link>
          </div>
        </div>
      </section>

      {/* CORE VISION DIAGRAM */}
      <section className="py-20 sm:py-28 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Ecosystem Continuity Architecture
            </h2>
            <p className="text-slate-600 text-base">
              Bringing identity, clinical context, and workflows together around the patient.
            </p>
          </div>

          <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 max-w-5xl mx-auto space-y-8 shadow-2xl border border-slate-800 text-center">
            <div className="inline-block bg-teal-500 text-slate-950 font-black text-xs px-5 py-1.5 rounded-full tracking-widest uppercase shadow-md">
              AXIO CONNECTED VISION
            </div>

            <div className="flex flex-wrap justify-center items-center gap-3 text-xs font-mono font-bold text-teal-300">
              <span className="bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700 text-white">PATIENT</span>
              <ArrowRight className="h-4 w-4 text-teal-400" />
              <span className="bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700 text-white">AXIOID</span>
              <ArrowRight className="h-4 w-4 text-teal-400" />
              <span className="bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700 text-white">AXIOVITAL</span>
              <ArrowRight className="h-4 w-4 text-teal-400" />
              <span className="bg-teal-950 border border-teal-700 text-teal-300 px-3 py-1.5 rounded-lg">PARTICIPATING PROVIDERS</span>
            </div>

            <p className="text-xs text-slate-400 max-w-xl mx-auto leading-relaxed font-medium">
              AxioVital is building a connected operating layer for healthcare—bringing identity, clinical context, and workflows together around the people receiving and delivering care across participating network facilities.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
