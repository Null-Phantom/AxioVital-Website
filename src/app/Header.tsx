"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, ChevronDown, X, Activity, Database, Layers, Code, Building2, CreditCard, User, Stethoscope, ArrowRight, ShieldCheck, Cpu
} from "lucide-react";

export default function Header({ onOpenVideoModal }: { onOpenVideoModal?: () => void }) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`axio-navbar ${scrolled ? "is-scrolled" : ""}`}>
      <div className="axio-nav-container">
        
        {/* 1. LOGO: Prominent Branding + Breathing Room */}
        <Link href="/" className="flex items-center gap-3 group py-1 shrink-0">
          <div className="h-10 w-10 rounded-xl bg-slate-900 flex items-center justify-center text-white shadow-xs group-hover:scale-105 transition-transform duration-200">
            <Activity className="h-5.5 w-5.5 text-sky-400" />
          </div>
          <span className="font-outfit text-[1.325rem] font-bold tracking-tight text-slate-900">
            AXIO<span className="text-blue-600 font-extrabold">VITAL</span>
          </span>
        </Link>

        {/* 2. CENTER NAVIGATION GROUP: Cohesive Centered Cluster */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-100/60 border border-slate-200/60 rounded-full px-2 py-1 shadow-2xs">
          
          {/* 1. Platform Mega-Menu */}
          <div 
            className="relative"
            onMouseEnter={() => setOpenDropdown("platform")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button 
              onClick={() => setOpenDropdown(openDropdown === "platform" ? null : "platform")}
              className={`relative text-sm font-semibold px-4 py-2 rounded-full inline-flex items-center gap-1.5 transition-colors cursor-pointer group ${
                openDropdown === "platform" 
                  ? "text-slate-900 bg-white shadow-2xs" 
                  : "text-slate-700 hover:text-blue-600"
              }`}
              aria-expanded={openDropdown === "platform"}
            >
              <span>Platform</span>
              <ChevronDown className={`h-3.5 w-3.5 text-slate-400 group-hover:text-blue-600 transition-transform duration-200 ${openDropdown === "platform" ? "rotate-180 text-blue-600" : ""}`} />
              <span className="absolute bottom-1 left-4 right-4 h-[2px] bg-blue-600 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
            </button>

            <AnimatePresence>
              {openDropdown === "platform" && (
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.98 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="absolute top-full -left-12 mt-2.5 w-[540px] bg-white border border-slate-200/90 rounded-2xl shadow-2xl shadow-slate-900/10 overflow-hidden z-50"
                >
                  <div className="p-3.5 grid grid-cols-2 gap-2.5">
                    <Link 
                      href="/axioid" 
                      onClick={() => setOpenDropdown(null)}
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-200/60 group"
                    >
                      <div className="p-2.5 rounded-xl bg-cyan-50 text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white transition-all shrink-0">
                        <User className="h-4.5 w-4.5" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">Axio-ID</div>
                        <div className="text-xs text-slate-500 leading-snug mt-0.5">Persistent universal healthcare identity</div>
                      </div>
                    </Link>

                    <Link 
                      href="/axiocard" 
                      onClick={() => setOpenDropdown(null)}
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-200/60 group"
                    >
                      <div className="p-2.5 rounded-xl bg-sky-50 text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-all shrink-0">
                        <CreditCard className="h-4.5 w-4.5" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">Axio Card</div>
                        <div className="text-xs text-slate-500 leading-snug mt-0.5">Connected patient access & NFC auth</div>
                      </div>
                    </Link>

                    <Link 
                      href="/axiovital" 
                      onClick={() => setOpenDropdown(null)}
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-200/60 group"
                    >
                      <div className="p-2.5 rounded-xl bg-teal-50 text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-all shrink-0">
                        <Building2 className="h-4.5 w-4.5" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">AxioVital OS</div>
                        <div className="text-xs text-slate-500 leading-snug mt-0.5">Hospital operating system for connected care</div>
                      </div>
                    </Link>

                    <Link 
                      href="/network" 
                      onClick={() => setOpenDropdown(null)}
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-200/60 group"
                    >
                      <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all shrink-0">
                        <Layers className="h-4.5 w-4.5" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">Healthcare Infrastructure</div>
                        <div className="text-xs text-slate-500 leading-snug mt-0.5">Interoperable provider data network</div>
                      </div>
                    </Link>
                  </div>

                  {/* Enterprise Standards Footer */}
                  <div className="bg-slate-50 border-t border-slate-100 px-4 py-2.5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="h-3.5 w-3.5 text-blue-600" />
                      <span>FHIR R4 & HL7 v2 Compliant</span>
                    </span>
                    <span className="text-slate-400">AES-256 ENCRYPTED</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* 2. Solutions Mega-Menu */}
          <div 
            className="relative"
            onMouseEnter={() => setOpenDropdown("solutions")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button 
              onClick={() => setOpenDropdown(openDropdown === "solutions" ? null : "solutions")}
              className={`relative text-sm font-semibold px-4 py-2 rounded-full inline-flex items-center gap-1.5 transition-colors cursor-pointer group ${
                openDropdown === "solutions" 
                  ? "text-slate-900 bg-white shadow-2xs" 
                  : "text-slate-700 hover:text-blue-600"
              }`}
              aria-expanded={openDropdown === "solutions"}
            >
              <span>Solutions</span>
              <ChevronDown className={`h-3.5 w-3.5 text-slate-400 group-hover:text-blue-600 transition-transform duration-200 ${openDropdown === "solutions" ? "rotate-180 text-blue-600" : ""}`} />
              <span className="absolute bottom-1 left-4 right-4 h-[2px] bg-blue-600 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
            </button>

            <AnimatePresence>
              {openDropdown === "solutions" && (
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.98 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="absolute top-full -left-20 mt-2.5 w-[540px] bg-white border border-slate-200/90 rounded-2xl shadow-2xl shadow-slate-900/10 overflow-hidden z-50"
                >
                  <div className="p-3.5 grid grid-cols-2 gap-2.5">
                    <Link 
                      href="/hospitals" 
                      onClick={() => setOpenDropdown(null)}
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-200/60 group"
                    >
                      <div className="p-2.5 rounded-xl bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all shrink-0">
                        <Building2 className="h-4.5 w-4.5" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">Hospitals & Systems</div>
                        <div className="text-xs text-slate-500 leading-snug mt-0.5">Unify clinical, EHR & administrative data</div>
                      </div>
                    </Link>

                    <Link 
                      href="/providers" 
                      onClick={() => setOpenDropdown(null)}
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-200/60 group"
                    >
                      <div className="p-2.5 rounded-xl bg-teal-50 text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-all shrink-0">
                        <Stethoscope className="h-4.5 w-4.5" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">Doctors & Care Teams</div>
                        <div className="text-xs text-slate-500 leading-snug mt-0.5">Instant record access at point of care</div>
                      </div>
                    </Link>

                    <Link 
                      href="/patients" 
                      onClick={() => setOpenDropdown(null)}
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-200/60 group"
                    >
                      <div className="p-2.5 rounded-xl bg-sky-50 text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-all shrink-0">
                        <User className="h-4.5 w-4.5" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">Patients</div>
                        <div className="text-xs text-slate-500 leading-snug mt-0.5">Own medical records across providers</div>
                      </div>
                    </Link>

                    <Link 
                      href="/networks" 
                      onClick={() => setOpenDropdown(null)}
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-200/60 group"
                    >
                      <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all shrink-0">
                        <Activity className="h-4.5 w-4.5" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">Healthcare Networks</div>
                        <div className="text-xs text-slate-500 leading-snug mt-0.5">Connect clinics, labs & payors</div>
                      </div>
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* 3. Developers & Docs Mega-Menu */}
          <div 
            className="relative"
            onMouseEnter={() => setOpenDropdown("developers")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button 
              onClick={() => setOpenDropdown(openDropdown === "developers" ? null : "developers")}
              className={`relative text-sm font-semibold px-4 py-2 rounded-full inline-flex items-center gap-1.5 transition-colors cursor-pointer group ${
                openDropdown === "developers" 
                  ? "text-slate-900 bg-white shadow-2xs" 
                  : "text-slate-700 hover:text-blue-600"
              }`}
              aria-expanded={openDropdown === "developers"}
            >
              <span>Developers & Docs</span>
              <ChevronDown className={`h-3.5 w-3.5 text-slate-400 group-hover:text-blue-600 transition-transform duration-200 ${openDropdown === "developers" ? "rotate-180 text-blue-600" : ""}`} />
              <span className="absolute bottom-1 left-4 right-4 h-[2px] bg-blue-600 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
            </button>

            <AnimatePresence>
              {openDropdown === "developers" && (
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.98 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="absolute top-full -left-20 mt-2.5 w-[480px] bg-white border border-slate-200/90 rounded-2xl shadow-2xl shadow-slate-900/10 overflow-hidden z-50"
                >
                  <div className="p-3.5 grid grid-cols-2 gap-2.5">
                    <Link 
                      href="/documentation" 
                      onClick={() => setOpenDropdown(null)}
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-200/60 group"
                    >
                      <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all shrink-0">
                        <Code className="h-4.5 w-4.5" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">Documentation</div>
                        <div className="text-xs text-slate-500 leading-snug mt-0.5">FHIR R4 APIs, SDKs & guides</div>
                      </div>
                    </Link>

                    <Link 
                      href="/platform" 
                      onClick={() => setOpenDropdown(null)}
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-200/60 group"
                    >
                      <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all shrink-0">
                        <Cpu className="h-4.5 w-4.5" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">Architecture</div>
                        <div className="text-xs text-slate-500 leading-snug mt-0.5">Medical data engine & zero-trust security</div>
                      </div>
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* 4. Pricing */}
          <Link 
            href="/pricing" 
            className="relative text-sm font-semibold text-slate-700 hover:text-blue-600 px-4 py-2 rounded-full transition-colors group"
          >
            <span>Pricing</span>
            <span className="absolute bottom-1 left-4 right-4 h-[2px] bg-blue-600 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
          </Link>

          {/* 5. Company */}
          <Link 
            href="/about" 
            className="relative text-sm font-semibold text-slate-700 hover:text-blue-600 px-4 py-2 rounded-full transition-colors group"
          >
            <span>Company</span>
            <span className="absolute bottom-1 left-4 right-4 h-[2px] bg-blue-600 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
          </Link>
        </nav>

        {/* 3. RIGHT ACTIONS: Understated Sign In + Refined Book a Demo CTA */}
        <div className="flex items-center gap-3 sm:gap-4">
          <Link 
            href="/signin" 
            className="hidden sm:inline-flex text-sm font-medium text-slate-600 hover:text-blue-600 px-3.5 py-2 transition-colors"
          >
            Sign in
          </Link>

          <button 
            onClick={onOpenVideoModal}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold rounded-xl transition-all shadow-xs group cursor-pointer"
          >
            <span>Book a demo</span>
            <ArrowRight className="h-4 w-4 text-slate-300 group-hover:translate-x-1 transition-transform duration-200" />
          </button>

          {/* Mobile Hamburger Button */}
          <button 
            onClick={() => setHamburgerOpen(!hamburgerOpen)}
            className="p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-colors lg:hidden cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {hamburgerOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

      </div>

      {/* MOBILE MENU DRAWER */}
      <AnimatePresence>
        {hamburgerOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="lg:hidden bg-white border-b border-slate-200 shadow-2xl overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-5 space-y-4">
              
              {/* Platform Group */}
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 px-2">Platform</div>
                <div className="space-y-1">
                  <Link href="/axioid" onClick={() => setHamburgerOpen(false)} className="block px-3 py-2 text-sm font-medium text-slate-800 hover:text-blue-600 hover:bg-slate-50 rounded-lg">Axio-ID</Link>
                  <Link href="/axiocard" onClick={() => setHamburgerOpen(false)} className="block px-3 py-2 text-sm font-medium text-slate-800 hover:text-blue-600 hover:bg-slate-50 rounded-lg">Axio Card</Link>
                  <Link href="/axiovital" onClick={() => setHamburgerOpen(false)} className="block px-3 py-2 text-sm font-medium text-slate-800 hover:text-blue-600 hover:bg-slate-50 rounded-lg">AxioVital OS</Link>
                  <Link href="/network" onClick={() => setHamburgerOpen(false)} className="block px-3 py-2 text-sm font-medium text-slate-800 hover:text-blue-600 hover:bg-slate-50 rounded-lg">Healthcare Infrastructure</Link>
                </div>
              </div>

              {/* Solutions Group */}
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 px-2">Solutions</div>
                <div className="space-y-1">
                  <Link href="/hospitals" onClick={() => setHamburgerOpen(false)} className="block px-3 py-2 text-sm font-medium text-slate-800 hover:text-blue-600 hover:bg-slate-50 rounded-lg">Hospitals & Systems</Link>
                  <Link href="/providers" onClick={() => setHamburgerOpen(false)} className="block px-3 py-2 text-sm font-medium text-slate-800 hover:text-blue-600 hover:bg-slate-50 rounded-lg">Doctors & Care Teams</Link>
                  <Link href="/patients" onClick={() => setHamburgerOpen(false)} className="block px-3 py-2 text-sm font-medium text-slate-800 hover:text-blue-600 hover:bg-slate-50 rounded-lg">Patients</Link>
                  <Link href="/networks" onClick={() => setHamburgerOpen(false)} className="block px-3 py-2 text-sm font-medium text-slate-800 hover:text-blue-600 hover:bg-slate-50 rounded-lg">Healthcare Networks</Link>
                </div>
              </div>

              {/* Direct Links */}
              <div className="pt-2 border-t border-slate-100 space-y-1">
                <Link href="/documentation" onClick={() => setHamburgerOpen(false)} className="block px-3 py-2 text-sm font-medium text-slate-800 hover:text-blue-600 hover:bg-slate-50 rounded-lg">Developers & Docs</Link>
                <Link href="/pricing" onClick={() => setHamburgerOpen(false)} className="block px-3 py-2 text-sm font-medium text-slate-800 hover:text-blue-600 hover:bg-slate-50 rounded-lg">Pricing</Link>
                <Link href="/about" onClick={() => setHamburgerOpen(false)} className="block px-3 py-2 text-sm font-medium text-slate-800 hover:text-blue-600 hover:bg-slate-50 rounded-lg">Company</Link>
              </div>

              {/* Mobile Actions */}
              <div className="pt-4 border-t border-slate-200 flex flex-col gap-2.5">
                <Link 
                  href="/signin" 
                  onClick={() => setHamburgerOpen(false)}
                  className="w-full text-center py-2.5 text-sm font-medium text-slate-800 border border-slate-300 rounded-xl hover:bg-slate-50"
                >
                  Sign in
                </Link>
                <button 
                  onClick={() => { setHamburgerOpen(false); onOpenVideoModal?.(); }}
                  className="w-full text-center py-2.5 text-sm font-semibold text-white bg-slate-900 rounded-xl shadow-xs hover:bg-slate-800 flex items-center justify-center gap-2"
                >
                  <span>Book a demo</span>
                  <ArrowRight className="h-4 w-4 text-slate-300" />
                </button>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
