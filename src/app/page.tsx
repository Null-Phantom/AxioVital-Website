"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Building2, Activity, User, FileText, Lock, Radio, Pill, Stethoscope, 
  BarChart3, CheckCircle2, ArrowRight, Shield, Layers, HelpCircle, 
  Calendar, DollarSign, Users, ChevronRight, X, AlertTriangle, Eye, Globe, Code, CreditCard
} from "lucide-react";

export default function MetriportStyleAxioVitalHomepage() {
  const [activeModule, setActiveModule] = useState<string>("clinical");
  const [cardAccessState, setCardAccessState] = useState<"tap" | "pin">("tap");

  const modules = [
    { id: "context", name: "Patient Context", icon: User, text: "Consolidated patient timeline and medical record overview across all participating providers." },
    { id: "clinical", name: "Clinical Workflows", icon: Stethoscope, text: "Physician progress notes, diagnostic summaries, and real-time clinical care documentation." },
    { id: "orders", name: "Orders", icon: FileText, text: "Unified order entry for lab work, imaging procedures, and specialty prescriptions." },
    { id: "lab", name: "Laboratory", icon: Activity, text: "Automated specimen tracking, pathology reports, and discrete lab result feeds." },
    { id: "radiology", name: "Radiology", icon: Radio, text: "DICOM imaging integration, radiologist observations, and diagnostic reports." },
    { id: "pharmacy", name: "Pharmacy", icon: Pill, text: "Prescription fulfillment, allergy collision checks, and medication administration logs." },
    { id: "billing", name: "Billing", icon: DollarSign, text: "Charge capture, automated coding support, and transparent patient financial ledgers." },
    { id: "scheduling", name: "Scheduling", icon: Calendar, text: "Multi-facility appointment booking, provider calendars, and queue management." },
    { id: "admissions", name: "Admissions", icon: Building2, text: "Rapid patient check-in, bed management, and bed occupancy telemetry." },
    { id: "admin", name: "Administration", icon: Users, text: "Role-based access control, staff credentialing, and hospital security policies." },
    { id: "analytics", name: "Analytics", icon: BarChart3, text: "Real-time hospital performance metrics, readmission risk tracking, and operational reports." },
  ];

  return (
    <div className="bg-[#090d16] min-h-screen font-sans text-white selection:bg-teal-500 selection:text-slate-950 antialiased">
      
      {/* SECTION 1 — METRIPORT HERO SECTION */}
      <section className="relative z-10 isolate flex w-full flex-col overflow-hidden border-b border-slate-800/80 pt-16 sm:pt-24 pb-24 lg:pb-32">
        
        {/* Subtle Ambient Background Gradients */}
        <div className="absolute top-0 right-1/4 w-[700px] h-[500px] bg-teal-500/10 rounded-full blur-[180px] pointer-events-none" />
        <div className="absolute top-1/3 left-10 w-[500px] h-[400px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Metriport Typography Scale & Copy */}
            <div className="lg:col-span-6 space-y-6 text-left">
              
              <div className="inline-flex items-center gap-2 text-xs font-mono font-extrabold uppercase tracking-widest text-teal-400 bg-teal-950/80 border border-teal-800/80 px-3.5 py-1.5 rounded-full shadow-sm">
                <Activity className="h-3.5 w-3.5 text-teal-400" />
                AxioVital Healthcare Data Infrastructure
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] font-display">
                Healthcare data infrastructure <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-teal-400 via-cyan-400 via-sky-400 to-blue-400 bg-clip-text text-transparent">
                  for next generation care delivery.
                </span>
              </h1>

              <p className="text-slate-300 text-lg sm:text-xl font-normal leading-relaxed max-w-xl">
                Complete real-time patient context from every participating provider—transformed into unified workspace intelligence for your care teams.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link 
                  href="/documentation" 
                  className="px-6 py-3.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm transition-all border border-slate-700/80 flex items-center gap-2"
                >
                  Read the docs
                </Link>
                <Link 
                  href="/contact" 
                  className="px-6 py-3.5 rounded-lg bg-teal-500 hover:bg-teal-400 text-slate-950 font-extrabold text-sm transition-all shadow-md flex items-center gap-2"
                >
                  Book a demo <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="pt-4 flex items-center gap-6 text-slate-400 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-teal-400" /> Persistent AxioID
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-cyan-400" /> NFC AxioCard
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-sky-400" /> Participating Providers
                </div>
              </div>

            </div>

            {/* Right Column: Metriport Terminal UI Visual Preview */}
            <div className="lg:col-span-6 relative">
              <div className="bg-slate-900/90 rounded-3xl p-6 sm:p-8 text-white shadow-2xl border border-slate-800 space-y-6">
                
                {/* Terminal Header */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 rounded-full bg-red-500 inline-block" />
                    <div className="h-3 w-3 rounded-full bg-amber-500 inline-block" />
                    <div className="h-3 w-3 rounded-full bg-emerald-500 inline-block" />
                    <span className="text-xs font-mono font-bold text-slate-400 pl-2">axiovital-runtime.sys</span>
                  </div>
                  <span className="text-[10px] font-mono font-extrabold bg-teal-950 border border-teal-700 text-teal-300 px-3 py-1 rounded-full">
                    LIVE NETWORK STREAM
                  </span>
                </div>

                {/* Simulated Terminal Data Feed */}
                <div className="space-y-3 font-mono text-xs">
                  <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800 flex items-center justify-between">
                    <div>
                      <div className="text-slate-400 text-[10px]">PERSISTENT IDENTITY LINK</div>
                      <div className="text-teal-300 font-bold">AxioID #8849-2026-US</div>
                    </div>
                    <span className="text-[10px] text-slate-500">Verified</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800">
                      <div className="text-slate-400 text-[10px]">PATIENT CONTEXT</div>
                      <div className="text-white font-bold truncate">Jerome Bellingham</div>
                    </div>
                    <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800">
                      <div className="text-slate-400 text-[10px]">ACCESS LEVEL</div>
                      <div className="text-cyan-300 font-bold">TAP + PIN Authenticated</div>
                    </div>
                  </div>

                  <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800 space-y-1">
                    <div className="text-slate-400 text-[10px]">DISCRETE PATHOLOGY FEED</div>
                    <div className="text-emerald-300 font-bold">Comprehensive Panel → Synced</div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2 — TRUSTED HEALTHCARE LOGO MARQUEE STRIP */}
      <section className="py-8 bg-slate-950 border-b border-slate-800/80 overflow-hidden">
        <div className="mx-auto max-w-[1440px] px-4 text-center space-y-3">
          <div className="text-[10px] font-mono font-extrabold uppercase tracking-widest text-slate-500">
            CONNECTING PARTICIPATING HEALTHCARE PROVIDERS & HEALTH NETWORKS
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 opacity-60 font-mono text-xs font-bold text-slate-400 pt-2">
            <span>Hospitals & Health Systems</span>
            <span>Attending Physicians</span>
            <span>Pathology Laboratories</span>
            <span>Radiology Centers</span>
            <span>Network Pharmacies</span>
          </div>
        </div>
      </section>

      {/* SECTION 3 — PROBLEM VS PARADIGM SHIFT (METRIPORT STYLE) */}
      <section className="py-20 sm:py-28 bg-slate-900 border-b border-slate-800">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-teal-400 bg-teal-950 border border-teal-800 px-3 py-1 rounded-full">
              The Paradigm Shift
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              The Problem & The Axio Idea
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* The Problem */}
            <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8 space-y-4 shadow-xl">
              <div className="text-xs font-mono font-extrabold uppercase tracking-wider text-red-400">THE FRAGMENTATION PROBLEM</div>
              <h3 className="text-xl font-bold text-white">Healthcare information is fragmented across hospitals, departments and providers.</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-medium">
                Today, patients are forced to act as the manual bridge between disconnected health systems, carrying paper folders and repeating their entire clinical background at every new facility.
              </p>
            </div>

            {/* The Idea */}
            <div className="bg-teal-950/60 border border-teal-700/80 rounded-3xl p-8 space-y-4 shadow-xl">
              <div className="text-xs font-mono font-extrabold uppercase tracking-wider text-teal-300">THE AXIO PARADIGM</div>
              <h3 className="text-xl font-bold text-white">Healthcare should work around a continuous patient identity and connected workflows.</h3>
              <p className="text-xs text-slate-300 leading-relaxed font-medium">
                AxioVital connects hospital workflows around the patient, anchored by AxioID—a persistent healthcare identity that remains valid across participating network facilities.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 4 — PLATFORM PILLAR 1: AXIOVITAL WORKSPACE SIMULATOR */}
      <section className="py-20 sm:py-28 bg-[#090d16] border-b border-slate-800">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-teal-400 bg-teal-950 border border-teal-800 px-3 py-1 rounded-full">
              Hospital Operating System
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              AxioVital Platform
            </h2>
            <p className="text-slate-400 text-base">
              Brings all clinical, operational, and service workflows into one dense workspace.
            </p>
          </div>

          {/* Interactive Module Selector */}
          <div className="max-w-5xl mx-auto bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-800 space-y-6 shadow-2xl">
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
                        ? "bg-teal-500 text-slate-950 font-extrabold shadow-md" 
                        : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{m.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Display Box */}
            <div className="bg-slate-950 rounded-2xl p-6 border border-slate-800 space-y-4">
              {(() => {
                const mod = modules.find(m => m.id === activeModule) || modules[0];
                const Icon = mod.icon;
                return (
                  <>
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                      <div className="flex items-center gap-3">
                        <Icon className="h-5 w-5 text-teal-400" />
                        <h3 className="text-lg font-bold text-white">{mod.name} Module Workspace</h3>
                      </div>
                      <span className="text-xs font-mono font-bold text-teal-400">UNIFIED PIPELINE</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed font-medium">{mod.text}</p>
                  </>
                );
              })()}
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 5 — PLATFORM PILLAR 2: AXIOID PERSISTENT IDENTITY */}
      <section className="py-20 sm:py-28 bg-slate-900 border-b border-slate-800">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950 border border-cyan-800 px-3 py-1 rounded-full">
              Persistent Identity Layer
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              AxioID — Continuous Patient Identity
            </h2>
            <p className="text-slate-400 text-base">
              A patient's identity should not reset when moving between healthcare providers.
            </p>
          </div>

          {/* Identity Flow Diagram */}
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8 sm:p-12 max-w-4xl mx-auto space-y-8 shadow-2xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center font-mono">
              <div className="bg-slate-800 p-4 rounded-xl text-xs text-slate-300 w-full md:w-32">Patient</div>
              <ArrowRight className="h-4 w-4 text-cyan-400 shrink-0 hidden md:block" />
              <div className="bg-cyan-500 text-slate-950 font-extrabold p-4 rounded-xl text-xs w-full md:w-36">AxioID #8849</div>
              <ArrowRight className="h-4 w-4 text-cyan-400 shrink-0 hidden md:block" />
              <div className="bg-slate-800 p-4 rounded-xl text-xs text-slate-300 w-full md:w-36">Hospital A</div>
              <ArrowRight className="h-4 w-4 text-cyan-400 shrink-0 hidden md:block" />
              <div className="bg-slate-800 p-4 rounded-xl text-xs text-slate-300 w-full md:w-36">Hospital B / Specialist</div>
            </div>

            {/* Concept Clarification Box */}
            <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl flex items-center gap-3">
              <Shield className="h-5 w-5 text-cyan-400 shrink-0" />
              <div className="text-xs text-slate-300 font-medium">
                <strong className="text-white font-mono">Identity ≠ Access Scope:</strong> AxioID identifies the patient across participating providers; role-based access control governs specific medical record views.
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 6 — PLATFORM PILLAR 3: AXIOCARD 3D GRAPHIC & 2-STATE ACCESS */}
      <section className="py-20 sm:py-28 bg-[#090d16] border-b border-slate-800">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400 bg-sky-950 border border-sky-800 px-3 py-1 rounded-full">
              Hardware Access Point
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              AxioCard — Physical NFC Interface
            </h2>
            <p className="text-slate-400 text-base">
              The physical access key associated with the patient's persistent AxioID.
            </p>
          </div>

          {/* Card Mockup Graphic */}
          <div className="max-w-md mx-auto bg-gradient-to-br from-slate-900 via-slate-800 to-sky-950 text-white rounded-3xl p-8 shadow-2xl border border-slate-700 space-y-8 relative overflow-hidden">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Activity className="h-6 w-6 text-sky-400" />
                <span className="font-black tracking-tight text-base">AXIOVITAL</span>
              </div>
              <Radio className="h-7 w-7 text-sky-400 animate-pulse" />
            </div>

            <div className="space-y-1">
              <div className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">PHYSICAL PATIENT INTERFACE</div>
              <div className="text-2xl font-black tracking-wider text-sky-300">AXIOCARD</div>
            </div>

            <div className="flex items-center justify-between border-t border-slate-700/80 pt-4 text-xs font-mono">
              <div>
                <div className="text-[9px] uppercase tracking-wider text-slate-400">PATIENT IDENTITY KEY</div>
                <div className="font-bold text-white">AxioID: 8849-2026-US</div>
              </div>
              <div className="h-8 w-11 bg-amber-400/20 border border-amber-400/40 rounded flex items-center justify-center text-[10px] font-mono font-bold text-amber-300">
                NFC
              </div>
            </div>
          </div>

          {/* 2-State Access Selector */}
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setCardAccessState("tap")}
                className={`px-6 py-3 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                  cardAccessState === "tap" 
                    ? "bg-amber-500 text-slate-950 shadow-md scale-105 font-mono" 
                    : "bg-slate-900 text-slate-300 border border-slate-800 hover:bg-slate-800"
                }`}
              >
                TAP (Limited Emergency View)
              </button>
              <button
                onClick={() => setCardAccessState("pin")}
                className={`px-6 py-3 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                  cardAccessState === "pin" 
                    ? "bg-sky-600 text-white shadow-md scale-105 font-mono" 
                    : "bg-slate-900 text-slate-300 border border-slate-800 hover:bg-slate-800"
                }`}
              >
                TAP + PIN (Authenticated View)
              </button>
            </div>

            {/* Display Box */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 text-center space-y-2">
              {cardAccessState === "tap" ? (
                <div className="space-y-2">
                  <div className="text-xs font-mono text-amber-400 font-bold">EMERGENCY ACCESS VIEW</div>
                  <div className="text-xs text-slate-300 font-medium">Blood type, Critical drug allergies, Emergency contact phone numbers.</div>
                </div>
              ) : (
                <div className="space-y-2">
                  <div className="text-xs font-mono text-sky-400 font-bold">AUTHENTICATED MEDICAL HISTORY VIEW</div>
                  <div className="text-xs text-slate-300 font-medium">Diagnoses, Previous lab pathology, Radiology imaging links, Prescriptions.</div>
                </div>
              )}
            </div>

            <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl text-center text-xs font-mono font-bold text-teal-400">
              HIGHLIGHT: LOST CARD ≠ LOST MEDICAL HISTORY (Identity interface only)
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 7 — PLATFORM PILLAR 4: AXIO NETWORK ECOSYSTEM */}
      <section className="py-20 sm:py-28 bg-slate-900 border-b border-slate-800">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 bg-blue-950 border border-blue-800 px-3 py-1 rounded-full">
              Infrastructure Vision
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Axio Network — Connected Ecosystem
            </h2>
            <p className="text-slate-400 text-base">
              Connecting participating hospitals, doctors, laboratories, radiology, and pharmacies around the patient.
            </p>
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8 max-w-4xl mx-auto text-center space-y-6 shadow-2xl">
            <div className="text-xs font-mono text-teal-400 font-extrabold uppercase">
              360° PARTICIPATING PROVIDER NODE GRAPH
            </div>
            <div className="flex flex-wrap justify-center gap-3 text-xs font-mono text-slate-300">
              <span className="bg-slate-900 p-3 rounded-xl border border-slate-800">Patients</span>
              <span className="bg-slate-900 p-3 rounded-xl border border-slate-800">Hospitals</span>
              <span className="bg-slate-900 p-3 rounded-xl border border-slate-800">Doctors</span>
              <span className="bg-slate-900 p-3 rounded-xl border border-slate-800">Labs</span>
              <span className="bg-slate-900 p-3 rounded-xl border border-slate-800">Radiology</span>
              <span className="bg-slate-900 p-3 rounded-xl border border-slate-800">Pharmacies</span>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 8 — DEVELOPER & TECHNICAL REFERENCE TEASER */}
      <section className="py-20 sm:py-28 bg-[#090d16] border-b border-slate-800">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 space-y-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase text-teal-400 bg-teal-950 border border-teal-800 px-3.5 py-1.5 rounded-full">
            <Code className="h-3.5 w-3.5 text-teal-400" />
            Developer & Technical Reference Layer
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Built for engineering and clinical teams.
          </h2>
          <p className="text-slate-300 text-sm font-medium leading-relaxed">
            Explore deep technical specifications, logical architecture models, access governance frameworks, and identity specs in our documentation portal.
          </p>
          <div className="pt-2">
            <Link 
              href="/documentation" 
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-extrabold text-sm transition-all shadow-md"
            >
              Explore Documentation Portal <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 9 — METRIPORT-STYLE FINAL CLOSING CTA BANNER */}
      <section className="py-24 bg-slate-950 text-white">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-display">
            Healthcare operating infrastructure <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              built for continuous care.
            </span>
          </h2>
          <p className="text-slate-400 text-base max-w-xl mx-auto font-medium">
            Connect the identity behind the patient, the systems around them, and the care that moves with them across participating providers.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link 
              href="/contact" 
              className="px-6 py-3.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-extrabold text-sm transition-all shadow-md flex items-center gap-2"
            >
              Book a demo <ArrowRight className="h-4 w-4" />
            </Link>
            <Link 
              href="/axiovital" 
              className="px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 text-white font-extrabold text-sm transition-all"
            >
              Explore AxioVital
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
