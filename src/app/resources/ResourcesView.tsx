"use client";

import { useState } from "react";
import Link from "next/link";
import { BookOpen, Video, FileText, ArrowRight, ShieldCheck, Cpu, Layers, Activity } from "lucide-react";

export default function ResourcesView() {
  const [filter, setFilter] = useState("all");

  const materials = [
    {
      title: "Ambient AI Documentation: Eliminating Clinician Charting Fatigue",
      category: "ai",
      type: "Clinical Whitepaper",
      desc: "How ambient audio models transcribe doctor-patient consultations into structured SOAP notes.",
      icon: Cpu,
      pillarHref: "/ai-features",
      pillarLabel: "AxioAI Intelligence"
    },
    {
      title: "The FHIR R4 Integration Playbook for Multi-Facility Hospitals",
      category: "interoperability",
      type: "Engineering Guide",
      desc: "Step-by-step architecture for linking legacy EHR systems with modern cloud API gateways.",
      icon: Layers,
      pillarHref: "/platform",
      pillarLabel: "Platform Architecture"
    },
    {
      title: "1-Tap Smart NFC Kiosk Check-In: Reducing ER Queue Latency",
      category: "workflow",
      type: "Case Analysis",
      desc: "Replacing paper registration forms with hardware AXIO Cards to streamline hospital throughput.",
      icon: Activity,
      pillarHref: "/hospitals",
      pillarLabel: "Hospital Ecosystem"
    },
    {
      title: "HIPAA Security Rule & FIPS 140-2 Encrypted Health Record Vaults",
      category: "security",
      type: "Compliance Brief",
      desc: "Technical analysis of zero-trust RBAC access controls, AES-256 encryption, and audit logs.",
      icon: ShieldCheck,
      pillarHref: "/about",
      pillarLabel: "Compliance & Security"
    },
    {
      title: "Automated ICD-10 Coding Assistance & Billing Cycle Speed",
      category: "ai",
      type: "Technical Whitepaper",
      desc: "Machine learning workflows for mapping clinical dictations to accurate billing codes.",
      icon: Cpu,
      pillarHref: "/products#axioai",
      pillarLabel: "AxioAI Suite"
    },
    {
      title: "Automating Diagnostic Laboratory Specimen Routing & LIS Syncing",
      category: "workflow",
      type: "Implementation Guide",
      desc: "Binding diagnostic orders to AXIO-ID tokens to eliminate specimen mislabeling.",
      icon: Activity,
      pillarHref: "/laboratories",
      pillarLabel: "AxioLab Gateway"
    }
  ];

  const filtered = filter === "all" ? materials : materials.filter(m => m.category === filter);

  return (
    <div className="bg-slate-50 min-h-screen py-16 sm:py-24 font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3.5 py-1 rounded-full border border-blue-200">
            AxioVital Insights & Knowledge Hub
          </span>
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl">
            Healthcare Technical Resources
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Peer-reviewed engineering guides, FHIR interoperability playbooks, HIPAA compliance whitepapers, and clinical workflow studies.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2">
          {[
            { id: "all", label: "All Content" },
            { id: "ai", label: "Healthcare AI" },
            { id: "interoperability", label: "EHR Interoperability" },
            { id: "workflow", label: "Workflow Automation" },
            { id: "security", label: "Security & Compliance" }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all border ${
                filter === cat.id 
                  ? "bg-blue-600 text-white border-blue-600 shadow-md" 
                  : "bg-white text-slate-600 border-slate-200 hover:border-slate-300"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="bg-white border border-slate-200/90 p-7 rounded-3xl shadow-sm flex flex-col justify-between space-y-5 hover:shadow-md transition-all">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded border border-blue-200">
                      {item.type}
                    </span>
                    <Icon className="h-5 w-5 text-slate-400" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 leading-snug">{item.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex justify-between items-center">
                  <span className="text-[11px] font-semibold text-slate-400">{item.pillarLabel}</span>
                  <Link href={item.pillarHref} className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1">
                    Read Topic <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
