"use client";

import Link from "next/link";
import { siteConfig } from "./config";

export default function Footer() {
  return (
    <footer className="w-full bg-slate-100 text-slate-700 font-sans">


      {/* Main Footer Container */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">

        {/* Top Grid: Brand & Column Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 pb-12">

          {/* Brand Info & Newsletter */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold tracking-tight text-slate-900">
                AXIO<span className="text-blue-600">VITAL</span>
              </span>
            </Link>

            <p className="text-slate-600 text-sm leading-relaxed max-w-sm font-normal">
              AxioVital is a comprehensive healthcare technology platform developed and operated by QuantaForze, designed to connect patients, physicians, hospitals, outpatient clinics, and diagnostic laboratories.
            </p>

            <div className="pt-2 space-y-2">
              <label htmlFor="footer-email" className="text-xs font-bold uppercase tracking-wider text-slate-900 block">
                Subscribe to Health Updates
              </label>
              <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-2 max-w-sm">
                <input
                  id="footer-email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-500 shadow-2xs font-sans"
                />
                <button
                  type="submit"
                  className="bg-[#c74634] hover:bg-[#a83727] text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors shrink-0 shadow-2xs"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Column 1: Care Solutions */}
          <div className="space-y-3.5">
            <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wider">Solutions</h3>
            <ul className="space-y-2.5 text-sm font-normal">
              <li>
                <Link href="/solutions" className="text-slate-600 hover:text-slate-900 transition-colors">
                  Solutions Hub
                </Link>
              </li>
              <li>
                <Link href="/hospitals" className="text-slate-600 hover:text-slate-900 transition-colors">
                  Hospitals & Medical Networks
                </Link>
              </li>
              <li>
                <Link href="/clinics" className="text-slate-600 hover:text-slate-900 transition-colors">
                  Outpatient Clinics
                </Link>
              </li>
              <li>
                <Link href="/providers" className="text-slate-600 hover:text-slate-900 transition-colors">
                  Physicians & Doctors
                </Link>
              </li>
              <li>
                <Link href="/laboratories" className="text-slate-600 hover:text-slate-900 transition-colors">
                  Diagnostic Laboratories
                </Link>
              </li>
              <li>
                <Link href="/patients" className="text-slate-600 hover:text-slate-900 transition-colors">
                  Patients & Family Portals
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Products & AI */}
          <div className="space-y-3.5">
            <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wider">Products & AI</h3>
            <ul className="space-y-2.5 text-sm font-normal">
              <li>
                <Link href="/products" className="text-slate-600 hover:text-slate-900 transition-colors">
                  AxioVital Product Suite
                </Link>
              </li>
              <li>
                <Link href="/ai-features" className="text-slate-600 hover:text-slate-900 transition-colors">
                  Healthcare AI & AxioAI
                </Link>
              </li>
              <li>
                <Link href="/platform" className="text-slate-600 hover:text-slate-900 transition-colors">
                  EHR & Platform Architecture
                </Link>
              </li>
              <li>
                <Link href="/products#axio-card" className="text-slate-600 hover:text-slate-900 transition-colors">
                  AXIO Smart NFC Access Cards
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-slate-600 hover:text-slate-900 transition-colors">
                  Enterprise Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company & Resources */}
          <div className="space-y-3.5">
            <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wider">Company & Resources</h3>
            <ul className="space-y-2.5 text-sm font-normal">
              <li>
                <Link href="/about" className="text-slate-600 hover:text-slate-900 transition-colors">
                  About AxioVital
                </Link>
              </li>
              <li>
                <Link href="/documentation" className="text-slate-600 hover:text-slate-900 transition-colors">
                  Developer Documentation
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-slate-600 hover:text-slate-900 transition-colors">
                  Technical Resources
                </Link>
              </li>
              <li>
                <Link href="/customer-stories" className="text-slate-600 hover:text-slate-900 transition-colors">
                  Customer Stories
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-slate-600 hover:text-slate-900 transition-colors">
                  Support & Helpdesk
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-600 hover:text-slate-900 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="border-t border-slate-200/80 pt-8 flex flex-col items-center gap-6 md:flex-row md:justify-between md:gap-4 text-xs text-slate-500 font-normal text-center md:text-left">
          <div>
            © {new Date().getFullYear()} AxioVital — Healthcare Technology Platform operated by <a href="https://quantaforze.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-700">QuantaForze</a>. All rights reserved.
          </div>

          <div className="flex items-center gap-x-3 gap-y-1 flex-wrap justify-center">
            <Link href="/documentation" className="hover:text-slate-900 transition-colors">
              Documentation
            </Link>
            <span>•</span>
            <Link href="/sitemap" className="hover:text-slate-900 transition-colors">
              Sitemap
            </Link>
            <span>•</span>
            <Link href="/support" className="hover:text-slate-900 transition-colors">
              Support
            </Link>
            <span>•</span>
            <Link href="/about" className="hover:text-slate-900 transition-colors">
              Security & Compliance
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 text-slate-400">
            <a href="https://www.linkedin.com/in/quantaforze-llc-b142a7398/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-slate-700 transition-colors">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </a>
            <a href="https://x.com/axiovital" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="hover:text-slate-700 transition-colors">
              <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="https://www.youtube.com/@axiovital-hrm" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-slate-700 transition-colors">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
            <a href="https://github.com/somraj-devji" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-slate-700 transition-colors">
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
          </div>


        </div>

      </div>
    </footer>
  );
}
