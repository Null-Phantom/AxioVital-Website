"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Search, Shield, CreditCard, User, Layers, CheckCircle2, AlertTriangle, 
  ArrowRight, Activity, ChevronRight, Lock, FileText, Stethoscope, 
  Building2, Database, HelpCircle, BookOpen, Compass, ChevronDown, Check, X,
  Radio, RefreshCw, Eye, KeyRound, Workflow, Server, Users, Award, ShieldAlert
} from "lucide-react";

export default function DocumentationPage() {
  const [activeSection, setActiveSection] = useState("overview");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const sidebarNav = [
    { id: "overview", label: "Overview" },
    { id: "why-axiovital", label: "Why AxioVital" },
    { id: "axiovital", label: "AxioVital" },
    { id: "axioid", label: "AxioID" },
    { id: "axiocard", label: "AxioCard" },
    { id: "how-it-works", label: "How It Works" },
    { id: "security", label: "Security & Privacy" },
    { id: "patient-journey", label: "Patient Journey" },
    { id: "before-after", label: "Before vs After" },
    { id: "hospital-workflows", label: "Hospital Workflows" },
    { id: "stakeholders", label: "Stakeholders" },
    { id: "ecosystem", label: "Ecosystem" },
    { id: "use-cases", label: "Use Cases" },
    { id: "product-philosophy", label: "Product Philosophy" },
    { id: "product-vision", label: "Product Vision" },
    { id: "faq", label: "FAQ" },
    { id: "glossary", label: "Glossary" },
    { id: "confidentiality", label: "Confidentiality Notice" },
  ];

  const searchIndex = [
    { id: "overview", title: "Overview", text: "Healthcare should follow the patient. AxioVital connects hospital workflows around one persistent patient identity." },
    { id: "why-axiovital", title: "Why AxioVital", text: "Healthcare is connected by patients. Its data isn't. Fragmentation problem and consequences." },
    { id: "axiovital", title: "AxioVital Management Layer", text: "11 Hospital management modules: Patient Records, Clinical Workflows, Orders, Laboratory, Radiology, Pharmacy, Billing, Scheduling, Admissions, Dashboards, Administration." },
    { id: "axioid", title: "AxioID Persistent Identity", text: "One permanent identity for every patient across participating providers. Identity and authorization are separate concepts." },
    { id: "axiocard", title: "AxioCard Physical NFC Card", text: "Your healthcare identity in your hand. Physical NFC-enabled card carried by patient." },
    { id: "how-it-works", title: "How AxioCard Works", text: "Two-path access model: TAP for limited emergency info vs TAP + PIN for full authorized history. Lost card != lost medical history." },
    { id: "security", title: "Security & Privacy", text: "Access should be intentional. Least-necessary exposure, role-aware access, auditability, data minimization." },
    { id: "patient-journey", title: "Patient Journey", text: "From referral to treatment without starting over. 8-step interactive timeline." },
    { id: "before-after", title: "Before vs After", text: "Compare legacy paper/fragmented workflows with AxioID + AxioCard continuous care." },
    { id: "hospital-workflows", title: "Hospital Workflows", text: "Patient lifecycle, staff lifecycle, and clinical encounter workflows." },
    { id: "stakeholders", title: "Stakeholders", text: "Benefits for Patients, Doctors, Nurses, Laboratory, Radiology, Pharmacy, Administrators, Healthcare Network." },
    { id: "ecosystem", title: "Ecosystem", text: "AxioID is bigger than a card. Connected ecosystem diagram linking providers." },
    { id: "use-cases", title: "Use Cases", text: "Cross-hospital referral, Emergency identification, Specialist referral, Diagnostic continuity, Medication continuity, Longitudinal patient record." },
    { id: "product-philosophy", title: "Product Philosophy", text: "Power-user first, dense but structured, role-aware, patient-centered, fast handoffs, clear access states." },
    { id: "product-vision", title: "Product Vision", text: "A patient's medical history shouldn't belong to one hospital. One patient, one identity, a lifetime of connected care." },
    { id: "faq", title: "Frequently Asked Questions", text: "Common technical questions about AxioVital, AxioID, AxioCard, security, and record access." },
    { id: "glossary", title: "Glossary", text: "Definitions for AxioVital, AxioID, AxioCard, Participating Provider, Limited Access, Full Access, Patient Journey, Referral, Handoff, Healthcare Ecosystem." },
    { id: "confidentiality", title: "Confidentiality Notice", text: "Public documentation intentionally omits credentials, private infrastructure, cryptographic implementation, and unreleased business strategy." },
  ];

  const searchResults = searchQuery.trim() === "" 
    ? [] 
    : searchIndex.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        item.text.toLowerCase().includes(searchQuery.toLowerCase())
      );

  useEffect(() => {
    const handleScroll = () => {
      const sections = sidebarNav.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sidebarNav[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sidebarNav]);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    setSearchOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const getBreadcrumbLabel = () => {
    const current = sidebarNav.find(s => s.id === activeSection);
    return current ? current.label : "Overview";
  };

  return (
    <div className="bg-[#fcfdfd] min-h-screen font-sans text-slate-900 selection:bg-teal-500 selection:text-white antialiased">
      
      {/* DYNAMIC BREADCRUMB & SEARCH BAR */}
      <div className="bg-white border-b border-slate-200/80 sticky top-[72px] z-40 shadow-xs">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 font-medium text-slate-600">
            <Link href="/" className="hover:text-slate-900 transition-colors">AxioVital Documentation</Link>
            <span className="text-slate-300">/</span>
            <span className="font-bold text-teal-700">{getBreadcrumbLabel()}</span>
          </div>

          {/* Right Search Input */}
          <div className="relative w-full max-w-xs sm:max-w-sm">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
              <input
                type="text"
                placeholder="Search documentation..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setSearchOpen(true);
                }}
                onFocus={() => setSearchOpen(true)}
                className="w-full pl-8 pr-3 py-1 bg-slate-100/90 border border-slate-200 rounded-lg text-xs font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all"
              />
            </div>

            {/* Live Search Popup Overlay */}
            {searchOpen && searchResults.length > 0 && (
              <div className="absolute top-full right-0 w-80 mt-2 bg-white border border-slate-200 rounded-xl shadow-xl p-2 z-50 max-h-80 overflow-y-auto">
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-3 py-1.5">
                  Search Results ({searchResults.length})
                </div>
                {searchResults.map((res) => (
                  <button
                    key={res.id}
                    onClick={() => scrollToSection(res.id)}
                    className="w-full text-left p-2.5 rounded-lg hover:bg-slate-50 transition-colors block cursor-pointer"
                  >
                    <div className="text-xs font-bold text-slate-900">{res.title}</div>
                    <div className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">{res.text}</div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* MAIN DOCUMENTATION LAYOUT (GRID WITH STICKY SIDEBARS) */}
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 py-8 flex gap-8">
        
        {/* LEFT STICKY SIDEBAR NAVIGATION */}
        <aside className="hidden lg:block w-64 shrink-0">
          <div className="sticky top-28 space-y-1.5 pr-2 max-h-[calc(100vh-8rem)] overflow-y-auto">
            <div className="text-[11px] font-extrabold uppercase tracking-widest text-slate-400 px-3 pb-2">
              Documentation Index
            </div>
            {sidebarNav.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold transition-all flex items-center justify-between cursor-pointer ${
                  activeSection === item.id 
                    ? "bg-teal-50 text-teal-800 border border-teal-200/80 shadow-2xs" 
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/70"
                }`}
              >
                <span>{item.label}</span>
                {activeSection === item.id && <ChevronRight className="h-3.5 w-3.5 text-teal-600 shrink-0" />}
              </button>
            ))}
          </div>
        </aside>

        {/* CENTER MAIN DOCUMENTATION BODY */}
        <main className="flex-1 min-w-0 max-w-4xl space-y-20 pb-32">
          
          {/* 1. OVERVIEW */}
          <section id="overview" className="space-y-8 scroll-mt-28 border-b border-slate-200 pb-16">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-50 border border-teal-200/80 px-3 py-1 rounded-full">
                <Compass className="h-3.5 w-3.5 text-teal-600" />
                Product Architecture Overview
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
                Healthcare should follow the patient.
              </h1>
              <p className="text-slate-600 text-lg sm:text-xl font-medium leading-relaxed">
                AxioVital connects hospital workflows around one persistent patient identity.
              </p>
            </div>

            {/* Three Product Layers Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-2xs hover:border-slate-300 transition-all space-y-3">
                <div className="h-10 w-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center font-bold border border-teal-200/60">
                  <Building2 className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">AXIOVITAL</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Unified hospital management layer and healthcare ecosystem bringing core clinical workflows into one dense environment.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-2xs hover:border-slate-300 transition-all space-y-3">
                <div className="h-10 w-10 rounded-xl bg-cyan-50 text-cyan-700 flex items-center justify-center font-bold border border-cyan-200/60">
                  <User className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">AXIOID</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  One persistent identity layer intended to remain valid for every patient across participating healthcare providers.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-2xs hover:border-slate-300 transition-all space-y-3">
                <div className="h-10 w-10 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center font-bold border border-sky-200/60">
                  <CreditCard className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">AXIOCARD</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  A physical NFC-enabled card that lets patients carry and present their healthcare identity at any point of care.
                </p>
              </div>
            </div>

            {/* Visual Relationship Diagram */}
            <div className="bg-slate-900 rounded-2xl p-8 text-white space-y-4 shadow-md">
              <div className="text-xs font-extrabold uppercase tracking-widest text-teal-400">
                System Visual Relationship
              </div>
              <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono font-bold pt-2">
                <div className="bg-slate-800 border border-slate-700 px-4 py-2 rounded-xl text-white">PATIENT</div>
                <span className="text-teal-400">↓</span>
                <div className="bg-slate-800 border border-slate-700 px-4 py-2 rounded-xl text-teal-300">AXIOCARD</div>
                <span className="text-teal-400">↓</span>
                <div className="bg-slate-800 border border-slate-700 px-4 py-2 rounded-xl text-cyan-300">AXIOID</div>
                <span className="text-teal-400">↓</span>
                <div className="bg-slate-800 border border-slate-700 px-4 py-2 rounded-xl text-blue-300">AXIOVITAL</div>
                <span className="text-teal-400">↓</span>
                <div className="bg-teal-600 text-white px-4 py-2 rounded-xl">CONNECTED HEALTHCARE</div>
              </div>
            </div>

            {/* Core Statement Quote */}
            <blockquote className="bg-teal-50/60 border-l-4 border-teal-600 p-5 rounded-r-2xl text-slate-800 text-sm font-semibold italic">
              "A patient should not have to start their medical story from zero every time they visit a new hospital."
            </blockquote>
          </section>

          {/* 2. WHY AXIOVITAL */}
          <section id="why-axiovital" className="space-y-8 scroll-mt-28 border-b border-slate-200 pb-16">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Problem Statement</span>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Healthcare is connected by patients. Its data isn't.
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                A patient moves between disparate medical facilities during their care lifecycle, but each institution maintains isolated records.
              </p>
            </div>

            {/* Fragmentation Diagram */}
            <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500">The Fragmented Patient Journey Today</div>
              <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-slate-700">
                <span className="bg-white px-3 py-1.5 rounded-lg border border-slate-200">Hospital A</span>
                <span className="text-slate-400">→</span>
                <span className="bg-white px-3 py-1.5 rounded-lg border border-slate-200">Specialist</span>
                <span className="text-slate-400">→</span>
                <span className="bg-white px-3 py-1.5 rounded-lg border border-slate-200">Laboratory</span>
                <span className="text-slate-400">→</span>
                <span className="bg-white px-3 py-1.5 rounded-lg border border-slate-200">Radiology</span>
                <span className="text-slate-400">→</span>
                <span className="bg-white px-3 py-1.5 rounded-lg border border-slate-200">Pharmacy</span>
                <span className="text-slate-400">→</span>
                <span className="bg-white px-3 py-1.5 rounded-lg border border-slate-200">Hospital B</span>
              </div>
            </div>

            {/* Consequences Grid */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">Consequences of Fragmented Data:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
                <div className="bg-white border border-slate-200 rounded-xl p-3.5 flex items-center gap-2.5">
                  <X className="h-4 w-4 text-red-500 shrink-0" />
                  <span>Duplicate patient profiles across facilities</span>
                </div>
                <div className="bg-white border border-slate-200 rounded-xl p-3.5 flex items-center gap-2.5">
                  <X className="h-4 w-4 text-red-500 shrink-0" />
                  <span>Missing longitudinal medical history</span>
                </div>
                <div className="bg-white border border-slate-200 rounded-xl p-3.5 flex items-center gap-2.5">
                  <X className="h-4 w-4 text-red-500 shrink-0" />
                  <span>Lost paperwork and clinical summaries</span>
                </div>
                <div className="bg-white border border-slate-200 rounded-xl p-3.5 flex items-center gap-2.5">
                  <X className="h-4 w-4 text-red-500 shrink-0" />
                  <span>Repeated diagnostic tests and lab work</span>
                </div>
                <div className="bg-white border border-slate-200 rounded-xl p-3.5 flex items-center gap-2.5">
                  <X className="h-4 w-4 text-red-500 shrink-0" />
                  <span>Repeated explanations by the patient</span>
                </div>
                <div className="bg-white border border-slate-200 rounded-xl p-3.5 flex items-center gap-2.5">
                  <X className="h-4 w-4 text-red-500 shrink-0" />
                  <span>Slower clinical decisions & referral friction</span>
                </div>
              </div>
            </div>

            {/* Transition Statement */}
            <div className="p-4 bg-teal-50 border border-teal-200 rounded-xl text-center text-xs font-extrabold uppercase tracking-widest text-teal-800">
              One patient → One identity → One continuous story
            </div>
          </section>

          {/* 3. AXIOVITAL */}
          <section id="axiovital" className="space-y-8 scroll-mt-28 border-b border-slate-200 pb-16">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-1 rounded-md border border-teal-200/80">
                Hospital Management Application
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                The hospital management layer.
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                AxioVital is a full hospital management application designed to bring major hospital workflows into one dense, power-user environment.
              </p>
            </div>

            {/* 11 Modules Interactive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { title: "PATIENT RECORDS", desc: "Full patient profiles and clinical history." },
                { title: "CLINICAL WORKFLOWS", desc: "Doctor notes, diagnoses and treatment plans." },
                { title: "ORDERS", desc: "Tests, procedures and prescriptions." },
                { title: "LABORATORY", desc: "Lab requests and results." },
                { title: "RADIOLOGY", desc: "Imaging requests and results." },
                { title: "PHARMACY", desc: "Medication dispensing and tracking." },
                { title: "BILLING", desc: "Patient charges and payments." },
                { title: "SCHEDULING", desc: "Appointments and calendars." },
                { title: "ADMISSIONS", desc: "Patient check-in and admission workflows." },
                { title: "DASHBOARDS & REPORTS", desc: "Operational and analytical overviews." },
                { title: "ADMINISTRATION", desc: "Staff, permissions and hospital settings." },
              ].map((mod, idx) => (
                <div key={idx} className="bg-white border border-slate-200 rounded-xl p-4 space-y-1.5 shadow-2xs hover:border-teal-500 transition-colors">
                  <div className="text-[11px] font-extrabold uppercase tracking-wider text-teal-700">{mod.title}</div>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">{mod.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 4. AXIOID */}
          <section id="axioid" className="space-y-8 scroll-mt-28 border-b border-slate-200 pb-16">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-700 bg-cyan-50 px-2.5 py-1 rounded-md border border-cyan-200/80">
                Persistent Patient Identity Layer
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                One permanent identity for every patient.
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                AxioID is a persistent patient identity intended to remain valid across participating providers in the AxioVital network.
              </p>
            </div>

            {/* Concept Comparison Diagram */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-100/80 border border-slate-200 rounded-2xl p-5 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Instead of Disjointed Hospital IDs:</div>
                <div className="text-xs font-mono space-y-1.5 text-slate-600">
                  <div>Hospital A → Patient ID A</div>
                  <div>Hospital B → Patient ID B</div>
                  <div>Hospital C → Patient ID C</div>
                </div>
              </div>

              <div className="bg-teal-50/70 border border-teal-200 rounded-2xl p-5 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-teal-800">The AxioID Model:</div>
                <div className="text-xs font-mono space-y-1 text-teal-900 font-semibold">
                  <div>Patient → <span className="bg-teal-600 text-white px-2 py-0.5 rounded">ONE AXIOID</span></div>
                  <div className="pl-14 text-slate-600 font-normal">↓ Hospital A</div>
                  <div className="pl-14 text-slate-600 font-normal">↓ Hospital B</div>
                  <div className="pl-14 text-slate-600 font-normal">↓ Laboratory / Pharmacy</div>
                </div>
              </div>
            </div>

            {/* Clarification Callouts */}
            <div className="space-y-3">
              <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-xs font-bold text-amber-900 flex items-start gap-2.5">
                <AlertTriangle className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-extrabold uppercase block mb-0.5">Important Clarification</span>
                  "AxioID is not simply another hospital registration number."
                </div>
              </div>

              <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl text-xs font-bold text-blue-900 flex items-start gap-2.5">
                <Shield className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-extrabold uppercase block mb-0.5">Access Scope</span>
                  "Identity and authorization are separate concepts. AxioID does NOT automatically mean unrestricted access to every medical record."
                </div>
              </div>
            </div>
          </section>

          {/* 5. AXIOCARD */}
          <section id="axiocard" className="space-y-8 scroll-mt-28 border-b border-slate-200 pb-16">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-2.5 py-1 rounded-md border border-sky-200/80">
                Physical NFC Access Point
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Your healthcare identity, in your hand.
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                AxioCard is a physical NFC-enabled card carried by the patient to provide a simple physical access point to their AxioID.
              </p>
            </div>

            {/* Realistic AxioCard Mockup */}
            <div className="max-w-md mx-auto bg-gradient-to-br from-slate-900 via-slate-800 to-teal-950 text-white rounded-2xl p-6 shadow-xl border border-slate-700 space-y-8 relative overflow-hidden">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Activity className="h-5 w-5 text-teal-400" />
                  <span className="font-black tracking-tight text-sm">AXIOVITAL</span>
                </div>
                <Radio className="h-6 w-6 text-teal-400 animate-pulse" />
              </div>

              <div className="space-y-1">
                <div className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">PHYSICAL ACCESS POINT</div>
                <div className="text-xl font-black tracking-wider text-teal-300">AXIOCARD</div>
              </div>

              <div className="flex items-center justify-between border-t border-slate-700/80 pt-4">
                <div>
                  <div className="text-[9px] uppercase tracking-wider text-slate-400">PERSISTENT IDENTITY</div>
                  <div className="text-xs font-mono font-bold text-white">AxioID: 8849-2026-US</div>
                </div>
                <div className="h-8 w-11 bg-amber-400/20 border border-amber-400/40 rounded-md flex items-center justify-center text-[10px] font-mono font-bold text-amber-300">
                  NFC
                </div>
              </div>
            </div>

            {/* 5 Interaction Steps */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">Interaction Steps:</h3>
              <ol className="grid grid-cols-1 sm:grid-cols-5 gap-2 text-xs">
                {[
                  "1. Patient presents the AxioCard.",
                  "2. NFC interaction identifies AxioID.",
                  "3. System determines permitted access level.",
                  "4. Additional authentication required if needed.",
                  "5. Authorized staff continue care."
                ].map((step, idx) => (
                  <li key={idx} className="bg-white border border-slate-200 rounded-xl p-3 text-slate-700 font-medium space-y-1">
                    <div>{step}</div>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          {/* 6. HOW IT WORKS */}
          <section id="how-it-works" className="space-y-8 scroll-mt-28 border-b border-slate-200 pb-16">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-1 rounded-md border border-teal-200/80">
                Two-Path Access Model
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                How AxioCard Works
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Intentional access design with two distinct operational paths based on authentication requirements.
              </p>
            </div>

            {/* Two Path Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Path 1 */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4 shadow-2xs">
                <div className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-amber-800 bg-amber-50 border border-amber-200 px-3 py-1 rounded-md">
                  PATH 1: TAP
                </div>
                <div className="text-sm font-bold text-slate-900">Limited Emergency Information</div>
                <ul className="text-xs text-slate-600 space-y-2 list-disc pl-4">
                  <li>Blood type</li>
                  <li>Known severe allergies</li>
                  <li>Emergency contact details</li>
                  <li>Essential limited safety information</li>
                </ul>
              </div>

              {/* Path 2 */}
              <div className="bg-white border border-teal-200 rounded-2xl p-6 space-y-4 shadow-2xs">
                <div className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-teal-800 bg-teal-50 border border-teal-200 px-3 py-1 rounded-md">
                  PATH 2: TAP + PIN
                </div>
                <div className="text-sm font-bold text-slate-900">Full Authorized Medical History</div>
                <ul className="text-xs text-slate-600 space-y-2 list-disc pl-4">
                  <li>Diagnoses & treatment plans</li>
                  <li>Previous test & lab results</li>
                  <li>Active & past prescriptions</li>
                  <li>Treatment history</li>
                  <li>Full clinical records</li>
                </ul>
              </div>
            </div>

            {/* Lost Card Highlight */}
            <div className="p-4 bg-slate-900 text-white rounded-xl text-center text-xs font-extrabold uppercase tracking-widest">
              Highlight: "Lost card ≠ lost medical history"
            </div>
          </section>

          {/* 7. SECURITY & PRIVACY */}
          <section id="security" className="space-y-8 scroll-mt-28 border-b border-slate-200 pb-16">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Security Architecture</span>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Access should be intentional.
              </h2>
            </div>

            {/* Principles List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-700 font-medium">
              {[
                "Least-necessary exposure",
                "Additional authentication for sensitive information",
                "Patient-centered identity",
                "Role-aware access control",
                "Full auditability",
                "Data minimization",
                "Controlled identity and card lifecycle"
              ].map((p, idx) => (
                <div key={idx} className="bg-white border border-slate-200 rounded-xl p-4 flex items-center gap-3">
                  <Shield className="h-4 w-4 text-teal-600 shrink-0" />
                  <span>{p}</span>
                </div>
              ))}
            </div>

            {/* Prominent Confidentiality Notice */}
            <div className="p-5 bg-slate-100 border border-slate-300 rounded-xl text-xs text-slate-800 space-y-1">
              <div className="font-extrabold uppercase tracking-wider text-slate-900">Documentation Notice:</div>
              <p className="italic">
                "Detailed cryptographic mechanisms, credentials, private infrastructure, internal authorization implementation and other security-sensitive details are intentionally not disclosed."
              </p>
            </div>
          </section>

          {/* 8. PATIENT JOURNEY */}
          <section id="patient-journey" className="space-y-8 scroll-mt-28 border-b border-slate-200 pb-16">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-1 rounded-md border border-teal-200/80">
                End-to-End Referral Flow
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                From referral to treatment — without starting over.
              </h2>
            </div>

            {/* Interactive 8-Step Timeline */}
            <div className="space-y-3">
              {[
                { step: "01", title: "Initial care", desc: "Patient is treated at Hospital A." },
                { step: "02", title: "Referral", desc: "Patient is referred to another provider." },
                { step: "03", title: "Arrival", desc: "Patient reaches Hospital B." },
                { step: "04", title: "AxioCard", desc: "Patient taps the card." },
                { step: "05", title: "AxioID", desc: "Identity is recognized." },
                { step: "06", title: "Authentication", desc: "Patient provides additional authentication when required." },
                { step: "07", title: "Authorized record access", desc: "Relevant history becomes available." },
                { step: "08", title: "Continue care", desc: "The receiving clinician can continue with greater context." }
              ].map((item, idx) => (
                <div key={idx} className="bg-white border border-slate-200 rounded-xl p-4 flex items-center gap-4 hover:border-teal-500 transition-colors">
                  <div className="h-9 w-9 rounded-lg bg-teal-600 text-white font-extrabold text-xs flex items-center justify-center shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">{item.title}</div>
                    <div className="text-xs text-slate-600 mt-0.5">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 9. BEFORE VS AFTER */}
          <section id="before-after" className="space-y-8 scroll-mt-28 border-b border-slate-200 pb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Before vs After
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Today */}
              <div className="bg-slate-100/90 border border-slate-200 rounded-2xl p-6 space-y-4">
                <div className="text-xs font-extrabold uppercase tracking-wider text-slate-500">TODAY (FRAGMENTED)</div>
                <div className="text-xs font-mono space-y-2 text-slate-600">
                  <div className="bg-white p-2 rounded border border-slate-200">Paperwork</div>
                  <div className="text-center text-slate-400">↓</div>
                  <div className="bg-white p-2 rounded border border-slate-200">Phone calls</div>
                  <div className="text-center text-slate-400">↓</div>
                  <div className="bg-white p-2 rounded border border-slate-200">Missing records</div>
                  <div className="text-center text-slate-400">↓</div>
                  <div className="bg-white p-2 rounded border border-slate-200">Repeated tests</div>
                  <div className="text-center text-slate-400">↓</div>
                  <div className="bg-white p-2 rounded border border-slate-200">Waiting</div>
                  <div className="text-center text-slate-400">↓</div>
                  <div className="bg-red-50 text-red-700 font-bold p-2 rounded border border-red-200">Delayed care</div>
                </div>
              </div>

              {/* With AxioID */}
              <div className="bg-teal-50/80 border border-teal-200 rounded-2xl p-6 space-y-4">
                <div className="text-xs font-extrabold uppercase tracking-wider text-teal-800">WITH AXIOID + AXIOCARD</div>
                <div className="text-xs font-mono space-y-2 text-teal-950 font-semibold">
                  <div className="bg-white p-2 rounded border border-teal-200">TAP</div>
                  <div className="text-center text-teal-500">↓</div>
                  <div className="bg-white p-2 rounded border border-teal-200">IDENTIFY</div>
                  <div className="text-center text-teal-500">↓</div>
                  <div className="bg-white p-2 rounded border border-teal-200">AUTHENTICATE</div>
                  <div className="text-center text-teal-500">↓</div>
                  <div className="bg-white p-2 rounded border border-teal-200">ACCESS</div>
                  <div className="text-center text-teal-500">↓</div>
                  <div className="bg-teal-600 text-white p-2 rounded font-bold">CONTINUE CARE</div>
                </div>
              </div>
            </div>
          </section>

          {/* 10. HOSPITAL WORKFLOWS */}
          <section id="hospital-workflows" className="space-y-8 scroll-mt-28 border-b border-slate-200 pb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Hospital Workflows
            </h2>

            <div className="space-y-6">
              {/* Patient Lifecycle */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3">
                <div className="text-xs font-extrabold uppercase tracking-wider text-teal-700">Patient Lifecycle</div>
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono font-medium text-slate-700">
                  {["Registration", "Admission", "Clinical encounter", "Orders", "Results", "Treatment", "Medication", "Billing", "Discharge", "Follow-up"].map((step, idx) => (
                    <span key={idx} className="bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
                      {step} {idx < 9 && "→"}
                    </span>
                  ))}
                </div>
              </div>

              {/* Staff Lifecycle */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3">
                <div className="text-xs font-extrabold uppercase tracking-wider text-teal-700">Staff Lifecycle</div>
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono font-medium text-slate-700">
                  {["Staff management", "Roles", "Permissions", "Department workflows", "Dashboards & Administration"].map((step, idx) => (
                    <span key={idx} className="bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
                      {step} {idx < 4 && "→"}
                    </span>
                  ))}
                </div>
              </div>

              {/* Clinical Workflow */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3">
                <div className="text-xs font-extrabold uppercase tracking-wider text-teal-700">Clinical Workflow</div>
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono font-medium text-slate-700">
                  {["Identify patient", "Review authorized history", "Document encounter", "Create orders", "Receive results", "Update treatment plan", "Prescribe next steps", "Record outcome"].map((step, idx) => (
                    <span key={idx} className="bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
                      {step} {idx < 7 && "→"}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 11. STAKEHOLDERS */}
          <section id="stakeholders" className="space-y-8 scroll-mt-28 border-b border-slate-200 pb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Stakeholders
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              {[
                { title: "PATIENTS", points: ["Less paperwork", "Less repetition", "Easier continuity between providers"] },
                { title: "DOCTORS", points: ["Better clinical context", "Faster access to relevant history", "Less time reconstructing records"] },
                { title: "NURSES & CLINICAL STAFF", points: ["More coherent information", "Smoother handoffs"] },
                { title: "LABORATORY", points: ["Patient-linked test workflows"] },
                { title: "RADIOLOGY", points: ["Patient-linked imaging workflows"] },
                { title: "PHARMACY", points: ["Patient-linked medication workflows"] },
                { title: "HOSPITAL ADMINISTRATORS", points: ["Unified workflows", "Staff management & reporting", "Reduced operational fragmentation"] },
                { title: "HEALTHCARE NETWORK", points: ["Persistent patient identity", "Connected patient journeys", "Less fragmentation"] },
              ].map((s, idx) => (
                <div key={idx} className="bg-white border border-slate-200 rounded-xl p-4 space-y-2">
                  <div className="font-extrabold uppercase text-teal-700">{s.title}</div>
                  <ul className="space-y-1 text-slate-600 list-disc pl-4">
                    {s.points.map((pt, pIdx) => <li key={pIdx}>{pt}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* 12. ECOSYSTEM */}
          <section id="ecosystem" className="space-y-8 scroll-mt-28 border-b border-slate-200 pb-16">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Network Diagram</span>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                AxioID is bigger than a card.
              </h2>
            </div>

            {/* Interactive Ecosystem Diagram */}
            <div className="bg-slate-900 text-white rounded-2xl p-8 space-y-8 shadow-lg">
              <div className="text-center space-y-4">
                <div className="inline-block bg-teal-500 text-slate-950 font-black text-sm px-6 py-2 rounded-full tracking-widest uppercase">
                  AXIOID
                </div>
                <div className="text-xs text-slate-400">The Persistent Identity Layer</div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-center text-xs font-mono">
                {["Hospitals", "Doctors", "Patients", "Laboratories", "Radiology", "Pharmacies"].map((node, nIdx) => (
                  <div key={nIdx} className="bg-slate-800 border border-slate-700 p-3 rounded-xl text-teal-300 font-bold">
                    {node}
                  </div>
                ))}
              </div>

              <div className="border-t border-slate-800 pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center text-xs">
                <div>
                  <div className="font-bold text-teal-400">AXIOCARD</div>
                  <div className="text-slate-400 text-[11px] mt-0.5">The physical access point</div>
                </div>
                <div>
                  <div className="font-bold text-cyan-400">AXIOID</div>
                  <div className="text-slate-400 text-[11px] mt-0.5">The persistent identity layer</div>
                </div>
                <div>
                  <div className="font-bold text-blue-400">AXIOVITAL</div>
                  <div className="text-slate-400 text-[11px] mt-0.5">The platform connecting workflows</div>
                </div>
              </div>
            </div>
          </section>

          {/* 13. USE CASES */}
          <section id="use-cases" className="space-y-8 scroll-mt-28 border-b border-slate-200 pb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Use Cases
            </h2>

            <div className="space-y-4 text-xs">
              {[
                { title: "Cross-hospital referral", prob: "Patient transferred between facilities without history.", sol: "Receiving hospital identifies AxioID to access authorized transfer summaries." },
                { title: "Emergency identification", prob: "Unconscious patient arrives at emergency room.", sol: "AxioCard TAP path provides immediate blood type, allergies, and emergency contact." },
                { title: "Specialist referral", prob: "Specialist lacks prior diagnostic test results.", sol: "AxioID connects specialist encounter to existing lab and radiology records." },
                { title: "Diagnostic continuity", prob: "Duplicate blood tests and imaging requested.", sol: "Clinician views recent tests conducted across participating network labs." },
                { title: "Medication continuity", prob: "Unknown active prescriptions during admission.", sol: "Pharmacy and admission modules reflect active medication history." },
                { title: "Longitudinal patient record", prob: "Fragmented medical history scattered over lifetime.", sol: "AxioID anchors continuous clinical timeline across participating providers." },
              ].map((uc, idx) => (
                <div key={idx} className="bg-white border border-slate-200 rounded-xl p-4 space-y-2">
                  <div className="font-extrabold text-sm text-slate-900">{uc.title}</div>
                  <div className="text-slate-500 font-medium">Problem: {uc.prob}</div>
                  <div className="text-teal-800 font-semibold bg-teal-50 p-2 rounded-lg border border-teal-200/80">Workflow Solution: {uc.sol}</div>
                </div>
              ))}
            </div>
          </section>

          {/* 14. PRODUCT PHILOSOPHY */}
          <section id="product-philosophy" className="space-y-8 scroll-mt-28 border-b border-slate-200 pb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Product Philosophy
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-semibold text-slate-700">
              {["Power-user first", "Dense but structured", "Role-aware", "Patient-centered", "Fast handoffs", "Clear access states"].map((p, idx) => (
                <div key={idx} className="bg-white border border-slate-200 rounded-xl p-4 text-center">
                  {p}
                </div>
              ))}
            </div>
          </section>

          {/* 15. PRODUCT VISION */}
          <section id="product-vision" className="space-y-8 scroll-mt-28 border-b border-slate-200 pb-16">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Long-Term Vision</span>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                A patient's medical history shouldn't belong to one hospital.
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                A patient moves between healthcare institutions throughout life. Their identity should remain persistent, and their authorized healthcare context should move with them.
              </p>
            </div>

            <div className="bg-gradient-to-r from-teal-900 to-slate-900 text-white rounded-2xl p-8 text-center space-y-3 shadow-md">
              <div className="text-xs font-mono uppercase tracking-widest text-teal-400">VISION STATEMENT</div>
              <div className="text-xl sm:text-2xl font-extrabold tracking-tight">
                ONE PATIENT. ONE IDENTITY. A LIFETIME OF CONNECTED CARE.
              </div>
            </div>
          </section>

          {/* 16. FAQ */}
          <section id="faq" className="space-y-8 scroll-mt-28 border-b border-slate-200 pb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>

            <div className="space-y-3">
              {[
                { q: "What is AxioVital?", a: "AxioVital is a full hospital management application bringing clinical, administrative, and operational workflows into one power-user platform." },
                { q: "What is AxioID?", a: "AxioID is a persistent patient identity intended to remain valid across participating providers in the AxioVital network." },
                { q: "What is AxioCard?", a: "AxioCard is a physical NFC-enabled card carried by the patient to provide a simple physical access point to their AxioID." },
                { q: "Does the card expose the entire medical record?", a: "No. The card operates on a two-path access model: TAP exposes only limited emergency info (e.g. blood type, allergies), while TAP + PIN is required for full history." },
                { q: "Why use AxioID if hospitals already have patient IDs?", a: "Legacy patient IDs are local to single hospitals. AxioID provides one persistent identity across participating network providers." },
                { q: "Does AxioID automatically give every hospital every record?", a: "No. Identity and authorization are separate concepts. AxioID does not mean unrestricted record access." },
                { q: "Who uses AxioVital?", a: "Doctors, nurses, lab technicians, radiologists, pharmacists, hospital administrators, and patients." },
                { q: "What problem is AxioVital solving?", a: "Healthcare fragmentation, duplicate patient profiles, missing medical histories, and repeated diagnostic testing." },
                { q: "Is AxioVital only for hospitals?", a: "No. It connects hospitals, specialists, laboratories, radiology centers, and pharmacies across the healthcare network." },
                { q: "Is AxioVital a clinical decision-making system?", a: "AxioVital provides structured context and workflow automation to assist authorized clinicians; clinical decisions remain with attending medical staff." },
              ].map((faq, idx) => (
                <div key={idx} className="bg-white border border-slate-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                    className="w-full p-4 text-left font-bold text-xs text-slate-900 flex items-center justify-between hover:bg-slate-50 cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`h-4 w-4 text-slate-400 transition-transform ${expandedFaq === idx ? "rotate-180" : ""}`} />
                  </button>
                  {expandedFaq === idx && (
                    <div className="px-4 pb-4 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* 17. GLOSSARY */}
          <section id="glossary" className="space-y-8 scroll-mt-28 border-b border-slate-200 pb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Glossary
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              {[
                { term: "AxioVital", def: "Unified hospital management application and healthcare platform." },
                { term: "AxioID", def: "Persistent patient identity layer across participating providers." },
                { term: "AxioCard", def: "Physical NFC-enabled card providing physical access point to AxioID." },
                { term: "Participating provider", def: "Healthcare institution connected to the AxioVital network." },
                { term: "Limited access", def: "TAP path access displaying emergency safety info only." },
                { term: "Full access", def: "TAP + PIN authorized access to complete clinical history." },
                { term: "Patient journey", def: "End-to-end clinical progression across multiple care providers." },
                { term: "Referral", def: "Transition of patient care from one provider to another." },
                { term: "Handoff", def: "Transfer of clinical context between healthcare staff." },
                { term: "Healthcare ecosystem", def: "Network of hospitals, labs, pharmacies, and specialists." },
              ].map((g, idx) => (
                <div key={idx} className="bg-white border border-slate-200 rounded-xl p-4 space-y-1">
                  <div className="font-extrabold text-teal-700">{g.term}</div>
                  <div className="text-slate-600">{g.def}</div>
                </div>
              ))}
            </div>
          </section>

          {/* 18. CONFIDENTIALITY NOTICE */}
          <section id="confidentiality" className="space-y-6 scroll-mt-28">
            <div className="p-6 bg-slate-100 border border-slate-300 rounded-2xl space-y-2 text-xs text-slate-700">
              <div className="font-extrabold uppercase text-slate-900 tracking-wider">Confidentiality & Public Notice</div>
              <p className="leading-relaxed">
                "Certain implementation and business details are intentionally omitted from public documentation. Public documentation intentionally does NOT contain source code, API keys, credentials, private URLs, production infrastructure, database schemas, cryptographic keys, private authorization implementation, unreleased features, private business strategy, customer information, or patient information."
              </p>
            </div>
          </section>

        </main>

        {/* RIGHT STICKY SIDEBAR ("ON THIS PAGE") */}
        <aside className="hidden xl:block w-56 shrink-0">
          <div className="sticky top-28 space-y-2 pr-2 text-xs">
            <div className="font-extrabold uppercase tracking-widest text-slate-400 text-[10px] pb-1 border-b border-slate-200">
              On this page
            </div>
            <nav className="space-y-1 text-[11px] font-medium text-slate-500">
              <button onClick={() => scrollToSection("overview")} className="block hover:text-teal-700 cursor-pointer">Overview</button>
              <button onClick={() => scrollToSection("why-axiovital")} className="block hover:text-teal-700 cursor-pointer">Why AxioVital</button>
              <button onClick={() => scrollToSection("axiovital")} className="block hover:text-teal-700 cursor-pointer">Hospital Management Layer</button>
              <button onClick={() => scrollToSection("axioid")} className="block hover:text-teal-700 cursor-pointer">Persistent Identity Layer</button>
              <button onClick={() => scrollToSection("axiocard")} className="block hover:text-teal-700 cursor-pointer">AxioCard NFC Access</button>
              <button onClick={() => scrollToSection("how-it-works")} className="block hover:text-teal-700 cursor-pointer">Two-Path Access Model</button>
              <button onClick={() => scrollToSection("security")} className="block hover:text-teal-700 cursor-pointer">Security Principles</button>
              <button onClick={() => scrollToSection("patient-journey")} className="block hover:text-teal-700 cursor-pointer">8-Step Patient Journey</button>
              <button onClick={() => scrollToSection("before-after")} className="block hover:text-teal-700 cursor-pointer">Before vs After Matrix</button>
              <button onClick={() => scrollToSection("hospital-workflows")} className="block hover:text-teal-700 cursor-pointer">Hospital Workflows</button>
              <button onClick={() => scrollToSection("stakeholders")} className="block hover:text-teal-700 cursor-pointer">Stakeholders</button>
              <button onClick={() => scrollToSection("ecosystem")} className="block hover:text-teal-700 cursor-pointer">Ecosystem Network</button>
              <button onClick={() => scrollToSection("use-cases")} className="block hover:text-teal-700 cursor-pointer">Clinical Use Cases</button>
              <button onClick={() => scrollToSection("product-philosophy")} className="block hover:text-teal-700 cursor-pointer">Product Philosophy</button>
              <button onClick={() => scrollToSection("product-vision")} className="block hover:text-teal-700 cursor-pointer">Long-Term Vision</button>
              <button onClick={() => scrollToSection("faq")} className="block hover:text-teal-700 cursor-pointer">FAQ</button>
              <button onClick={() => scrollToSection("glossary")} className="block hover:text-teal-700 cursor-pointer">Glossary</button>
              <button onClick={() => scrollToSection("confidentiality")} className="block hover:text-teal-700 cursor-pointer">Confidentiality</button>
            </nav>
          </div>
        </aside>

      </div>

    </div>
  );
}
