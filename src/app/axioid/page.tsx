import type { Metadata } from "next";
import Link from "next/link";
import { User, Shield, AlertTriangle, CheckCircle2, ArrowRight, Activity, Building2, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "AxioID — Persistent Patient Identity Layer | AxioVital",
  description: "AxioID provides one persistent identity for every patient across participating healthcare providers, eliminating record fragmentation.",
};

export default function AxioIDProductPage() {
  return (
    <div className="bg-white min-h-screen font-sans text-slate-900 selection:bg-cyan-500 selection:text-white antialiased">
      
      {/* HERO SECTION */}
      <section className="bg-slate-50 border-b border-slate-200 py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[350px] bg-cyan-100/40 rounded-full blur-[130px] pointer-events-none" />

        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-800 bg-cyan-50 border border-cyan-200 px-3.5 py-1.5 rounded-full shadow-2xs">
            <User className="h-3.5 w-3.5 text-cyan-600" />
            AxioID Platform Layer
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
            A persistent identity for <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-cyan-600 via-teal-600 to-blue-600 bg-clip-text text-transparent">
              every patient.
            </span>
          </h1>

          <p className="text-slate-600 text-lg sm:text-xl font-medium leading-relaxed">
            A patient's identity should not reset when they move between healthcare providers. AxioID anchors continuous healthcare context across participating network facilities.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold shadow-sm transition-all flex items-center gap-2">
              Explore AxioID Deployment <ChevronRight className="h-4 w-4 text-slate-400" />
            </Link>
            <Link href="/documentation#axioid" className="px-6 py-3.5 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-800 text-sm font-bold transition-all">
              Technical Identity Specs
            </Link>
          </div>
        </div>
      </section>

      {/* VISUAL JOURNEY SECTION */}
      <section className="py-20 sm:py-28 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Continuous Patient Journey
            </h2>
            <p className="text-slate-600 text-base">
              AxioID acts as the persistent thread connecting patient visits across independent healthcare providers.
            </p>
          </div>

          {/* Patient Journey Flow Visualization */}
          <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl border border-slate-800 max-w-4xl mx-auto space-y-8">
            <div className="text-xs font-mono font-extrabold uppercase tracking-widest text-cyan-400 text-center">
              IDENTITY CONTINUITY MAP
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center">
              <div className="bg-slate-800 border border-slate-700 rounded-2xl p-4 w-full md:w-36 space-y-1">
                <div className="text-xs font-bold text-slate-300">PATIENT</div>
                <div className="text-[10px] text-slate-500 font-mono">Origin</div>
              </div>
              <ArrowRight className="h-5 w-5 text-cyan-400 shrink-0 hidden md:block" />
              <div className="bg-slate-800 border border-slate-700 rounded-2xl p-4 w-full md:w-40 space-y-1">
                <div className="text-xs font-bold text-slate-200">PROVIDER A</div>
                <div className="text-[10px] text-slate-500 font-mono">Initial Encounter</div>
              </div>
              <ArrowRight className="h-5 w-5 text-cyan-400 shrink-0 hidden md:block" />
              <div className="bg-cyan-500 text-slate-950 rounded-2xl p-5 w-full md:w-44 space-y-1 font-extrabold shadow-md">
                <div className="text-sm">AXIOID</div>
                <div className="text-[10px] uppercase tracking-wider opacity-80">Persistent Layer</div>
              </div>
              <ArrowRight className="h-5 w-5 text-cyan-400 shrink-0 hidden md:block" />
              <div className="bg-slate-800 border border-slate-700 rounded-2xl p-4 w-full md:w-40 space-y-1">
                <div className="text-xs font-bold text-slate-200">PROVIDER B</div>
                <div className="text-[10px] text-slate-500 font-mono">Specialist Referral</div>
              </div>
              <ArrowRight className="h-5 w-5 text-cyan-400 shrink-0 hidden md:block" />
              <div className="bg-slate-800 border border-slate-700 rounded-2xl p-4 w-full md:w-40 space-y-1">
                <div className="text-xs font-bold text-slate-200">PROVIDER C</div>
                <div className="text-[10px] text-slate-500 font-mono">Follow-up Facility</div>
              </div>
            </div>
          </div>

          {/* Clarification Box */}
          <div className="max-w-2xl mx-auto p-6 bg-cyan-50 border border-cyan-200 rounded-2xl space-y-3">
            <div className="flex items-center gap-2 text-cyan-900 font-extrabold text-sm">
              <Shield className="h-5 w-5 text-cyan-700" />
              Identity vs Access Scope Clarification
            </div>
            <p className="text-xs text-slate-700 leading-relaxed font-medium">
              AxioID establishes persistent identity recognition across participating providers. It is <strong>NOT</strong> an open gateway or unrestricted access to every medical record. Access remains governed by role-aware authentication policies.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
