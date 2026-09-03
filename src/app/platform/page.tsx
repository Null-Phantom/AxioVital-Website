"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Activity, Shield, CreditCard, User, Layers, Database, Lock, KeyRound, 
  Building2, Stethoscope, ChevronRight, CheckCircle2, AlertCircle, ArrowRight,
  Info, Eye, EyeOff, Radio, RefreshCcw, Check, X, ShieldAlert, Cpu, Sparkles
} from "lucide-react";

export default function PlatformArchitecturePage() {
  const [selectedNode, setSelectedNode] = useState<string | null>("axioid");
  const [activeStep, setActiveStep] = useState<number>(0);
  const [showDisclosure, setShowDisclosure] = useState<boolean>(true);

  // Architecture Nodes Details Data
  const architectureNodes: Record<string, {
    title: string;
    subtitle: string;
    layer: string;
    description: string;
    details: string[];
    disclosableNote: string;
  }> = {
    patient: {
      title: "PATIENT",
      subtitle: "End-User Healthcare Participant",
      layer: "Access Point Origin",
      description: "The patient is the central subject of the care journey. Patient interaction initiates identity presentation at participating provider sites.",
      details: [
        "Carries physical AxioCard identity key",
        "Presents card at hospital kiosks and point-of-care terminals",
        "Provides PIN authentication when requesting full medical history access",
        "Maintains patient-centered identity control"
      ],
      disclosableNote: "Conceptual user entity representation."
    },
    axiocard: {
      title: "AXIOCARD",
      subtitle: "NFC-Enabled Physical Patient Interface",
      layer: "Physical Interface Layer",
      description: "The AxioCard is a physical NFC card associated with the patient's AxioID and provides a simple way to present that identity at participating providers.",
      details: [
        "NFC contactless interface for physical presentation",
        "Associated with the patient's persistent AxioID",
        "Serves as an access point to the identity system",
        "Complete medical records are NOT stored directly on the card",
        "Lost card ≠ lost medical history"
      ],
      disclosableNote: "Physical access point spec; internal chip hardware configuration omitted."
    },
    axioid: {
      title: "AXIOID",
      subtitle: "Persistent Patient Identity",
      layer: "Identity Layer",
      description: "One persistent identity intended to remain valid across participating providers in the AxioVital network.",
      details: [
        "One patient → One AxioID → Multiple participating providers",
        "Connects hospitals, doctors, laboratories, radiology, and pharmacies",
        "Not simply another hospital registration number",
        "Establishes continuous identity without centralizing record ownership"
      ],
      disclosableNote: "Logical identity architecture; internal identifier generation omitted."
    },
    auth: {
      title: "AUTHENTICATION & AUTHORIZATION",
      subtitle: "Intentional Access Control Layer",
      layer: "Security & Access Scope Layer",
      description: "Creates a distinct conceptual layer separating identity from medical record access.",
      details: [
        "Identity: 'Who is the patient?'",
        "Authentication: 'Can the requested access be verified?'",
        "Authorization: 'What information may be accessed?'",
        "TAP Path: Limited emergency-oriented information (blood type, allergies, emergency contact)",
        "TAP + PIN Path: Full authorized medical history (diagnoses, tests, prescriptions, history)",
        "Identity and authorization are separate concepts"
      ],
      disclosableNote: "Access scope model; cryptographic algorithms and secrets omitted."
    },
    axiovital: {
      title: "AXIOVITAL PLATFORM LAYER",
      subtitle: "Hospital Management Application",
      layer: "Application & Workflow Layer",
      description: "Full hospital management application designed to bring major clinical, operational, and service workflows into one dense environment.",
      details: [
        "Patient Records: Clinical history and profiles",
        "Clinical Workflows: Notes, diagnoses, and treatment plans",
        "Orders: Tests, procedures, and prescriptions",
        "Laboratory: Requests and results",
        "Radiology: Imaging requests and results",
        "Pharmacy: Medication dispensing and tracking",
        "Billing: Charges and payments",
        "Scheduling: Appointments and calendars",
        "Admissions: Registration and admission workflows",
        "Administration: Staff, roles, and permissions",
        "Reporting: Operational dashboards"
      ],
      disclosableNote: "Application module scope; internal backend routing omitted."
    },
    domains: {
      title: "DOMAIN DATA",
      subtitle: "Logical Health Data Domains",
      layer: "Conceptual Data Layer",
      description: "Logical categorization of healthcare data domains processed within the platform.",
      details: [
        "Patient Domain",
        "Clinical Domain",
        "Orders Domain",
        "Lab Results Domain",
        "Radiology Results Domain",
        "Medication Domain",
        "Billing Domain",
        "Scheduling Domain",
        "Admissions Domain"
      ],
      disclosableNote: "Logical data model; database technology, schemas, and table names omitted."
    },
    providers: {
      title: "PARTICIPATING PROVIDERS",
      subtitle: "Connected Healthcare Network",
      layer: "Network Integration Layer",
      description: "Participating hospitals, clinics, laboratories, radiology centers, and pharmacies connected through the AxioVital ecosystem.",
      details: [
        "🏥 Hospitals & Health Systems",
        "👨‍⚕️ Doctors & Attending Physicians",
        "🧪 Laboratories & Diagnostic Facilities",
        "🩻 Radiology & Medical Imaging Centers",
        "💊 Pharmacies & Dispensaries",
        "👤 Patients & Caregivers"
      ],
      disclosableNote: "Participating provider concept; specific network endpoints omitted."
    }
  };

  // Cross-Hospital Referral Interactive Steps
  const referralSteps = [
    { step: "01", title: "Hospital A", desc: "Patient receives initial care and treatment at Hospital A.", layer: "IDENTITY", badge: "bg-cyan-50 text-cyan-800 border-cyan-200" },
    { step: "02", title: "Patient Referred", desc: "Clinician initiates referral to a receiving provider.", layer: "IDENTITY", badge: "bg-cyan-50 text-cyan-800 border-cyan-200" },
    { step: "03", title: "Hospital B", desc: "Patient arrives at receiving facility Hospital B.", layer: "IDENTITY", badge: "bg-cyan-50 text-cyan-800 border-cyan-200" },
    { step: "04", title: "AxioCard Tapped", desc: "Patient presents physical AxioCard at terminal.", layer: "IDENTITY", badge: "bg-cyan-50 text-cyan-800 border-cyan-200" },
    { step: "05", title: "AxioID Identified", desc: "System recognizes persistent patient AxioID.", layer: "IDENTITY", badge: "bg-cyan-50 text-cyan-800 border-cyan-200" },
    { step: "06", title: "Additional Authentication", desc: "Patient enters PIN for full history access request.", layer: "AUTHENTICATION", badge: "bg-purple-50 text-purple-800 border-purple-200" },
    { step: "07", title: "Authorization", desc: "Permitted access scope is determined and verified.", layer: "AUTHORIZATION", badge: "bg-teal-50 text-teal-800 border-teal-200" },
    { step: "08", title: "Relevant History", desc: "Authorized clinical history becomes available to clinician.", layer: "MEDICAL INFORMATION", badge: "bg-blue-50 text-blue-800 border-blue-200" },
    { step: "09", title: "Clinical Workflow", desc: "Attending physician reviews notes, lab, and radiology data.", layer: "MEDICAL INFORMATION", badge: "bg-blue-50 text-blue-800 border-blue-200" },
    { step: "10", title: "Continued Care", desc: "Treatment continues seamlessly with full clinical context.", layer: "MEDICAL INFORMATION", badge: "bg-blue-50 text-blue-800 border-blue-200" }
  ];

  return (
    <div className="bg-[#fcfdfd] min-h-screen font-sans text-slate-900 selection:bg-teal-500 selection:text-white antialiased">
      
      {/* HEADER SECTION */}
      <section className="bg-white border-b border-slate-200 py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[350px] bg-teal-50/60 rounded-full blur-[130px] pointer-events-none" />
        
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-50 border border-teal-200/80 px-3.5 py-1.5 rounded-full shadow-2xs">
            <Cpu className="h-3.5 w-3.5 text-teal-600" />
            Public System Architecture Specification
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
            High-Level System Architecture
          </h1>

          <p className="text-slate-600 text-lg font-medium">
            Logical representation of the AxioVital ecosystem.
          </p>

          <p className="text-slate-500 text-xs max-w-xl mx-auto leading-relaxed">
            Explaining how Patient, AxioCard, AxioID, Authentication & Authorization, AxioVital, Domain Data, and Participating Providers fit together.
          </p>
        </div>
      </section>

      {/* HORIZONTAL SECURITY & PRIVACY OVERLAY BANNER */}
      <section className="bg-slate-900 text-white border-y border-slate-800 py-4 shadow-sm sticky top-16 z-30">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <Shield className="h-5 w-5 text-teal-400 shrink-0" />
            <div>
              <span className="font-extrabold uppercase tracking-wider text-teal-300 mr-2">SECURITY & PRIVACY LAYER:</span>
              <span className="text-slate-300 font-medium">Cross-cutting governance spanning all architecture tiers</span>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] text-slate-300">
            <span className="bg-slate-800 px-2.5 py-1 rounded border border-slate-700">Least-necessary access</span>
            <span className="bg-slate-800 px-2.5 py-1 rounded border border-slate-700">Authentication</span>
            <span className="bg-slate-800 px-2.5 py-1 rounded border border-slate-700">Authorization</span>
            <span className="bg-slate-800 px-2.5 py-1 rounded border border-slate-700">Role-aware access</span>
            <span className="bg-slate-800 px-2.5 py-1 rounded border border-slate-700">Auditability</span>
          </div>
        </div>
      </section>

      {/* MAIN INTERACTIVE ARCHITECTURE DIAGRAM SECTION */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            
            {/* LEFT: 7-LAYER LOGICAL ARCHITECTURE FLOW */}
            <div className="flex-1 min-w-0 bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8">
              
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <h2 className="text-xl font-extrabold text-slate-900">System Component Flow</h2>
                  <p className="text-xs text-slate-500">Click any logical layer to inspect disclosable specifications.</p>
                </div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-teal-700 bg-teal-50 border border-teal-200 px-2.5 py-1 rounded-full">
                  Logical Model
                </span>
              </div>

              {/* Layer 1: PATIENT */}
              <div 
                onClick={() => setSelectedNode("patient")}
                className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-4 ${
                  selectedNode === "patient" ? "bg-cyan-50/80 border-cyan-400 shadow-md ring-2 ring-cyan-100" : "bg-slate-50 border-slate-200 hover:border-slate-300"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-cyan-600 text-white font-extrabold flex items-center justify-center text-sm shadow-2xs">
                    <User className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono font-extrabold uppercase text-cyan-800">LAYER 1</div>
                    <div className="text-base font-extrabold text-slate-900">PATIENT</div>
                  </div>
                </div>
                <span className="text-xs font-semibold text-slate-500">End-User Participant</span>
              </div>

              <div className="flex justify-center text-slate-400 font-bold text-sm -my-4">↓</div>

              {/* Layer 2: AXIOCARD (NFC Interface) */}
              <div 
                onClick={() => setSelectedNode("axiocard")}
                className={`p-5 rounded-2xl border transition-all cursor-pointer space-y-2 ${
                  selectedNode === "axiocard" ? "bg-sky-50/80 border-sky-400 shadow-md ring-2 ring-sky-100" : "bg-slate-50 border-slate-200 hover:border-slate-300"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-sky-600 text-white font-extrabold flex items-center justify-center text-sm shadow-2xs">
                      <CreditCard className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs font-mono font-extrabold uppercase text-sky-800">LAYER 2</div>
                      <div className="text-base font-extrabold text-slate-900">AXIOCARD</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-sky-700 bg-white px-2.5 py-1 rounded-md border border-sky-200">NFC INTERFACE</span>
                </div>
                <p className="text-xs text-slate-600 font-medium">Physical patient card associated with AxioID; provides simple physical access point.</p>
              </div>

              <div className="flex justify-center text-slate-400 font-bold text-sm -my-4">↓</div>

              {/* Layer 3: AXIOID (Persistent Identity) */}
              <div 
                onClick={() => setSelectedNode("axioid")}
                className={`p-6 rounded-2xl border transition-all cursor-pointer space-y-3 ${
                  selectedNode === "axioid" ? "bg-teal-50/90 border-teal-500 shadow-lg ring-4 ring-teal-100" : "bg-slate-900 text-white border-slate-800 hover:border-teal-700"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-11 w-11 rounded-xl bg-teal-500 text-slate-950 font-extrabold flex items-center justify-center text-base shadow-sm">
                      <Activity className="h-6 w-6" />
                    </div>
                    <div>
                      <div className={`text-xs font-mono font-extrabold uppercase ${selectedNode === "axioid" ? "text-teal-800" : "text-teal-400"}`}>LAYER 3 — CORE IDENTITY</div>
                      <div className={`text-lg font-black tracking-tight ${selectedNode === "axioid" ? "text-slate-900" : "text-white"}`}>AXIOID</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-extrabold text-teal-800 bg-teal-100 px-3 py-1 rounded-full border border-teal-300">PERSISTENT IDENTITY</span>
                </div>
                <p className={`text-xs font-medium ${selectedNode === "axioid" ? "text-slate-700" : "text-slate-300"}`}>
                  One persistent identity intended to remain valid across participating providers in the AxioVital network.
                </p>
                <div className="text-[11px] font-mono font-bold flex flex-wrap gap-2 pt-1">
                  <span className="bg-white/80 px-2 py-0.5 rounded border border-slate-200 text-slate-800">Hospitals</span>
                  <span className="bg-white/80 px-2 py-0.5 rounded border border-slate-200 text-slate-800">Doctors</span>
                  <span className="bg-white/80 px-2 py-0.5 rounded border border-slate-200 text-slate-800">Laboratories</span>
                  <span className="bg-white/80 px-2 py-0.5 rounded border border-slate-200 text-slate-800">Radiology</span>
                  <span className="bg-white/80 px-2 py-0.5 rounded border border-slate-200 text-slate-800">Pharmacies</span>
                </div>
              </div>

              <div className="flex justify-center text-slate-400 font-bold text-sm -my-4">↓</div>

              {/* Layer 4: AUTHENTICATION & AUTHORIZATION */}
              <div 
                onClick={() => setSelectedNode("auth")}
                className={`p-5 rounded-2xl border transition-all cursor-pointer space-y-3 ${
                  selectedNode === "auth" ? "bg-purple-50/80 border-purple-400 shadow-md ring-2 ring-purple-100" : "bg-slate-50 border-slate-200 hover:border-slate-300"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-purple-600 text-white font-extrabold flex items-center justify-center text-sm shadow-2xs">
                      <Lock className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs font-mono font-extrabold uppercase text-purple-800">LAYER 4</div>
                      <div className="text-base font-extrabold text-slate-900">AUTHENTICATION & AUTHORIZATION</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-purple-700 bg-white px-2.5 py-1 rounded-md border border-purple-200">ACCESS CONTROL</span>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
                  <div className="bg-white p-3 rounded-xl border border-purple-200/70">
                    <div className="font-extrabold text-purple-900">TAP</div>
                    <div className="text-slate-600 text-[11px]">Limited emergency-oriented info</div>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-purple-200/70">
                    <div className="font-extrabold text-purple-900">TAP + PIN</div>
                    <div className="text-slate-600 text-[11px]">Full authorized medical history</div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center text-slate-400 font-bold text-sm -my-4">↓</div>

              {/* Layer 5: AXIOVITAL PLATFORM LAYER */}
              <div 
                onClick={() => setSelectedNode("axiovital")}
                className={`p-6 rounded-2xl border transition-all cursor-pointer space-y-4 ${
                  selectedNode === "axiovital" ? "bg-blue-50/80 border-blue-400 shadow-md ring-2 ring-blue-100" : "bg-slate-50 border-slate-200 hover:border-slate-300"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-blue-600 text-white font-extrabold flex items-center justify-center text-sm shadow-2xs">
                      <Building2 className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs font-mono font-extrabold uppercase text-blue-800">LAYER 5</div>
                      <div className="text-base font-extrabold text-slate-900">AXIOVITAL PLATFORM LAYER</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-blue-700 bg-white px-2.5 py-1 rounded-md border border-blue-200">APPLICATION MODULES</span>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-bold font-mono">
                  <div className="bg-white p-2 rounded-lg border border-blue-200 text-blue-900">CLINICAL WORKFLOWS</div>
                  <div className="bg-white p-2 rounded-lg border border-blue-200 text-blue-900">OPERATIONS WORKFLOWS</div>
                  <div className="bg-white p-2 rounded-lg border border-blue-200 text-blue-900">SERVICES WORKFLOWS</div>
                </div>
              </div>

              <div className="flex justify-center text-slate-400 font-bold text-sm -my-4">↓</div>

              {/* Layer 6: DOMAIN DATA */}
              <div 
                onClick={() => setSelectedNode("domains")}
                className={`p-5 rounded-2xl border transition-all cursor-pointer space-y-3 ${
                  selectedNode === "domains" ? "bg-emerald-50/80 border-emerald-400 shadow-md ring-2 ring-emerald-100" : "bg-slate-50 border-slate-200 hover:border-slate-300"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-emerald-600 text-white font-extrabold flex items-center justify-center text-sm shadow-2xs">
                      <Database className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs font-mono font-extrabold uppercase text-emerald-800">LAYER 6</div>
                      <div className="text-base font-extrabold text-slate-900">DOMAIN DATA</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-emerald-700 bg-white px-2.5 py-1 rounded-md border border-emerald-200">LOGICAL DATA MODEL</span>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-mono font-semibold text-slate-700">
                  <div className="bg-white p-1.5 rounded border border-slate-200">LABS</div>
                  <div className="bg-white p-1.5 rounded border border-slate-200">RADIOLOGY</div>
                  <div className="bg-white p-1.5 rounded border border-slate-200">PHARMACY</div>
                </div>
              </div>

              <div className="flex justify-center text-slate-400 font-bold text-sm -my-4">↓</div>

              {/* Layer 7: PARTICIPATING PROVIDERS */}
              <div 
                onClick={() => setSelectedNode("providers")}
                className={`p-5 rounded-2xl border transition-all cursor-pointer space-y-3 ${
                  selectedNode === "providers" ? "bg-teal-50/80 border-teal-400 shadow-md ring-2 ring-teal-100" : "bg-slate-50 border-slate-200 hover:border-slate-300"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-teal-700 text-white font-extrabold flex items-center justify-center text-sm shadow-2xs">
                      <Building2 className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs font-mono font-extrabold uppercase text-teal-800">LAYER 7</div>
                      <div className="text-base font-extrabold text-slate-900">PARTICIPATING PROVIDERS</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-teal-800 bg-white px-2.5 py-1 rounded-md border border-teal-200">HEALTHCARE NETWORK</span>
                </div>
                <p className="text-xs text-slate-600 font-medium">Hospitals, Doctors, Laboratories, Radiology, and Pharmacies connected across the network.</p>
              </div>

            </div>

            {/* RIGHT: INSPECTION DRAWER FOR SELECTED NODE */}
            <div className="w-full lg:w-96 shrink-0 sticky top-28 bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-6">
              {selectedNode && architectureNodes[selectedNode] ? (
                <>
                  <div className="border-b border-slate-100 pb-4 space-y-1">
                    <span className="text-[10px] font-mono font-extrabold uppercase tracking-widest text-teal-700 bg-teal-50 px-2 py-0.5 rounded">
                      {architectureNodes[selectedNode].layer}
                    </span>
                    <h3 className="text-2xl font-black text-slate-900 tracking-tight pt-1">
                      {architectureNodes[selectedNode].title}
                    </h3>
                    <div className="text-xs font-bold text-slate-500">
                      {architectureNodes[selectedNode].subtitle}
                    </div>
                  </div>

                  <p className="text-xs text-slate-700 font-medium leading-relaxed">
                    {architectureNodes[selectedNode].description}
                  </p>

                  <div className="space-y-2">
                    <div className="text-[11px] font-extrabold uppercase tracking-wider text-slate-900">Component Specifications:</div>
                    <ul className="space-y-2 text-xs text-slate-600">
                      {architectureNodes[selectedNode].details.map((item, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-200/70 font-medium">
                          <CheckCircle2 className="h-4 w-4 text-teal-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3 bg-slate-100 border border-slate-200 rounded-xl text-[11px] text-slate-600 italic">
                    <span className="font-bold text-slate-800 not-italic block mb-0.5">Disclosure Boundary:</span>
                    "{architectureNodes[selectedNode].disclosableNote}"
                  </div>
                </>
              ) : (
                <div className="text-center py-12 text-slate-400 text-xs">
                  Click any architecture layer on the left to view detailed component specifications.
                </div>
              )}
            </div>

          </div>

        </div>
      </section>

      {/* INTERACTIVE PATIENT DATA FLOW (CROSS-HOSPITAL REFERRAL EXAMPLE) */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
              Interactive Data Flow Simulation
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Cross-Hospital Referral Data Flow
            </h2>
            <p className="text-slate-600 text-sm">
              Demonstrating the clear conceptual distinction between Identity, Authentication, Authorization, and Medical Information.
            </p>
          </div>

          {/* Color Key Legend */}
          <div className="flex flex-wrap justify-center gap-4 text-xs font-mono font-bold">
            <span className="inline-flex items-center gap-1.5 bg-cyan-50 text-cyan-800 px-3 py-1 rounded-full border border-cyan-200">
              <span className="h-2 w-2 rounded-full bg-cyan-600" /> IDENTITY
            </span>
            <span className="inline-flex items-center gap-1.5 bg-purple-50 text-purple-800 px-3 py-1 rounded-full border border-purple-200">
              <span className="h-2 w-2 rounded-full bg-purple-600" /> AUTHENTICATION
            </span>
            <span className="inline-flex items-center gap-1.5 bg-teal-50 text-teal-800 px-3 py-1 rounded-full border border-teal-200">
              <span className="h-2 w-2 rounded-full bg-teal-600" /> AUTHORIZATION
            </span>
            <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-800 px-3 py-1 rounded-full border border-blue-200">
              <span className="h-2 w-2 rounded-full bg-blue-600" /> MEDICAL INFORMATION
            </span>
          </div>

          {/* Step Sequence Slider / Tabs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-2">
            {referralSteps.map((s, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between space-y-2 ${
                  activeStep === idx 
                    ? "bg-slate-900 text-white border-slate-900 shadow-md ring-2 ring-slate-400 scale-105" 
                    : "bg-white border-slate-200 hover:border-slate-300"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono font-extrabold text-xs text-teal-400">{s.step}</span>
                  <span className={`text-[8px] font-bold px-1.5 py-0.5 rounded border uppercase ${s.badge}`}>
                    {s.layer.split(" ")[0]}
                  </span>
                </div>
                <div className={`text-xs font-bold ${activeStep === idx ? "text-white" : "text-slate-900"}`}>{s.title}</div>
              </button>
            ))}
          </div>

          {/* Step Detail Display Box */}
          <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 space-y-4 max-w-3xl mx-auto shadow-lg">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-3">
                <span className="h-8 w-8 rounded-lg bg-teal-500 text-slate-950 font-extrabold text-xs flex items-center justify-center">
                  {referralSteps[activeStep].step}
                </span>
                <h3 className="text-xl font-bold">{referralSteps[activeStep].title}</h3>
              </div>
              <span className={`text-xs font-mono font-extrabold px-3 py-1 rounded-full border ${referralSteps[activeStep].badge}`}>
                LAYER: {referralSteps[activeStep].layer}
              </span>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed font-medium">
              {referralSteps[activeStep].desc}
            </p>

            <div className="flex justify-between items-center pt-2">
              <button 
                disabled={activeStep === 0}
                onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
                className="text-xs font-bold text-slate-400 hover:text-white disabled:opacity-30 cursor-pointer flex items-center gap-1"
              >
                ← Previous Step
              </button>
              <button 
                disabled={activeStep === referralSteps.length - 1}
                onClick={() => setActiveStep(prev => Math.min(referralSteps.length - 1, prev + 1))}
                className="text-xs font-bold text-teal-400 hover:text-teal-300 disabled:opacity-30 cursor-pointer flex items-center gap-1"
              >
                Next Step →
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
