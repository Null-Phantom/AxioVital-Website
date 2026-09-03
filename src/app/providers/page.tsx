"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Stethoscope, User, Activity, FileText, Lock, Radio, Pill, Building2, 
  CheckCircle2, ArrowRight, Shield, Layers, HelpCircle, Clock, ChevronRight, 
  X, AlertCircle, Database, Search
} from "lucide-react";

export default function DoctorsAndCareTeamsPage() {
  const [timelineIndex, setTimelineIndex] = useState<number>(5);
  const [activeShiftIndex, setActiveShiftIndex] = useState<number>(0);
  const [activeRole, setActiveRole] = useState<string>("doctor");

  const timelineEvents = [
    { title: "Previous Admission", sub: "Hospital A — 6 months ago", desc: "Patient admitted for acute hypertension; stabilized over 48h.", tag: "Encounter" },
    { title: "Diagnosis Recorded", sub: "Primary Care", desc: "Essential hypertension; recommended sodium restriction & daily monitoring.", tag: "Clinical" },
    { title: "Diagnostic Test", sub: "Central Lab", desc: "Comprehensive metabolic panel & Lipid profile executed.", tag: "Lab Pathology" },
    { title: "Treatment Plan", sub: "Attending Physician", desc: "Initiated Lisinopril 10mg orally once daily.", tag: "Medication" },
    { title: "Radiology Imaging", sub: "Imaging Center", desc: "Chest X-Ray (PA & Lateral) — No acute cardiopulmonary disease.", tag: "Radiology" },
    { title: "Current Encounter", sub: "Specialist Referral", desc: "Cardiology consult; reviewing longitudinal history & baseline labs.", tag: "Active" }
  ];

  const shiftEvents = [
    { time: "08:15", title: "New Patient Check-In", desc: "Relevant patient context & historical records automatically surface in workspace." },
    { time: "09:05", title: "Clinical Assessment", desc: "Physician documents progress note & updates diagnostic impression." },
    { time: "10:20", title: "Diagnostic Order Entry", desc: "Order for STAT pathology lab & Echocardiogram created in unified pipeline." },
    { time: "11:40", title: "Result Verification", desc: "Lab results become available directly within the patient context." },
    { time: "13:10", title: "Treatment Update", desc: "Medication prescription modified & electronically routed to hospital pharmacy." },
    { time: "15:30", title: "Outpatient Referral", desc: "Patient referred to outpatient cardiology; AxioID maintains identity link." },
    { time: "16:00", title: "Care Continues", desc: "Receiving provider accesses authorized history without data reconstruction." }
  ];

  const roles = [
    { id: "doctor", name: "Doctor / Physician", action: "Clinical Decisions", desc: "Full clinical timeline, diagnostic notes, ordering privileges, and treatment plans." },
    { id: "nurse", name: "Nurse / Caregiver", action: "Care Delivery", desc: "Vital sign tracking, medication administration logs, and patient status updates." },
    { id: "lab", name: "Laboratory Staff", action: "Testing & Results", desc: "Specimen intake, pathology verification, and discrete result feeds." },
    { id: "radiology", name: "Radiology Tech", action: "Imaging Reports", desc: "DICOM image acquisition, radiologist findings, and diagnostic reports." },
    { id: "pharmacy", name: "Pharmacist", action: "Dispensing & Checks", desc: "Prescription fulfillment, drug interaction alerts, and dispensing logs." },
    { id: "admin", name: "Administration", action: "Coordination", desc: "Bed occupancy, scheduling queues, and admission coordination." }
  ];

  return (
    <div className="bg-[#fcfdfd] min-h-screen font-sans text-slate-900 selection:bg-teal-500 selection:text-white antialiased">
      
      {/* SECTION 1 — HERO SECTION */}
      <section className="bg-white border-b border-slate-200/90 py-20 sm:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[650px] h-[450px] bg-teal-50/70 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-50 border border-teal-200/90 px-3.5 py-1.5 rounded-full shadow-2xs">
                <Stethoscope className="h-3.5 w-3.5 text-teal-600" />
                AxioVital for Doctors & Care Teams
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
                The context to care. <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  The tools to act.
                </span>
              </h1>

              <p className="text-slate-600 text-lg sm:text-xl font-medium leading-relaxed">
                AxioVital brings the patient's relevant clinical context and the workflows around them into one connected workspace—so care teams can spend less time navigating fragmented systems and more time caring for the patient.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link href="/axiovital" className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold shadow-sm transition-all flex items-center gap-2">
                  Explore AxioVital <ArrowRight className="h-4 w-4 text-teal-400" />
                </Link>
                <a href="#clinical-workspace" className="px-6 py-3.5 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-800 text-sm font-bold transition-all cursor-pointer">
                  See the clinical workflow
                </a>
              </div>
            </div>

            {/* Right Column: Terminal Clinical Interface Visual */}
            <div className="lg:col-span-6 relative">
              <div className="bg-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-2xl border border-slate-800 space-y-6">
                
                {/* Header Bar */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-teal-500/20 border border-teal-500/40 text-teal-400 flex items-center justify-center font-bold">
                      <Stethoscope className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs font-mono uppercase text-teal-400 font-bold">CLINICAL WORKSPACE TERMINAL</div>
                      <div className="text-base font-extrabold text-white">Patient Context Engine</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-extrabold bg-teal-950 border border-teal-700/60 text-teal-300 px-3 py-1 rounded-full">
                    LIVE CLINICAL FEED
                  </span>
                </div>

                {/* Patient Summary Grid */}
                <div className="grid grid-cols-3 gap-3 text-xs font-mono">
                  <div className="bg-slate-800/90 border border-slate-700 p-3 rounded-xl">
                    <div className="text-slate-400 text-[10px]">PATIENT IDENTIFIER</div>
                    <div className="text-white font-bold">Jerome B.</div>
                    <div className="text-teal-400 text-[9px]">AxioID #8849</div>
                  </div>
                  <div className="bg-slate-800/90 border border-slate-700 p-3 rounded-xl">
                    <div className="text-slate-400 text-[10px]">DIAGNOSES & ORDERS</div>
                    <div className="text-cyan-300 font-bold">Hypertension</div>
                    <div className="text-slate-400 text-[9px]">STAT Lab Ordered</div>
                  </div>
                  <div className="bg-slate-800/90 border border-slate-700 p-3 rounded-xl">
                    <div className="text-slate-400 text-[10px]">TREATMENT STATUS</div>
                    <div className="text-blue-300 font-bold">Lisinopril 10mg</div>
                    <div className="text-slate-400 text-[9px]">Active Prescription</div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2 — THE REAL CLINICAL PROBLEM */}
      <section className="py-20 sm:py-28 bg-slate-50 border-b border-slate-200">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-red-700 bg-red-50 border border-red-200/80 px-3 py-1 rounded-full">
              The Fragmentation Challenge
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              The patient is one. The systems aren't.
            </h2>
            <p className="text-slate-600 text-base">
              The problem is not that healthcare workers lack data. The problem is that the information they need is often fragmented across workflows, departments and systems.
            </p>
          </div>

          {/* Fragmented Sources Visual */}
          <div className="bg-white border border-slate-200 rounded-3xl p-8 max-w-4xl mx-auto space-y-6 shadow-sm">
            <div className="text-xs font-mono font-extrabold text-slate-400 uppercase text-center">
              DISCONNECTED CLINICAL DATA SILOS
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs font-mono font-bold text-slate-600">
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">Patient Record</div>
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">Laboratory</div>
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">Radiology</div>
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">Pharmacy</div>
            </div>

            {/* Questions Appearing Around Clinician */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-red-900 font-medium">
              <div className="p-3 bg-red-50 border border-red-100 rounded-xl">"Was this diagnostic test already done elsewhere?"</div>
              <div className="p-3 bg-red-50 border border-red-100 rounded-xl">"What exact medication was prescribed last time?"</div>
              <div className="p-3 bg-red-50 border border-red-100 rounded-xl">"What occurred during the previous admission?"</div>
              <div className="p-3 bg-red-50 border border-red-100 rounded-xl">"What key symptoms changed since the last visit?"</div>
            </div>
          </div>

          <div className="text-center space-y-2 max-w-xl mx-auto">
            <h3 className="text-xl font-extrabold text-slate-900">Clinical decisions depend on context.</h3>
            <p className="text-xs text-slate-600 font-medium">
              AxioVital is designed to bring that context together around the patient.
            </p>
          </div>

        </div>
      </section>

      {/* SECTION 3 — KNOW THE PATIENT */}
      <section className="py-20 sm:py-28 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">
              Longitudinal History
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              See the patient, not just the encounter.
            </h2>
            <p className="text-slate-600 text-base">
              Explore the continuous clinical timeline across prior admissions, diagnoses, and lab results.
            </p>
          </div>

          {/* Timeline Visual Selector */}
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
              {timelineEvents.map((t, idx) => (
                <button
                  key={idx}
                  onClick={() => setTimelineIndex(idx)}
                  className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                    timelineIndex === idx 
                      ? "bg-slate-900 text-white border-slate-900 shadow-md font-extrabold" 
                      : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  <div className="text-[10px] font-mono text-teal-400">{t.tag}</div>
                  <div className="text-xs font-bold truncate mt-0.5">{t.title}</div>
                </button>
              ))}
            </div>

            {/* Display Panel */}
            <div className="bg-slate-900 text-white rounded-3xl p-8 space-y-4 border border-slate-800 shadow-xl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <h3 className="text-xl font-bold text-teal-300">{timelineEvents[timelineIndex].title}</h3>
                <span className="text-xs font-mono font-bold bg-teal-950 border border-teal-700 text-teal-300 px-3 py-1 rounded-full">
                  {timelineEvents[timelineIndex].sub}
                </span>
              </div>
              <p className="text-slate-300 text-sm font-medium leading-relaxed">
                {timelineEvents[timelineIndex].desc}
              </p>
            </div>
          </div>

          <p className="text-center text-xs font-bold text-slate-700">
            "The current encounter is one point in the patient's story—not the whole story."
          </p>

        </div>
      </section>

      {/* SECTION 4 — ONE CLINICAL WORKSPACE */}
      <section id="clinical-workspace" className="py-20 sm:py-28 bg-slate-50 border-b border-slate-200">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-800 bg-cyan-50 border border-cyan-200 px-3 py-1 rounded-full">
              Unified Workspace
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              One workspace. The workflows around the patient.
            </h2>
            <p className="text-slate-600 text-base">
              Clinical notes, orders, pathology results, radiology imaging, and pharmacy fulfillment connected in one interface.
            </p>
          </div>

          {/* Connected Action Loop Visual */}
          <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 max-w-5xl mx-auto space-y-8 shadow-2xl border border-slate-800">
            <div className="text-xs font-mono font-extrabold text-cyan-400 uppercase text-center">
              CONTINUOUS ACTION LOOP PIPELINE
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 text-center text-xs font-mono">
              <div className="bg-slate-800 border border-slate-700 p-4 rounded-2xl space-y-1">
                <div className="text-teal-300 font-bold">1. Order Test</div>
                <div className="text-[10px] text-slate-400">Doctor creates entry</div>
              </div>
              <div className="bg-slate-800 border border-slate-700 p-4 rounded-2xl space-y-1">
                <div className="text-teal-300 font-bold">2. Lab Receives</div>
                <div className="text-[10px] text-slate-400">Pathology tracking</div>
              </div>
              <div className="bg-slate-800 border border-slate-700 p-4 rounded-2xl space-y-1">
                <div className="text-teal-300 font-bold">3. Result Ready</div>
                <div className="text-[10px] text-slate-400">Discrete result feed</div>
              </div>
              <div className="bg-slate-800 border border-slate-700 p-4 rounded-2xl space-y-1">
                <div className="text-teal-300 font-bold">4. Doctor Reviews</div>
                <div className="text-[10px] text-slate-400">Contextual alert</div>
              </div>
              <div className="bg-slate-800 border border-slate-700 p-4 rounded-2xl space-y-1">
                <div className="text-teal-300 font-bold">5. Plan Updated</div>
                <div className="text-[10px] text-slate-400">Treatment documented</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 5 — FROM INFORMATION TO ACTION */}
      <section className="py-20 sm:py-28 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              From review to action, without breaking the workflow.
            </h2>
            <p className="text-slate-600 text-base">
              A 7-step horizontal care process designed for clinical momentum.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2 text-center text-xs font-mono font-bold">
            <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl">01 REVIEW</div>
            <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl">02 ASSESS</div>
            <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl">03 ORDER</div>
            <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl">04 RECEIVE</div>
            <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl">05 TREAT</div>
            <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl">06 DOCUMENT</div>
            <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl">07 FOLLOW UP</div>
          </div>

        </div>
      </section>

      {/* SECTION 6 — CONTINUITY ACROSS PROVIDERS */}
      <section className="py-20 sm:py-28 bg-slate-50 border-b border-slate-200">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">
              AxioID Continuity
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              The patient can move. Their identity stays connected.
            </h2>
            <p className="text-slate-600 text-base">
              AxioID recognizes the same patient across participating AxioVital network facilities.
            </p>
          </div>

          <div className="bg-slate-900 text-white rounded-3xl p-8 max-w-4xl mx-auto space-y-6 shadow-xl border border-slate-800">
            <div className="text-center font-mono text-xs text-teal-400 font-extrabold">
              IDENTITY → AUTHENTICATION → AUTHORIZATION → RELEVANT CLINICAL CONTEXT
            </div>
            <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl text-center text-xs text-slate-300 font-medium">
              "Knowing who the patient is doesn't mean seeing everything about them. Access is governed by role-aware authentication."
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 7 — FOR THE WHOLE CARE TEAM */}
      <section className="py-20 sm:py-28 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              One patient. Many roles. One connected workflow.
            </h2>
            <p className="text-slate-600 text-base">
              Explore how different clinical roles interact through role-appropriate permissions.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
              {roles.map((r) => (
                <button
                  key={r.id}
                  onClick={() => setActiveRole(r.id)}
                  className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                    activeRole === r.id 
                      ? "bg-slate-900 text-white border-slate-900 shadow-md font-extrabold" 
                      : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  <div className="text-[10px] font-mono text-teal-400">{r.action}</div>
                  <div className="text-xs font-bold truncate mt-0.5">{r.name.split(" ")[0]}</div>
                </button>
              ))}
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 text-center space-y-2">
              {(() => {
                const current = roles.find(r => r.id === activeRole) || roles[0];
                return (
                  <>
                    <h3 className="text-lg font-bold text-slate-900">{current.name} — {current.action}</h3>
                    <p className="text-xs text-slate-600 font-medium max-w-xl mx-auto">{current.desc}</p>
                  </>
                );
              })()}
            </div>
          </div>

          <p className="text-center text-xs font-bold text-slate-700">
            "Different roles. Different permissions. One patient context."
          </p>

        </div>
      </section>

      {/* SECTION 8 — REDUCE COGNITIVE OVERHEAD */}
      <section className="py-20 sm:py-28 bg-slate-50 border-b border-slate-200">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Less searching. More clinical thinking.
            </h2>
            <p className="text-slate-600 text-base">
              Designed to reduce the friction of navigating fragmented clinical applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Before */}
            <div className="bg-white border border-slate-200 rounded-3xl p-8 space-y-3 shadow-2xs">
              <div className="text-xs font-extrabold uppercase tracking-wider text-slate-500">TRADITIONAL EHR NAVIGATION</div>
              <div className="text-xs font-mono text-slate-600 space-y-1.5">
                <div>Search system → Open record</div>
                <div>Switch application → Find lab report</div>
                <div>Check previous encounter → Return to patient</div>
              </div>
            </div>

            {/* With AxioVital */}
            <div className="bg-teal-50/80 border border-teal-200 rounded-3xl p-8 space-y-3 shadow-sm">
              <div className="text-xs font-extrabold uppercase tracking-wider text-teal-800">WITH AXIOVITAL WORKSPACE</div>
              <div className="text-xs font-mono font-bold text-teal-950 space-y-1.5">
                <div>Patient → Relevant Context</div>
                <div>Clinical Workflow → Immediate Action</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 9 — A DAY IN THE LIFE */}
      <section className="py-20 sm:py-28 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              One shift. One connected workspace.
            </h2>
            <p className="text-slate-600 text-base">
              Follow a clinician through a shift using AxioVital.
            </p>
          </div>

          {/* Interactive Shift Events Selector */}
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2">
              {shiftEvents.map((s, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveShiftIndex(idx)}
                  className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                    activeShiftIndex === idx 
                      ? "bg-slate-900 text-white border-slate-900 shadow-md font-extrabold" 
                      : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  <div className="text-[10px] font-mono text-teal-400">{s.time}</div>
                  <div className="text-xs font-bold truncate mt-0.5">{s.title.split(" ")[0]}</div>
                </button>
              ))}
            </div>

            <div className="bg-slate-900 text-white rounded-3xl p-8 space-y-3 border border-slate-800 shadow-xl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-mono font-bold text-teal-400">{shiftEvents[activeShiftIndex].time}</span>
                <h3 className="text-lg font-bold">{shiftEvents[activeShiftIndex].title}</h3>
              </div>
              <p className="text-slate-300 text-sm font-medium leading-relaxed">
                {shiftEvents[activeShiftIndex].desc}
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 10 — THE AXIOVITAL DIFFERENCE */}
      <section className="py-20 sm:py-28 bg-slate-50 border-b border-slate-200">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              The AxioVital Difference
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="bg-white border border-slate-200 rounded-3xl p-8 space-y-2 shadow-sm">
              <div className="text-xl font-extrabold text-slate-900">Know the patient</div>
              <p className="text-xs text-slate-600 font-medium">Relevant history and context around the current encounter.</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-3xl p-8 space-y-2 shadow-sm">
              <div className="text-xl font-extrabold text-slate-900">Work in one place</div>
              <p className="text-xs text-slate-600 font-medium">Clinical and operational workflows connected around the patient.</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-3xl p-8 space-y-2 shadow-sm">
              <div className="text-xl font-extrabold text-slate-900">Act with context</div>
              <p className="text-xs text-slate-600 font-medium">Orders, results and treatment workflows connected to the clinical record.</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-3xl p-8 space-y-2 shadow-sm">
              <div className="text-xl font-extrabold text-slate-900">Continue across providers</div>
              <p className="text-xs text-slate-600 font-medium">Persistent identity through AxioID across participating providers.</p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 11 — PRIVACY & ACCESS */}
      <section className="py-20 sm:py-28 bg-slate-900 text-white border-b border-slate-800">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Connected doesn't mean unrestricted.
            </h2>
            <p className="text-slate-300 text-base font-medium">
              Axio's model separates knowing who a patient is from determining what information a user is permitted to access.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 text-xs font-mono font-bold text-teal-300">
            <span>PATIENT IDENTITY</span> → <span>AUTHENTICATION</span> → <span>AUTHORIZATION</span> → <span>ROLE-APPROPRIATE ACCESS</span>
          </div>

        </div>
      </section>

      {/* SECTION 12 — FINAL VISION & CTA */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Give care teams the context to care.
          </h2>
          <p className="text-slate-300 text-base max-w-xl mx-auto font-medium">
            See how AxioVital brings the clinical workflow together.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link href="/axiovital" className="px-6 py-3.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-extrabold text-sm transition-all shadow-md">
              Explore AxioVital
            </Link>
            <Link href="/contact" className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-extrabold text-sm transition-all border border-slate-700">
              Book a Demo
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
