"use client";

import { useState } from "react";
import Link from "next/link";
import { CreditCard, Radio, Shield, Lock, CheckCircle2, AlertCircle, ArrowRight, Activity, ChevronRight } from "lucide-react";

export default function AxioCardProductPage() {
  const [activeState, setActiveState] = useState<"tap" | "pin">("tap");

  return (
    <div className="bg-white min-h-screen font-sans text-slate-900 selection:bg-sky-500 selection:text-white antialiased">
      
      {/* HERO SECTION */}
      <section className="bg-slate-50 border-b border-slate-200 py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[350px] bg-sky-100/40 rounded-full blur-[130px] pointer-events-none" />

        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-800 bg-sky-50 border border-sky-200 px-3.5 py-1.5 rounded-full shadow-2xs">
            <CreditCard className="h-3.5 w-3.5 text-sky-600" />
            AxioCard Hardware Access Point
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
            The physical interface to a <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              patient's Axio identity.
            </span>
          </h1>

          <p className="text-slate-600 text-lg sm:text-xl font-medium leading-relaxed">
            AxioCard is a physical NFC-enabled card carried by the patient, providing a simple physical access point to present their AxioID at participating providers.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold shadow-sm transition-all flex items-center gap-2">
              Order Hardware Samples <ChevronRight className="h-4 w-4 text-slate-400" />
            </Link>
            <Link href="/documentation#axiocard" className="px-6 py-3.5 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-800 text-sm font-bold transition-all">
              Technical NFC Specs
            </Link>
          </div>
        </div>
      </section>

      {/* CARD CENTERPIECE & TWO ACCESS STATES SIMULATOR */}
      <section className="py-20 sm:py-28 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Interactive Access State Simulator
            </h2>
            <p className="text-slate-600 text-base">
              Test how AxioCard governs medical record exposure depending on authentication depth.
            </p>
          </div>

          {/* Card Mockup Graphic */}
          <div className="max-w-md mx-auto bg-gradient-to-br from-slate-900 via-slate-800 to-sky-950 text-white rounded-3xl p-8 shadow-2xl border border-slate-700 space-y-10 relative overflow-hidden">
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

            <div className="flex items-center justify-between border-t border-slate-700/80 pt-4">
              <div>
                <div className="text-[9px] uppercase tracking-wider text-slate-400">PERSISTENT IDENTITY LINK</div>
                <div className="text-xs font-mono font-bold text-white">AxioID: 8849-2026-US</div>
              </div>
              <div className="h-9 w-12 bg-amber-400/20 border border-amber-400/40 rounded-md flex items-center justify-center text-[10px] font-mono font-bold text-amber-300">
                NFC
              </div>
            </div>
          </div>

          {/* Access State Switcher */}
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setActiveState("tap")}
                className={`px-6 py-3 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                  activeState === "tap" 
                    ? "bg-amber-500 text-slate-950 shadow-md scale-105" 
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                STATE 1: TAP (Emergency Info)
              </button>
              <button
                onClick={() => setActiveState("pin")}
                className={`px-6 py-3 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                  activeState === "pin" 
                    ? "bg-sky-600 text-white shadow-md scale-105" 
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                STATE 2: TAP + PIN (Full History)
              </button>
            </div>

            {/* Display Box for Active State */}
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 space-y-4">
              {activeState === "tap" ? (
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-800 bg-amber-100 px-3 py-1 rounded-md">
                    <Shield className="h-4 w-4 text-amber-700" />
                    Limited Emergency Exposure
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Tap-Only Access Scope:</h3>
                  <ul className="text-xs text-slate-700 space-y-2 list-disc pl-5 font-medium">
                    <li>Blood type & factor</li>
                    <li>Critical drug allergies & adverse reactions</li>
                    <li>Emergency contact phone numbers</li>
                    <li>Essential safety alerts for emergency personnel</li>
                  </ul>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-sky-800 bg-sky-100 px-3 py-1 rounded-md">
                    <Lock className="h-4 w-4 text-sky-700" />
                    Authenticated Full Record Access
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Tap + PIN Access Scope:</h3>
                  <ul className="text-xs text-slate-700 space-y-2 list-disc pl-5 font-medium">
                    <li>Full clinical history and physician progress notes</li>
                    <li>Diagnostic test results & radiology imaging links</li>
                    <li>Active & past medication prescriptions</li>
                    <li>Treatment plans & past hospital encounter logs</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Lost Card Highlight */}
            <div className="p-4 bg-slate-900 text-white rounded-2xl text-center text-xs font-extrabold uppercase tracking-widest shadow-md">
              Highlight: "Lost card ≠ lost medical history"
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
