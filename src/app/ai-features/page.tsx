import type { Metadata } from "next";
import { Sparkles, FileText, BarChart2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Healthcare AI Platform & Clinical Documentation AI | AxioVital",
  description: "Empower care providers with AxioAI's ambient SOAP transcription, clinical NLP, automated ICD-10 coding, and predictive patient flow models.",
  alternates: {
    canonical: "https://axiovital.quantaforze.com/ai-features",
  },
  openGraph: {
    title: "Healthcare AI Platform & Clinical Documentation AI | AxioVital",
    description: "Empower care providers with AxioAI's ambient SOAP transcription, clinical NLP, automated ICD-10 coding, and predictive patient flow models.",
    url: "https://axiovital.quantaforze.com/ai-features",
    siteName: "AxioVital Health Platform",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Healthcare AI Platform & Clinical Documentation AI | AxioVital",
    description: "Empower care providers with AxioAI's ambient SOAP transcription, clinical NLP, automated ICD-10 coding, and predictive patient flow models.",
  },
};

export default function AiFeatures() {
  const models = [
    {
      title: "Ambient SOAP Transcriber",
      desc: "Converts provider-patient conversations directly into organized SOAP clinical summaries.",
      icon: Sparkles
    },
    {
      title: "ICD-10 Coding Engine",
      desc: "Assigns precise diagnostic codes directly from patient logs, speeding up billing cycles.",
      icon: FileText
    },
    {
      title: "Predictive Analytics Engine",
      desc: "Analyzes occupancy rates and ward demand to optimize staffing budgets.",
      icon: BarChart2
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">AxioAI Intelligence</span>
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl">
            Healthcare AI Platform & Clinical Documentation
          </h1>
          <p className="text-lg text-slate-600">
            Speed up clinical diagnostics and eliminate manual workflows with our secure machine learning framework.
          </p>
        </div>

        {/* Models Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {models.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div key={idx} className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm space-y-4">
                <div className="h-12 w-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{m.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{m.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
