"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Menu, ChevronDown, X, ChevronRight, Activity, Database, Layers, Code, Building2, CreditCard, User, Stethoscope
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
    <header className={`site-head quanta-navbar ${scrolled ? "is-scrolled" : ""}`}>
      <div className="q-nav-container">
        
        {/* Left: Logo & Brand */}
        <Link href="/" className="q-logo group">
          <div className="h-8 w-8 rounded-full bg-slate-900 flex items-center justify-center text-white shadow-xs group-hover:scale-105 transition-transform">
            <Activity className="h-4.5 w-4.5 text-sky-400" />
          </div>
          <span className="font-outfit text-lg font-bold tracking-tight text-slate-900">
            AXIO<span className="text-blue-600 font-extrabold">VITAL</span>
          </span>
        </Link>

        {/* Center/Right: Desktop Navigation Menu */}
        <div className="q-nav-right">
          <nav className="q-nav-menu">
            
            {/* Platform Dropdown */}
            <div className="relative" onMouseLeave={() => setOpenDropdown(null)}>
              <button 
                onMouseEnter={() => setOpenDropdown("platform")}
                onClick={() => setOpenDropdown(openDropdown === "platform" ? null : "platform")}
                className="q-nav-link cursor-pointer"
              >
                Platform <ChevronDown className="h-3.5 w-3.5 opacity-60" />
              </button>

              {openDropdown === "platform" && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white/95 backdrop-blur-xl border border-slate-200/80 rounded-2xl shadow-xl p-3 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <Link 
                    href="/axiovital" 
                    onClick={() => setOpenDropdown(null)}
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-100/80 transition-colors group"
                  >
                    <Building2 className="h-5 w-5 text-teal-600 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="text-sm font-semibold text-slate-900">AxioVital</div>
                      <div className="text-xs text-slate-500">Hospital operating system for connected care</div>
                    </div>
                  </Link>
                  <Link 
                    href="/axioid" 
                    onClick={() => setOpenDropdown(null)}
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-100/80 transition-colors group"
                  >
                    <User className="h-5 w-5 text-cyan-600 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="text-sm font-semibold text-slate-900">AxioID</div>
                      <div className="text-xs text-slate-500">Persistent healthcare identity</div>
                    </div>
                  </Link>
                  <Link 
                    href="/axiocard" 
                    onClick={() => setOpenDropdown(null)}
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-100/80 transition-colors group"
                  >
                    <CreditCard className="h-5 w-5 text-sky-600 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="text-sm font-semibold text-slate-900">AxioCard</div>
                      <div className="text-xs text-slate-500">NFC-powered patient identity & access</div>
                    </div>
                  </Link>
                  <Link 
                    href="/network" 
                    onClick={() => setOpenDropdown(null)}
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-100/80 transition-colors group"
                  >
                    <Layers className="h-5 w-5 text-blue-600 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="text-sm font-semibold text-slate-900">Axio Network</div>
                      <div className="text-xs text-slate-500">Connected provider infrastructure</div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div className="relative" onMouseLeave={() => setOpenDropdown(null)}>
              <button 
                onMouseEnter={() => setOpenDropdown("solutions")}
                onClick={() => setOpenDropdown(openDropdown === "solutions" ? null : "solutions")}
                className="q-nav-link cursor-pointer"
              >
                Solutions <ChevronDown className="h-3.5 w-3.5 opacity-60" />
              </button>

              {openDropdown === "solutions" && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white/95 backdrop-blur-xl border border-slate-200/80 rounded-2xl shadow-xl p-3 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <Link 
                    href="/hospitals" 
                    onClick={() => setOpenDropdown(null)}
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-100/80 transition-colors group"
                  >
                    <Building2 className="h-5 w-5 text-teal-600 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="text-sm font-semibold text-slate-900">Hospitals & Health Networks</div>
                      <div className="text-xs text-slate-500">Unify clinical and operational workflows</div>
                    </div>
                  </Link>
                  <Link 
                    href="/providers" 
                    onClick={() => setOpenDropdown(null)}
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-100/80 transition-colors group"
                  >
                    <Stethoscope className="h-5 w-5 text-cyan-600 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="text-sm font-semibold text-slate-900">Doctors & Care Teams</div>
                      <div className="text-xs text-slate-500">Access patient context without reconstruction</div>
                    </div>
                  </Link>
                  <Link 
                    href="/patients" 
                    onClick={() => setOpenDropdown(null)}
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-100/80 transition-colors group"
                  >
                    <User className="h-5 w-5 text-sky-600 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="text-sm font-semibold text-slate-900">Patients</div>
                      <div className="text-xs text-slate-500">Carry your healthcare identity across providers</div>
                    </div>
                  </Link>
                  <Link 
                    href="/networks" 
                    onClick={() => setOpenDropdown(null)}
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-100/80 transition-colors group"
                  >
                    <Activity className="h-5 w-5 text-blue-600 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="text-sm font-semibold text-slate-900">Healthcare Networks</div>
                      <div className="text-xs text-slate-500">Connect fragmented healthcare ecosystems</div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            {/* Developers & Docs Dropdown */}
            <div className="relative" onMouseLeave={() => setOpenDropdown(null)}>
              <button 
                onMouseEnter={() => setOpenDropdown("developers")}
                onClick={() => setOpenDropdown(openDropdown === "developers" ? null : "developers")}
                className="q-nav-link cursor-pointer"
              >
                Developers & Docs <ChevronDown className="h-3.5 w-3.5 opacity-60" />
              </button>

              {openDropdown === "developers" && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-white/95 backdrop-blur-xl border border-slate-200/80 rounded-2xl shadow-xl p-3 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <Link 
                    href="/documentation" 
                    onClick={() => setOpenDropdown(null)}
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-100/80 transition-colors group"
                  >
                    <Code className="h-5 w-5 text-blue-600 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="text-sm font-semibold text-slate-900">Developer Documentation</div>
                      <div className="text-xs text-slate-500">API guides, SDKs & FHIR reference</div>
                    </div>
                  </Link>
                  <Link 
                    href="/platform" 
                    onClick={() => setOpenDropdown(null)}
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-100/80 transition-colors group"
                  >
                    <Database className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="text-sm font-semibold text-slate-900">Platform Architecture</div>
                      <div className="text-xs text-slate-500">Medical data engine & security</div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            <Link href="/pricing" className="q-nav-link">
              Pricing
            </Link>
            <Link href="/about" className="q-nav-link">
              Company
            </Link>
          </nav>

          {/* Action Buttons */}
          <div className="q-nav-actions">
            <Link href="/signin" className="q-btn-docs hidden sm:inline-flex">
              Sign in
            </Link>
            <button 
              onClick={onOpenVideoModal}
              className="q-btn-get-started"
            >
              <span>Book a demo</span>
              <ChevronRight className="h-4 w-4 opacity-70" />
            </button>

            {/* Mobile Hamburger Toggle Button */}
            <button 
              onClick={() => setHamburgerOpen(!hamburgerOpen)}
              className="p-2 text-slate-800 hover:bg-slate-200/60 rounded-full transition-colors min-[861px]:hidden cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {hamburgerOpen ? <X className="h-5.5 w-5.5" /> : <Menu className="h-5.5 w-5.5" />}
            </button>
          </div>

        </div>

      </div>

      {/* Mobile Glassmorphic Drawer Menu */}
      {hamburgerOpen && (
        <div className="min-[861px]:hidden absolute top-full left-4 right-4 mt-2 bg-white/95 backdrop-blur-2xl border border-slate-200/90 rounded-2xl p-5 shadow-2xl space-y-4 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
          <Link href="/axiovital" onClick={() => setHamburgerOpen(false)} className="block py-2 text-base font-semibold text-slate-900 hover:text-blue-600">
            Platform (AxioVital)
          </Link>
          <Link href="/hospitals" onClick={() => setHamburgerOpen(false)} className="block py-2 text-base font-semibold text-slate-900 hover:text-blue-600">
            Solutions
          </Link>
          <Link href="/documentation" onClick={() => setHamburgerOpen(false)} className="block py-2 text-base font-semibold text-slate-900 hover:text-blue-600">
            Developers & Docs
          </Link>
          <Link href="/pricing" onClick={() => setHamburgerOpen(false)} className="block py-2 text-base font-semibold text-slate-900 hover:text-blue-600">
            Pricing
          </Link>
          <Link href="/about" onClick={() => setHamburgerOpen(false)} className="block py-2 text-base font-semibold text-slate-900 hover:text-blue-600">
            Company
          </Link>
          <div className="pt-3 border-t border-slate-200/70 flex flex-col gap-2.5">
            <Link href="/signin" onClick={() => setHamburgerOpen(false)} className="w-full text-center py-2.5 text-sm font-semibold text-slate-800 border border-slate-300 rounded-full hover:bg-slate-100">
              Sign in
            </Link>
            <button 
              onClick={() => { setHamburgerOpen(false); onOpenVideoModal?.(); }}
              className="w-full text-center py-2.5 text-sm font-semibold text-white bg-slate-900 rounded-full shadow-md hover:bg-black"
            >
              Book a demo
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

