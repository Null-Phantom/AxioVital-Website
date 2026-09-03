import type { Metadata } from "next";
import Link from "next/link";
import { Building2, User, Activity, Radio, Pill, ArrowRight, ShieldCheck, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Axio Network — Connected Healthcare Provider Infrastructure | AxioVital",
  description: "A connected layer providing continuity across participating hospitals, doctors, laboratories, radiology centers, and pharmacies.",
};

export default function AxioNetworkProductPage() {
  const nodes = [
    { title: "Patients", desc: "Carry persistent identity across visits.", icon: User, color: "text-cyan-400" },
    { title: "Hospitals", desc: "Unified clinical & operational workflows.", icon: Building2, color: "text-teal-400" },
    { title: "Doctors", desc: "Access verified patient context.", icon: Activity, color: "text-blue-400" },
    { title: "Labs", desc: "Automated test ordering & results.", icon: Activity, color: "text-purple-400" },
    { title: "Radiology", desc: "Imaging & diagnostic report feeds.", icon: Radio, color: "text-sky-400" },
    { title: "Pharmacies", desc: "Dispensing & allergy checks.", icon: Pill, color: "text-emerald-400" },
  ];

  return (
    <div className="bg-white min-h-screen font-sans text-slate-900 selection:bg-blue-500 selection:text-white antialiased">
      
      {/* HERO SECTION */}
      <section className="bg-slate-50 border-b border-slate-200 py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[350px] bg-blue-100/40 rounded-full blur-[130px] pointer-events-none" />

        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-800 bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded-full shadow-2xs">
            <Building2 className="h-3.5 w-3.5 text-blue-600" />
            Axio Network Ecosystem
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
            A connected layer between <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-blue-600 via-teal-600 to-indigo-600 bg-clip-text text-transparent">
              healthcare providers.
            </span>
          </h1>

          <p className="text-slate-600 text-lg sm:text-xl font-medium leading-relaxed">
            Axio Network connects otherwise fragmented healthcare environments into a seamless, patient-centered infrastructure vision.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold shadow-sm transition-all flex items-center gap-2">
              Join Axio Network <ChevronRight className="h-4 w-4 text-slate-400" />
            </Link>
            <Link href="/documentation#ecosystem" className="px-6 py-3.5 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-800 text-sm font-bold transition-all">
              Network Ecosystem Docs
            </Link>
          </div>
        </div>
      </section>

      {/* ECOSYSTEM NODE GRAPH SECTION */}
      <section className="py-20 sm:py-28 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              360° Infrastructure Connections
            </h2>
            <p className="text-slate-600 text-base">
              AxioID provides continuity across participating providers.
            </p>
          </div>

          {/* Connected Node Graph Graphic */}
          <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-2xl border border-slate-800 max-w-5xl mx-auto space-y-10">
            <div className="text-center space-y-2">
              <div className="inline-block bg-teal-500 text-slate-950 font-black text-xs px-5 py-1.5 rounded-full tracking-widest uppercase shadow-md">
                AXIOID NETWORK CORE
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {nodes.map((n, idx) => {
                const Icon = n.icon;
                return (
                  <div key={idx} className="bg-slate-800/90 border border-slate-700 p-5 rounded-2xl space-y-2 text-center hover:border-teal-500 transition-colors">
                    <div className="flex justify-center">
                      <Icon className={`h-6 w-6 ${n.color}`} />
                    </div>
                    <div className="font-bold text-sm text-white">{n.title}</div>
                    <div className="text-slate-400 text-xs">{n.desc}</div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
