"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  User, CreditCard, Shield, Radio, Lock, KeyRound, CheckCircle2, 
  ArrowRight, Activity, Building2, Stethoscope, Pill, FileText, 
  HelpCircle, ChevronRight, Layers, Smartphone, FolderX, Sparkles, Heart
} from "lucide-react";

export default function PatientsAndFamiliesPage() {
  const [accessState, setAccessState] = useState<"tap" | "pin">("tap");
  const [activeStep, setActiveStep] = useState<number>(0);

  const journeySteps = [
    {
      num: "01",
      title: "You receive care",
      sub: "Hospital A",
      desc: "Your clinical information becomes part of your healthcare record at the initial provider.",
      icon: Building2
    },
    {
      num: "02",
      title: "You are referred",
      sub: "Specialist / Hospital B",
      desc: "You transition to another participating provider in the network.",
      icon: Stethoscope
    },
    {
      num: "03",
      title: "Tap your AxioCard",
      sub: "Identity Recognition",
      desc: "The receiving provider identifies your persistent AxioID at point of care.",
      icon: CreditCard
    },
    {
      num: "04",
      title: "Authentication & Authorization",
      sub: "Security Check",
      desc: "Access is determined by verified credentials, role-aware access, and explicit permissions.",
      icon: Lock
    },
    {
      num: "05",
      title: "Relevant context",
      sub: "Clinical Context",
      desc: "Authorized healthcare staff view the specific information permitted for current care.",
      icon: FileText
    },
    {
      num: "06",
      title: "Care continues",
      sub: "Uninterrupted Care",
      desc: "Treatment proceeds seamlessly without needing to rebuild your medical history from scratch.",
      icon: CheckCircle2
    }
  ];

  return (
    <div className="bg-[#fcfdfd] min-h-screen font-sans text-slate-900 selection:bg-cyan-500 selection:text-white antialiased">
      
      {/* SECTION 1 — HERO SECTION */}
      <section className="bg-white border-b border-slate-200/90 py-20 sm:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[650px] h-[450px] bg-cyan-50/70 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Copy & CTAs */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-800 bg-cyan-50 border border-cyan-200/90 px-3.5 py-1.5 rounded-full shadow-2xs">
                <User className="h-3.5 w-3.5 text-cyan-600" />
                Solutions for Patients & Families
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
                Your healthcare story, <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-cyan-600 via-teal-600 to-blue-600 bg-clip-text text-transparent">
                  wherever care takes you.
                </span>
              </h1>

              <p className="text-slate-600 text-lg sm:text-xl font-medium leading-relaxed">
                Your care shouldn't start from zero every time you walk through a new hospital door. Axio connects your healthcare identity across participating providers, helping your relevant medical context move with you.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a href="#how-it-works" className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold shadow-sm transition-all flex items-center gap-2 cursor-pointer">
                  See how it works <ArrowRight className="h-4 w-4 text-cyan-400" />
                </a>
                <Link href="/axioid" className="px-6 py-3.5 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-800 text-sm font-bold transition-all">
                  Explore AxioID
                </Link>
              </div>

              <p className="text-xs text-slate-600 font-medium italic pt-2">
                "You shouldn't have to remember your entire medical history to receive continuous care."
              </p>
            </div>

            {/* Right Column: Hero Visual Diagram */}
            <div className="lg:col-span-6 relative">
              <div className="bg-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-2xl border border-slate-800 space-y-6 relative overflow-hidden">
                
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 flex items-center justify-center font-bold">
                      <User className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs font-mono uppercase text-cyan-400 font-bold">PATIENT CENTRICITY</div>
                      <div className="text-base font-extrabold text-white">Persistent Network Identity</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-extrabold bg-cyan-950 border border-cyan-700/60 text-cyan-300 px-3 py-1 rounded-full">
                    NETWORK CONNECTED
                  </span>
                </div>

                {/* Patient Diagram Flow */}
                <div className="space-y-4 pt-2">
                  <div className="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-4 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-lg bg-cyan-600 text-white flex items-center justify-center font-bold">
                        <User className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">PATIENT AT CENTER</div>
                        <div className="text-[10px] text-slate-400 font-mono">Associated with AxioID</div>
                      </div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-cyan-400 shrink-0" />
                    <div className="text-right">
                      <div className="text-xs font-mono font-bold text-teal-300">AxioID #8849</div>
                      <div className="text-[9px] text-slate-400 font-mono">Persistent Layer</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-5 gap-2 text-center text-[10px] font-mono font-bold pt-1">
                    <div className="bg-slate-800 p-2.5 rounded-xl border border-slate-700 text-slate-300">Hospital A</div>
                    <div className="bg-slate-800 p-2.5 rounded-xl border border-slate-700 text-slate-300">Specialist</div>
                    <div className="bg-slate-800 p-2.5 rounded-xl border border-slate-700 text-slate-300">Lab</div>
                    <div className="bg-slate-800 p-2.5 rounded-xl border border-slate-700 text-slate-300">Pharmacy</div>
                    <div className="bg-slate-800 p-2.5 rounded-xl border border-slate-700 text-slate-300">Hospital B</div>
                  </div>
                </div>

                {/* Realistic AxioCard Mockup Element */}
                <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-cyan-950 border border-slate-700 rounded-2xl p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <CreditCard className="h-6 w-6 text-cyan-400" />
                    <div>
                      <div className="text-xs font-black tracking-wide text-white">AXIOCARD INTERFACE</div>
                      <div className="text-[10px] text-slate-400 font-mono">NFC Contactless Access Point</div>
                    </div>
                  </div>
                  <Radio className="h-5 w-5 text-cyan-400 animate-pulse" />
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2 — THE PROBLEM */}
      <section className="py-20 sm:py-28 bg-slate-50 border-b border-slate-200">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-red-700 bg-red-50 border border-red-200/80 px-3 py-1 rounded-full">
              The Reality of Fragmented Care
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Healthcare moves. Your history should too.
            </h2>
            <p className="text-slate-600 text-base">
              Moving between healthcare facilities often forces patients to reconstruct their medical background from memory.
            </p>
          </div>

          {/* Visual Journey of Frustration */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            <div className="bg-white border border-slate-200 rounded-2xl p-5 space-y-3 shadow-2xs">
              <div className="text-xs font-mono font-extrabold text-slate-400">STOP 1 — HOSPITAL A</div>
              <div className="text-sm font-bold text-slate-900">Initial Treatment</div>
              <div className="p-3 bg-red-50 border border-red-100 rounded-xl text-[11px] text-red-900 italic">
                "Please fill out your complete medical background again."
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-5 space-y-3 shadow-2xs">
              <div className="text-xs font-mono font-extrabold text-slate-400">STOP 2 — REFERRAL</div>
              <div className="text-sm font-bold text-slate-900">Specialist Visit</div>
              <div className="p-3 bg-red-50 border border-red-100 rounded-xl text-[11px] text-red-900 italic">
                "Do you have the previous lab pathology reports with you?"
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-5 space-y-3 shadow-2xs">
              <div className="text-xs font-mono font-extrabold text-slate-400">STOP 3 — HOSPITAL B</div>
              <div className="text-sm font-bold text-slate-900">Emergency Arrival</div>
              <div className="p-3 bg-red-50 border border-red-100 rounded-xl text-[11px] text-red-900 italic">
                "What exact medications are you currently taking?"
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-5 space-y-3 shadow-2xs">
              <div className="text-xs font-mono font-extrabold text-slate-400">STOP 4 — FOLLOW-UP</div>
              <div className="text-sm font-bold text-slate-900">Diagnostic Testing</div>
              <div className="p-3 bg-red-50 border border-red-100 rounded-xl text-[11px] text-red-900 italic">
                "Can you bring the original discharge summary tomorrow?"
              </div>
            </div>
          </div>

          {/* Key Statement Callout */}
          <div className="bg-white border border-slate-200 rounded-3xl p-8 max-w-3xl mx-auto text-center space-y-4 shadow-sm">
            <h3 className="text-xl font-extrabold text-slate-900">
              Today, patients often become the bridge between disconnected healthcare systems.
            </h3>
            <p className="text-xs text-slate-600 max-w-xl mx-auto leading-relaxed">
              Patients and family members carry folders of paper discharge summaries, test reports, prescriptions, and physical imaging scans from facility to facility.
            </p>
          </div>

        </div>
      </section>

      {/* SECTION 3 — THE AXIO DIFFERENCE */}
      <section className="py-20 sm:py-28 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">
              The Axio Paradigm
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              What if your identity could move with you?
            </h2>
            <p className="text-slate-600 text-base">
              AxioID provides a persistent healthcare identity that remains associated with a patient across participating AxioVital providers.
            </p>
          </div>

          {/* Transformation Visual */}
          <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 max-w-4xl mx-auto space-y-8 shadow-xl border border-slate-800">
            <div className="text-center text-xs font-mono font-extrabold uppercase tracking-widest text-teal-400">
              IDENTITY ARCHITECTURE TRANSFORMATION
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              {/* Disconnected */}
              <div className="bg-slate-800/80 border border-slate-700 p-5 rounded-2xl space-y-3">
                <div className="text-xs font-bold text-slate-400">DISCONNECTED FRAGMENTATION</div>
                <div className="text-xs text-slate-300 font-mono space-y-1">
                  <div>Hospital A (Local ID #102)</div>
                  <div>Hospital B (Local ID #904)</div>
                  <div>Specialist (Local ID #551)</div>
                  <div>Lab (Local ID #339)</div>
                </div>
              </div>

              {/* Connected */}
              <div className="bg-teal-950/90 border border-teal-700/80 p-5 rounded-2xl space-y-3">
                <div className="text-xs font-bold text-teal-300">CONNECTED VIA AXIOID</div>
                <div className="text-xs text-slate-200 font-mono space-y-1">
                  <div className="font-extrabold text-white">ONE PATIENT → AXIOID</div>
                  <div className="text-teal-400">↓ Valid across participating providers</div>
                  <div>Participating Network Facilities</div>
                </div>
              </div>
            </div>

            {/* Concept Box: Identity != Access */}
            <div className="bg-slate-950 border border-slate-800 p-5 rounded-2xl flex items-start gap-4">
              <Shield className="h-6 w-6 text-teal-400 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <div className="text-xs font-mono font-bold text-teal-300">CRITICAL CONCEPT: IDENTITY ≠ ACCESS</div>
                <p className="text-xs text-slate-400 font-medium">
                  Knowing who the patient is does not mean everyone can see everything about them. Persistent identity operates under role-aware authentication and explicit access boundaries.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 4 — AXIOCARD */}
      <section className="py-20 sm:py-28 bg-slate-50 border-b border-slate-200">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-800 bg-sky-50 border border-sky-200 px-3 py-1 rounded-full">
              Hardware Access Point
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              One card. One identity.
            </h2>
            <p className="text-slate-600 text-base">
              AxioCard gives patients a simple physical interface to their Axio identity—designed to travel with them wherever they receive care.
            </p>
          </div>

          {/* Large Realistic Card Mockup */}
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

          {/* Two Access States */}
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setAccessState("tap")}
                className={`px-6 py-3 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                  accessState === "tap" 
                    ? "bg-amber-500 text-slate-950 shadow-md scale-105" 
                    : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
                }`}
              >
                TAP (Limited Emergency View)
              </button>
              <button
                onClick={() => setAccessState("pin")}
                className={`px-6 py-3 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                  accessState === "pin" 
                    ? "bg-sky-600 text-white shadow-md scale-105" 
                    : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
                }`}
              >
                TAP + PIN (Authenticated Access)
              </button>
            </div>

            {/* Active Access State Display Box */}
            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm space-y-4">
              {accessState === "tap" ? (
                <div className="space-y-3">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
                    <Shield className="h-4 w-4 text-amber-600" /> Limited Emergency Information
                  </span>
                  <h3 className="text-lg font-bold text-slate-900">Emergency Access Scope:</h3>
                  <ul className="text-xs text-slate-600 space-y-2 list-disc pl-5 font-medium">
                    <li>Blood type & factor</li>
                    <li>Critical drug allergies & adverse reactions</li>
                    <li>Emergency contact phone numbers</li>
                  </ul>
                </div>
              ) : (
                <div className="space-y-3">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-800 bg-sky-50 border border-sky-200 px-3 py-1 rounded-full">
                    <Lock className="h-4 w-4 text-sky-600" /> Authenticated Access View
                  </span>
                  <h3 className="text-lg font-bold text-slate-900">Authorized Medical History:</h3>
                  <ul className="text-xs text-slate-600 space-y-2 list-disc pl-5 font-medium">
                    <li>Diagnoses & treatment plans</li>
                    <li>Previous test results & radiology imaging links</li>
                    <li>Prescriptions & clinical records</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Lost Card Highlight */}
            <div className="p-4 bg-slate-900 text-white rounded-2xl text-center space-y-1 shadow-md">
              <div className="text-xs font-extrabold uppercase tracking-widest text-cyan-400">HIGHLIGHT: LOST CARD ≠ LOST MEDICAL HISTORY</div>
              <p className="text-[11px] text-slate-300 font-medium">
                The card is an interface to your Axio identity—not a physical storage device for your medical record.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 5 — PATIENT JOURNEY */}
      <section id="how-it-works" className="py-20 sm:py-28 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-800 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
              Seamless Transition
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              From referral to recovery, without starting over.
            </h2>
            <p className="text-slate-600 text-base">
              Follow how a patient moves through participating healthcare facilities.
            </p>
          </div>

          {/* Interactive Steps Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
            {journeySteps.map((s, idx) => {
              const Icon = s.icon;
              const isActive = activeStep === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between space-y-3 ${
                    isActive 
                      ? "bg-slate-900 text-white border-slate-900 shadow-md ring-2 ring-cyan-400 scale-105" 
                      : "bg-slate-50 border-slate-200 hover:border-slate-300 text-slate-900"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`font-mono font-extrabold text-xs ${isActive ? "text-cyan-400" : "text-slate-500"}`}>{s.num}</span>
                    <Icon className={`h-4 w-4 ${isActive ? "text-cyan-400" : "text-slate-400"}`} />
                  </div>
                  <div>
                    <div className="text-xs font-bold leading-snug">{s.title}</div>
                    <div className={`text-[10px] font-mono ${isActive ? "text-slate-400" : "text-slate-500"}`}>{s.sub}</div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Step Content Display */}
          <div className="bg-slate-900 text-white rounded-3xl p-8 max-w-3xl mx-auto shadow-xl space-y-4 border border-slate-800">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-3">
                <span className="h-8 w-8 rounded-lg bg-cyan-500 text-slate-950 font-extrabold text-xs flex items-center justify-center">
                  {journeySteps[activeStep].num}
                </span>
                <h3 className="text-xl font-bold">{journeySteps[activeStep].title}</h3>
              </div>
              <span className="text-xs font-mono font-extrabold text-cyan-400">
                {journeySteps[activeStep].sub}
              </span>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed font-medium">
              {journeySteps[activeStep].desc}
            </p>
          </div>

        </div>
      </section>

      {/* SECTION 6 — FOR FAMILIES */}
      <section className="py-20 sm:py-28 bg-slate-50 border-b border-slate-200">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-800 bg-cyan-50 border border-cyan-200 px-3 py-1 rounded-full">
              Caregiver Support
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Less paperwork for the people who care.
            </h2>
            <p className="text-slate-600 text-base">
              Families often end up managing a patient's fragmented medical information themselves.
            </p>
          </div>

          {/* Before vs After Transformation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Before */}
            <div className="bg-white border border-slate-200 rounded-3xl p-8 space-y-4 shadow-2xs">
              <div className="text-xs font-extrabold uppercase tracking-wider text-slate-500">BEFORE AXIOVITAL</div>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-600">
                <span className="bg-slate-100 px-2.5 py-1 rounded border border-slate-200">Phone photos</span>
                <span className="bg-slate-100 px-2.5 py-1 rounded border border-slate-200">PDFs</span>
                <span className="bg-slate-100 px-2.5 py-1 rounded border border-slate-200">Prescriptions</span>
                <span className="bg-slate-100 px-2.5 py-1 rounded border border-slate-200">Lab reports</span>
                <span className="bg-slate-100 px-2.5 py-1 rounded border border-slate-200">Discharge summaries</span>
                <span className="bg-slate-100 px-2.5 py-1 rounded border border-slate-200">Paper folders</span>
              </div>
            </div>

            {/* After */}
            <div className="bg-cyan-50/80 border border-cyan-200 rounded-3xl p-8 space-y-4 shadow-sm">
              <div className="text-xs font-extrabold uppercase tracking-wider text-cyan-900">WITH AXIOID</div>
              <div className="text-xs font-mono font-bold text-cyan-950 space-y-2">
                <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-700" /> Patient → AxioID</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-cyan-700" /> Connected healthcare context</div>
              </div>
            </div>
          </div>

          <p className="text-center text-xs font-bold text-slate-700">
            "Families shouldn't have to become the patient's medical-record system."
          </p>

        </div>
      </section>

      {/* SECTION 7 — PATIENT CONTROL & PRIVACY */}
      <section className="py-20 sm:py-28 bg-slate-900 text-white border-b border-slate-800">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950 border border-cyan-800 px-3 py-1 rounded-full">
              Privacy Framework
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Your identity. Your access.
            </h2>
            <p className="text-slate-300 text-base">
              A persistent identity should make healthcare more connected—not less private.
            </p>
          </div>

          {/* Secure Progression Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto font-mono text-center">
            <div className="bg-slate-800/90 border border-slate-700 p-5 rounded-2xl space-y-2">
              <div className="text-xs text-cyan-400 font-extrabold uppercase">01. IDENTIFICATION</div>
              <div className="text-xs text-slate-300">Who is this patient?</div>
            </div>
            <div className="bg-slate-800/90 border border-slate-700 p-5 rounded-2xl space-y-2">
              <div className="text-xs text-purple-400 font-extrabold uppercase">02. AUTHENTICATION</div>
              <div className="text-xs text-slate-300">Is request verified?</div>
            </div>
            <div className="bg-slate-800/90 border border-slate-700 p-5 rounded-2xl space-y-2">
              <div className="text-xs text-teal-400 font-extrabold uppercase">03. AUTHORIZATION</div>
              <div className="text-xs text-slate-300">Permitted access scope?</div>
            </div>
            <div className="bg-slate-800/90 border border-slate-700 p-5 rounded-2xl space-y-2">
              <div className="text-xs text-blue-400 font-extrabold uppercase">04. RELEVANT ACCESS</div>
              <div className="text-xs text-slate-300">Contextual data view?</div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 8 — THE BIGGER VISION */}
      <section className="py-20 sm:py-28 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Healthcare shouldn't be a collection of islands.
            </h2>
            <p className="text-slate-600 text-base">
              Axio's larger vision is to help create continuity across fragmented healthcare environments.
            </p>
          </div>

          <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 max-w-4xl mx-auto text-center space-y-6 shadow-xl border border-slate-800">
            <div className="inline-block bg-cyan-500 text-slate-950 font-extrabold text-xs px-4 py-1 rounded-full uppercase tracking-wider">
              AXIO CONNECTED ECOSYSTEM
            </div>
            <div className="flex flex-wrap justify-center gap-3 text-xs font-mono font-bold text-cyan-300 pt-2">
              <span>PATIENT</span> → <span>AXIOCARD</span> → <span>AXIOID</span> → <span>PARTICIPATING PROVIDERS</span>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 9 — KEY BENEFITS */}
      <section className="py-20 sm:py-28 bg-slate-50 border-b border-slate-200">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Key Patient Benefits
            </h2>
            <p className="text-slate-600 text-base">
              Intended advantages of carrying an Axio identity.
            </p>
          </div>

          {/* 4 Large Editorial Panels */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="bg-white border border-slate-200 rounded-3xl p-8 space-y-3 shadow-sm">
              <div className="text-xl font-extrabold text-slate-900">Carry less</div>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Your healthcare identity travels with you seamlessly without carrying stacks of paper folders.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-3xl p-8 space-y-3 shadow-sm">
              <div className="text-xl font-extrabold text-slate-900">Repeat less</div>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Reduce the need to repeatedly reconstruct your entire medical history verbally at every new facility.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-3xl p-8 space-y-3 shadow-sm">
              <div className="text-xl font-extrabold text-slate-900">Wait less</div>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Help attending healthcare providers access your relevant clinical context sooner during intake.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-3xl p-8 space-y-3 shadow-sm">
              <div className="text-xl font-extrabold text-slate-900">Worry less</div>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Keep the patient's healthcare journey connected while maintaining appropriate access boundaries.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 10 — FINAL CTA */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Your care shouldn't have to start from zero.
          </h2>
          <p className="text-slate-300 text-base max-w-xl mx-auto font-medium">
            AxioVital connects the identity behind the patient, the systems around them, and the care that moves with them.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link href="/axiovital" className="px-6 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold text-sm transition-all shadow-md">
              Explore AxioVital
            </Link>
            <Link href="/axioid" className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-extrabold text-sm transition-all border border-slate-700">
              Explore AxioID
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
