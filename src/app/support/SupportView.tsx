"use client";

import { useState } from "react";
import Link from "next/link";
import {
  UserCircle,
  Calendar,
  Stethoscope,
  Building2,
  FileHeart,
  Pill,
  Microscope,
  CreditCard,
  Lock,
  Video,
  BarChart3,
  KeyRound,
  AlertCircle,
  Lightbulb,
  Activity,
  HeartPulse,
  MessageSquare,
  Users,
  ShieldCheck,
  FileText,
  ChevronRight,
  Download,
  Headphones,
  ChevronDown,
  ArrowRight
} from "lucide-react";

export default function SupportView() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const categories = [
    { title: "Patient Accounts", description: "Password resets, 2FA, patient identity verification, and profile management.", icon: UserCircle, href: "/contact?topic=account" },
    { title: "Appointment Booking", description: "Scheduling, cancellations, telemedicine virtual visits, and automated reminders.", icon: Calendar, href: "/contact?topic=appointments" },
    { title: "Doctor Portal", description: "Clinical workspace, E-prescriptions, physician roster, and consultation logs.", icon: Stethoscope, href: "/contact?topic=doctors" },
    { title: "Hospital Dashboard", description: "Facility management, bed occupancy, department routing, and ER triage.", icon: Building2, href: "/contact?topic=hospitals" },
    { title: "Electronic Health Records (EHR)", description: "Medical history, lab results, radiology scans, and chart synchronization.", icon: FileHeart, href: "/documentation" },
    { title: "Digital Prescriptions", description: "E-pharmacy integration, medication refills, dosage history, and RX security.", icon: Pill, href: "/documentation" },
    { title: "Laboratory Integration", description: "Pathology sync, diagnostic report delivery, specimen tracking, and LIS APIs.", icon: Microscope, href: "/documentation" },
    { title: "Billing & Insurance", description: "Claims processing, copay statements, insurance eligibility, and invoices.", icon: CreditCard, href: "/contact?topic=billing" },
    { title: "AXIO Smart Card", description: "Digital health ID card, NFC tap-in verification, emergency medical profile, and passcodes.", icon: ShieldCheck, href: "/contact?topic=smartcard" },
    { title: "Privacy & Security", description: "HIPAA compliance, GDPR consent, biometric encryption, and audit logs.", icon: Lock, href: "/documentation" },
    { title: "Telemedicine & Virtual Care", description: "HD video consultations, remote patient monitoring (RPM), and vitals sync.", icon: Video, href: "/contact?topic=telemedicine" },
    { title: "Healthcare Analytics", description: "Hospital operational metrics, patient outcomes reporting, and population health data.", icon: BarChart3, href: "/documentation" },
    { title: "Account Recovery", description: "Emergency account lockouts, identity confirmation, and credential resets.", icon: KeyRound, href: "/contact?topic=recovery" },
    { title: "Report Platform Issue", description: "Report bugs or unexpected behavior in the AxioVital healthcare platform.", icon: AlertCircle, href: "/contact?topic=bug" },
    { title: "Feature Request", description: "Suggest a new feature or workflow improvement for AxioVital.", icon: Lightbulb, href: "/contact?topic=feature" },
  ];

  const quickActions = [
    { title: "Book Appointment Help", desc: "Troubleshoot scheduling & reminders", icon: Calendar, href: "/contact?topic=appointments" },
    { title: "Recover Patient Account", desc: "Reset credentials & 2FA access", icon: KeyRound, href: "/contact?topic=recovery" },
    { title: "Report Platform Issue", desc: "Submit a technical bug report", icon: AlertCircle, href: "/contact?topic=bug" },
    { title: "Contact Support Desk", desc: "Connect with our healthcare engineers", icon: Headphones, href: "/contact" },
    { title: "Platform Status", desc: "Check system uptime & performance", icon: Activity, href: "/contact?topic=status" },
    { title: "Emergency Escalation", desc: "Critical hospital escalation (24/7)", icon: HeartPulse, href: "/contact?topic=emergency" },
    { title: "Download User Guides", desc: "PDF documentation for staff & patients", icon: Download, href: "/documentation" },
  ];

  const supportChannels = [
    { title: "24×7 Technical Support", desc: "Round-the-clock technical assistance for healthcare providers.", icon: Headphones, detail: "Available 24/7/365" },
    { title: "Hospital Enterprise Support", desc: "Dedicated SLA engineering team for enterprise hospital systems.", icon: Building2, detail: "Dedicated SLA" },
    { title: "Emergency Assistance", desc: "Priority hotline for critical hospital platform downtime.", icon: HeartPulse, detail: "Instant Response" },
    { title: "Live Chat Support", desc: "Instant chat with an AxioVital support specialist.", icon: MessageSquare, detail: "Average wait: < 2 mins" },
    { title: "Email Support", desc: "Send detailed inquiries directly to support@quantaforze.com.", icon: FileText, detail: "Response in < 2 hrs" },

    { title: "Community Forum", desc: "Connect with healthcare admins and doctors in our forum.", icon: Users, detail: "Peer Support" },
  ];

  const faqs = [
    {
      q: "How do I book an appointment?",
      a: "Patients can book appointments directly through the AxioVital Patient Mobile App or Web Portal by selecting a doctor, clinic location, and available time slot. If you encounter issues, navigate to Account Recovery or Contact Support."
    },
    {
      q: "How do I access my medical records?",
      a: "Your Electronic Health Records (EHR) are securely stored under your verified AxioVital Patient Account. Log into the Patient Portal and click 'My Medical History' or scan your AXIO Smart Card at participating clinics."
    },
    {
      q: "How can doctors issue digital prescriptions?",
      a: "Licensed physicians can log into the AxioVital Doctor Portal, select a patient chart, and generate cryptographically signed digital prescriptions (E-RX) sent directly to integrated e-pharmacies."
    },
    {
      q: "How can hospitals onboard to AxioVital?",
      a: "Hospital administrators can request enterprise onboarding by reaching out to our Hospital Enterprise Support team via the Contact Us page. Our integration engineers assist with HL7/FHIR setup and EHR data migration."
    },
    {
      q: "How does the AXIO Card NFC Kiosk check-in work?",
      a: "Patients simply tap their hardware AXIO Card at hospital reception kiosks to confirm check-in, verify eligibility, and load offline emergency medical tags."
    },
    {
      q: "Is patient medical data stored securely?",
      a: "All medical records are encrypted using AES-256 keys at rest and TLS 1.3 in transit, fully complying with HIPAA and GDPR regulations."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      
      {/* Top Status Banner */}
      <div className="bg-sky-50 border-b border-sky-200/80 text-sky-950">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 py-2 text-xs font-medium flex items-center justify-center gap-2 flex-wrap text-center">
          <span>All AxioVital Healthcare Systems & FHIR Integration Gateways are fully operational.</span>
          <Link href="/contact?topic=status" className="underline font-bold text-sky-800 hover:text-sky-950 ml-1">
            System status page
          </Link>
        </div>
      </div>
      
      {/* Support Hero Section - Centered Classic Design */}
      <section className="relative bg-[#EEF7FB] bg-medical-dots pt-16 pb-20 lg:pt-20 lg:pb-24 border-b border-slate-200/60 text-center">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-7">
            
            {/* Category Eyebrow Badge */}
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-sky-800 bg-sky-100/90 px-3.5 py-1 rounded-full border border-sky-200 shadow-2xs">
              AxioVital Healthcare Support Center
            </span>

            {/* Centered Libre Baskerville Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.2] font-baskerville max-w-3xl mx-auto">
              How can we assist your <span className="font-extrabold text-slate-900">healthcare journey</span> today?
            </h1>
            
            {/* Centered Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
              Submit support requests, check real-time system uptime, troubleshoot clinical workflows, or connect directly with our 24/7 healthcare support team.
            </p>

            {/* Centered Primary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link 
                href="/contact?topic=ticket"
                className="bg-white hover:bg-slate-50 border border-slate-300 text-slate-900 font-bold rounded-xl px-6 h-12 inline-flex items-center justify-center text-sm shadow-2xs transition-all hover:shadow-xs"
              >
                Submit Support Request
              </Link>
              
              <Link 
                href="/contact?topic=status"
                className="bg-white hover:bg-slate-50 border border-slate-300 text-slate-900 font-bold rounded-xl px-6 h-12 inline-flex items-center justify-center text-sm shadow-2xs transition-all hover:shadow-xs"
              >
                Healthcare System Status
              </Link>

              <Link 
                href="/contact?topic=emergency"
                className="bg-white hover:bg-slate-50 border border-slate-300 text-slate-900 font-bold rounded-xl px-6 h-12 inline-flex items-center justify-center text-sm shadow-2xs transition-all hover:shadow-xs"
              >
                24/7 Emergency Escalation
              </Link>
            </div>

            {/* Centered Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-600 pt-6 border-t border-slate-200/60 max-w-2xl mx-auto">
              <span className="font-medium text-slate-800">
                Trusted by 120+ Hospitals
              </span>
              <span>•</span>
              <span className="font-medium text-slate-800">
                Average SLA: &lt; 15 Mins
              </span>
              <span>•</span>
              <span className="font-medium text-slate-800">
                HIPAA & ISO 27001 Certified
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* Quick Actions Section */}
      <section className="py-12 bg-slate-50/80 border-b border-slate-200/80">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-600">
              Frequent Support Actions
            </h3>
            <span className="text-xs text-slate-500">Select an action to proceed</span>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {quickActions.map((qa, i) => (
              <Link key={i} href={qa.href}>
                <div className="h-full bg-white border border-slate-200/90 rounded-xl p-4 shadow-2xs hover:shadow-md hover:border-sky-400 transition-all cursor-pointer">
                  <h4 className="font-bold text-slate-900 text-sm font-baskerville">{qa.title}</h4>
                  <p className="text-xs text-slate-500 mt-0.5">{qa.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Support Categories Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 space-y-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-sky-800 bg-sky-50 border border-sky-200 px-3.5 py-1 rounded-full block w-max mb-3">
              HEALTHCARE KNOWLEDGE BASE
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight font-baskerville">
              Explore Healthcare Support Categories
            </h2>
            <p className="text-base text-slate-600 max-w-2xl mt-2 leading-relaxed">
              Select a category below to find step-by-step guides, troubleshooting articles, and technical documentation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.map((cat, idx) => {
              return (
                <Link key={idx} href={cat.href}>
                  <div className="group relative flex flex-col h-full rounded-xl border border-slate-200/90 bg-white p-6 shadow-2xs transition-all hover:shadow-md hover:border-sky-400 hover:-translate-y-1">
                    <h3 className="mb-2 font-bold text-slate-900 text-base group-hover:text-sky-600 transition-colors font-baskerville">{cat.title}</h3>
                    <p className="text-sm text-slate-600 flex-1 leading-relaxed">{cat.description}</p>
                    <div className="mt-4 flex items-center text-xs font-bold text-sky-700 group-hover:translate-x-1 transition-transform">
                      View articles <ArrowRight className="ml-1 h-3.5 w-3.5" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Support Channels Section */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC] border-y border-slate-200/80">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-3 font-baskerville">
              Official Support Channels
            </h2>
            <p className="text-base text-slate-600">
              Multiple ways to connect with our dedicated enterprise healthcare support engineers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportChannels.map((channel, i) => (
              <div key={i} className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-2xs hover:shadow-md transition-all space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-slate-900 text-lg font-baskerville">{channel.title}</h3>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                    {channel.detail}
                  </span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{channel.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-3 font-baskerville">
              Frequently Asked Questions
            </h2>
            <p className="text-base text-slate-600">
              Answers to common inquiries regarding AxioVital workflows, EHR sync, and account access.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i} className="border border-slate-200/90 rounded-xl bg-white shadow-2xs overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full text-left p-5 flex items-center justify-between font-bold text-slate-900 hover:text-sky-600 transition-colors font-baskerville"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${isOpen ? "rotate-180 text-sky-600" : ""}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Knowledge Base CTA Banner */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="bg-sky-50/80 border border-sky-200/80 rounded-3xl p-8 sm:p-12 text-center shadow-2xs">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-3 font-baskerville">
              Explore the AxioVital Knowledge Base
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Access technical documentation covering patient care, doctor portals, EHR integration, HL7/FHIR standards, and HIPAA compliance.
            </p>
            <Link 
              href="/documentation"
              className="bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl px-8 py-3.5 inline-flex items-center text-sm shadow-xs transition-all"
            >
              Go to AxioVital Knowledge Base
              <ChevronRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
