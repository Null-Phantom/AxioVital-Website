import type { Metadata } from "next";
import { Calendar, UserPlus, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Outpatient Clinic Management Software & Prescriptions | AxioVital",
  description: "Streamline outpatient clinic appointment booking, patient self check-in, digital prescriptions, and charting workflows with AxioVital Clinic OS.",
  alternates: {
    canonical: "https://axiovital.quantaforze.com/clinics",
  },
  openGraph: {
    title: "Outpatient Clinic Management Software & Prescriptions | AxioVital",
    description: "Streamline outpatient clinic appointment booking, patient self check-in, digital prescriptions, and charting workflows with AxioVital Clinic OS.",
    url: "https://axiovital.quantaforze.com/clinics",
    siteName: "AxioVital Health Platform",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Outpatient Clinic Management Software & Prescriptions | AxioVital",
    description: "Streamline outpatient clinic appointment booking, patient self check-in, digital prescriptions, and charting workflows with AxioVital Clinic OS.",
  },
};

export default function Clinics() {
  const capabilities = [
    {
      title: "Smart Patient Self-Checkin",
      desc: "Patients tap their AXIO Card to authenticate profiles, sign disclosures, and sync payment cards instantly.",
      icon: UserPlus
    },
    {
      title: "Consolidated Booking System",
      desc: "Automated schedule planners match doctor availability with urgent incoming care requests.",
      icon: Calendar
    },
    {
      title: "Dynamic Chart Generation",
      desc: "Drafts referral orders and clinical transcripts automatically using secure NLP audio models.",
      icon: Sparkles
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">For Mid-size Practices</span>
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl">
            Outpatient Clinic Management Software Suite
          </h1>
          <p className="text-lg text-slate-600">
            Streamline patient registration, minimize charting workloads, and consolidate operational pipelines.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {capabilities.map((c, i) => {
            const Icon = c.icon;
            return (
              <div key={i} className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm space-y-4 hover:shadow-md transition-all">
                <div className="h-12 w-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{c.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{c.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
