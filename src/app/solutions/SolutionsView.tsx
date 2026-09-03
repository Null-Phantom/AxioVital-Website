"use client";

import { useState } from "react";
import Link from "next/link";
import { Shield, Brain, Layers, Globe, ArrowRight } from "lucide-react";

export default function SolutionsView() {
  const [filter, setFilter] = useState("all");

  const solutions = [
    {
      title: "Interoperability & Data Syncing",
      category: "infrastructure",
      description: "Connect legacy clinical software to cloud services using secure FHIR adapters.",
      icon: Layers,
      href: "/platform"
    },
    {
      title: "Automated Clinical Notes",
      category: "clinical",
      description: "Harness AxioAI transcription models to chart diagnoses dynamically during checks.",
      icon: Brain,
      href: "/ai-features"
    },
    {
      title: "Smart Facility Orchestration",
      category: "management",
      description: "Track bed-utilization, manage emergency rooms, and schedule staffs securely.",
      icon: Globe,
      href: "/hospitals"
    },
    {
      title: "Secure Identity Validation",
      category: "security",
      description: "Verify patient records instantly with encrypted AXIO-ID hardware smart tokens.",
      icon: Shield,
      href: "/products"
    }
  ];

  const filteredSolutions = filter === "all" 
    ? solutions 
    : solutions.filter(s => s.category === filter);

  return (
    <div className="bg-slate-50 min-h-screen py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">Explore Use Cases</span>
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl">
            Tailored Healthcare Solutions
          </h1>
          <p className="text-lg text-slate-600">
            Select a category below to explore how AxioVital scales efficiency for your clinical environment.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2">
          {[
            { id: "all", label: "All Solutions" },
            { id: "infrastructure", label: "Infrastructure" },
            { id: "clinical", label: "Clinical" },
            { id: "management", label: "Management" },
            { id: "security", label: "Security" }
          ].map(btn => (
            <button
              key={btn.id}
              onClick={() => setFilter(btn.id)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all border ${
                filter === btn.id 
                  ? "bg-blue-600 text-white border-blue-600 shadow-md" 
                  : "bg-white text-slate-600 border-slate-200 hover:border-slate-300"
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Display Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredSolutions.map((sol, index) => {
            const Icon = sol.icon;
            return (
              <div key={index} className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
                <div className="space-y-4">
                  <div className="h-12 w-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{sol.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{sol.description}</p>
                </div>
                <div className="pt-6 border-t border-slate-50 mt-6 flex justify-between items-center">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{sol.category}</span>
                  <Link href={sol.href} className="text-sm font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1">
                    Details <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="bg-blue-600 rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold">Have custom workflow requirements?</h3>
            <p className="text-blue-100 text-sm max-w-xl">
              Our engineering team builds custom pipelines for university networks, laboratory labs, and government databases.
            </p>
          </div>
          <Link href="/contact" className="rounded-full bg-white text-blue-600 px-6 py-3 text-sm font-semibold hover:bg-blue-55 hover:text-blue-75 transition-all">
            Contact Enterprise Team
          </Link>
        </div>

      </div>
    </div>
  );
}
