"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Building2, Activity, User, FileText, Lock, Radio, Pill, Stethoscope, 
  BarChart3, CheckCircle2, ArrowRight, Shield, Layers, HelpCircle, 
  Calendar, DollarSign, Users, ChevronRight, X, AlertTriangle, Eye, Globe
} from "lucide-react";

export default function HospitalsAndHealthNetworksPage() {
  const [activeStage, setActiveStage] = useState<number>(0);
  const [activeDept, setActiveDept] = useState<string>("doctor");

  const patientFlowStages = [
    { name: "Registration", desc: "Patient identified & registered in hospital queue.", dept: "Admissions" },
    { name: "Admission", desc: "Bed assigned & admission encounter logged.", dept: "Operations" },
    { name: "Consultation", desc: "Attending physician evaluates patient & records clinical note.", dept: "Clinical" },
    { name: "Diagnostic Order", desc: "Order entry created for blood work & imaging.", dept: "Orders" },
    { name: "Laboratory / Radiology", desc: "Specimen processed & DICOM imaging performed.", dept: "Diagnostics" },
    { name: "Results Review", desc: "Discrete lab values & radiologist findings available in workspace.", dept: "Clinical" },
    { name: "Treatment", desc: "Physician updates care plan & issues digital prescription.", dept: "Treatment" },
    { name: "Pharmacy", desc: "Medication validated, checked for allergies, & dispensed.", dept: "Pharmacy" },
    { name: "Billing", desc: "Automated charge capture & financial ledger updated.", dept: "Billing" },
    { name: "Discharge", desc: "Discharge summary generated & patient care completed.", dept: "Discharge" }
  ];

  const departmentWorkflows = [
    { id: "doctor", name: "Doctor", role: "Clinical Decisions", desc: "Longitudinal patient history, clinical progress notes, ordering privileges, and treatment plans." },
    { id: "nurse", name: "Nursing", role: "Care Delivery", desc: "Vital signs telemetry, bed management, and medication administration records." },
    { id: "lab", name: "Laboratory", role: "Testing & Results", desc: "Specimen tracking, pathology verification, and real-time result broadcasting." },
    { id: "radiology", name: "Radiology", role: "Imaging", desc: "Imaging request queues, radiologist notes, and PACS image links." },
    { id: "pharmacy", name: "Pharmacy", role: "Medication", desc: "Prescription fulfillment, allergy collision checks, and dispensing logs." },
    { id: "billing", name: "Billing", role: "Charges & Payments", desc: "Automated coding, charge capture, and transparent patient financial ledgers." },
    { id: "admissions", name: "Admissions", role: "Patient Movement", desc: "Check-in kiosks, identity verification, and bed allocation dashboards." },
    { id: "scheduling", name: "Scheduling", role: "Appointments", desc: "Multi-facility provider calendars and patient appointment queues." },
    { id: "admin", name: "Administration", role: "Hospital Operations", desc: "Staff permissions, credentialing, security audits, and operational dashboards." }
  ];

  return (
    <div className="bg-[#fcfdfd] min-h-screen font-sans text-slate-900 selection:bg-teal-500 selection:text-white antialiased">
      
      {/* HERO SECTION */}
      <section className="bg-white border-b border-slate-200/90 py-20 sm:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[650px] h-[450px] bg-teal-50/70 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-50 border border-teal-200/90 px-3.5 py-1.5 rounded-full shadow-2xs">
                <Building2 className="h-3.5 w-3.5 text-teal-600" />
                Hospitals & Health Networks Solution
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
                Turn a collection of departments into <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  one connected hospital.
                </span>
              </h1>

              <p className="text-slate-600 text-lg sm:text-xl font-medium leading-relaxed">
                AxioVital connects the clinical, operational, and administrative workflows around every patient—giving hospitals a unified platform to manage care and the organization behind it.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a href="#hospital-layer" className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold shadow-sm transition-all flex items-center gap-2 cursor-pointer">
                  See AxioVital in action <ArrowRight className="h-4 w-4 text-teal-400" />
                </a>
                <Link href="/axiovital" className="px-6 py-3.5 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-800 text-sm font-bold transition-all">
                  Explore the platform
                </Link>
              </div>
            </div>

            {/* Right Column: Hero Visual Operating System */}
            <div className="lg:col-span-6 relative">
              <div className="bg-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-2xl border border-slate-800 space-y-6">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-teal-500/20 border border-teal-500/40 text-teal-400 flex items-center justify-center font-bold">
                      <Building2 className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs font-mono uppercase text-teal-400 font-bold">HOSPITAL OPERATING LAYER</div>
                      <div className="text-base font-extrabold text-white">AXIOVITAL PLATFORM CORE</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-extrabold bg-teal-950 border border-teal-700/60 text-teal-300 px-3 py-1 rounded-full">
                    ALL DEPARTMENTS CONNECTED
                  </span>
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 text-center text-[10px] font-mono font-bold">
                  <div className="bg-slate-800 p-2 rounded-lg border border-slate-700 text-slate-300">Doctors</div>
                  <div className="bg-slate-800 p-2 rounded-lg border border-slate-700 text-slate-300">Nursing</div>
                  <div className="bg-slate-800 p-2 rounded-lg border border-slate-700 text-slate-300">Admissions</div>
                  <div className="bg-slate-800 p-2 rounded-lg border border-slate-700 text-slate-300">Laboratory</div>
                  <div className="bg-slate-800 p-2 rounded-lg border border-slate-700 text-slate-300">Radiology</div>
                  <div className="bg-slate-800 p-2 rounded-lg border border-slate-700 text-slate-300">Pharmacy</div>
                  <div className="bg-slate-800 p-2 rounded-lg border border-slate-700 text-slate-300">Billing</div>
                  <div className="bg-slate-800 p-2 rounded-lg border border-slate-700 text-slate-300">Scheduling</div>
                  <div className="bg-slate-800 p-2 rounded-lg border border-slate-700 text-slate-300">Admin</div>
                  <div className="bg-slate-800 p-2 rounded-lg border border-slate-700 text-slate-300">Analytics</div>
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
              Hospital Data Fragmentation
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Your hospital is one organization. Why does its information behave like many?
            </h2>
            <p className="text-slate-600 text-base">
              Disconnected department software creates manual coordination friction and missing clinical context.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-3xl p-8 max-w-4xl mx-auto space-y-6 shadow-sm">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs font-mono font-bold text-slate-600">
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">Clinical</div>
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">Laboratory</div>
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">Radiology</div>
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">Pharmacy</div>
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">Billing</div>
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">Admissions</div>
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">Scheduling</div>
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">Admin</div>
            </div>

            <div className="flex flex-wrap justify-center gap-2 text-xs text-red-900 font-medium pt-2">
              <span className="p-2 bg-red-50 border border-red-100 rounded-lg">Different workflows</span>
              <span className="p-2 bg-red-50 border border-red-100 rounded-lg">Repeated information</span>
              <span className="p-2 bg-red-50 border border-red-100 rounded-lg">Manual coordination</span>
              <span className="p-2 bg-red-50 border border-red-100 rounded-lg">Disconnected departments</span>
              <span className="p-2 bg-red-50 border border-red-100 rounded-lg">Missing context</span>
            </div>
          </div>

          <p className="text-center text-xs font-bold text-slate-700">
            "When every department operates around a different workflow, the hospital has to work harder to operate as one."
          </p>

        </div>
      </section>

      {/* SECTION 3 — THE AXIOVITAL OPERATING LAYER */}
      <section id="hospital-layer" className="py-20 sm:py-28 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">
              Hospital Operating Layer
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              One platform across the hospital.
            </h2>
            <p className="text-slate-600 text-base">
              A single operating environment unifying clinical and administrative tasks.
            </p>
          </div>

          {/* Unified Hospital Environment Visual */}
          <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 max-w-5xl mx-auto space-y-6 shadow-2xl border border-slate-800">
            <div className="text-xs font-mono font-extrabold uppercase text-teal-400 text-center">
              CONSOLIDATED OPERATING ENVIRONMENT
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-center text-xs font-mono">
              <div className="bg-slate-800 border border-slate-700 p-4 rounded-xl">Patient Records</div>
              <div className="bg-slate-800 border border-slate-700 p-4 rounded-xl">Clinical Workflows</div>
              <div className="bg-slate-800 border border-slate-700 p-4 rounded-xl">Orders & Requests</div>
              <div className="bg-slate-800 border border-slate-700 p-4 rounded-xl">Laboratory Engine</div>
              <div className="bg-slate-800 border border-slate-700 p-4 rounded-xl">Radiology PACS Link</div>
              <div className="bg-slate-800 border border-slate-700 p-4 rounded-xl">Pharmacy Dispensing</div>
              <div className="bg-slate-800 border border-slate-700 p-4 rounded-xl">Automated Billing</div>
              <div className="bg-slate-800 border border-slate-700 p-4 rounded-xl">Master Scheduling</div>
              <div className="bg-slate-800 border border-slate-700 p-4 rounded-xl">Admissions & Beds</div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 4 — FOLLOW THE PATIENT */}
      <section className="py-20 sm:py-28 bg-slate-50 border-b border-slate-200">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              One patient. One connected hospital journey.
            </h2>
            <p className="text-slate-600 text-base">
              Follow how AxioVital supports the entire encounter workflow from check-in to discharge.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
              {patientFlowStages.map((s, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveStage(idx)}
                  className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                    activeStage === idx 
                      ? "bg-slate-900 text-white border-slate-900 shadow-md font-extrabold" 
                      : "bg-white text-slate-700 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  <div className="text-[10px] font-mono text-teal-400">{s.dept}</div>
                  <div className="text-xs font-bold truncate mt-0.5">{s.name}</div>
                </button>
              ))}
            </div>

            <div className="bg-white border border-slate-200 rounded-3xl p-8 text-center space-y-3 shadow-sm">
              <span className="text-xs font-mono font-bold text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
                STAGE {activeStage + 1}: {patientFlowStages[activeStage].dept} WORKFLOW
              </span>
              <h3 className="text-xl font-bold text-slate-900">{patientFlowStages[activeStage].name}</h3>
              <p className="text-xs text-slate-600 font-medium max-w-xl mx-auto">{patientFlowStages[activeStage].desc}</p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 5 — DEPARTMENTS */}
      <section className="py-20 sm:py-28 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Every department has its workflow. The hospital has one patient.
            </h2>
            <p className="text-slate-600 text-base">
              Different workflows connected around the same patient context.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-1.5">
              {departmentWorkflows.map((d) => (
                <button
                  key={d.id}
                  onClick={() => setActiveDept(d.id)}
                  className={`p-2 rounded-xl border text-center transition-all cursor-pointer ${
                    activeDept === d.id 
                      ? "bg-slate-900 text-white border-slate-900 font-extrabold" 
                      : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  <div className="text-[9px] font-mono truncate">{d.name}</div>
                </button>
              ))}
            </div>

            <div className="bg-slate-900 text-white rounded-3xl p-6 text-center space-y-2 border border-slate-800 shadow-xl">
              {(() => {
                const current = departmentWorkflows.find(d => d.id === activeDept) || departmentWorkflows[0];
                return (
                  <>
                    <div className="text-xs font-mono text-teal-400 font-extrabold">{current.role}</div>
                    <h3 className="text-lg font-bold">{current.name} Department Interface</h3>
                    <p className="text-xs text-slate-300 font-medium max-w-xl mx-auto">{current.desc}</p>
                  </>
                );
              })()}
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 6 — HOSPITAL COMMAND CENTER */}
      <section className="py-20 sm:py-28 bg-slate-50 border-b border-slate-200">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-800 bg-cyan-50 border border-cyan-200 px-3 py-1 rounded-full">
              Operational Visibility
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              From individual encounters to hospital-wide visibility.
            </h2>
            <p className="text-slate-600 text-base">
              AxioVital brings operational information together so hospital leadership can see what is happening across the organization.
            </p>
          </div>

          <div className="bg-slate-900 text-white rounded-3xl p-8 max-w-5xl mx-auto space-y-6 shadow-2xl border border-slate-800 font-mono text-xs">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="text-teal-400 font-bold">EXECUTIVE COMMAND CENTER TELEMETRY</div>
              <span className="text-[10px] bg-teal-950 text-teal-300 border border-teal-700 px-3.5 py-1 rounded-full">REAL-TIME</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
                <div className="text-slate-400 text-[10px]">ACTIVE PATIENTS</div>
                <div className="text-white font-bold text-sm mt-1">Unified Queue</div>
              </div>
              <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
                <div className="text-slate-400 text-[10px]">BED OCCUPANCY</div>
                <div className="text-teal-300 font-bold text-sm mt-1">Real-time Telemetry</div>
              </div>
              <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
                <div className="text-slate-400 text-[10px]">DIAGNOSTIC PIPELINE</div>
                <div className="text-cyan-300 font-bold text-sm mt-1">Pending Lab / PACS</div>
              </div>
              <div className="bg-slate-800 p-4 rounded-xl border border-slate-700">
                <div className="text-slate-400 text-[10px]">PHARMACY LOGS</div>
                <div className="text-blue-300 font-bold text-sm mt-1">Dispensing Activity</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 7 — FROM ACTION TO ACTION */}
      <section className="py-20 sm:py-28 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              When one workflow moves, the next one knows.
            </h2>
            <p className="text-slate-600 text-base">
              Workflow continuity across order entry, lab processing, physician review, and medication dispensing.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-6 gap-2 text-center text-xs font-mono font-bold">
            <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl">1. Doctor Orders</div>
            <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl">2. Lab Receives</div>
            <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl">3. Test Processed</div>
            <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl">4. Result Ready</div>
            <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl">5. Doctor Reviews</div>
            <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl">6. Pharmacy Dispenses</div>
          </div>

        </div>
      </section>

      {/* SECTION 8 — AXIOID & NETWORK CONTINUITY */}
      <section className="py-20 sm:py-28 bg-slate-50 border-b border-slate-200">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">
              Multi-Facility Network
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              The hospital doesn't exist alone.
            </h2>
            <p className="text-slate-600 text-base">
              AxioID provides a persistent healthcare identity that helps recognize the same patient across participating AxioVital providers.
            </p>
          </div>

          <div className="bg-slate-900 text-white rounded-3xl p-8 max-w-4xl mx-auto space-y-4 shadow-xl border border-slate-800 text-center">
            <div className="font-mono text-xs text-teal-400 font-extrabold">
              IDENTITY → AUTHENTICATION → AUTHORIZATION → RELEVANT AUTHORIZED CONTEXT
            </div>
            <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl text-xs text-slate-300 font-medium">
              "Identity ≠ Access. AxioID identifies the patient. Appropriate authentication and authorization determine what information a user is permitted to access."
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 9 — NETWORK EFFECT */}
      <section className="py-20 sm:py-28 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              A connected hospital is powerful. A connected network is transformative.
            </h2>
            <p className="text-slate-600 text-base max-w-xl mx-auto font-medium">
              A patient's care doesn't stop at the walls of one hospital. The infrastructure supporting that care shouldn't either.
            </p>
          </div>

        </div>
      </section>

      {/* SECTION 10 — FOR HOSPITAL LEADERSHIP */}
      <section className="py-20 sm:py-28 bg-slate-50 border-b border-slate-200">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Built for the people running the hospital, too.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="bg-white border border-slate-200 rounded-3xl p-8 space-y-2 shadow-sm">
              <div className="text-xl font-extrabold text-slate-900">Clinical Operations</div>
              <p className="text-xs text-slate-600 font-medium">Connect workflows around patient care.</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-3xl p-8 space-y-2 shadow-sm">
              <div className="text-xl font-extrabold text-slate-900">Operational Visibility</div>
              <p className="text-xs text-slate-600 font-medium">Understand activity across departments.</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-3xl p-8 space-y-2 shadow-sm">
              <div className="text-xl font-extrabold text-slate-900">Administrative Control</div>
              <p className="text-xs text-slate-600 font-medium">Manage staff, permissions and hospital settings.</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-3xl p-8 space-y-2 shadow-sm">
              <div className="text-xl font-extrabold text-slate-900">Analytics & Reporting</div>
              <p className="text-xs text-slate-600 font-medium">Turn operational data into organizational visibility.</p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 11 — GOVERNANCE & ACCESS */}
      <section className="py-20 sm:py-28 bg-slate-900 text-white border-b border-slate-800">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Connected doesn't mean uncontrolled.
            </h2>
            <p className="text-slate-300 text-base font-medium">
              Different members of a hospital have role-based permissions tailored to their duties.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 text-xs font-mono font-bold text-teal-300">
            <span>PATIENT IDENTITY</span> → <span>AUTHENTICATION</span> → <span>AUTHORIZATION</span> → <span>ROLE</span> → <span>PERMITTED INFO</span> → <span>AUDITABILITY</span>
          </div>

        </div>
      </section>

      {/* SECTION 12 — BEFORE / AFTER */}
      <section className="py-20 sm:py-28 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              From fragmented operations to connected care.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-slate-100/90 border border-slate-200 rounded-3xl p-8 space-y-3 shadow-2xs">
              <div className="text-xs font-extrabold uppercase tracking-wider text-slate-500">BEFORE</div>
              <div className="text-xs font-mono text-slate-600 space-y-1">
                <div>Departments → Separate workflows</div>
                <div>Fragmented information → Manual coordination</div>
                <div>Patient moves between systems</div>
              </div>
            </div>

            <div className="bg-teal-50/80 border border-teal-200 rounded-3xl p-8 space-y-3 shadow-sm">
              <div className="text-xs font-extrabold uppercase tracking-wider text-teal-800">WITH AXIOVITAL</div>
              <div className="text-xs font-mono font-bold text-teal-950 space-y-1">
                <div>Hospital → Connected workflows</div>
                <div>Shared patient context → Role-appropriate access</div>
                <div>Coordinated operations</div>
              </div>
            </div>
          </div>

          <p className="text-center text-xl font-extrabold text-slate-900">
            "From managing departments to managing a connected hospital."
          </p>

        </div>
      </section>

      {/* SECTION 13 — THE BIGGER VISION & FINAL CTA */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-block bg-teal-500 text-slate-950 font-extrabold text-xs px-4 py-1 rounded-full uppercase tracking-wider">
            AXIO ECOSYSTEM VISION
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Build a hospital that works as one.
          </h2>
          <p className="text-slate-300 text-base max-w-xl mx-auto font-medium">
            See how AxioVital can connect the workflows, teams and patient context that power your organization.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="px-6 py-3.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-extrabold text-sm transition-all shadow-md">
              Book a demo
            </Link>
            <Link href="/axiovital" className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-extrabold text-sm transition-all border border-slate-700">
              Explore AxioVital
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
