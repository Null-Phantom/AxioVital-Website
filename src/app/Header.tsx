"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Menu, Search, ChevronDown, X, ChevronRight, Activity, Sparkles, 
  Database, Layers, Code, Users, Building2, CreditCard, User, 
  Stethoscope, Shield, ArrowRight, Globe
} from "lucide-react";

export default function Header({ onOpenVideoModal }: { onOpenVideoModal?: () => void }) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-200 ${
      scrolled 
        ? "bg-slate-950/95 backdrop-blur-md border-b border-white/10 shadow-xl" 
        : "bg-slate-950 border-b border-white/5"
    } text-white`}>
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-6">
        
        {/* Brand Logo */}
        <div className="flex items-center gap-8 shrink-0">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="h-8 w-8 rounded-lg bg-teal-500 flex items-center justify-center text-slate-950 font-extrabold shadow-sm group-hover:bg-teal-400 transition-colors">
              <Activity className="h-5 w-5 text-slate-950" />
            </div>
            <span className="font-extrabold text-xl tracking-tight text-white font-display">
              AXIOVITAL
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            
            {/* Platform Dropdown */}
            <div className="relative" onMouseLeave={() => setOpenDropdown(null)}>
              <button 
                onMouseEnter={() => setOpenDropdown("platform")}
                onClick={() => setOpenDropdown(openDropdown === "platform" ? null : "platform")}
                className="px-3.5 py-2 text-xs font-semibold text-slate-300 hover:text-white rounded-md hover:bg-white/5 flex items-center gap-1 transition-colors cursor-pointer"
              >
                Platform <ChevronDown className="h-3.5 w-3.5 text-slate-400" />
              </button>

              {openDropdown === "platform" && (
                <div className="absolute top-full left-0 w-80 bg-slate-900 border border-slate-800 rounded-xl shadow-2xl p-3 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <Link 
                    href="/axiovital" 
                    onClick={() => setOpenDropdown(null)}
                    className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-800/90 transition-colors"
                  >
                    <Building2 className="h-5 w-5 text-teal-400 mt-0.5 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white">AxioVital</div>
                      <div className="text-[11px] text-slate-400">Hospital operating system for connected care</div>
                    </div>
                  </Link>
                  <Link 
                    href="/axioid" 
                    onClick={() => setOpenDropdown(null)}
                    className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-800/90 transition-colors"
                  >
                    <User className="h-5 w-5 text-cyan-400 mt-0.5 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white">AxioID</div>
                      <div className="text-[11px] text-slate-400">Persistent healthcare identity</div>
                    </div>
                  </Link>
                  <Link 
                    href="/axiocard" 
                    onClick={() => setOpenDropdown(null)}
                    className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-800/90 transition-colors"
                  >
                    <CreditCard className="h-5 w-5 text-sky-400 mt-0.5 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white">AxioCard</div>
                      <div className="text-[11px] text-slate-400">NFC-powered patient identity & access</div>
                    </div>
                  </Link>
                  <Link 
                    href="/network" 
                    onClick={() => setOpenDropdown(null)}
                    className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-800/90 transition-colors"
                  >
                    <Layers className="h-5 w-5 text-blue-400 mt-0.5 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white">Axio Network</div>
                      <div className="text-[11px] text-slate-400">Connected provider infrastructure</div>
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
                className="px-3.5 py-2 text-xs font-semibold text-slate-300 hover:text-white rounded-md hover:bg-white/5 flex items-center gap-1 transition-colors cursor-pointer"
              >
                Solutions <ChevronDown className="h-3.5 w-3.5 text-slate-400" />
              </button>

              {openDropdown === "solutions" && (
                <div className="absolute top-full left-0 w-80 bg-slate-900 border border-slate-800 rounded-xl shadow-2xl p-3 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <Link 
                    href="/hospitals" 
                    onClick={() => setOpenDropdown(null)}
                    className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-800/90 transition-colors"
                  >
                    <Building2 className="h-5 w-5 text-teal-400 mt-0.5 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white">Hospitals & Health Networks</div>
                      <div className="text-[11px] text-slate-400">Unify clinical and operational workflows</div>
                    </div>
                  </Link>
                  <Link 
                    href="/providers" 
                    onClick={() => setOpenDropdown(null)}
                    className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-800/90 transition-colors"
                  >
                    <Stethoscope className="h-5 w-5 text-cyan-400 mt-0.5 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white">Doctors & Care Teams</div>
                      <div className="text-[11px] text-slate-400">Access patient context without reconstruction</div>
                    </div>
                  </Link>
                  <Link 
                    href="/patients" 
                    onClick={() => setOpenDropdown(null)}
                    className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-800/90 transition-colors"
                  >
                    <User className="h-5 w-5 text-sky-400 mt-0.5 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white">Patients & Families</div>
                      <div className="text-[11px] text-slate-400">Carry your healthcare identity across providers</div>
                    </div>
                  </Link>
                  <Link 
                    href="/connected-healthcare" 
                    onClick={() => setOpenDropdown(null)}
                    className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-800/90 transition-colors"
                  >
                    <Globe className="h-5 w-5 text-blue-400 mt-0.5 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-white">Connected Healthcare</div>
                      <div className="text-[11px] text-slate-400">Connect fragmented healthcare ecosystems</div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            {/* Direct Navbar Links */}
            <Link href="/documentation" className="px-3.5 py-2 text-xs font-semibold text-slate-300 hover:text-white rounded-md hover:bg-white/5 transition-colors">
              Developers & Docs
            </Link>
            <Link href="/pricing" className="px-3.5 py-2 text-xs font-semibold text-slate-300 hover:text-white rounded-md hover:bg-white/5 transition-colors">
              Pricing
            </Link>
            <Link href="/about" className="px-3.5 py-2 text-xs font-semibold text-slate-300 hover:text-white rounded-md hover:bg-white/5 transition-colors">
              Company
            </Link>

          </nav>
        </div>

        {/* Right CTA Actions */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <Link href="/contact" className="text-xs font-semibold text-slate-300 hover:text-white px-3 py-2 transition-colors">
            Sign in
          </Link>
          <Link 
            href="/contact" 
            className="px-4 py-2 rounded-lg bg-teal-500 hover:bg-teal-400 text-slate-950 font-extrabold text-xs transition-all shadow-sm flex items-center gap-1.5"
          >
            Book a demo <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-slate-300 hover:text-white"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-slate-800 p-4 space-y-3">
          <Link href="/axiovital" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm font-semibold text-white">AxioVital Platform</Link>
          <Link href="/axioid" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm font-semibold text-white">AxioID Identity</Link>
          <Link href="/axiocard" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm font-semibold text-white">AxioCard NFC</Link>
          <Link href="/network" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm font-semibold text-white">Axio Network</Link>
          <Link href="/hospitals" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm font-semibold text-white">Hospitals & Health Networks</Link>
          <Link href="/providers" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm font-semibold text-white">Doctors & Care Teams</Link>
          <Link href="/patients" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm font-semibold text-white">Patients & Families</Link>
          <Link href="/connected-healthcare" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm font-semibold text-white">Connected Healthcare</Link>
          <Link href="/documentation" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-sm font-semibold text-teal-400">Developers & Docs</Link>
        </div>
      )}
    </header>
  );
}
