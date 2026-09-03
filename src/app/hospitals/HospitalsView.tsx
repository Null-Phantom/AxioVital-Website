"use client";

import { useState } from "react";
import Link from "next/link";
import { Play, X, Check, ChevronRight } from "lucide-react";

export default function HospitalsView() {
  const [activeTab, setActiveTab] = useState("partner");
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [occupancy, setOccupancy] = useState(82);

  return (
    <div className="bg-white min-h-screen font-sans text-[#1f1e1c]">
      
      {/* 1. TOP DARK HERO BANNER */}
      <section className="bg-[#384345] text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 opacity-30 pointer-events-none">
          <div className="absolute top-10 right-10 w-48 h-32 bg-[#d8bc68] rounded-full transform rotate-12 blur-2xl"></div>
          <div className="absolute top-20 right-48 w-40 h-40 bg-[#749599] rounded-full blur-xl"></div>
        </div>

        <div className="mx-auto max-w-[1440px] relative z-10 space-y-6">
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-white max-w-3xl">
            Win and grow more with AxioVital
          </h1>

          <div className="space-y-4 max-w-4xl text-slate-200 text-xs sm:text-sm leading-relaxed font-normal">
            <p>
              AxioVital is redefining what's possible in digital healthcare with an unmatched, AI-native technology stack spanning infrastructure, database, and applications. This end-to-end approach helps healthcare networks accelerate innovation, reduce operational complexity, and run mission-critical clinical workloads with built-in security and performance. For hospital partners, it creates a powerful advantage: more ways to differentiate, more opportunities to deliver high-value solutions and services, and more paths to grow.
            </p>
            <p>
              Explore our enhanced <Link href="/solutions" className="text-white underline hover:text-slate-300 font-semibold">AxioVital PartnerNetwork (APN)</Link> program to see how you can achieve greater success by partnering with AxioVital.
            </p>
          </div>
        </div>
      </section>

      {/* 2. HORIZONTAL TAB NAVIGATION BAR */}
      <div className="border-b border-slate-200 bg-white px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex items-center gap-8 text-xs sm:text-sm font-bold overflow-x-auto scrollbar-hide">
            {[
              { id: "partner", label: "Partner with AxioVital" },
              { id: "choose-level", label: "Choose your level" },
              { id: "additional-paths", label: "Additional paths" },
              { id: "testimonials", label: "Partner testimonials" },
              { id: "join-now", label: "Join now" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 transition-colors border-b-2 whitespace-nowrap cursor-pointer ${
                  activeTab === tab.id
                    ? "border-[#1f1e1c] text-[#1f1e1c]"
                    : "border-transparent text-slate-600 hover:text-slate-900"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 3. TAB CONTENT SECTION */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Program Value Details */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#1f1e1c]">
                A partner program built for you
              </h2>

              <p className="text-sm font-bold text-[#1f1e1c]">
                Our partner program gives you choice and flexibility so you can tailor it to best meet your needs.
              </p>

              <ul className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-[#1f1e1c] font-extrabold text-base leading-none">•</span>
                  <span>You choose the <strong className="text-[#1f1e1c]">level</strong> of engagement and investment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1f1e1c] font-extrabold text-base leading-none">•</span>
                  <span>You choose from a <strong className="text-[#1f1e1c]">wide range of included benefits</strong> across training and enablement, go-to-market collaboration, technical accelerators, and success support</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1f1e1c] font-extrabold text-base leading-none">•</span>
                  <span>You choose how to be paid for achieving <strong className="text-[#1f1e1c]">incentives tied to driving growth</strong> with AxioVital—monetary payouts or AxioVital Partner Credits that unlock additional benefits</span>
                </li>
              </ul>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-block bg-[#1f1e1c] hover:bg-[#33312e] text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-2xs transition-colors shadow-2xs"
                >
                  Start by choosing your level
                </Link>
              </div>
            </div>

            {/* Right Column: Visual Video Player Card with PNG Banner */}
            <div className="lg:col-span-5">
              <div 
                onClick={() => setVideoModalOpen(true)}
                className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 group cursor-pointer aspect-16/10 sm:aspect-4/3 w-full bg-slate-900"
              >
                <img 
                  src="/axiovital_health_tech_banner.png" 
                  alt="Axiovital Service for Health Tech Authority Banner" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Interactive Play Overlay Icon */}
                <div className="absolute inset-0 bg-black/15 group-hover:bg-black/35 transition-colors flex items-center justify-center">
                  <div className="h-16 w-16 rounded-full bg-[#1f1e1c]/90 text-white flex items-center justify-center shadow-2xl border-2 border-white/80 group-hover:bg-[#c74634] group-hover:scale-110 transition-all">
                    <Play className="h-7 w-7 fill-current ml-1" />
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>



      {/* YOUTUBE VIDEO POPUP MODAL */}
      {videoModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/80 backdrop-blur-xs transition-all duration-300 animate-in fade-in"
          onClick={() => setVideoModalOpen(false)}
        >
          <button 
            onClick={() => setVideoModalOpen(false)} 
            className="fixed top-4 right-4 sm:top-6 sm:right-6 text-white/80 hover:text-white bg-black/50 hover:bg-black/80 p-2 sm:p-2.5 rounded-full transition-all duration-200 z-50 border border-white/20 shadow-2xl focus:outline-none cursor-pointer"
            aria-label="Close Video Modal"
          >
            <X className="h-6 w-6 sm:h-7 sm:w-7" />
          </button>

          <div 
            className="bg-black rounded-xl sm:rounded-2xl overflow-hidden max-w-5xl w-full shadow-2xl relative aspect-video flex flex-col border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src="https://www.youtube.com/embed/IT4YSBtV_2w?autoplay=1"
              title="AxioVital Healthcare Demo Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full border-0"
            />
          </div>
        </div>
      )}

    </div>
  );
}
