"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ChevronRight, Sparkles, CheckCircle2, ShieldCheck, Database, Code, 
  Terminal, Layers, Cpu, ArrowRight, Copy, Check, Server, Lock, Globe, Zap, FileCode, Users, Activity
} from "lucide-react";
import DnaCanvas from "./DnaCanvas";

export default function HomeView() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [activeCapTab, setActiveCapTab] = useState("fhir");
  const [activeCodeLang, setActiveCodeLang] = useState("typescript");
  const [copiedCode, setCopiedCode] = useState(false);

  const codeSnippets: Record<string, string> = {
    typescript: `import { MetriportMedicalApi } from "@axio/medical-sdk";

const client = new MetriportMedicalApi({
  apiKey: process.env.AXIO_API_KEY!,
  environment: "production",
});

// Search patient medical records across national networks
const records = await client.medical.getPatientRecords({
  facilityId: "fac_884931",
  patientId: "pat_994821",
  conversionFormat: "fhir-r4",
});

console.log(\`Retrieved \${records.resources.length} FHIR clinical resources.\`);`,
    python: `from axio_medical import MedicalClient

client = MedicalClient(
    api_key="axio_live_894821948",
    environment="production"
)

# Request comprehensive patient medical record consolidation
response = client.medical.get_patient_records(
    facility_id="fac_884931",
    patient_id="pat_994821",
    conversion_format="fhir-r4"
)

print(f"Consolidated FHIR records: {len(response.resources)}")`,
    curl: `curl -X POST https://api.axiovital.com/v1/medical/patient/records \\
  -H "Authorization: Bearer axio_live_894821948" \\
  -H "Content-Type: application/json" \\
  -d '{
    "facilityId": "fac_884931",
    "patientId": "pat_994821",
    "conversionFormat": "fhir-r4"
  }'`
  };

  const fhirJsonResponse = `{
  "resourceType": "Bundle",
  "type": "collection",
  "total": 42,
  "entry": [
    {
      "resource": {
        "resourceType": "Patient",
        "id": "pat_994821",
        "gender": "female",
        "birthDate": "1988-04-12",
        "active": true
      }
    },
    {
      "resource": {
        "resourceType": "Observation",
        "id": "obs_vitals_332",
        "status": "final",
        "code": { "text": "Blood Pressure" },
        "valueQuantity": { "value": 120, "unit": "mmHg" }
      }
    }
  ]
}`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippets[activeCodeLang]);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-500 selection:text-white">
      
      {/* HERO SECTION — BRIGHT METRIPORT-INSPIRED AESTHETIC & 3D DNA EMERGENCE */}
      <section className="bg-white pt-6 pb-20 sm:pt-10 sm:pb-28 lg:pt-12 lg:pb-32 relative overflow-hidden flex flex-col min-h-[680px] sm:min-h-[740px] lg:min-h-[820px] border-b border-slate-200/80">
        
        {/* Subtle Ambient Radial Glows for Bright Canvas */}
        <div className="absolute top-10 left-10 w-[600px] h-[500px] bg-blue-100/40 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-20 right-10 w-[550px] h-[450px] bg-purple-100/30 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute inset-0 bg-grid-lines-light opacity-50 pointer-events-none z-0" />

        {/* 3D DNA Emergence Canvas Layer */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <DnaCanvas className="w-full h-full" />
        </div>

        {/* Hero Content Container — Right Half Viewport Placement with Guaranteed Space */}
        <div className="mx-auto max-w-[1440px] w-full px-4 sm:px-6 lg:px-8 relative z-10 pt-28 sm:pt-36 lg:pt-40 flex-1 flex flex-col justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left 5 columns spacer — Open visual space for giant 3D DNA emergence */}
            <div className="hidden lg:block lg:col-span-5 pointer-events-none min-h-[420px]" />

            {/* Right 7 columns — Confident, right-aligned typography */}
            <div className="lg:col-span-7 space-y-6 max-w-2xl lg:pl-8">
              
              {/* Pill Badge */}
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-700 bg-sky-50 border border-sky-200 px-3.5 py-1.5 rounded-full shadow-xs">
                <Sparkles className="h-3.5 w-3.5 text-blue-600" />
                FHIR R4 Native Medical Data Infrastructure
              </div>

              {/* Headline */}
              <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-slate-900 tracking-tight leading-[1.12]">
                Healthcare data infrastructure <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 via-purple-600 to-amber-500 bg-clip-text text-transparent font-extrabold">
                  for next generation care delivery.
                </span>
              </h1>

              {/* Horizontal Data-Flow Accent Line */}
              <div className="h-[2px] max-w-xl w-full bg-gradient-to-r from-blue-600 via-indigo-500 via-purple-500 to-amber-500 opacity-90 my-5 relative flex items-center justify-end rounded-full shadow-xs">
                <div className="h-3 w-3 rounded-full bg-amber-500 shadow-[0_0_10px_#f59e0b] animate-pulse" />
              </div>

              {/* Supporting Paragraph */}
              <p className="text-slate-600 text-base sm:text-lg lg:text-xl leading-relaxed text-pretty max-w-[50ch] font-normal">
                Complete real-time patient context from every source that matters — transformed into relevant intelligence for your care teams and AI agents.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-3">
                <button 
                  onClick={() => setDemoModalOpen(true)}
                  className="btn-primary-bright"
                >
                  Book a demo <ChevronRight className="h-4 w-4 text-slate-400" />
                </button>
                <Link 
                  href="/developers"
                  className="btn-secondary-bright"
                >
                  Read the docs
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* CUSTOMER LOGO STRIP (CLEAN BRIGHT ENTERPRISE STRIP) */}
      <section className="bg-slate-50 border-b border-slate-200 py-9 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1440px]">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-600 mb-6">
            Trusted by leading digital health systems & clinical platforms
          </p>
          <div className="flex flex-wrap items-center justify-between gap-8 md:gap-12 opacity-80 hover:opacity-100 transition-opacity">
            <div className="flex items-center gap-2 text-slate-700 font-bold text-lg cursor-pointer hover:text-blue-600 transition-colors">
              <Server className="h-5 w-5 text-blue-600" /> Wellpath Health
            </div>
            <div className="flex items-center gap-2 text-slate-700 font-bold text-lg cursor-pointer hover:text-blue-600 transition-colors">
              <Zap className="h-5 w-5 text-indigo-600" /> Brightside Health
            </div>
            <div className="flex items-center gap-2 text-slate-700 font-bold text-lg cursor-pointer hover:text-blue-600 transition-colors">
              <Activity className="h-5 w-5 text-purple-600" /> Thyme Care
            </div>
            <div className="flex items-center gap-2 text-slate-700 font-bold text-lg cursor-pointer hover:text-blue-600 transition-colors">
              <Layers className="h-5 w-5 text-pink-600" /> Circle Medical
            </div>
            <div className="flex items-center gap-2 text-slate-700 font-bold text-lg cursor-pointer hover:text-blue-600 transition-colors">
              <Database className="h-5 w-5 text-blue-600" /> General Health
            </div>
            <div className="flex items-center gap-2 text-slate-700 font-bold text-lg cursor-pointer hover:text-blue-600 transition-colors">
              <FileCode className="h-5 w-5 text-emerald-600" /> Canvas Medical
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: UNIFIED MEDICAL API & DATA ENGINE ARCHITECTURE */}
      <section className="py-20 sm:py-28 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
              Unified Healthcare Data Engine
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              One API for the entire healthcare system.
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Connect to national health networks, major EHR systems, and labs to retrieve, consolidate, and stream standardized FHIR R4 clinical data.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: National Networks */}
            <div className="card-bright space-y-4 relative overflow-hidden group">
              <div className="h-12 w-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 font-bold group-hover:scale-110 transition-transform">
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">National Health Networks</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Connect directly to Carequality, CommonWell Health Alliance, and eHealth Exchange to retrieve complete medical histories across 300M+ US lives.
              </p>
              <ul className="space-y-2 pt-2 text-xs font-semibold text-slate-700">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-blue-600" /> Carequality Network Interoperability</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-blue-600" /> CommonWell Alliance Integration</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-blue-600" /> Direct Patient Record Locator</li>
              </ul>
            </div>

            {/* Card 2: EHR Connectors */}
            <div className="card-bright space-y-4 relative overflow-hidden group">
              <div className="h-12 w-12 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-600 font-bold group-hover:scale-110 transition-transform">
                <Database className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Major EHR Direct Integrations</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Native connectors for Epic, Cerner, AthenaHealth, Veradigm, and Allscripts for real-time bi-directional clinical data exchange.
              </p>
              <ul className="space-y-2 pt-2 text-xs font-semibold text-slate-700">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-purple-600" /> Epic Systems MyChart & CareEverywhere</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-purple-600" /> Oracle Cerner Millennium API</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-purple-600" /> AthenaHealth & Veradigm Pipelines</li>
              </ul>
            </div>

            {/* Card 3: Consolidation & FHIR */}
            <div className="card-bright space-y-4 relative overflow-hidden group">
              <div className="h-12 w-12 rounded-xl bg-pink-50 border border-pink-200 flex items-center justify-center text-pink-600 font-bold group-hover:scale-110 transition-transform">
                <Layers className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Record Consolidation & FHIR R4</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                De-duplicate overlapping records, convert legacy C-CDA XML documents, and extract clinical text from PDFs into clean FHIR R4 JSON.
              </p>
              <ul className="space-y-2 pt-2 text-xs font-semibold text-slate-700">
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-pink-600" /> C-CDA & PDF to FHIR R4 Conversion</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-pink-600" /> Automated Patient De-duplication</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-pink-600" /> Standardized Clinical Terminology (RxNorm, SNOMED)</li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 2: INTERACTIVE CORE PLATFORM CAPABILITIES TABS */}
      <section className="py-20 sm:py-28 bg-slate-50/70 border-b border-slate-200">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-600 bg-purple-50 border border-purple-200 px-3 py-1 rounded-full">
              Platform Architecture
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Engineered for clinical precision.
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Explore the core components powering real-time patient data streams and clinical AI context.
            </p>
          </div>

          {/* Capability Navigation Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {[
              { id: "fhir", label: "FHIR Native Engine", icon: Database },
              { id: "consolidation", label: "Record Consolidation", icon: Layers },
              { id: "webhooks", label: "Real-Time Webhooks", icon: Zap },
              { id: "ai", label: "AI Clinical Assistant", icon: Sparkles },
            ].map((tab) => {
              const Icon = tab.icon;
              const active = activeCapTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveCapTab(tab.id)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                    active 
                      ? "bg-slate-900 text-white shadow-md" 
                      : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  <Icon className={`h-4 w-4 ${active ? "text-blue-400" : "text-slate-400"}`} />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Active Tab Panel Content */}
          <div className="bg-white border border-slate-200 rounded-2xl p-8 lg:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              {activeCapTab === "fhir" && (
                <>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Standardized FHIR R4 Data Model</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Stop fighting fragmented data formats. Axiovital standardizes all medical records into structured FHIR R4 resources (`Patient`, `Encounter`, `Observation`, `Condition`, `MedicationRequest`), ready for instant querying.
                  </p>
                  <ul className="space-y-3 font-medium text-sm text-slate-700">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                      <span>Strict FHIR R4 schema validation across all clinical endpoints.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                      <span>Unified REST API for search, retrieval, and subscribe operations.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                      <span>Automatic terminology mapping to LOINC, SNOMED CT, and RxNorm codes.</span>
                    </li>
                  </ul>
                </>
              )}

              {activeCapTab === "consolidation" && (
                <>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">C-CDA & PDF Record Consolidation</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Automatically ingest unstructured clinical documentation, lab PDFs, and XML C-CDA summary documents. Our parsing pipeline extracts discrete lab values, allergies, and diagnostic codes.
                  </p>
                  <ul className="space-y-3 font-medium text-sm text-slate-700">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-5 w-5 text-purple-600 shrink-0 mt-0.5" />
                      <span>Parse multi-page clinical PDFs with high OCR precision.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-5 w-5 text-purple-600 shrink-0 mt-0.5" />
                      <span>Consolidate duplicate patient records across multiple hospital visits.</span>
                    </li>
                  </ul>
                </>
              )}

              {activeCapTab === "webhooks" && (
                <>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Real-Time Event Streaming & Webhooks</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Receive immediate webhook notifications when new patient encounters occur, lab results are finalized, or discharge summaries are generated.
                  </p>
                  <ul className="space-y-3 font-medium text-sm text-slate-700">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                      <span>Instant ADT (Admission, Discharge, Transfer) alert webhooks.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                      <span>Guaranteed event delivery with automatic retry logic and HMAC signatures.</span>
                    </li>
                  </ul>
                </>
              )}

              {activeCapTab === "ai" && (
                <>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Structured Context for Clinical AI Agents</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Raw EHR records are too noisy for LLMs. Axiovital compiles clean, relevant patient timelines into structured AI context payloads for clinical decision support.
                  </p>
                  <ul className="space-y-3 font-medium text-sm text-slate-700">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-5 w-5 text-pink-600 shrink-0 mt-0.5" />
                      <span>HIPAA-compliant LLM context synthesis pipeline.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-5 w-5 text-pink-600 shrink-0 mt-0.5" />
                      <span>Reduce clinician note-taking overhead by 70%.</span>
                    </li>
                  </ul>
                </>
              )}

              <div className="pt-2">
                <button onClick={() => setDemoModalOpen(true)} className="btn-primary-bright">
                  Explore Architecture <ArrowRight className="h-4 w-4 ml-1" />
                </button>
              </div>
            </div>

            {/* Right Side Visual Graphic Code Mockup */}
            <div className="lg:col-span-6 bg-slate-900 rounded-xl p-6 text-slate-200 font-mono text-xs shadow-xl overflow-x-auto border border-slate-800">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                  <span className="text-slate-400 font-sans ml-2 text-xs">fhir_r4_output.json</span>
                </div>
                <span className="text-emerald-400 font-sans text-xs flex items-center gap-1">
                  <Check className="h-3.5 w-3.5" /> 200 OK (112ms)
                </span>
              </div>
              <pre className="text-slate-300 leading-relaxed">
                <code>{fhirJsonResponse}</code>
              </pre>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 3: DEVELOPER-FIRST INTERACTIVE API PLAYGROUND */}
      <section className="py-20 sm:py-28 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column Text */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                Developer First
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Build in minutes with native SDKs & REST APIs.
              </h2>
              <p className="text-slate-600 leading-relaxed text-base">
                Whether you building a digital health app, remote patient monitoring platform, or AI clinical assistant, our SDKs get you up and running instantly.
              </p>
              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-3 font-semibold text-sm text-slate-800">
                  <CheckCircle2 className="h-5 w-5 text-blue-600" /> TypeScript & Node.js Medical SDK
                </div>
                <div className="flex items-center gap-3 font-semibold text-sm text-slate-800">
                  <CheckCircle2 className="h-5 w-5 text-blue-600" /> Python Package (`pip install axio-medical`)
                </div>
                <div className="flex items-center gap-3 font-semibold text-sm text-slate-800">
                  <CheckCircle2 className="h-5 w-5 text-blue-600" /> OpenAPI 3.0 & Postman Workspace
                </div>
              </div>
              <div className="pt-4">
                <Link href="/developers" className="btn-secondary-bright">
                  <FileCode className="h-4 w-4 text-blue-600 mr-1" /> View API Reference
                </Link>
              </div>
            </div>

            {/* Right Column Interactive Code Terminal */}
            <div className="lg:col-span-7 bg-slate-950 rounded-2xl shadow-2xl border border-slate-800 overflow-hidden">
              
              {/* Language Selector Header */}
              <div className="flex items-center justify-between bg-slate-900 border-b border-slate-800 px-4 py-3">
                <div className="flex items-center gap-2">
                  {[
                    { id: "typescript", label: "TypeScript" },
                    { id: "python", label: "Python" },
                    { id: "curl", label: "cURL" },
                  ].map((lang) => (
                    <button
                      key={lang.id}
                      onClick={() => setActiveCodeLang(lang.id)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        activeCodeLang === lang.id 
                          ? "bg-blue-600 text-white shadow-xs" 
                          : "text-slate-400 hover:text-slate-200 hover:bg-slate-800"
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>

                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  {copiedCode ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                  {copiedCode ? "Copied!" : "Copy Code"}
                </button>
              </div>

              {/* Code Snippet Box */}
              <div className="p-6 overflow-x-auto text-xs font-mono leading-relaxed text-slate-200">
                <pre>
                  <code>{codeSnippets[activeCodeLang]}</code>
                </pre>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* SECTION 4: ENTERPRISE SECURITY & HIPAA COMPLIANCE VAULT */}
      <section className="py-20 sm:py-28 bg-slate-900 text-white border-b border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-950/80 border border-amber-800/80 px-3.5 py-1.5 rounded-full">
              <Lock className="h-3.5 w-3.5 text-amber-400" />
              FIPS 140-2 Encrypted Security Vault
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Enterprise security built into every packet.
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              We uphold the highest healthcare data security standards, ensuring complete HIPAA compliance and zero data retention options.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 space-y-3">
              <ShieldCheck className="h-8 w-8 text-blue-400" />
              <h3 className="text-lg font-bold text-white">HIPAA Compliant</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Full Business Associate Agreement (BAA) coverage with end-to-end encrypted clinical transport.
              </p>
            </div>

            <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 space-y-3">
              <Lock className="h-8 w-8 text-purple-400" />
              <h3 className="text-lg font-bold text-white">SOC 2 Type II</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Independently audited SOC 2 Type II certification covering Security, Availability, and Confidentiality.
              </p>
            </div>

            <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 space-y-3">
              <Server className="h-8 w-8 text-emerald-400" />
              <h3 className="text-lg font-bold text-white">Zero Data Retention</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Pass-through pipeline option ensures patient data is never stored permanently on intermediate servers.
              </p>
            </div>

            <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 space-y-3">
              <Users className="h-8 w-8 text-amber-400" />
              <h3 className="text-lg font-bold text-white">Role-Based Access</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Granular patient consent management and audit logs for compliance verification.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 5: IMPACT & SCALE METRICS */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-blue-600">100M+</div>
              <div className="text-xs font-bold text-slate-600 uppercase tracking-wider">Patient Records Indexed</div>
            </div>

            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-purple-600">&lt;180ms</div>
              <div className="text-xs font-bold text-slate-600 uppercase tracking-wider">Median API Latency</div>
            </div>

            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-pink-600">99.99%</div>
              <div className="text-xs font-bold text-slate-600 uppercase tracking-wider">Enterprise SLA Uptime</div>
            </div>

            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-amber-600">100%</div>
              <div className="text-xs font-bold text-slate-600 uppercase tracking-wider">FHIR R4 Compliant</div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 6: FINAL CONVERSION CTA */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          
          <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-10 sm:p-16 text-center text-white space-y-6 shadow-2xl relative overflow-hidden">
            
            <div className="max-w-2xl mx-auto space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                Ready to build the future of healthcare data?
              </h2>
              <p className="text-slate-300 text-base sm:text-lg">
                Join leading digital health platforms and health systems using Axiovital to deliver real-time patient context.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <button 
                onClick={() => setDemoModalOpen(true)}
                className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all shadow-md cursor-pointer flex items-center gap-2"
              >
                Schedule Architecture Demo <ChevronRight className="h-4 w-4" />
              </button>
              <Link 
                href="/developers"
                className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-all border border-white/20"
              >
                Read Developer Docs
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* DEMO MODAL POPUP */}
      {demoModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 rounded-2xl p-8 max-w-md w-full shadow-2xl relative animate-in fade-in zoom-in-95 duration-150">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Book a Live Architecture Demo</h3>
            <p className="text-slate-600 text-sm mb-6">
              Speak with an Axiovital solutions architect to explore FHIR R4 integrations for your health platform.
            </p>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Work Email</label>
                <input type="email" placeholder="name@company.com" className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-blue-600" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Company / Organization</label>
                <input type="text" placeholder="Health System or Platform" className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-blue-600" />
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
