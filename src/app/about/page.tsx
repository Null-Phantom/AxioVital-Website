import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Building2, Server, Lock, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "About AxioVital — Healthcare Technology Platform by QuantaForze",
  description: "Learn about AxioVital, the integrated healthcare operating system developed and operated by QuantaForze to power secure EHR interoperability, clinical workflows, and patient access.",
  alternates: {
    canonical: "https://axiovital.quantaforze.com/about",
  },
  openGraph: {
    title: "About AxioVital — Healthcare Technology Platform by QuantaForze",
    description: "Learn about AxioVital, the integrated healthcare operating system developed and operated by QuantaForze to power secure EHR interoperability, clinical workflows, and patient access.",
    url: "https://axiovital.quantaforze.com/about",
    siteName: "AxioVital Health Platform",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About AxioVital — Healthcare Technology Platform by QuantaForze",
    description: "Learn about AxioVital, the integrated healthcare operating system developed and operated by QuantaForze to power secure EHR interoperability, clinical workflows, and patient access.",
  },
};

export default function About() {
  const credentials = [
    { title: "HIPAA Compliant Safeguards", desc: "Data pipelines secured through FIPS 140-2 AES-256 encryption, granular access controls, and strict audit trails.", icon: ShieldCheck },
    { title: "SOC 2 Type II Security Controls", desc: "Security posture and operational data handling processes verified through continuous auditing and monitoring.", icon: Lock },
    { title: "HL7 & FHIR Interoperability", desc: "EHR database connectors and lab gateways structured on global HL7 FHIR standards for seamless record exchange.", icon: Server }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-16 sm:py-24 font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3.5 py-1 rounded-full border border-blue-200">
            About AxioVital & QuantaForze
          </span>
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl">
            A Trusted Healthcare Foundation
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            AxioVital is an integrated healthcare technology platform developed and operated by <a href="https://quantaforze.com" target="_blank" rel="noopener noreferrer" className="font-bold text-blue-600 hover:underline">QuantaForze</a>. We build clinical infrastructure, EHR database gateways, and intelligent automation tools to connect the modern healthcare ecosystem.
          </p>
        </div>

        {/* Company Overview Card */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-sm max-w-4xl mx-auto space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <Building2 className="h-6 w-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-slate-900">Organization & Ownership</h2>
          </div>

          <div className="space-y-4 text-slate-650 text-sm leading-relaxed">
            <p>
              <strong className="text-slate-900">AxioVital</strong> serves as a unified digital operating system connecting five primary healthcare touchpoints: <strong>Patients & Families</strong>, <strong>Physicians & Care Providers</strong>, <strong>Outpatient Clinics</strong>, <strong>Hospitals & Medical Networks</strong>, and <strong>Diagnostic Laboratories</strong>.
            </p>
            <p>
              Engineered and maintained under the technology leadership of <strong>QuantaForze</strong>, AxioVital addresses real-world care challenges including registration delays, fragmented patient charts, diagnostic mislabeling, and administrative burnout.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100 text-xs font-semibold text-slate-700">
            <div>
              <span className="text-slate-400 block uppercase text-[10px]">Platform Name</span>
              <span className="text-slate-900 text-sm font-bold">AxioVital Health Platform</span>
            </div>
            <div>
              <span className="text-slate-400 block uppercase text-[10px]">Operating Entity</span>
              <a href="https://quantaforze.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-sm font-bold hover:underline flex items-center gap-1">
                QuantaForze <Globe className="h-3 w-3" />
              </a>
            </div>
            <div>
              <span className="text-slate-400 block uppercase text-[10px]">Official Web Address</span>
              <span className="text-slate-900 text-sm font-bold">axiovital.quantaforze.com</span>
            </div>
            <div>
              <span className="text-slate-400 block uppercase text-[10px]">Primary Inquiries</span>
              <Link href="/contact" className="text-blue-600 text-sm font-bold hover:underline">
                support@quantaforze.com
              </Link>

            </div>
          </div>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {credentials.map((c, i) => {
            const Icon = c.icon;
            return (
              <div key={i} className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm text-center space-y-3">
                <div className="h-12 w-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{c.title}</h3>
                <p className="text-slate-650 text-sm leading-relaxed">{c.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
