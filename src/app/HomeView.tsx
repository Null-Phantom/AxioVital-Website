"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronRight, Sparkles, CheckCircle2, ShieldCheck, Database, 
  Terminal, Layers, Cpu, ArrowRight, Copy, Check, Server, Lock, Globe, Zap, FileCode, Users, Activity,
  Radio, CreditCard, Shield, BarChart3, Smartphone, Key, LockOpen, RefreshCw, AlertCircle,
  Stethoscope, Building2, Microscope, Pill, DollarSign, HeartPulse, User, Clock, Search, FileText, Wifi
} from "lucide-react";
import DnaCanvas from "./DnaCanvas";
import { siteConfig } from "./config";

export default function HomeView() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [activeEcosystemEntity, setActiveEcosystemEntity] = useState<string>("hospitals");
  const [activeCodeLang, setActiveCodeLang] = useState<string>("typescript");
  const [copiedCode, setCopiedCode] = useState<boolean>(false);

  // Two-Tier Security Demo State
  const [nfcState, setNfcState] = useState<"tapped" | "authenticated">("tapped");
  const [pinInput, setPinInput] = useState("");
  const [pinError, setPinError] = useState(false);

  const handlePinSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (pinInput === "4821" || pinInput.length === 4) {
      setNfcState("authenticated");
      setPinError(false);
    } else {
      setPinError(true);
    }
  };

  const resetNfcDemo = () => {
    setNfcState("tapped");
    setPinInput("");
    setPinError(false);
  };

  // Section 3 Live Authentication & Ecosystem Animation Sequence State
  const [sec3Step, setSec3Step] = useState<"idle" | "scanning" | "verifying" | "verified">("idle");
  const [sec3EcoActive, setSec3EcoActive] = useState<number>(-1);
  const [sec3PulseNode, setSec3PulseNode] = useState<number>(-1);
  const [cardTilt, setCardTilt] = useState<{ rx: number; ry: number }>({ rx: 0, ry: 0 });
  const [hoveredEco, setHoveredEco] = useState<number | null>(null);
  const [hasTriggeredSec3, setHasTriggeredSec3] = useState(false);

  // Section 5 Platform Architecture State
  const [activeSec5Layer, setActiveSec5Layer] = useState<number>(0);
  const [hoveredSec5Layer, setHoveredSec5Layer] = useState<number | null>(null);
  const [fhirTab, setFhirTab] = useState<"visual" | "json">("visual");
  const [aiDocTab, setAiDocTab] = useState<"summary" | "soap" | "icd">("summary");

  const triggerSec3Sequence = () => {
    if (hasTriggeredSec3) return;
    setHasTriggeredSec3(true);

    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setSec3Step("verified");
      setSec3EcoActive(-1);
      return;
    }

    // Sequence Story:
    // 1. NFC Indicator Activates & Scan Ripple (300ms)
    setTimeout(() => setSec3Step("scanning"), 300);
    // 2. Data Packet Transmission (900ms)
    setTimeout(() => setSec3Step("verifying"), 900);
    // 3. Axio-ID Verified (1600ms)
    setTimeout(() => setSec3Step("verified"), 1600);

    // 4. Ecosystem Connections Activate Sequentially (2000ms - 2800ms)
    setTimeout(() => setSec3EcoActive(0), 2000);
    setTimeout(() => setSec3EcoActive(1), 2200);
    setTimeout(() => setSec3EcoActive(2), 2400);
    setTimeout(() => setSec3EcoActive(3), 2600);
    setTimeout(() => setSec3EcoActive(4), 2800);
    setTimeout(() => setSec3EcoActive(-1), 3200);
  };

  useEffect(() => {
    if (!hasTriggeredSec3 || sec3Step !== "verified") return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Asynchronous continuous data pulses to ecosystem nodes
    const interval = setInterval(() => {
      setSec3PulseNode((prev) => (prev + 1) % 5);
      setTimeout(() => setSec3PulseNode(-1), 1200);
    }, 4500);

    return () => clearInterval(interval);
  }, [hasTriggeredSec3, sec3Step]);

  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (typeof window !== "undefined" && window.matchMedia("(hover: none)").matches) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setCardTilt({ rx: -y * 8, ry: x * 8 });
  };

  const handleCardMouseLeave = () => {
    setCardTilt({ rx: 0, ry: 0 });
  };

  const codeSnippets: Record<string, string> = {
    typescript: `import { AxioVitalMedicalApi } from "@axiovital/sdk";

const client = new AxioVitalMedicalApi({
  apiKey: process.env.AXIOVITAL_API_KEY!,
  environment: "production",
});

// Query FHIR R4 clinical resources for an authenticated AxioID
const records = await client.medical.getPatientRecords({
  facilityId: "fac_884931",
  patientId: "axioid_994821",
  conversionFormat: "fhir-r4",
});

console.log(\`Retrieved \${records.resources.length} FHIR clinical resources.\`);`,
    python: `from axiovital_sdk import AxioVitalMedicalApi

client = AxioVitalMedicalApi(
    api_key="axiovital_live_894821948",
    environment="production"
)

# Fetch consolidated patient clinical history
response = client.medical.get_patient_records(
    facility_id="fac_884931",
    patient_id="axioid_994821",
    conversion_format="fhir-r4"
)

print(f"Consolidated FHIR resources: {len(response.resources)}")`,
    curl: `curl -X POST https://api.axiovital.quantaforze.com/v1/medical/patient/records \\
  -H "Authorization: Bearer axiovital_live_894821948" \\
  -H "Content-Type: application/json" \\
  -d '{
    "facilityId": "fac_884931",
    "patientId": "axioid_994821",
    "conversionFormat": "fhir-r4"
  }'`
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippets[activeCodeLang]);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.35, ease: "easeOut" as const }
  };

  // Ecosystem entity definitions
  const ecosystemEntities: Record<string, { title: string; subtitle: string; desc: string; icon: any; color: string; metrics: string }> = {
    patients: {
      title: "Patients & Families",
      subtitle: "One Persistent Identity Across All Care Settings",
      desc: "Patients carry their AxioCard credential to skip clinic registration queues, present emergency data instantly, and maintain control over record access.",
      icon: User,
      color: "text-blue-600 bg-blue-50 border-blue-200",
      metrics: "Instant Check-In • Zero Paperwork"
    },
    doctors: {
      title: "Physicians & Care Teams",
      subtitle: "Instant Patient Context Without Record Reconstruction",
      desc: "Doctors access complete medical histories, previous diagnoses, lab trends, and active prescriptions directly within a clean, power-user interface.",
      icon: Stethoscope,
      color: "text-cyan-600 bg-cyan-50 border-cyan-200",
      metrics: "SOAP Auto-Notes • FHIR Record Synthesis"
    },
    hospitals: {
      title: "Hospitals & Health Networks",
      subtitle: "Departmental Workflow Integration & Capacity Telemetry",
      desc: "Unify admissions, bed tracking, nursing handoffs, and inter-departmental orders into one dense operational dashboard.",
      icon: Building2,
      color: "text-teal-600 bg-teal-50 border-teal-200",
      metrics: "Multi-Facility Connectivity • Bed Telemetry"
    },
    clinics: {
      title: "Outpatient Clinics & Practices",
      subtitle: "Queue-Free Check-In & Instant Prescriptions",
      desc: "Kiosk check-in via NFC tap eliminates waiting room paperwork and streamlines physician appointment schedules.",
      icon: Clock,
      color: "text-indigo-600 bg-indigo-50 border-indigo-200",
      metrics: "Kiosk Integration • Refill Automation"
    },
    labs: {
      title: "Laboratories & Radiology",
      subtitle: "Automated Specimen & DICOM Image Feeds",
      desc: "Pathology results, blood panels, and DICOM imaging connect directly to the patient's AxioID for immediate physician review.",
      icon: Microscope,
      color: "text-purple-600 bg-purple-50 border-purple-200",
      metrics: "DICOM & HL7 v2 Native Feeds"
    },
    pharmacies: {
      title: "Pharmacies & Fulfillment",
      subtitle: "Real-Time Dispensing & Allergy Cross-Checks",
      desc: "Pharmacists receive digital prescriptions directly from care encounters, with automated cross-checking against known patient allergies.",
      icon: Pill,
      color: "text-pink-600 bg-pink-50 border-pink-200",
      metrics: "RxNorm Refill Feeds • Allergy Alerts"
    },
    insurance: {
      title: "Insurance & Payers",
      subtitle: "Transparent Charge Ledgers & Coverage Verification",
      desc: "Real-time eligibility checks and structured charge ledgers reduce billing friction and claim rejection rates.",
      icon: DollarSign,
      color: "text-emerald-600 bg-emerald-50 border-emerald-200",
      metrics: "Instant Eligibility • Automated Coding"
    },
    devices: {
      title: "Medical Devices & Telemetry",
      subtitle: "Live Vital Signs Monitoring & IoT Telemetry Stream",
      desc: "Continuous vital signs streams from bedside monitors and wearable telemetry devices feed straight into patient clinical profiles.",
      icon: HeartPulse,
      color: "text-amber-600 bg-amber-50 border-amber-200",
      metrics: "Real-Time Telemetry • Threshold Alerts"
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-500 selection:text-white antialiased">
      
      {/* 1. HERO SECTION — CONNECTIVE HEALTHCARE INFRASTRUCTURE */}
      <section className="bg-[#fcfdfd] pt-8 pb-20 sm:pt-14 sm:pb-28 lg:pt-16 lg:pb-32 relative overflow-hidden border-b border-slate-200/90">
        
        {/* Clean, Bright, Airy Soft Blue-White Healthcare Atmosphere Background Layer */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none" aria-hidden="true">
          
          {/* Base Off-White Light Background */}
          <div className="absolute inset-0 bg-[#fbfcfd]" />

          {/* Cohesive Soft Blue Atmospheric Lighting (Spanning Entire Hero) */}
          {/* Center & Right Pale Blue Atmospheric Radiance */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_65%_48%,rgba(219,234,254,0.45)_0%,rgba(224,242,254,0.22)_45%,rgba(255,255,255,0)_80%)]" />

          {/* Left Side Cool-Blue Ambient Tint */}
          <div className="absolute top-0 left-0 w-[55%] h-full bg-[radial-gradient(ellipse_at_20%_35%,rgba(239,246,255,0.6)_0%,rgba(240,249,255,0.2)_50%,transparent_85%)]" />

          {/* Extremely Faint Engineering / Medical Blueprint Grid (80px Spacing, ~2% Opacity) */}
          <div 
            className="absolute inset-0 opacity-[0.45]"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(37, 99, 235, 0.025) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(37, 99, 235, 0.025) 1px, transparent 1px)
              `,
              backgroundSize: '80px 80px'
            }}
          />

          {/* Sparse Technical Coordinate Dots */}
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(37, 99, 235, 0.06) 1px, transparent 0)`,
              backgroundSize: '80px 80px'
            }}
          />

          {/* Barely Visible Micro-Grain for Tactile Depth */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.015] mix-blend-multiply">
            <filter id="hero-clean-noise">
              <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
              <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0" />
            </filter>
            <rect width="100%" height="100%" filter="url(#hero-clean-noise)" />
          </svg>

          {/* Handful of Barely Visible Curved Arcs & Tiny Connection Points */}
          <svg className="absolute inset-0 w-full h-full opacity-35">
            {/* Soft Curved Blueprint Arc behind Right Section */}
            <path 
              d="M 45% -10% A 450 450 0 0 1 95% 85%" 
              fill="none" 
              stroke="rgba(37, 99, 235, 0.06)" 
              strokeWidth="1" 
              strokeDasharray="4 8" 
            />
            <path 
              d="M 50% 110% A 500 500 0 0 0 98% 20%" 
              fill="none" 
              stroke="rgba(13, 148, 136, 0.05)" 
              strokeWidth="1" 
            />

            {/* Tiny Background Atmosphere Points */}
            <circle cx="22%" cy="18%" r="2" fill="rgba(37, 99, 235, 0.12)" />
            <circle cx="78%" cy="15%" r="2" fill="rgba(37, 99, 235, 0.12)" />
            <circle cx="85%" cy="75%" r="2" fill="rgba(13, 148, 136, 0.12)" />
            <circle cx="15%" cy="78%" r="2" fill="rgba(37, 99, 235, 0.1)" />
          </svg>

          {/* Soft Edge Fade Back Toward Pure White */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(255,255,255,0.4)_85%,rgba(255,255,255,0.85)_100%)]" />
        </div>

        {/* Hero Main Content Area */}
        <div className="mx-auto max-w-[1440px] w-full px-4 sm:px-6 lg:px-8 relative z-10 pt-20 sm:pt-28 lg:pt-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left 5.5 Columns: Headline, Subhead & CTAs */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* 1. Eyebrow */}
              <motion.div 
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-700 bg-blue-50 border border-blue-200/90 px-3.5 py-1.5 rounded-full shadow-2xs"
              >
                <Sparkles className="h-3.5 w-3.5 text-blue-600" />
                <span>THE CONNECTED HEALTHCARE INFRASTRUCTURE</span>
              </motion.div>

              {/* 2. Large Headline */}
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                className="font-outfit text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.06]"
              >
                <span className="text-slate-900">Healthcare,</span><br />
                <span className="text-blue-600">Connected.</span>
              </motion.h1>

              {/* 3. Concise Supporting Description */}
              <motion.p 
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
                className="text-slate-600 text-base sm:text-lg lg:text-[1.125rem] leading-relaxed max-w-xl font-normal"
              >
                AxioVital connects patients, providers, medical records and healthcare services through a secure digital healthcare infrastructure.
              </motion.p>

              {/* 4. Action CTAs */}
              <motion.div 
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
                className="flex flex-wrap items-center gap-4 pt-2"
              >
                <motion.a 
                  href="#ecosystem"
                  whileHover={{ y: -2 }}
                  className="px-6 py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm shadow-md transition-all flex items-center gap-2 group cursor-pointer"
                >
                  <span>Explore AxioVital</span>
                  <ChevronRight className="h-4 w-4 text-slate-400 group-hover:translate-x-1.5 transition-transform duration-200" />
                </motion.a>

                <motion.button 
                  onClick={() => setDemoModalOpen(true)}
                  whileHover={{ y: -2 }}
                  className="px-6 py-3.5 rounded-full bg-white border border-slate-300 hover:bg-slate-50 text-slate-900 font-semibold text-sm transition-all shadow-2xs cursor-pointer flex items-center gap-2"
                >
                  <Activity className="h-4 w-4 text-blue-600" />
                  <span>See How It Works</span>
                </motion.button>
              </motion.div>

            </div>

            {/* Right 6.5 Columns: Custom Connective Healthcare Infrastructure Network Visualization */}
            <div className="lg:col-span-7 relative">
              
              {/* DESKTOP VISUALIZATION (Hidden on mobile, block on lg) */}
              <div className="hidden lg:block relative w-full h-[580px]">
                
                {/* SVG Connecting Pathways & Animated Data Pulses */}
                <svg className="absolute inset-0 w-full h-full overflow-visible z-0 pointer-events-none">
                  <defs>
                    <linearGradient id="net-line-1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="rgba(37, 99, 235, 0.3)" />
                      <stop offset="100%" stopColor="rgba(13, 148, 136, 0.4)" />
                    </linearGradient>
                    <linearGradient id="net-line-2" x1="100%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="rgba(147, 51, 234, 0.25)" />
                      <stop offset="100%" stopColor="rgba(37, 99, 235, 0.35)" />
                    </linearGradient>
                  </defs>

                  {/* Concentric Infrastructure Orbit Rings around Center */}
                  <circle cx="50%" cy="50%" r="140" fill="none" stroke="rgba(37, 99, 235, 0.08)" strokeWidth="1.5" strokeDasharray="6 6" />
                  <circle cx="50%" cy="50%" r="240" fill="none" stroke="rgba(148, 163, 184, 0.06)" strokeWidth="1" strokeDasharray="4 8" />

                  {/* Connection Lines from Center (AxioVital) to Outer Healthcare Nodes with Animated Draw-in */}
                  <motion.path 
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
                    id="path-patient" d="M 50% 50% L 16% 22%" stroke="url(#net-line-1)" strokeWidth="1.5" 
                  />
                  <motion.path 
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.45 }}
                    id="path-doctor" d="M 50% 50% L 84% 18%" stroke="url(#net-line-1)" strokeWidth="1.5" 
                  />
                  <motion.path 
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
                    id="path-hospital" d="M 50% 50% L 88% 52%" stroke="url(#net-line-1)" strokeWidth="1.5" 
                  />
                  <motion.path 
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.55 }}
                    id="path-lab" d="M 50% 50% L 78% 84%" stroke="url(#net-line-1)" strokeWidth="1.5" 
                  />
                  <motion.path 
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
                    id="path-pharmacy" d="M 50% 50% L 48% 88%" stroke="url(#net-line-1)" strokeWidth="1.5" 
                  />
                  <motion.path 
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.65 }}
                    id="path-insurance" d="M 50% 50% L 20% 80%" stroke="url(#net-line-2)" strokeWidth="1.5" 
                  />
                  <motion.path 
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.7 }}
                    id="path-device" d="M 50% 50% L 12% 52%" stroke="url(#net-line-2)" strokeWidth="1.5" 
                  />

                  {/* Axio-ID Identity Vector Link */}
                  <motion.path 
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
                    d="M 16% 22% C 26% 28%, 32% 38%, 50% 50%" stroke="rgba(13, 148, 136, 0.5)" strokeWidth="2" strokeDasharray="6 4" 
                  />

                  {/* CONTINUOUS SUBTLE DATA PULSES TRAVELLING ALONG PATHS */}
                  {/* Pulse 1: Patient -> AxioVital */}
                  <motion.circle 
                    r="3.5" 
                    fill="#2563eb"
                    animate={{ cx: ["16%", "50%"], cy: ["22%", "50%"], opacity: [0, 0.9, 0] }}
                    transition={{ duration: 4.2, repeat: Infinity, ease: "linear", delay: 1 }}
                  />

                  {/* Pulse 2: AxioVital -> Doctor */}
                  <motion.circle 
                    r="3.5" 
                    fill="#0891b2"
                    animate={{ cx: ["50%", "84%"], cy: ["50%", "18%"], opacity: [0, 0.9, 0] }}
                    transition={{ duration: 3.8, repeat: Infinity, ease: "linear", delay: 1.5 }}
                  />

                  {/* Pulse 3: AxioVital -> Hospital */}
                  <motion.circle 
                    r="3.5" 
                    fill="#0d9488"
                    animate={{ cx: ["50%", "88%"], cy: ["50%", "52%"], opacity: [0, 0.9, 0] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "linear", delay: 2 }}
                  />

                  {/* Pulse 4: AxioVital -> Lab */}
                  <motion.circle 
                    r="3.5" 
                    fill="#9333ea"
                    animate={{ cx: ["50%", "78%"], cy: ["50%", "84%"], opacity: [0, 0.9, 0] }}
                    transition={{ duration: 4.8, repeat: Infinity, ease: "linear", delay: 2.5 }}
                  />

                  {/* Pulse 5: AxioVital -> Medical Device */}
                  <motion.circle 
                    r="3.5" 
                    fill="#d97706"
                    animate={{ cx: ["50%", "12%"], cy: ["50%", "52%"], opacity: [0, 0.9, 0] }}
                    transition={{ duration: 4.1, repeat: Infinity, ease: "linear", delay: 1.8 }}
                  />
                </svg>

                {/* --- 1. CENTER CORE NODE: AXIOVITAL --- */}
                <motion.div 
                  initial={{ scale: 0.88, opacity: 0 }}
                  animate={{ scale: [1, 1.012, 1], opacity: 1 }}
                  transition={{ 
                    opacity: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.45 },
                    scale: { duration: 3.8, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
                >
                  <div className="relative group cursor-pointer">
                    {/* Glowing Soft Ripple Aura */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-teal-500/20 to-indigo-500/20 rounded-3xl blur-lg group-hover:opacity-100 opacity-70 transition-opacity duration-300" />
                    
                    <div className="bg-slate-900 border border-slate-700/80 text-white rounded-2xl p-5 shadow-2xl w-60 text-center relative z-10">
                      <div className="flex items-center justify-center gap-2 mb-1.5">
                        <div className="h-7 w-7 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                          <Activity className="h-4 w-4" />
                        </div>
                        <span className="font-outfit text-lg font-extrabold tracking-wide">AXIOVITAL</span>
                      </div>
                      <div className="text-[11px] font-mono text-slate-300 font-medium">
                        Secure Healthcare Infrastructure
                      </div>
                      <div className="mt-3 pt-2.5 border-t border-slate-800 flex items-center justify-between text-[10px] font-mono">
                        <span className="text-emerald-400 flex items-center gap-1">
                          <motion.span 
                            animate={{ scale: [1, 1.25, 1], opacity: [0.7, 1, 0.7] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="h-1.5 w-1.5 rounded-full bg-emerald-400" 
                          />
                          ONLINE
                        </span>
                        <span className="text-slate-400">FHIR R4 • HL7 v2</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* --- 2. AXIO-ID IDENTITY TOKEN NODE (Positioned directly between Patient and AxioVital) --- */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: [1, 1.025, 1] }}
                  transition={{ 
                    opacity: { duration: 0.5, delay: 0.55 },
                    scale: { duration: 4.2, repeat: Infinity, ease: "easeInOut" }
                  }}
                  whileHover={{ scale: 1.05 }}
                  className="absolute top-[34%] left-[28%] -translate-x-1/2 -translate-y-1/2 z-25 cursor-pointer"
                >
                  <div className="bg-teal-50 border border-teal-300 text-teal-900 rounded-xl px-3 py-2 shadow-md flex items-center gap-2 hover:border-teal-400 transition-colors">
                    <div className="h-6 w-6 rounded-lg bg-teal-600 text-white flex items-center justify-center shrink-0">
                      <CreditCard className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold font-mono text-slate-900 leading-tight">AXIO-ID</div>
                      <motion.div 
                        animate={{ opacity: [0.75, 1, 0.75] }}
                        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                        className="text-[10px] text-teal-700 font-semibold leading-tight"
                      >
                        Verified Credential
                      </motion.div>
                    </div>
                  </div>
                </motion.div>

                {/* --- 3. SURROUNDING HEALTHCARE NODES --- */}
                
                {/* Node 1: PATIENT (Top Left) */}
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: [0, -3, 0] }}
                  transition={{ 
                    opacity: { duration: 0.5, delay: 0.55 },
                    y: { duration: 6.5, repeat: Infinity, ease: "easeInOut" }
                  }}
                  whileHover={{ scale: 1.03, y: -2 }}
                  className="absolute top-[18%] left-[14%] -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer"
                >
                  <div className="bg-white border border-blue-200/90 rounded-2xl p-3 shadow-md flex items-center gap-2.5 hover:border-blue-300 hover:shadow-lg transition-all group">
                    <div className="h-8 w-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                      <User className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">PATIENT</div>
                      <div className="text-[10px] text-slate-500 font-mono">Individual & Family</div>
                    </div>
                  </div>

                  {/* UI Fragment 1: Axio-ID Digital Identity Status */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0.85, 1, 0.85] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.95 }}
                    className="mt-2 bg-white/95 border border-slate-200 rounded-lg p-2 shadow-xs text-[10px] font-mono space-y-0.5 w-44"
                  >
                    <div className="flex items-center justify-between text-slate-700">
                      <span>Token ID</span>
                      <span className="text-blue-600 font-bold">AXIO-8849</span>
                    </div>
                    <div className="text-emerald-600 font-semibold flex items-center gap-1">
                      <CheckCircle2 className="h-3 w-3" /> NFC Tap Authenticated
                    </div>
                  </motion.div>
                </motion.div>

                {/* Node 2: DOCTOR (Top Right) */}
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: [0, -4, 0] }}
                  transition={{ 
                    opacity: { duration: 0.5, delay: 0.63 },
                    y: { duration: 5.8, repeat: Infinity, ease: "easeInOut" }
                  }}
                  whileHover={{ scale: 1.03, y: -2 }}
                  className="absolute top-[14%] left-[84%] -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer"
                >
                  <div className="bg-white border border-cyan-200/90 rounded-2xl p-3 shadow-md flex items-center gap-2.5 hover:border-cyan-300 hover:shadow-lg transition-all">
                    <div className="h-8 w-8 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center font-bold">
                      <Stethoscope className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">DOCTOR</div>
                      <div className="text-[10px] text-slate-500 font-mono">Connected Provider</div>
                    </div>
                  </div>

                  {/* UI Fragment 2: Provider Clinical Encounter */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0.85, 1, 0.85] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="mt-2 bg-white/95 border border-slate-200 rounded-lg p-2 shadow-xs text-[10px] font-mono space-y-0.5 w-44"
                  >
                    <div className="text-slate-700 font-bold">Clinical Encounter</div>
                    <div className="text-slate-500">12 Reports • 3 Prescriptions</div>
                  </motion.div>
                </motion.div>

                {/* Node 3: HOSPITAL (Right Center) */}
                <motion.div 
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: [0, 3, 0] }}
                  transition={{ 
                    opacity: { duration: 0.5, delay: 0.71 },
                    x: { duration: 7.2, repeat: Infinity, ease: "easeInOut" }
                  }}
                  whileHover={{ scale: 1.03 }}
                  className="absolute top-[50%] left-[88%] -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer"
                >
                  <div className="bg-white border border-teal-200/90 rounded-2xl p-3 shadow-md flex items-center gap-2.5 hover:border-teal-300 hover:shadow-lg transition-all">
                    <div className="h-8 w-8 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center font-bold">
                      <Building2 className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">HOSPITAL</div>
                      <div className="text-[10px] text-slate-500 font-mono">Health System OS</div>
                    </div>
                  </div>
                </motion.div>

                {/* Node 4: LAB (Bottom Right) */}
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: [0, 3, 0] }}
                  transition={{ 
                    opacity: { duration: 0.5, delay: 0.79 },
                    y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                  }}
                  whileHover={{ scale: 1.03 }}
                  className="absolute top-[82%] left-[78%] -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer"
                >
                  <div className="bg-white border border-purple-200/90 rounded-2xl p-3 shadow-md flex items-center gap-2.5 hover:border-purple-300 hover:shadow-lg transition-all">
                    <div className="h-8 w-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
                      <Microscope className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">LAB</div>
                      <div className="text-[10px] text-slate-500 font-mono">DICOM & Lab Feed</div>
                    </div>
                  </div>
                </motion.div>

                {/* Node 5: PHARMACY (Bottom Center) */}
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, x: [0, -2, 0], y: [0, 2, 0] }}
                  transition={{ 
                    opacity: { duration: 0.5, delay: 0.85 },
                    x: { duration: 8.2, repeat: Infinity, ease: "easeInOut" },
                    y: { duration: 8.2, repeat: Infinity, ease: "easeInOut" }
                  }}
                  whileHover={{ scale: 1.03 }}
                  className="absolute top-[86%] left-[48%] -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer"
                >
                  <div className="bg-white border border-pink-200/90 rounded-2xl p-3 shadow-md flex items-center gap-2.5 hover:border-pink-300 hover:shadow-lg transition-all">
                    <div className="h-8 w-8 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center font-bold">
                      <Pill className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">PHARMACY</div>
                      <div className="text-[10px] text-slate-500 font-mono">Rx Norm Fulfillment</div>
                    </div>
                  </div>
                </motion.div>

                {/* Node 6: INSURANCE (Bottom Left) */}
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: [0, -3, 0] }}
                  transition={{ 
                    opacity: { duration: 0.5, delay: 0.91 },
                    y: { duration: 6.8, repeat: Infinity, ease: "easeInOut" }
                  }}
                  whileHover={{ scale: 1.03 }}
                  className="absolute top-[78%] left-[20%] -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer"
                >
                  <div className="bg-white border border-emerald-200/90 rounded-2xl p-3 shadow-md flex items-center gap-2.5 hover:border-emerald-300 hover:shadow-lg transition-all">
                    <div className="h-8 w-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                      <DollarSign className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">INSURANCE</div>
                      <div className="text-[10px] text-slate-500 font-mono">Coverage & Ledger</div>
                    </div>
                  </div>
                </motion.div>

                {/* Node 7: MEDICAL DEVICE (Left Center) */}
                <motion.div 
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: [0, -3, 0] }}
                  transition={{ 
                    opacity: { duration: 0.5, delay: 0.97 },
                    x: { duration: 7.5, repeat: Infinity, ease: "easeInOut" }
                  }}
                  whileHover={{ scale: 1.03 }}
                  className="absolute top-[50%] left-[12%] -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer"
                >
                  <div className="bg-white border border-amber-200/90 rounded-2xl p-3 shadow-md flex items-center gap-2.5 hover:border-amber-300 hover:shadow-lg transition-all">
                    <div className="h-8 w-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                      <HeartPulse className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">MEDICAL DEVICE</div>
                      <div className="text-[10px] text-slate-500 font-mono">IoT Telemetry</div>
                    </div>
                  </div>

                  {/* UI Fragment 3: Telemetry Stream Preview */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0.75, 1, 0.75] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.1 }}
                    className="mt-2 bg-white/95 border border-slate-200 rounded-lg p-2 shadow-xs text-[10px] font-mono space-y-0.5 w-44"
                  >
                    <div className="text-slate-700 font-bold">Telemetry Stream</div>
                    <div className="text-amber-600 font-medium">Pulse 72 BPM • SpO2 99%</div>
                  </motion.div>
                </motion.div>

              </div>

              {/* MOBILE / TABLET VISUALIZATION (Dedicated Vertical Infrastructure Stack) */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="lg:hidden bg-white/90 border border-slate-200 rounded-3xl p-6 shadow-xl space-y-5"
              >
                <div className="text-center font-mono text-xs font-bold uppercase tracking-wider text-slate-500 border-b border-slate-200 pb-3">
                  AxioVital Connective Infrastructure Flow
                </div>

                <div className="space-y-3 font-mono text-xs">
                  {/* Step 1: PATIENT */}
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <User className="h-4 w-4 text-blue-600" />
                      <span className="font-bold text-slate-900 font-sans">PATIENT</span>
                    </div>
                    <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">USER</span>
                  </div>

                  <div className="flex justify-center text-blue-500">
                    <ArrowRight className="h-4 w-4 rotate-90" />
                  </div>

                  {/* Step 2: AXIO-ID */}
                  <div className="bg-teal-50 border border-teal-200 rounded-xl p-3 flex items-center justify-between text-teal-900">
                    <div className="flex items-center gap-2.5">
                      <CreditCard className="h-4 w-4 text-teal-600" />
                      <span className="font-bold font-sans">AXIO-ID</span>
                    </div>
                    <span className="text-[10px] font-bold text-teal-800 bg-teal-100 px-2 py-0.5 rounded">IDENTITY TOKEN</span>
                  </div>

                  <div className="flex justify-center text-teal-500">
                    <ArrowRight className="h-4 w-4 rotate-90" />
                  </div>

                  {/* Step 3: AXIOVITAL CORE */}
                  <div className="bg-slate-900 text-white rounded-xl p-4 space-y-2.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 font-outfit font-extrabold text-sm">
                        <Activity className="h-4 w-4 text-sky-400" /> AXIOVITAL CORE
                      </div>
                      <span className="text-[10px] text-emerald-400 font-mono">ONLINE</span>
                    </div>
                    <div className="grid grid-cols-3 gap-1.5 text-[10px] text-center font-sans text-slate-200">
                      <div className="bg-slate-800 p-1.5 rounded">HOSPITAL</div>
                      <div className="bg-slate-800 p-1.5 rounded">DOCTOR</div>
                      <div className="bg-slate-800 p-1.5 rounded">LAB</div>
                      <div className="bg-slate-800 p-1.5 rounded">PHARMACY</div>
                      <div className="bg-slate-800 p-1.5 rounded">INSURANCE</div>
                      <div className="bg-slate-800 p-1.5 rounded">DEVICE</div>
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>

          </div>
        </div>
      </section>

      {/* 2. STANDARDS BADGE ROW */}
      <section className="bg-slate-50 border-b border-slate-200 py-8 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1440px]">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-500 mb-5">
            Built on standard interoperability protocols healthcare runs on
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 shadow-2xs text-slate-800 font-bold text-xs">
              <Database className="h-4 w-4 text-blue-600" /> FHIR R4 Native
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 shadow-2xs text-slate-800 font-bold text-xs">
              <Zap className="h-4 w-4 text-indigo-600" /> HL7 v2 Messaging
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 shadow-2xs text-slate-800 font-bold text-xs">
              <Radio className="h-4 w-4 text-purple-600" /> DICOM Imaging
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 shadow-2xs text-slate-800 font-bold text-xs">
              <ShieldCheck className="h-4 w-4 text-emerald-600" /> HIPAA BAA Architecture
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 shadow-2xs text-slate-800 font-bold text-xs">
              <Lock className="h-4 w-4 text-amber-600" /> AES-256 Encryption
            </div>
          </div>
        </div>
      </section>

      {/* 3. PERSISTENT PATIENT IDENTITY / AXIOCARD PRODUCT SHOWCASE SECTION */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-[#fbfcfd] via-white to-[#f8fafc] border-b border-slate-200/80 overflow-hidden relative">
        
        {/* Subtle Healthcare Environment Background */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none" aria-hidden="true">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(219,234,254,0.35)_0%,rgba(224,242,254,0.15)_50%,transparent_75%)]" />
          
          {/* Subtle Pale Blue/Teal Glow around Authentication Path */}
          <div className={`absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.22)_0%,rgba(37,99,235,0.08)_50%,transparent_75%)] pointer-events-none transition-opacity duration-700 ${sec3Step !== "idle" ? "opacity-100" : "opacity-30"}`} />

          {/* Sparse Technical Dots */}
          <div 
            className="absolute inset-0 opacity-25"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(37, 99, 235, 0.08) 1px, transparent 0)`,
              backgroundSize: '80px 80px'
            }}
          />

          {/* Faint Vector Arcs */}
          <svg className="absolute inset-0 w-full h-full opacity-30">
            <path d="M 10% 80% Q 50% 10% 90% 80%" fill="none" stroke="rgba(37, 99, 235, 0.05)" strokeWidth="1.5" strokeDasharray="4 8" />
          </svg>
        </div>

        <motion.div 
          onViewportEnter={triggerSec3Sequence}
          viewport={{ once: true, amount: 0.25 }}
          className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 space-y-16 relative z-10"
        >
          
          {/* Centered Editorial Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl mx-auto text-center space-y-4"
          >
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-teal-800 bg-teal-50 border border-teal-200/90 px-3.5 py-1.5 rounded-full shadow-2xs">
              <CreditCard className="h-3.5 w-3.5 text-teal-600" />
              <span>PERSISTENT PATIENT IDENTITY</span>
            </div>
            
            <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">
              <span className="text-slate-900">One Identity.</span><br />
              <span className="text-blue-600">Every Healthcare Interaction.</span>
            </h2>

            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
              AxioCard provides a physical NFC credential linked to the patient's persistent AxioID, enabling instant, secure access across connected healthcare facilities without repetitive paperwork.
            </p>
          </motion.div>

          {/* EDITORIAL PRODUCT SHOWCASE: PHYSICAL AXIOCARD -> NFC AUTH -> DIGITAL AXIO-ID -> ECOSYSTEM */}
          <div className="max-w-6xl mx-auto space-y-12 relative">
            
            {/* Top Stage: 3-Stage Visual Pipeline (Physical Card -> NFC Vector Bridge -> Digital Identity) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">
              
              {/* STAGE 1 (Left 5 Cols): PHYSICAL AXIOCARD CREDENTIAL */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                className="lg:col-span-5 flex justify-center"
              >
                <motion.div 
                  onMouseMove={handleCardMouseMove}
                  onMouseLeave={handleCardMouseLeave}
                  style={{
                    transform: `perspective(1000px) rotateX(${cardTilt.rx}deg) rotateY(${cardTilt.ry}deg)`,
                    transition: "transform 0.15s cubic-bezier(0.2, 0, 0, 1)"
                  }}
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="bg-slate-900 border border-slate-700/90 text-white rounded-2xl p-6 shadow-2xl space-y-6 relative overflow-hidden w-full max-w-sm group cursor-pointer"
                >
                  {/* Subtle Background Mesh Line */}
                  <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

                  {/* Card Brand Header */}
                  <div className="flex items-center justify-between relative z-10">
                    <div className="flex items-center gap-2">
                      <div className="h-6 w-6 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                        <Activity className="h-3.5 w-3.5" />
                      </div>
                      <span className="font-outfit font-extrabold text-sm tracking-wider">AXIOVITAL</span>
                    </div>
                    
                    {/* NFC Symbol with Active Scanning Pulse */}
                    <div className={`flex items-center gap-1.5 text-xs font-mono font-bold px-2.5 py-1 rounded-full border transition-all duration-300 ${sec3Step !== "idle" ? "text-teal-300 bg-slate-800 border-teal-500/50 shadow-xs" : "text-teal-400/80 bg-slate-800/80 border-slate-700"}`}>
                      <Wifi className={`h-3.5 w-3.5 rotate-90 text-teal-400 ${sec3Step === "scanning" ? "animate-ping" : "animate-pulse"}`} />
                      <span>NFC 13.56MHz</span>
                    </div>
                  </div>

                  {/* Gold Smart Chip Graphic */}
                  <div className="relative z-10 pt-2">
                    <div className="w-11 h-9 rounded-md bg-amber-400/90 border border-amber-300 p-1 flex flex-col justify-between shadow-xs group-hover:border-amber-200 transition-colors">
                      <div className="w-full h-px bg-amber-700/40" />
                      <div className="flex justify-between items-center">
                        <div className="w-3 h-3 rounded-full border border-amber-700/40" />
                        <div className="w-3 h-3 rounded-full border border-amber-700/40" />
                      </div>
                      <div className="w-full h-px bg-amber-700/40" />
                    </div>
                  </div>

                  {/* Physical Card Details */}
                  <div className="space-y-1.5 relative z-10 pt-2">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400">PHYSICAL HEALTHCARE CREDENTIAL</div>
                    <div className="font-mono text-base font-bold text-white tracking-wider flex items-center justify-between">
                      <span>AXIO-8849-2026-US</span>
                      <ShieldCheck className="h-4 w-4 text-emerald-400" />
                    </div>
                  </div>

                  {/* Card Footer Badges */}
                  <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono relative z-10 text-slate-300">
                    <div>
                      <span className="text-slate-500 block text-[9px] uppercase tracking-wider">Credential Type</span>
                      <span className="font-bold text-white">Smart NFC Identity</span>
                    </div>
                    <div className="text-right">
                      <span className="text-slate-500 block text-[9px] uppercase tracking-wider">Access Protocol</span>
                      <span className="font-bold text-teal-400">Zero-Trust Auth</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* STAGE 2 (Center 2 Cols): NFC VECTOR BRIDGE & CONNECTION PULSE */}
              <div className="lg:col-span-2 flex flex-col items-center justify-center py-4 lg:py-0 relative">
                
                {/* SVG Vector Flow Line (Desktop) */}
                <svg className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
                  <line 
                    x1="0%" y1="50%" x2="100%" y2="50%" 
                    stroke={sec3Step !== "idle" ? "rgba(37, 99, 235, 0.4)" : "rgba(226, 232, 240, 0.8)"} 
                    strokeWidth="2" 
                    strokeDasharray="4 4" 
                  />
                  {(sec3Step === "verifying" || sec3Step === "verified") && (
                    <motion.circle 
                      r="4" 
                      fill="#2563eb"
                      animate={{ cx: ["0%", "100%"], opacity: [0, 1, 0] }}
                      transition={{ duration: 1.1, ease: "easeInOut", repeat: sec3Step === "verifying" ? 1 : 0 }}
                    />
                  )}
                </svg>

                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.25 }}
                  className="flex flex-col items-center gap-3 text-center relative z-10"
                >
                  <div className="relative">
                    {/* Scanning Ripple Ring */}
                    {sec3Step === "scanning" && (
                      <motion.div 
                        initial={{ scale: 0.8, opacity: 0.9 }}
                        animate={{ scale: 2.2, opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="absolute -inset-3 rounded-2xl bg-blue-500/30 border border-blue-400 pointer-events-none"
                      />
                    )}
                    
                    <div className={`h-12 w-12 rounded-2xl bg-white border shadow-md flex items-center justify-center transition-all duration-500 relative z-10 ${sec3Step === "scanning" ? "border-blue-500 text-blue-600 shadow-blue-500/20 scale-110" : sec3Step === "verified" ? "border-teal-400 text-teal-600 shadow-teal-500/10" : "border-blue-200 text-blue-600"}`}>
                      <Wifi className="h-6 w-6 rotate-90" />
                    </div>
                  </div>
                  
                  <div className="font-mono text-[11px] font-bold text-slate-700 space-y-0.5">
                    <div className={`transition-colors ${sec3Step === "scanning" ? "text-blue-600 font-extrabold" : "text-blue-600"}`}>
                      {sec3Step === "scanning" ? "NFC SCAN ACTIVE" : "NFC AUTHENTICATION"}
                    </div>
                    <div className="text-slate-500 text-[10px]">Contactless Sync →</div>
                  </div>

                  {/* Horizontal Pulse Arrow (Desktop) */}
                  <div className="hidden lg:flex items-center w-full max-w-[80px]">
                    <div className="h-0.5 w-full bg-gradient-to-r from-slate-300 via-blue-500 to-teal-500 rounded-full" />
                    <ArrowRight className="h-4 w-4 text-teal-600 -ml-1 shrink-0" />
                  </div>
                </motion.div>
              </div>

              {/* STAGE 3 (Right 5 Cols): DIGITAL AXIO-ID INTERFACE */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                className="lg:col-span-5 flex justify-center"
              >
                <div className={`bg-white border rounded-2xl p-6 shadow-xl space-y-5 w-full max-w-sm relative transition-all duration-500 ${sec3Step === "verified" ? "border-teal-300/80 shadow-teal-500/5 ring-1 ring-teal-400/30" : "border-slate-200"}`}>
                  
                  {/* Digital Axio-ID Header */}
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="h-9 w-9 rounded-xl bg-teal-50 border border-teal-200 text-teal-600 flex items-center justify-center">
                        <CreditCard className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 font-sans">AXIO-ID DIGITAL</div>
                        <div className="text-[10px] font-mono text-slate-500">Persistent Patient Token</div>
                      </div>
                    </div>

                    {/* Verified Status State Transition */}
                    {sec3Step === "verified" ? (
                      <motion.div 
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-300 shadow-2xs"
                      >
                        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 300, damping: 15 }}>
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                        </motion.div>
                        <span>VERIFIED</span>
                      </motion.div>
                    ) : (
                      <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full border border-slate-200">
                        <motion.span animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 1.2, repeat: Infinity }}>
                          {sec3Step === "scanning" ? "NFC TAP..." : sec3Step === "verifying" ? "AUTHENTICATING..." : "IDLE"}
                        </motion.span>
                      </div>
                    )}
                  </div>

                  {/* Status & Sync Metrics */}
                  <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                    <div className={`border p-3 rounded-xl transition-all duration-300 ${sec3Step === "verified" ? "bg-slate-50 border-slate-200" : "bg-slate-50/50 border-slate-100 opacity-60"}`}>
                      <div className="text-[10px] text-slate-500 uppercase tracking-wider">Access Status</div>
                      <div className="font-bold text-slate-900 mt-0.5 flex items-center gap-1">
                        <span>Secure Active</span>
                        {sec3Step === "verified" && <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />}
                      </div>
                    </div>
                    <div className={`border p-3 rounded-xl transition-all duration-300 ${sec3Step === "verified" ? "bg-teal-50/70 border-teal-200" : "bg-slate-50/50 border-slate-100 opacity-60"}`}>
                      <div className="text-[10px] text-teal-700 uppercase tracking-wider">Connected Systems</div>
                      <div className="font-bold text-teal-900 mt-0.5">5 Facilities Synced</div>
                    </div>
                  </div>

                  {/* Identity Detail Lines */}
                  <div className={`space-y-2 font-mono text-[11px] text-slate-600 p-3.5 rounded-xl border transition-all duration-300 ${sec3Step === "verified" ? "bg-slate-50/90 border-slate-200 shadow-2xs" : "bg-slate-50/40 border-slate-100 opacity-60"}`}>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Master Record:</span>
                      <span className="font-bold text-slate-900">FHIR R4 Bundle #8849</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Encryption:</span>
                      <span className="font-bold text-slate-900">AES-256 GCM</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Last Synced:</span>
                      <span className={`font-bold transition-colors ${sec3Step === "verified" ? "text-emerald-600" : "text-slate-400"}`}>
                        {sec3Step === "verified" ? "Just Now (Instant)" : "Pending Auth"}
                      </span>
                    </div>
                  </div>

                </div>
              </motion.div>
            </div>
            
            {/* Bottom Row: Connected Healthcare Ecosystem Destinations */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="pt-6 border-t border-slate-200/80 space-y-6 relative"
            >
              <div className="text-center font-mono text-xs font-bold uppercase tracking-widest text-slate-500">
                Connected Destinations Across The Ecosystem
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 relative z-10">
                
                {/* Node 1: Hospital */}
                <motion.div 
                  onMouseEnter={() => setHoveredEco(0)}
                  onMouseLeave={() => setHoveredEco(null)}
                  animate={{
                    y: sec3EcoActive === 0 || sec3PulseNode === 0 || hoveredEco === 0 ? -3 : 0,
                    scale: sec3EcoActive === 0 || sec3PulseNode === 0 || hoveredEco === 0 ? 1.02 : 1
                  }}
                  transition={{ duration: 0.2 }}
                  whileHover={{ scale: 1.03, y: -2 }}
                  className={`bg-white border rounded-2xl p-4 shadow-2xs transition-all flex flex-col items-center text-center space-y-2 group cursor-pointer ${
                    sec3EcoActive === 0 || sec3PulseNode === 0 || hoveredEco === 0 
                      ? "border-blue-400 shadow-md shadow-blue-500/10 ring-1 ring-blue-300/40" 
                      : "border-slate-200/90 hover:border-blue-300 hover:shadow-md"
                  }`}
                >
                  <div className={`h-9 w-9 rounded-xl flex items-center justify-center font-bold transition-all ${
                    sec3EcoActive === 0 || sec3PulseNode === 0 || hoveredEco === 0 
                      ? "bg-blue-600 text-white scale-110 shadow-xs" 
                      : "bg-blue-50 text-blue-600"
                  }`}>
                    <Building2 className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">Hospital</div>
                    <div className="text-[10px] text-slate-500 font-mono">EHR / Inpatient</div>
                  </div>
                </motion.div>

                {/* Node 2: Doctor */}
                <motion.div 
                  onMouseEnter={() => setHoveredEco(1)}
                  onMouseLeave={() => setHoveredEco(null)}
                  animate={{
                    y: sec3EcoActive === 1 || sec3PulseNode === 1 || hoveredEco === 1 ? -3 : 0,
                    scale: sec3EcoActive === 1 || sec3PulseNode === 1 || hoveredEco === 1 ? 1.02 : 1
                  }}
                  transition={{ duration: 0.2 }}
                  whileHover={{ scale: 1.03, y: -2 }}
                  className={`bg-white border rounded-2xl p-4 shadow-2xs transition-all flex flex-col items-center text-center space-y-2 group cursor-pointer ${
                    sec3EcoActive === 1 || sec3PulseNode === 1 || hoveredEco === 1 
                      ? "border-cyan-400 shadow-md shadow-cyan-500/10 ring-1 ring-cyan-300/40" 
                      : "border-slate-200/90 hover:border-cyan-300 hover:shadow-md"
                  }`}
                >
                  <div className={`h-9 w-9 rounded-xl flex items-center justify-center font-bold transition-all ${
                    sec3EcoActive === 1 || sec3PulseNode === 1 || hoveredEco === 1 
                      ? "bg-cyan-600 text-white scale-110 shadow-xs" 
                      : "bg-cyan-50 text-cyan-600"
                  }`}>
                    <Stethoscope className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">Doctor</div>
                    <div className="text-[10px] text-slate-500 font-mono">Outpatient Clinic</div>
                  </div>
                </motion.div>

                {/* Node 3: Laboratory */}
                <motion.div 
                  onMouseEnter={() => setHoveredEco(2)}
                  onMouseLeave={() => setHoveredEco(null)}
                  animate={{
                    y: sec3EcoActive === 2 || sec3PulseNode === 2 || hoveredEco === 2 ? -3 : 0,
                    scale: sec3EcoActive === 2 || sec3PulseNode === 2 || hoveredEco === 2 ? 1.02 : 1
                  }}
                  transition={{ duration: 0.2 }}
                  whileHover={{ scale: 1.03, y: -2 }}
                  className={`bg-white border rounded-2xl p-4 shadow-2xs transition-all flex flex-col items-center text-center space-y-2 group cursor-pointer ${
                    sec3EcoActive === 2 || sec3PulseNode === 2 || hoveredEco === 2 
                      ? "border-purple-400 shadow-md shadow-purple-500/10 ring-1 ring-purple-300/40" 
                      : "border-slate-200/90 hover:border-purple-300 hover:shadow-md"
                  }`}
                >
                  <div className={`h-9 w-9 rounded-xl flex items-center justify-center font-bold transition-all ${
                    sec3EcoActive === 2 || sec3PulseNode === 2 || hoveredEco === 2 
                      ? "bg-purple-600 text-white scale-110 shadow-xs" 
                      : "bg-purple-50 text-purple-600"
                  }`}>
                    <Microscope className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">Laboratory</div>
                    <div className="text-[10px] text-slate-500 font-mono">Diagnostics & DICOM</div>
                  </div>
                </motion.div>
                {/* Node 4: Pharmacy */}
                <motion.div 
                  onMouseEnter={() => setHoveredEco(3)}
                  onMouseLeave={() => setHoveredEco(null)}
                  animate={{
                    y: sec3EcoActive === 3 || sec3PulseNode === 3 || hoveredEco === 3 ? -3 : 0,
                    scale: sec3EcoActive === 3 || sec3PulseNode === 3 || hoveredEco === 3 ? 1.02 : 1
                  }}
                  transition={{ duration: 0.2 }}
                  whileHover={{ scale: 1.03, y: -2 }}
                  className={`bg-white border rounded-2xl p-4 shadow-2xs transition-all flex flex-col items-center text-center space-y-2 group cursor-pointer ${
                    sec3EcoActive === 3 || sec3PulseNode === 3 || hoveredEco === 3 
                      ? "border-pink-400 shadow-md shadow-pink-500/10 ring-1 ring-pink-300/40" 
                      : "border-slate-200/90 hover:border-pink-300 hover:shadow-md"
                  }`}
                >
                  <div className={`h-9 w-9 rounded-xl flex items-center justify-center font-bold transition-all ${
                    sec3EcoActive === 3 || sec3PulseNode === 3 || hoveredEco === 3 
                      ? "bg-pink-600 text-white scale-110 shadow-xs" 
                      : "bg-pink-50 text-pink-600"
                  }`}>
                    <Pill className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">Pharmacy</div>
                    <div className="text-[10px] text-slate-500 font-mono">Rx Fulfillment</div>
                  </div>
                </motion.div>

                {/* Node 5: Insurance */}
                <motion.div 
                  onMouseEnter={() => setHoveredEco(4)}
                  onMouseLeave={() => setHoveredEco(null)}
                  animate={{
                    y: sec3EcoActive === 4 || sec3PulseNode === 4 || hoveredEco === 4 ? -3 : 0,
                    scale: sec3EcoActive === 4 || sec3PulseNode === 4 || hoveredEco === 4 ? 1.02 : 1
                  }}
                  transition={{ duration: 0.2 }}
                  whileHover={{ scale: 1.03, y: -2 }}
                  className={`bg-white border rounded-2xl p-4 shadow-2xs transition-all flex flex-col items-center text-center space-y-2 group cursor-pointer col-span-2 sm:col-span-1 ${
                    sec3EcoActive === 4 || sec3PulseNode === 4 || hoveredEco === 4 
                      ? "border-amber-400 shadow-md shadow-amber-500/10 ring-1 ring-amber-300/40" 
                      : "border-slate-200/90 hover:border-amber-300 hover:shadow-md"
                  }`}
                >
                  <div className={`h-9 w-9 rounded-xl flex items-center justify-center font-bold transition-all ${
                    sec3EcoActive === 4 || sec3PulseNode === 4 || hoveredEco === 4 
                      ? "bg-amber-600 text-white scale-110 shadow-xs" 
                      : "bg-amber-50 text-amber-600"
                  }`}>
                    <DollarSign className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">Payer / Insurance</div>
                    <div className="text-[10px] text-slate-500 font-mono">Claims & Coverage</div>
                  </div>
                </motion.div>

              </div>
            </motion.div>

          </div>

        </motion.div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 5: ENTERPRISE PLATFORM CAPABILITIES (ARCHITECTURAL LAYER) */}
      {/* ========================================================= */}
      <section className="py-24 lg:py-36 relative bg-[#FAFCFF] overflow-hidden" id="capabilities">
        {/* Subtle background atmosphere matching hero */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(59,130,246,0.06),transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f012_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f012_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* SECTION HEADER */}
          <div className="text-center max-w-3xl mx-auto mb-24 lg:mb-32 space-y-5">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs font-mono font-semibold tracking-wider uppercase shadow-2xs"
            >
              <Cpu className="h-3.5 w-3.5 text-blue-600" />
              ENTERPRISE PLATFORM CAPABILITIES
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight"
            >
              The infrastructure behind <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-600">connected healthcare.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto"
            >
              From persistent identity to clinical intelligence, AxioVital connects the entire healthcare journey through one secure platform.
            </motion.p>

            {/* Subtle animated vertical indicator pointing down into the spine */}
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              whileInView={{ opacity: 1, height: 32 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-px h-8 bg-gradient-to-b from-blue-500/80 to-teal-400 mx-auto mt-6 relative"
            >
              <motion.div
                animate={{ y: [0, 24, 0], opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-1.5 h-1.5 bg-blue-600 rounded-full -translate-x-0.5 shadow-sm shadow-blue-500"
              />
            </motion.div>
          </div>

          {/* CONTINUOUS PLATFORM ARCHITECTURE CANVAS */}
          <div className="relative">
            
            {/* CENTRAL VERTICAL PLATFORM SPINE (RUNS DOWN THE ENTIRE SECTION) */}
            <div className="hidden lg:block absolute left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-blue-300 via-teal-300 via-purple-300 to-pink-300 -translate-x-1/2 pointer-events-none z-0">
              {/* Animated Data Pulse Traveling Down the Spine */}
              <motion.div
                animate={{ y: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="w-2 h-20 bg-gradient-to-b from-blue-500 via-teal-400 via-purple-500 to-pink-500 rounded-full -translate-x-0.5 shadow-md shadow-blue-500/50"
              />
            </div>

            {/* 4 CONTINUOUS CAPABILITY BANDS DIRECTLY ON CANVAS */}
            <div className="space-y-24 lg:space-y-36 relative z-10">

              {/* ------------------------------------------------------------- */}
              {/* 01 — IDENTITY — AXIO-ID                                       */}
              {/* ------------------------------------------------------------- */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                onViewportEnter={() => setActiveSec5Layer(0)}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                onMouseEnter={() => setHoveredSec5Layer(0)}
                onMouseLeave={() => setHoveredSec5Layer(null)}
                className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
              >
                {/* Central Spine Marker (Desktop) */}
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-20 items-center justify-center">
                  <motion.div 
                    animate={{
                      scale: activeSec5Layer === 0 || hoveredSec5Layer === 0 ? 1.15 : 1,
                      boxShadow: activeSec5Layer === 0 || hoveredSec5Layer === 0 ? "0 0 20px rgba(37,99,235,0.4)" : "0 0 0px transparent"
                    }}
                    className={`w-12 h-12 rounded-full border-2 font-mono text-sm font-bold flex items-center justify-center transition-all ${
                      activeSec5Layer === 0 || hoveredSec5Layer === 0 
                        ? "bg-blue-600 text-white border-blue-400 ring-4 ring-blue-500/20" 
                        : "bg-white text-slate-600 border-slate-300"
                    }`}
                  >
                    01
                  </motion.div>
                </div>

                {/* Left Column: Uncontained Text Content */}
                <div className="lg:col-span-5 space-y-4 lg:pr-6">
                  <div className="flex items-center gap-3">
                    <div className="lg:hidden w-8 h-8 rounded-lg bg-blue-50 text-blue-700 font-mono text-xs font-bold flex items-center justify-center border border-blue-200">
                      01
                    </div>
                    <span className="text-xs font-mono font-semibold uppercase text-blue-600 tracking-wider">
                      System Layer 01 — Identity
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight leading-snug">
                    Identity — <span className="text-blue-600">Axio-ID</span>
                  </h3>

                  <p className="text-slate-600 text-base leading-relaxed">
                    Unified persistent digital identity matching patient records across authorized healthcare providers without duplicate records or manual reconciliation.
                  </p>

                  <div className="pt-2 flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50/80 border border-blue-200/60 text-blue-700 text-xs font-medium font-mono">
                      <CheckCircle2 className="h-3.5 w-3.5 text-blue-600" />
                      EMPI Match Engine
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100/80 border border-slate-200 text-slate-700 text-xs font-medium font-mono">
                      <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                      Zero-Duplicate Index
                    </span>
                  </div>
                </div>

                {/* Right Column: Contained Dark Identity Lookup Interface */}
                <div className="lg:col-span-7 relative">
                  {/* Subtle Horizontal Connector Line to Spine */}
                  <div className="hidden lg:block absolute -left-8 top-1/2 w-8 h-px bg-gradient-to-r from-blue-300 to-transparent pointer-events-none" />

                  <motion.div 
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                    className={`bg-slate-900 rounded-2xl p-5 sm:p-6 border transition-all duration-300 text-slate-100 text-xs font-mono space-y-4 ${
                      activeSec5Layer === 0 || hoveredSec5Layer === 0
                        ? "border-blue-500/50 shadow-2xl shadow-blue-500/10 ring-1 ring-blue-500/20"
                        : "border-slate-800 shadow-xl"
                    }`}
                  >
                    {/* UI Top Header Bar */}
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                      <div className="flex items-center gap-2">
                        <div className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                        <div className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                        <div className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                        <span className="ml-2 text-[11px] font-mono text-slate-400">AxioVital EMPI / Identity Lookup Engine v3.4</span>
                      </div>
                      <span className="inline-flex items-center gap-1 text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20 font-sans">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                        LIVE QUERY
                      </span>
                    </div>

                    {/* Filter Search Header */}
                    <div className="flex items-center justify-between bg-slate-950/60 p-3 rounded-lg border border-slate-800/80">
                      <div className="flex items-center gap-2 text-slate-400">
                        <Search className="h-3.5 w-3.5 text-blue-400" />
                        <span>Search Query:</span>
                        <span className="text-slate-200 font-semibold bg-slate-800 px-2 py-0.5 rounded text-[11px]">AXIO-994821-NY</span>
                      </div>
                      <span className="text-slate-500 text-[10px]">3 Matching Records Found</span>
                    </div>

                    {/* Identity Lookup Table */}
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="text-[10px] text-slate-400 uppercase tracking-wider border-b border-slate-800">
                            <th className="py-2 px-3 font-semibold">Axio-ID</th>
                            <th className="py-2 px-3 font-semibold">Patient Name</th>
                            <th className="py-2 px-3 font-semibold">Authorized Facility</th>
                            <th className="py-2 px-3 font-semibold text-right">Match Status</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800/60">
                          <tr className="hover:bg-slate-800/40 transition-colors">
                            <td className="py-2.5 px-3 font-semibold text-blue-400">AXIO-994821-NY</td>
                            <td className="py-2.5 px-3 text-slate-200">Sarah Jenkins</td>
                            <td className="py-2.5 px-3 text-slate-400">Mount Sinai Health System</td>
                            <td className="py-2.5 px-3 text-right">
                              <span className="inline-flex items-center gap-1 bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20 text-[10px]">
                                <CheckCircle2 className="h-3 w-3 text-emerald-400" />
                                VERIFIED 99.8%
                              </span>
                            </td>
                          </tr>
                          <tr className="hover:bg-slate-800/40 transition-colors">
                            <td className="py-2.5 px-3 font-semibold text-blue-400">AXIO-883104-MA</td>
                            <td className="py-2.5 px-3 text-slate-200">Marcus Vance</td>
                            <td className="py-2.5 px-3 text-slate-400">Mass General Brigham</td>
                            <td className="py-2.5 px-3 text-right">
                              <span className="inline-flex items-center gap-1 bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20 text-[10px]">
                                <CheckCircle2 className="h-3 w-3 text-emerald-400" />
                                VERIFIED 99.9%
                              </span>
                            </td>
                          </tr>
                          <tr className="hover:bg-slate-800/40 transition-colors">
                            <td className="py-2.5 px-3 font-semibold text-blue-400">AXIO-772910-CA</td>
                            <td className="py-2.5 px-3 text-slate-200">Elena Rostova</td>
                            <td className="py-2.5 px-3 text-slate-400">Stanford Health Care</td>
                            <td className="py-2.5 px-3 text-right">
                              <span className="inline-flex items-center gap-1 bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20 text-[10px]">
                                <CheckCircle2 className="h-3 w-3 text-emerald-400" />
                                VERIFIED 99.7%
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    {/* Interface Bottom Bar */}
                    <div className="flex items-center justify-between text-[10px] text-slate-500 pt-1 border-t border-slate-800">
                      <span>EMPI Engine Latency: 12ms</span>
                      <span className="text-blue-400">Encrypted Session SHA-256</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>


              {/* ------------------------------------------------------------- */}
              {/* 02 — ACCESS — AXIO CARD                                       */}
              {/* ------------------------------------------------------------- */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                onViewportEnter={() => setActiveSec5Layer(1)}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                onMouseEnter={() => setHoveredSec5Layer(1)}
                onMouseLeave={() => setHoveredSec5Layer(null)}
                className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
              >
                {/* Central Spine Marker (Desktop) */}
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-20 items-center justify-center">
                  <motion.div 
                    animate={{
                      scale: activeSec5Layer === 1 || hoveredSec5Layer === 1 ? 1.15 : 1,
                      boxShadow: activeSec5Layer === 1 || hoveredSec5Layer === 1 ? "0 0 20px rgba(13,148,136,0.4)" : "0 0 0px transparent"
                    }}
                    className={`w-12 h-12 rounded-full border-2 font-mono text-sm font-bold flex items-center justify-center transition-all ${
                      activeSec5Layer === 1 || hoveredSec5Layer === 1 
                        ? "bg-teal-600 text-white border-teal-400 ring-4 ring-teal-500/20" 
                        : "bg-white text-slate-600 border-slate-300"
                    }`}
                  >
                    02
                  </motion.div>
                </div>

                {/* Left Column (Desktop): Physical AxioCard Hero Object & NFC Reader Visualization */}
                <div className="lg:col-span-7 order-2 lg:order-1 relative">
                  {/* Connector Line to Central Spine */}
                  <div className="hidden lg:block absolute -right-8 top-1/2 w-8 h-px bg-gradient-to-l from-teal-300 to-transparent pointer-events-none" />

                  <motion.div 
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                    className={`flex flex-col sm:flex-row items-center justify-center gap-6 bg-slate-900/90 p-6 sm:p-8 rounded-2xl border transition-all duration-300 shadow-xl relative overflow-hidden group ${
                      activeSec5Layer === 1 || hoveredSec5Layer === 1
                        ? "border-teal-500/50 shadow-2xl shadow-teal-500/10 ring-1 ring-teal-500/20"
                        : "border-slate-800"
                    }`}
                  >
                    {/* Background Signal Arc */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(20,184,166,0.12),transparent_60%)] pointer-events-none" />

                    {/* The Hero Physical AxioCard */}
                    <div className="w-full sm:w-72 h-44 rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-teal-950 p-5 text-white shadow-2xl border border-slate-700/80 relative flex flex-col justify-between overflow-hidden group/card hover:scale-[1.03] transition-transform">
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(45,212,191,0.2),transparent)] pointer-events-none" />

                      <div className="flex items-center justify-between relative z-10">
                        <span className="font-bold text-sm tracking-wider flex items-center gap-1.5 text-white">
                          <span className="h-2 w-2 rounded-full bg-teal-400 animate-pulse" />
                          AXIOVITAL
                        </span>
                        <Wifi className="h-5 w-5 text-teal-400 opacity-90" />
                      </div>

                      <div className="relative z-10 my-auto">
                        <div className="w-9 h-7 rounded bg-gradient-to-r from-amber-200 to-yellow-400 opacity-90 border border-amber-300/40 mb-2 flex items-center justify-center">
                          <div className="w-5 h-4 border border-amber-800/40 rounded-xs" />
                        </div>
                        <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Axio-ID Credential</div>
                        <div className="text-sm font-mono font-bold tracking-widest text-slate-100">AXIO-994821-NY</div>
                      </div>

                      <div className="flex items-center justify-between relative z-10 pt-1 border-t border-slate-800/80 text-[10px] font-mono">
                        <span className="text-slate-400">Sarah Jenkins</span>
                        <span className="inline-flex items-center gap-1 text-teal-400 font-semibold bg-teal-500/10 px-2 py-0.5 rounded border border-teal-500/20">
                          <ShieldCheck className="h-3 w-3" /> VERIFIED
                        </span>
                      </div>
                    </div>

                    {/* Small NFC Reader Kiosk Display */}
                    <div className="w-full sm:w-56 bg-slate-950 p-4 rounded-xl border border-slate-800 shadow-md space-y-3 relative z-10">
                      <div className="text-[11px] font-mono font-bold uppercase text-slate-400 tracking-wider flex items-center justify-between border-b border-slate-800 pb-2">
                        <span>Reception Kiosk</span>
                        <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                      </div>

                      <div className="bg-slate-900 text-slate-100 p-3 rounded-lg text-center space-y-1.5 border border-slate-800 relative overflow-hidden">
                        <Wifi className="h-6 w-6 text-teal-400 mx-auto animate-bounce" />
                        <div className="text-xs font-mono font-bold text-teal-300">NFC SIGNAL DETECTED</div>
                        <div className="text-[10px] text-slate-400 font-mono">Mount Sinai Bay 04</div>
                        <div className="inline-block text-[9px] bg-emerald-500/20 text-emerald-400 px-2.5 py-1 rounded font-mono border border-emerald-500/30">
                          ACCESS GRANTED (0.4s)
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Right Column (Desktop): Text Content */}
                <div className="lg:col-span-5 order-1 lg:order-2 space-y-4 lg:pl-6">
                  <div className="flex items-center gap-3">
                    <div className="lg:hidden w-8 h-8 rounded-lg bg-teal-50 text-teal-700 font-mono text-xs font-bold flex items-center justify-center border border-teal-200">
                      02
                    </div>
                    <span className="text-xs font-mono font-semibold uppercase text-teal-600 tracking-wider">
                      System Layer 02 — Access
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight leading-snug">
                    Access — <span className="text-teal-600">Axio Card</span>
                  </h3>

                  <p className="text-slate-600 text-base leading-relaxed">
                    Physical NFC credential enabling instant reception check-in and secure access across connected facilities without waiting rooms or paper forms.
                  </p>

                  <div className="pt-2 flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50/80 border border-teal-200/60 text-teal-700 text-xs font-medium font-mono">
                      <Wifi className="h-3.5 w-3.5 text-teal-600" />
                      AES-256 NFC Chip
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100/80 border border-slate-200 text-slate-700 text-xs font-medium font-mono">
                      <Zap className="h-3.5 w-3.5 text-amber-500" />
                      Sub-Second Check-in
                    </span>
                  </div>
                </div>
              </motion.div>


              {/* ------------------------------------------------------------- */}
              {/* 03 — CLINICAL DATA — CONNECTED RECORDS                        */}
              {/* ------------------------------------------------------------- */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                onViewportEnter={() => setActiveSec5Layer(2)}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                onMouseEnter={() => setHoveredSec5Layer(2)}
                onMouseLeave={() => setHoveredSec5Layer(null)}
                className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
              >
                {/* Central Spine Marker (Desktop) */}
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-20 items-center justify-center">
                  <motion.div 
                    animate={{
                      scale: activeSec5Layer === 2 || hoveredSec5Layer === 2 ? 1.15 : 1,
                      boxShadow: activeSec5Layer === 2 || hoveredSec5Layer === 2 ? "0 0 20px rgba(147,51,234,0.4)" : "0 0 0px transparent"
                    }}
                    className={`w-12 h-12 rounded-full border-2 font-mono text-sm font-bold flex items-center justify-center transition-all ${
                      activeSec5Layer === 2 || hoveredSec5Layer === 2 
                        ? "bg-purple-600 text-white border-purple-400 ring-4 ring-purple-500/20" 
                        : "bg-white text-slate-600 border-slate-300"
                    }`}
                  >
                    03
                  </motion.div>
                </div>

                {/* Left Column: Text Content */}
                <div className="lg:col-span-5 space-y-4 lg:pr-6">
                  <div className="flex items-center gap-3">
                    <div className="lg:hidden w-8 h-8 rounded-lg bg-purple-50 text-purple-700 font-mono text-xs font-bold flex items-center justify-center border border-purple-200">
                      03
                    </div>
                    <span className="text-xs font-mono font-semibold uppercase text-purple-600 tracking-wider">
                      System Layer 03 — Clinical Data
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight leading-snug">
                    Clinical Data — <span className="text-purple-600">Connected Records</span>
                  </h3>

                  <p className="text-slate-600 text-base leading-relaxed">
                    Standardized clinical information accessible across authorized care providers through interoperable healthcare infrastructure.
                  </p>

                  <div className="pt-2 flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50/80 border border-purple-200/60 text-purple-700 text-xs font-medium font-mono">
                      <Database className="h-3.5 w-3.5 text-purple-600" />
                      FHIR R4 Native
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100/80 border border-slate-200 text-slate-700 text-xs font-medium font-mono">
                      <Activity className="h-3.5 w-3.5 text-blue-600" />
                      LOINC & RxNorm Mappings
                    </span>
                  </div>
                </div>

                {/* Right Column: Realistic FHIR Data Interface */}
                <div className="lg:col-span-7 relative">
                  {/* Connector Line to Central Spine */}
                  <div className="hidden lg:block absolute -left-8 top-1/2 w-8 h-px bg-gradient-to-r from-purple-300 to-transparent pointer-events-none" />

                  <motion.div 
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                    className={`bg-slate-900 rounded-2xl p-5 sm:p-6 border transition-all duration-300 text-slate-100 space-y-4 ${
                      activeSec5Layer === 2 || hoveredSec5Layer === 2
                        ? "border-purple-500/50 shadow-2xl shadow-purple-500/10 ring-1 ring-purple-500/20"
                        : "border-slate-800 shadow-xl"
                    }`}
                  >
                    {/* Interface Header with Tab Controls */}
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs font-mono">
                      <div className="flex items-center gap-2">
                        <Database className="h-4 w-4 text-purple-400" />
                        <span className="font-bold text-slate-200">FHIR R4 Interoperable Record Pipeline</span>
                      </div>
                      <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-lg border border-slate-800 text-[10px]">
                        <button 
                          onClick={() => setFhirTab("visual")}
                          className={`px-2.5 py-1 rounded transition-colors ${fhirTab === "visual" ? "bg-purple-600 text-white font-bold" : "text-slate-400 hover:text-slate-200"}`}
                        >
                          Structured Record
                        </button>
                        <button 
                          onClick={() => setFhirTab("json")}
                          className={`px-2.5 py-1 rounded transition-colors ${fhirTab === "json" ? "bg-purple-600 text-white font-bold" : "text-slate-400 hover:text-slate-200"}`}
                        >
                          Raw FHIR JSON
                        </button>
                      </div>
                    </div>

                    {/* Tab 1: Structured Resources View */}
                    {fhirTab === "visual" ? (
                      <div className="space-y-2.5 text-xs font-mono">
                        {/* Encounter */}
                        <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800 flex items-center justify-between hover:border-purple-500/40 transition-colors">
                          <div className="flex items-center gap-3">
                            <div className="h-7 w-7 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                              <Building2 className="h-3.5 w-3.5" />
                            </div>
                            <div>
                              <div className="font-bold text-slate-200 text-[11px]">Encounter: Outpatient Consultation</div>
                              <div className="text-[10px] text-slate-400">Mount Sinai Hospital • Dr. E. Vance</div>
                            </div>
                          </div>
                          <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded border border-slate-700">COMPLETED</span>
                        </div>

                        {/* Observations */}
                        <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800 flex items-center justify-between hover:border-purple-500/40 transition-colors">
                          <div className="flex items-center gap-3">
                            <div className="h-7 w-7 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                              <Activity className="h-3.5 w-3.5" />
                            </div>
                            <div>
                              <div className="font-bold text-slate-200 text-[11px]">Observation: Blood Pressure (LOINC 85354-9)</div>
                              <div className="text-[10px] text-slate-400">Systolic: 120 mmHg | Diastolic: 78 mmHg</div>
                            </div>
                          </div>
                          <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20">NORMAL</span>
                        </div>

                        {/* Medications */}
                        <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800 flex items-center justify-between hover:border-purple-500/40 transition-colors">
                          <div className="flex items-center gap-3">
                            <div className="h-7 w-7 rounded-lg bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400">
                              <Pill className="h-3.5 w-3.5" />
                            </div>
                            <div>
                              <div className="font-bold text-slate-200 text-[11px]">MedicationStatement: Lisinopril 10mg (RxNorm 314076)</div>
                              <div className="text-[10px] text-slate-400">Oral Tablet • 1x Daily • Refills Remaining: 3</div>
                            </div>
                          </div>
                          <span className="text-[10px] bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded border border-blue-500/20">ACTIVE</span>
                        </div>
                      </div>
                    ) : (
                      /* Tab 2: Raw FHIR JSON View */
                      <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 text-[11px] font-mono text-purple-300 overflow-x-auto max-h-48">
                        <pre>{`{
  "resourceType": "Bundle",
  "type": "collection",
  "entry": [
    { "resource": { "resourceType": "Patient", "id": "AXIO-994821" } },
    { "resource": { "resourceType": "Observation", "code": "85354-9", "value": "120/78" } },
    { "resource": { "resourceType": "MedicationStatement", "code": "314076", "status": "active" } }
  ]
}`}</pre>
                      </div>
                    )}

                    {/* Interface Bottom Bar */}
                    <div className="flex items-center justify-between text-[10px] text-slate-500 font-mono pt-1 border-t border-slate-800">
                      <span>FHIR Spec: R4 v4.0.1</span>
                      <span className="text-purple-400">Normalized & Interoperable</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>


              {/* ------------------------------------------------------------- */}
              {/* 04 — INTELLIGENCE — AXIOAI ASSISTANT                         */}
              {/* ------------------------------------------------------------- */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                onViewportEnter={() => setActiveSec5Layer(3)}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                onMouseEnter={() => setHoveredSec5Layer(3)}
                onMouseLeave={() => setHoveredSec5Layer(null)}
                className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
              >
                {/* Central Spine Marker (Desktop) */}
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-20 items-center justify-center">
                  <motion.div 
                    animate={{
                      scale: activeSec5Layer === 3 || hoveredSec5Layer === 3 ? 1.15 : 1,
                      boxShadow: activeSec5Layer === 3 || hoveredSec5Layer === 3 ? "0 0 20px rgba(219,39,119,0.4)" : "0 0 0px transparent"
                    }}
                    className={`w-12 h-12 rounded-full border-2 font-mono text-sm font-bold flex items-center justify-center transition-all ${
                      activeSec5Layer === 3 || hoveredSec5Layer === 3 
                        ? "bg-pink-600 text-white border-pink-400 ring-4 ring-pink-500/20" 
                        : "bg-white text-slate-600 border-slate-300"
                    }`}
                  >
                    04
                  </motion.div>
                </div>

                {/* Left Column (Desktop): AI Workspace Product UI (Visual Climax with slightly increased scale) */}
                <div className="lg:col-span-7 order-2 lg:order-1 relative">
                  {/* Connector Line to Central Spine */}
                  <div className="hidden lg:block absolute -right-8 top-1/2 w-8 h-px bg-gradient-to-l from-pink-300 to-transparent pointer-events-none" />

                  <motion.div 
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                    className={`bg-slate-900 rounded-2xl p-5 sm:p-6 border transition-all duration-300 text-slate-100 space-y-4 ${
                      activeSec5Layer === 3 || hoveredSec5Layer === 3
                        ? "border-pink-500/50 shadow-2xl shadow-pink-500/15 ring-1 ring-pink-500/20"
                        : "border-slate-800 shadow-xl"
                    }`}
                  >
                    {/* UI Header & Tab Controls */}
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                      <div className="flex items-center gap-2 text-xs font-mono">
                        <Sparkles className="h-4 w-4 text-pink-400" />
                        <span className="font-bold text-slate-200">AxioAI Clinical Workspace</span>
                      </div>
                      <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-lg border border-slate-800 text-[10px] font-mono">
                        <button 
                          onClick={() => setAiDocTab("summary")}
                          className={`px-2.5 py-1 rounded transition-colors ${aiDocTab === "summary" ? "bg-pink-600 text-white font-bold" : "text-slate-400 hover:text-slate-200"}`}
                        >
                          Summary
                        </button>
                        <button 
                          onClick={() => setAiDocTab("soap")}
                          className={`px-2.5 py-1 rounded transition-colors ${aiDocTab === "soap" ? "bg-pink-600 text-white font-bold" : "text-slate-400 hover:text-slate-200"}`}
                        >
                          SOAP Note
                        </button>
                        <button 
                          onClick={() => setAiDocTab("icd")}
                          className={`px-2.5 py-1 rounded transition-colors ${aiDocTab === "icd" ? "bg-pink-600 text-white font-bold" : "text-slate-400 hover:text-slate-200"}`}
                        >
                          ICD-10 / CPT
                        </button>
                      </div>
                    </div>

                    {/* Content Panel Based on Active Tab */}
                    {aiDocTab === "summary" && (
                      <div className="bg-slate-950/70 p-4 rounded-xl border border-slate-800/80 space-y-3 text-xs">
                        <div className="flex items-center justify-between text-slate-400 font-mono text-[11px] border-b border-slate-800/60 pb-2">
                          <span className="font-semibold text-pink-300">Clinical Summary Synthesis</span>
                          <span className="text-[10px] bg-pink-500/10 text-pink-400 px-2 py-0.5 rounded border border-pink-500/20 font-mono">AI GENERATED</span>
                        </div>
                        <p className="text-slate-300 leading-relaxed font-sans">
                          Patient Sarah Jenkins (38F) presents for routine 6-month cardiovascular checkup. Past medical history notable for essential hypertension well controlled on Lisinopril 10mg daily. Recent lab telemetry indicates stable HbA1c (5.6%) and normal lipid panel.
                        </p>
                        <div className="bg-slate-900 p-2.5 rounded-lg border border-slate-800 text-[11px] font-mono text-slate-300 flex items-center justify-between">
                          <span className="text-slate-400">Suggested Action:</span>
                          <span className="text-emerald-400 font-semibold">Maintain current Rx regimen • Schedule lipid re-check in 12 mo</span>
                        </div>
                      </div>
                    )}

                    {aiDocTab === "soap" && (
                      <div className="bg-slate-950/70 p-4 rounded-xl border border-slate-800/80 space-y-2 text-xs font-mono">
                        <div className="text-pink-400 font-bold border-b border-slate-800 pb-1.5">Structured EMR SOAP Note</div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-[11px]">
                          <div className="bg-slate-900 p-2 rounded border border-slate-800">
                            <span className="text-slate-400 font-bold block mb-0.5">S (Subjective):</span>
                            <span className="text-slate-200">No chest pain, shortness of breath, or dizziness reported.</span>
                          </div>
                          <div className="bg-slate-900 p-2 rounded border border-slate-800">
                            <span className="text-slate-400 font-bold block mb-0.5">O (Objective):</span>
                            <span className="text-slate-200">BP 120/78, HR 68 bpm, S1/S2 regular, no peripheral edema.</span>
                          </div>
                          <div className="bg-slate-900 p-2 rounded border border-slate-800">
                            <span className="text-slate-400 font-bold block mb-0.5">A (Assessment):</span>
                            <span className="text-slate-200">Essential hypertension (I10) - Stable control.</span>
                          </div>
                          <div className="bg-slate-900 p-2 rounded border border-slate-800">
                            <span className="text-slate-400 font-bold block mb-0.5">P (Plan):</span>
                            <span className="text-slate-200">Continue Lisinopril 10mg PO qd. Follow-up in 6 months.</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {aiDocTab === "icd" && (
                      <div className="bg-slate-950/70 p-4 rounded-xl border border-slate-800/80 space-y-2.5 text-xs font-mono">
                        <div className="flex items-center justify-between text-slate-400 text-[11px] border-b border-slate-800 pb-2">
                          <span className="font-semibold text-pink-300">Automated Billing Code Mapping</span>
                          <span className="text-emerald-400 text-[10px]">Confidence: 99.4%</span>
                        </div>
                        <div className="space-y-2 text-[11px]">
                          <div className="flex items-center justify-between bg-slate-900 p-2 rounded border border-slate-800">
                            <span className="text-slate-200"><strong className="text-blue-400">ICD-10 I10:</strong> Essential (primary) hypertension</span>
                            <span className="text-xs bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded">Primary Dx</span>
                          </div>
                          <div className="flex items-center justify-between bg-slate-900 p-2 rounded border border-slate-800">
                            <span className="text-slate-200"><strong className="text-purple-400">CPT 99213:</strong> Office visit, established patient, low-complexity</span>
                            <span className="text-xs bg-purple-500/10 text-purple-400 px-2 py-0.5 rounded">Procedure</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Interface Bottom Bar */}
                    <div className="flex items-center justify-between text-[10px] text-slate-500 font-mono pt-1 border-t border-slate-800">
                      <span>Specialized Healthcare EMR Module</span>
                      <span className="text-emerald-400">HIPAA Compliant Inference</span>
                    </div>
                  </motion.div>
                </div>

                {/* Right Column (Desktop): Text Content */}
                <div className="lg:col-span-5 order-1 lg:order-2 space-y-4 lg:pl-6">
                  <div className="flex items-center gap-3">
                    <div className="lg:hidden w-8 h-8 rounded-lg bg-pink-50 text-pink-700 font-mono text-xs font-bold flex items-center justify-center border border-pink-200">
                      04
                    </div>
                    <span className="text-xs font-mono font-semibold uppercase text-pink-600 tracking-wider">
                      System Layer 04 — Intelligence
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight leading-snug">
                    Intelligence — <span className="text-pink-600">AxioAI Assistant</span>
                  </h3>

                  <p className="text-slate-600 text-base leading-relaxed">
                    AI-powered clinical decision support and structured documentation for healthcare professionals.
                  </p>

                  <div className="pt-2 flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-50/80 border border-pink-200/60 text-pink-700 text-xs font-medium font-mono">
                      <Sparkles className="h-3.5 w-3.5 text-pink-600" />
                      Clinical Decision Support
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100/80 border border-slate-200 text-slate-700 text-xs font-medium font-mono">
                      <FileCode className="h-3.5 w-3.5 text-blue-600" />
                      Auto ICD-10 & CPT Suggestion
                    </span>
                  </div>
                </div>
              </motion.div>

            </div>

          </div>
        </div>
      </section>
{/* ========================================================= */}
{/* SECTION 6: ENTERPRISE SECURITY CORE VAULT                */}
{/* ========================================================= */}
<section className="py-24 lg:py-32 bg-[#0B0F19] text-white relative overflow-hidden" id="security">
  {/* Technical Atmosphere Background */}
  <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.12)_0%,rgba(15,23,42,0.05)_50%,transparent_75%)]" />
    
    {/* Micro-grid overlay */}
    <div 
      className="absolute inset-0 opacity-15"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }}
    />

    {/* Subtle technical arcs */}
    <svg className="absolute inset-0 w-full h-full opacity-20">
      <circle cx="50%" cy="50%" r="350" fill="none" stroke="rgba(56,189,248,0.15)" strokeWidth="1" strokeDasharray="6 12" />
      <circle cx="50%" cy="50%" r="220" fill="none" stroke="rgba(37,99,235,0.2)" strokeWidth="1" />
    </svg>
  </div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    
    {/* SECTION HEADER */}
    <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24 space-y-4">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-semibold tracking-wider uppercase shadow-2xs"
      >
        <ShieldCheck className="h-3.5 w-3.5 text-blue-400" />
        ENTERPRISE SECURITY
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight"
      >
        Security built into <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-300 to-sky-400">every layer.</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto"
      >
        End-to-end AES-256 encryption, hardware-backed protection, zero-trust access controls and immutable audit logging.
      </motion.p>
    </div>

    {/* SECURITY CORE INTERFACE & CONTROL MATRIX GRID */}
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
      
      {/* LEFT / MAIN: AXIOVITAL SECURITY CORE DIAGRAM (7 Cols) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="lg:col-span-7 bg-slate-900/80 rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-2xl relative overflow-hidden space-y-8"
      >
        {/* Top Header with Live Protection Active Indicator */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2.5 font-mono text-xs text-slate-300">
            <Lock className="h-4 w-4 text-blue-400" />
            <span className="font-bold">AxioVital Security Core Module</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full border border-emerald-500/20 text-xs font-mono font-semibold">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
            <span>PROTECTION ACTIVE</span>
          </div>
        </div>

        {/* Central Core & 4 Connected Security Layers Visual */}
        <div className="relative py-6 flex flex-col items-center justify-center">
          
          {/* Central Security Core Hub */}
          <motion.div 
            animate={{ boxShadow: ["0 0 15px rgba(59,130,246,0.2)", "0 0 30px rgba(59,130,246,0.5)", "0 0 15px rgba(59,130,246,0.2)"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="w-24 h-24 rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 border border-blue-500/40 flex flex-col items-center justify-center text-center p-2 relative z-10 shadow-xl"
          >
            <ShieldCheck className="h-8 w-8 text-blue-400 mb-1" />
            <span className="text-[10px] font-mono font-bold tracking-wider text-slate-200 uppercase">AXIOVITAL</span>
            <span className="text-[8px] font-mono text-blue-400">SECURITY CORE</span>
          </motion.div>

          {/* 4 Connected Security Nodes (Grid around central core) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mt-8 relative z-10">
            
            {/* Node 1: ENCRYPTION */}
            <motion.div 
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-slate-950/80 p-4 rounded-xl border border-slate-800 flex items-center gap-3.5 hover:border-blue-500/50 transition-colors group"
            >
              <div className="h-10 w-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                <Lock className="h-5 w-5" />
              </div>
              <div>
                <div className="text-[10px] font-mono text-blue-400 font-semibold uppercase tracking-wider">01 — ENCRYPTION</div>
                <div className="text-xs font-bold text-slate-200">AES-256 GCM Hardware</div>
                <div className="text-[10px] text-slate-400 font-mono">HSM Key Rotation</div>
              </div>
            </motion.div>

            {/* Node 2: IDENTITY */}
            <motion.div 
              initial={{ opacity: 0, x: 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="bg-slate-950/80 p-4 rounded-xl border border-slate-800 flex items-center gap-3.5 hover:border-teal-500/50 transition-colors group"
            >
              <div className="h-10 w-10 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 shrink-0">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <div className="text-[10px] font-mono text-teal-400 font-semibold uppercase tracking-wider">02 — IDENTITY</div>
                <div className="text-xs font-bold text-slate-200">Zero-Trust Access Controls</div>
                <div className="text-[10px] text-slate-400 font-mono">Role-Based Granular Scope</div>
              </div>
            </motion.div>

            {/* Node 3: AUDIT */}
            <motion.div 
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="bg-slate-950/80 p-4 rounded-xl border border-slate-800 flex items-center gap-3.5 hover:border-purple-500/50 transition-colors group"
            >
              <div className="h-10 w-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                <FileCode className="h-5 w-5" />
              </div>
              <div>
                <div className="text-[10px] font-mono text-purple-400 font-semibold uppercase tracking-wider">03 — AUDIT</div>
                <div className="text-xs font-bold text-slate-200">Immutable Audit Logs</div>
                <div className="text-[10px] text-slate-400 font-mono">100% Tamper-Proof Tracing</div>
              </div>
            </motion.div>

            {/* Node 4: INTEROPERABILITY */}
            <motion.div 
              initial={{ opacity: 0, x: 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="bg-slate-950/80 p-4 rounded-xl border border-slate-800 flex items-center gap-3.5 hover:border-emerald-500/50 transition-colors group"
            >
              <div className="h-10 w-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                <Database className="h-5 w-5" />
              </div>
              <div>
                <div className="text-[10px] font-mono text-emerald-400 font-semibold uppercase tracking-wider">04 — INTEROPERABILITY</div>
                <div className="text-xs font-bold text-slate-200">FHIR / SMART on FHIR</div>
                <div className="text-[10px] text-slate-400 font-mono">OAuth2 Scopes & BAA</div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Compact Security Infrastructure Metrics */}
        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800">
          <div className="bg-slate-950/60 p-3.5 rounded-xl border border-slate-800/80 flex items-center justify-between">
            <div>
              <div className="text-xl sm:text-2xl font-mono font-extrabold text-blue-400">256-bit</div>
              <div className="text-[11px] text-slate-400 font-mono">AES Hardware Encryption</div>
            </div>
            <Lock className="h-5 w-5 text-blue-500/40" />
          </div>

          <div className="bg-slate-950/60 p-3.5 rounded-xl border border-slate-800/80 flex items-center justify-between">
            <div>
              <div className="text-xl sm:text-2xl font-mono font-extrabold text-emerald-400">100%</div>
              <div className="text-[11px] text-slate-400 font-mono">Immutable Audit Logging</div>
            </div>
            <CheckCircle2 className="h-5 w-5 text-emerald-500/40" />
          </div>
        </div>
      </motion.div>

      {/* RIGHT: COMPLIANCE CONTROL MATRIX ROWS (5 Cols) */}
      <div className="lg:col-span-5 space-y-6">
        <div className="space-y-3">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400">
            Infrastructure Compliance
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Verified security standards.
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            AxioVital's architecture enforces strict healthcare compliance standards across every data layer.
          </p>
        </div>

        {/* 3 Control Matrix Rows (Sequential Reveal) */}
        <div className="space-y-3 font-mono text-xs">
          
          {/* Row 1: HIPAA */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between shadow-sm"
          >
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
              <div>
                <span className="font-bold text-slate-200 block text-xs">HIPAA / HITECH Standard</span>
                <span className="text-[10px] text-slate-400 font-sans">PHI & Administrative Safeguards</span>
              </div>
            </div>
            <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-2.5 py-1 rounded border border-emerald-500/20 font-semibold shrink-0">
              PROTECTED
            </span>
          </motion.div>

          {/* Row 2: SOC 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between shadow-sm"
          >
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-4 w-4 text-blue-400 shrink-0" />
              <div>
                <span className="font-bold text-slate-200 block text-xs">SOC 2 Type II Architecture</span>
                <span className="text-[10px] text-slate-400 font-sans">Security & Confidentiality</span>
              </div>
            </div>
            <span className="text-[10px] bg-blue-500/10 text-blue-400 px-2.5 py-1 rounded border border-blue-500/20 font-semibold shrink-0">
              AUDITED
            </span>
          </motion.div>

          {/* Row 3: FHIR R4 */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between shadow-sm"
          >
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-4 w-4 text-purple-400 shrink-0" />
              <div>
                <span className="font-bold text-slate-200 block text-xs">FHIR R4 / SMART on FHIR</span>
                <span className="text-[10px] text-slate-400 font-sans">OAuth2 Authorized Scopes</span>
              </div>
            </div>
            <span className="text-[10px] bg-purple-500/10 text-purple-400 px-2.5 py-1 rounded border border-purple-500/20 font-semibold shrink-0">
              VERIFIED
            </span>
          </motion.div>

        </div>
      </div>

    </div>

  </div>
</section>

{/* ========================================================= */}
{/* SECTION 7: FINAL CONVERSION CTA                           */}
{/* ========================================================= */}
<section className="py-28 lg:py-36 bg-gradient-to-b from-[#0B0F19] via-slate-900 to-[#080B14] text-white relative overflow-hidden">
  {/* Abstract Convergence Network Visual Background */}
  <div className="absolute inset-0 pointer-events-none select-none opacity-20" aria-hidden="true">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.18)_0%,transparent_70%)]" />
    <svg className="w-full h-full">
      <path d="M 10% 20% C 30% 20%, 40% 50%, 50% 50%" stroke="rgba(56,189,248,0.2)" strokeWidth="1.5" fill="none" strokeDasharray="4 6" />
      <path d="M 10% 80% C 30% 80%, 40% 50%, 50% 50%" stroke="rgba(45,212,191,0.2)" strokeWidth="1.5" fill="none" strokeDasharray="4 6" />
      <path d="M 90% 20% C 70% 20%, 60% 50%, 50% 50%" stroke="rgba(168,85,247,0.2)" strokeWidth="1.5" fill="none" strokeDasharray="4 6" />
      <path d="M 90% 80% C 70% 80%, 60% 50%, 50% 50%" stroke="rgba(236,72,153,0.2)" strokeWidth="1.5" fill="none" strokeDasharray="4 6" />
    </svg>
  </div>

  <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
    
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-4"
    >
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-semibold tracking-widest uppercase">
        <Activity className="h-3.5 w-3.5 text-blue-400" />
        READY TO CONNECT HEALTHCARE?
      </div>

      <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
        Build a more connected healthcare experience with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-teal-300">AxioVital.</span>
      </h2>

      <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
        Unify hospital operations, patient records, and clinical intelligence through one secure infrastructure.
      </p>
    </motion.div>

    {/* CTA BUTTONS WITH ACCENT HOVER INTERACTION */}
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
    >
      <button 
        onClick={() => setDemoModalOpen(true)}
        className="group w-full sm:w-auto px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all duration-200 shadow-lg shadow-blue-600/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2.5"
      >
        <span>Explore AxioVital</span>
        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </button>

      <Link 
        href="/documentation"
        className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/15 text-white font-semibold text-sm transition-all border border-white/20 hover:border-white/40 hover:-translate-y-0.5 flex items-center justify-center"
      >
        Read Technical Documentation
      </Link>
    </motion.div>

  </div>
</section>

{/* DEMO MODAL POPUP */}
{demoModalOpen && (
  <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4">
    <div className="bg-white border border-slate-200 rounded-2xl p-8 max-w-md w-full shadow-2xl relative animate-in fade-in zoom-in-95 duration-150">
      <h3 className="text-2xl font-bold text-slate-900 mb-2">Book a Live Architecture Demo</h3>
      <p className="text-slate-600 text-sm mb-6">
        Speak with an AxioVital solutions architect to explore FHIR R4 integrations for your health platform.
      </p>
      <div className="space-y-4">
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Work Email</label>
          <input type="email" placeholder="name@company.com" className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-blue-600" />
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Company / Organization</label>
          <input type="text" placeholder="Health System or Hospital" className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-blue-600" />
        </div>
        <button 
          onClick={() => setDemoModalOpen(false)}
          className="w-full py-3 rounded-lg bg-blue-600 text-white font-bold text-sm hover:bg-blue-700 transition-colors cursor-pointer"
        >
          Submit Request
        </button>
        <button 
          onClick={() => setDemoModalOpen(false)}
          className="w-full py-2 text-slate-500 text-xs font-semibold hover:text-slate-800 transition-colors"
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
)}

</div>
);
}
