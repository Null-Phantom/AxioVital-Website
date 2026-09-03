"use client";

import { useState } from "react";
import { Check } from "lucide-react";

export default function PricingView() {
  const [providerCount, setProviderCount] = useState(5);

  const calculateTotal = () => {
    return providerCount * 149;
  };

  const planFeatures = [
    { title: "Smart Ambient Charting", desc: "AxioAI live SOAP note drafting." },
    { title: "AXIO-ID Verification", desc: "Patient identity security." },
    { title: "EHR Syncing (FHIR)", desc: "Direct connections to Epic/Cerner databases." },
    { title: "MyHealthcare Portal", desc: "Mobile patient portal apps." }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">Fair, Dynamic Billing</span>
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl">
            Flexible Enterprise Pricing
          </h1>
          <p className="text-lg text-slate-600">
            Estimate custom licensing costs based on your clinical staff sizes below.
          </p>
        </div>

        {/* Pricing Calculator */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 max-w-4xl mx-auto shadow-sm grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900">Configure Your Suite</h3>
            
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 flex justify-between">
                <span>ACTIVE CLINICIANS / PROVIDERS</span>
                <span className="text-blue-600 font-bold">{providerCount} Providers</span>
              </label>
              <input
                type="range"
                min="1"
                max="50"
                value={providerCount}
                onChange={(e) => setProviderCount(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <p className="text-xs text-slate-400">Scale the slider to calculate monthly licensing values.</p>
            </div>

            <div className="border-t border-slate-100 pt-4 space-y-2">
              {planFeatures.map((f, i) => (
                <div key={i} className="flex gap-2 items-start text-sm text-slate-650">
                  <Check className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-800">{f.title}</span> — <span className="text-xs text-slate-500">{f.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-100 p-8 rounded-2xl text-center space-y-4">
            <div className="text-xs font-semibold text-slate-400 uppercase">ESTIMATED TOTAL LICENSE</div>
            <div className="text-5xl font-extrabold text-slate-900">${calculateTotal()}</div>
            <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Per Month / Billed Annually</div>
            <button className="w-full rounded-full bg-blue-600 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition-all shadow-md">
              Start Enterprise Trial
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
