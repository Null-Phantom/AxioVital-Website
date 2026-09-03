"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Building2, Activity, User, FileText, CheckCircle2, ChevronRight, 
  Layers, Database, Stethoscope, Pill, Radio, DollarSign, Calendar, Users, BarChart3, ShieldCheck, ArrowRight
} from "lucide-react";

export default function AxioVitalProductPage() {
  const [activeModule, setActiveModule] = useState("clinical");

  const modules = [
    { id: "context", name: "Patient Context", icon: User, text: "Consolidated patient timeline and medical record overview across all participating providers." },
    { id: "clinical", name: "Clinical Workflows", icon: Stethoscope, text: "Physician progress notes, diagnostic summaries, and real-time clinical care documentation." },
    { id: "orders", name: "Orders", icon: FileText, text: "Unified order entry for lab work, imaging procedures, and specialty prescriptions." },
    { id: "lab", name: "Laboratory", icon: Activity, text: "Automated specimen tracking, pathology reports, and discrete lab result feeds." },
    { id: "radiology", name: "Radiology", icon: Radio, text: "DICOM imaging integration, radiologist observations, and diagnostic reports." },
    { id: "pharmacy", name: "Pharmacy", icon: Pill, text: "Prescription fulfillment, allergy checks, and real-time medication administration logs." },
    { id: "billing", name: "Billing", icon: DollarSign, text: "Charge capture, automated coding support, and transparent patient financial ledgers." },
    { id: "scheduling", name: "Scheduling", icon: Calendar, text: "Multi-facility appointment booking, provider calendars, and queue management." },
    { id: "admissions", name: "Admissions", icon: Building2, text: "Rapid patient check-in, bed management, and bed occupancy telemetry." },
    { id: "admin", name: "Administration", icon: Users, text: "Role-based access control, staff credentialing, and hospital security policies." },
    { id: "analytics", name: "Analytics", icon: BarChart3, text: "Real-time hospital performance metrics, readmission risk tracking, and operational reports." },
  ];

  return (
    <div className="bg-white min-h-screen font-sans text-slate-900 selection:bg-teal-500 selection:text-white antialiased">
      
      {/* HERO SECTION */}
      <section className="bg-slate-50 border-b border-slate-200 py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-teal-100/40 rounded-full blur-[140px] pointer-events-none" />
        
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-50 border border-teal-200 px-3.5 py-1.5 rounded-full shadow-2xs">
            <Building2 className="h-3.5 w-3.5 text-teal-600" />
            AxioVital Platform
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
            Hospital operating system for the <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
              connected healthcare era.
            </span>
          </h1>

          <p className="text-slate-600 text-lg sm:text-xl font-medium leading-relaxed max-w-3xl mx-auto">
            AxioVital brings all clinical, operational, and service workflows into one dense, intelligent workspace—eliminating departmental silos and unifying hospital management.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold shadow-sm transition-all flex items-center gap-2">
              Schedule Platform Demo <ChevronRight className="h-4 w-4 text-slate-400" />
            </Link>
            <Link href="/documentation#axiovital" className="px-6 py-3.5 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-800 text-sm font-bold transition-all">
              Technical Documentation
            </Link>
          </div>
        </div>
      </section>

      {/* INTERACTIVE PRODUCT WORKSPACE VISUALIZATION */}
      <section className="py-20 sm:py-28 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              One Unified Workspace
            </h2>
            <p className="text-slate-600 text-base">
              Explore how AxioVital integrates hospital departments into a single coherent interface.
            </p>
          </div>

          {/* Realistic Product UI Container */}
          <div className="bg-slate-900 rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-800 space-y-6 text-white max-w-5xl mx-auto">
            
            {/* Top Workspace Navigation Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-3 border-b border-slate-800 scrollbar-hide">
              {modules.map((m) => {
                const Icon = m.icon;
                const isActive = activeModule === m.id;
                return (
                  <button
                    key={m.id}
                    onClick={() => setActiveModule(m.id)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 shrink-0 cursor-pointer ${
                      isActive 
                        ? "bg-teal-500 text-slate-950 shadow-md font-extrabold" 
                        : "bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{m.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Module Visual Display Panel */}
            <div className="bg-slate-950/80 rounded-2xl p-6 sm:p-8 border border-slate-800/90 space-y-6">
              {(() => {
                const mod = modules.find(m => m.id === activeModule) || modules[0];
                const Icon = mod.icon;
                return (
                  <>
                    <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-xl bg-teal-500/20 border border-teal-500/40 text-teal-400 flex items-center justify-center font-bold">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="text-xs font-mono uppercase tracking-widest text-teal-400">AXIOVITAL MODULE</div>
                          <h3 className="text-xl font-bold text-white">{mod.name} Workspace</h3>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono font-extrabold bg-teal-950 border border-teal-700/60 text-teal-300 px-3 py-1 rounded-full">
                        ACTIVE STATE
                      </span>
                    </div>

                    <p className="text-slate-300 text-sm leading-relaxed font-medium">
                      {mod.text}
                    </p>

                    {/* Simulated Data Points */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono pt-2">
                      <div className="bg-slate-900 border border-slate-800 p-3 rounded-xl">
                        <div className="text-slate-500 text-[10px]">INTEGRATION</div>
                        <div className="text-teal-300 font-bold mt-0.5">Real-Time Sync</div>
                      </div>
                      <div className="bg-slate-900 border border-slate-800 p-3 rounded-xl">
                        <div className="text-slate-500 text-[10px]">SECURITY</div>
                        <div className="text-cyan-300 font-bold mt-0.5">Role-Aware Access</div>
                      </div>
                      <div className="bg-slate-900 border border-slate-800 p-3 rounded-xl">
                        <div className="text-slate-500 text-[10px]">STATUS</div>
                        <div className="text-blue-300 font-bold mt-0.5">Unified Hospital Queue</div>
                      </div>
                    </div>
                  </>
                );
              })()}
            </div>

          </div>

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Transform your hospital operations with AxioVital
          </h2>
          <p className="text-slate-300 text-base max-w-xl mx-auto">
            Experience how a connected hospital operating system unifies departments and eliminates clinical friction.
          </p>
          <div className="pt-2">
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-extrabold text-sm transition-all shadow-md">
              Book Executive Briefing <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
