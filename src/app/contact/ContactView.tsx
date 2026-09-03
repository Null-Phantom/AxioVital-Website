"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  MessageSquare, Send, Headphones, Phone, CheckCircle, ChevronRight, MessageCircle 
} from "lucide-react";

export default function ContactView() {
  const [activeTab, setActiveTab] = useState("send-message");
  const [submitted, setSubmitted] = useState(false);
  const [productCategory, setProductCategory] = useState("");
  const [product, setProduct] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white min-h-screen font-sans text-[#1f1e1c] py-8 sm:py-12">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* 1. TOP HERO SECTION */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-8 border-b border-slate-200">
          <div className="space-y-6 max-w-2xl">
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1f1e1c] tracking-tight">
              Contact AxioVital in India
            </h1>
            
            <div className="flex flex-wrap items-center gap-3">
              <button 
                onClick={() => setActiveTab("send-message")}
                className="bg-[#1f1e1c] hover:bg-[#33312e] text-white text-xs font-bold px-4 py-2.5 rounded-2xs transition-colors flex items-center gap-2 shadow-2xs cursor-pointer"
              >
                <span>Chat Live with AxioVital Sales</span>
                <MessageSquare className="h-4 w-4" />
              </button>
              <Link 
                href="/support"
                className="border border-[#1f1e1c] text-[#1f1e1c] hover:bg-[#1f1e1c] hover:text-white text-xs font-bold px-4 py-2.5 rounded-2xs transition-colors"
              >
                AxioVital Platform Support
              </Link>
            </div>
          </div>

          {/* Right Hero Image Card */}
          <div className="w-full lg:w-[480px] h-[220px] rounded-xl overflow-hidden shadow-md border border-slate-200 shrink-0 relative bg-slate-100">
            <img 
              src="/oracle_hero_doctor.jpg" 
              alt="AxioVital Healthcare Representatives Consulting" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent p-6 flex items-end">
              <span className="text-white text-xs font-bold uppercase tracking-wider bg-black/60 px-3 py-1 rounded-2xs">
                QuantaForze Healthcare Operations
              </span>
            </div>
          </div>
        </div>

        {/* 2. TOP 3 QUICK ACTION CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-4 border-b border-slate-200">
          
          {/* Card 1: Contact Sales */}
          <div className="space-y-3 pr-4 md:border-r border-slate-200">
            <div className="h-10 w-10 text-[#1f1e1c] flex items-center justify-start">
              <MessageCircle className="h-8 w-8 stroke-[1.5]" />
            </div>
            <h2 className="text-lg font-bold text-[#1f1e1c]">Contact sales</h2>
            <button 
              onClick={() => setActiveTab("send-message")}
              className="text-xs font-bold text-[#0066cc] hover:underline block text-left"
            >
              Chat live with AxioVital Sales
            </button>
          </div>

          {/* Card 2: Send a Message */}
          <div className="space-y-3 pr-4 md:border-r border-slate-200">
            <div className="h-10 w-10 text-[#1f1e1c] flex items-center justify-start">
              <Send className="h-7 w-7 stroke-[1.5]" />
            </div>
            <h2 className="text-lg font-bold text-[#1f1e1c]">Send a message to AxioVital Sales</h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              Send us a message here and we'll get back to you. For a faster response, please provide your contact information.
            </p>
            <button 
              onClick={() => setActiveTab("send-message")}
              className="text-xs font-bold text-[#0066cc] hover:underline block text-left"
            >
              Send us a message
            </button>
            <p className="text-xs text-slate-600 pt-1">
              We can also be contacted via email:<br />
              <a href="mailto:support@quantaforze.com" className="text-[#0066cc] hover:underline font-medium">support@quantaforze.com</a>
            </p>
          </div>

          {/* Card 3: Technical Support */}
          <div className="space-y-3">
            <div className="h-10 w-10 text-[#1f1e1c] flex items-center justify-start">
              <Headphones className="h-8 w-8 stroke-[1.5]" />
            </div>
            <h2 className="text-lg font-bold text-[#1f1e1c]">I need technical support</h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              Find the technical support you need.
            </p>
            <p className="text-xs font-bold text-[#0066cc]">
              +91 80 37132100 <span className="text-slate-500 font-normal">(India)</span>
            </p>
            <div className="space-y-1 text-xs">
              <Link href="/support" className="text-[#0066cc] hover:underline block">Global technical support</Link>
              <Link href="/support" className="text-[#0066cc] hover:underline block">My AxioVital Support</Link>
            </div>
          </div>

        </div>

        {/* 3. INTERACTIVE "HOW CAN WE HELP?" TABBED SECTION */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl font-bold text-[#1f1e1c]">How can we help?</h2>

          {/* Horizontal Tabs */}
          <div className="border-b border-slate-200 overflow-x-auto flex items-center gap-6 text-xs sm:text-sm font-bold scrollbar-hide">
            {[
              { id: "send-message", label: "Send a message" },
              { id: "training", label: "Training and Certification" },
              { id: "technical", label: "Technical support" },
              { id: "billing", label: "Billing support" },
              { id: "account", label: "AxioVital account support" },
              { id: "cloud-trial", label: "Cloud trial support" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => { setActiveTab(tab.id); setSubmitted(false); }}
                className={`py-3 transition-colors border-b-2 whitespace-nowrap cursor-pointer ${
                  activeTab === tab.id
                    ? "border-[#1f1e1c] text-[#1f1e1c]"
                    : "border-transparent text-slate-500 hover:text-slate-900"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content Box */}
          <div className="pt-2">
            {submitted ? (
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 max-w-2xl text-center space-y-3">
                <div className="h-12 w-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Message Received</h3>
                <p className="text-xs text-slate-600 max-w-md mx-auto">
                  Thank you for contacting AxioVital Sales. A product specialist will review your inquiry and reach back within 2 business hours.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-bold text-[#0066cc] underline pt-2"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <div className="space-y-6 max-w-4xl">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-[#1f1e1c]">
                    {activeTab === "send-message" && "Send a message to AxioVital Sales"}
                    {activeTab === "training" && "AxioVital Healthcare Training & Certification"}
                    {activeTab === "technical" && "Technical & System Integration Assistance"}
                    {activeTab === "billing" && "Enterprise Billing & Licensing Support"}
                    {activeTab === "account" && "AxioVital Account & Identity Management"}
                    {activeTab === "cloud-trial" && "Healthcare Operating System Trial Requests"}
                  </h3>
                  <p className="text-xs text-slate-600 max-w-3xl leading-relaxed">
                    Select the product category you are interested in. You will then be prompted to provide your contact details and message. Once submitted, an AxioVital representative will contact you.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Dropdown 1: Product Category */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 block">Product category *</label>
                    <select 
                      required
                      value={productCategory}
                      onChange={(e) => setProductCategory(e.target.value)}
                      className="w-full max-w-xl text-xs sm:text-sm p-2.5 border border-slate-400 rounded-2xs bg-white text-slate-900 focus:outline-none focus:border-slate-900"
                    >
                      <option value="">Please select product category</option>
                      <option value="ehr">Enterprise EHR & Operating System</option>
                      <option value="ai">AxioAI Clinical Notes & Speech Assistant</option>
                      <option value="nfc">AXIO Smart NFC Cards & Kiosks</option>
                      <option value="lis">Laboratory Integration Gateway (LIS)</option>
                      <option value="patients">MyHealthcare Patient Companion Portal</option>
                    </select>
                  </div>

                  {/* Dropdown 2: Specific Product */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 block">Product *</label>
                    <select 
                      required
                      value={product}
                      onChange={(e) => setProduct(e.target.value)}
                      className="w-full max-w-xl text-xs sm:text-sm p-2.5 border border-slate-400 rounded-2xs bg-white text-slate-900 focus:outline-none focus:border-slate-900"
                    >
                      <option value="">Please select product</option>
                      <option value="axiovital-hospital">AxioVital Hospital OS</option>
                      <option value="axiovital-clinic">AxioVital Outpatient Clinic Suite</option>
                      <option value="axioconnect">AxioConnect FHIR R4 Engine</option>
                      <option value="axioai">AxioAI Ambient SOAP Assistant</option>
                      <option value="axio-card">AXIO Smart NFC Card 3.0</option>
                    </select>
                  </div>

                  {/* Form Contact Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-700 block">Full Name *</label>
                      <input 
                        type="text" 
                        required
                        placeholder="Dr. Rajesh Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full text-xs sm:text-sm p-2.5 border border-slate-400 rounded-2xs text-slate-900 focus:outline-none focus:border-slate-900"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-700 block">Work Email *</label>
                      <input 
                        type="email" 
                        required
                        placeholder="r.sharma@hospital.org"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full text-xs sm:text-sm p-2.5 border border-slate-400 rounded-2xs text-slate-900 focus:outline-none focus:border-slate-900"
                      />
                    </div>
                  </div>

                  <div className="space-y-1 max-w-xl">
                    <label className="text-xs font-semibold text-slate-700 block">Your Message</label>
                    <textarea 
                      rows={3}
                      placeholder="Please specify your health system requirements or question..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full text-xs sm:text-sm p-2.5 border border-slate-400 rounded-2xs text-slate-900 focus:outline-none focus:border-slate-900 resize-none"
                    />
                  </div>

                  <div>
                    <button 
                      type="submit"
                      className="bg-[#1f1e1c] hover:bg-[#33312e] text-white text-xs font-bold px-6 py-2.5 rounded-2xs transition-colors shadow-2xs cursor-pointer"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>

        {/* 4. LOWER INFORMATION GRID (LOCATIONS, CAREERS, PARTNERS) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-8 border-t border-slate-200">
          
          {/* Left Column: Phone, Locations, Additional Resources */}
          <div className="space-y-8">
            
            {/* Contact sales phone */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Phone className="h-6 w-6 text-[#1f1e1c]" />
                <h3 className="text-xl font-bold text-[#1f1e1c]">Contact sales</h3>
              </div>
              <div className="text-xs text-slate-700 space-y-1">
                <p className="font-bold text-[#0066cc] text-sm">+91 80 37132100</p>
                <p className="font-bold text-[#0066cc]">000 800 100 7789 <span className="font-normal text-slate-600">(Tata toll-free, India)</span></p>
                <a href="mailto:support@quantaforze.com" className="text-[#0066cc] hover:underline block pt-1 font-medium">Find phone numbers outside of India</a>
              </div>
            </div>

            {/* Locations */}
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-[#1f1e1c]">Locations</h3>
              <div className="text-xs text-slate-650 space-y-1">
                <p className="font-bold text-slate-900">India headquarters</p>
                <p className="font-semibold text-slate-800">QuantaForze India Private Limited</p>
                <p>F-01/02, First Floor, Salcon Rasvilas</p>
                <p>D-1, District Centre, Saket</p>
                <p>New Delhi - 110017</p>
              </div>
              <div className="pt-2 text-xs space-y-1">
                <a href="mailto:support@quantaforze.com" className="text-[#0066cc] hover:underline block">India field offices</a>
                <a href="mailto:support@quantaforze.com" className="text-[#0066cc] hover:underline block">Directory of global contacts</a>
              </div>
            </div>

            {/* Additional resources */}
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-[#1f1e1c]">Additional resources</h3>
              <div className="text-xs space-y-1">
                <Link href="/contact" className="text-[#0066cc] hover:underline block">Talk to our partner assistance team</Link>
                <Link href="/contact" className="text-[#0066cc] hover:underline block">Employment verification</Link>
              </div>
            </div>

          </div>

          {/* Right Column: Careers, Partners, Support Directory */}
          <div className="space-y-8">
            
            {/* Careers */}
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-[#1f1e1c]">I'm interested in working for AxioVital</h3>
              <p className="text-xs text-slate-650 leading-relaxed">
                Explore <Link href="/careers" className="text-[#0066cc] hover:underline font-semibold">AxioVital Careers</Link> to get to know us, learn more about what we do, and see if your ideal role awaits you.
              </p>
              <p className="text-xs text-slate-650">
                Are you a student or recent graduate? Go to our <Link href="/careers" className="text-[#0066cc] hover:underline">college recruiting page</Link>.
              </p>
              <div className="pt-1">
                <Link 
                  href="/careers"
                  className="inline-block border border-[#1f1e1c] text-[#1f1e1c] hover:bg-[#1f1e1c] hover:text-white text-xs font-bold px-4 py-2 rounded-2xs transition-colors"
                >
                  Search for jobs
                </Link>
              </div>
            </div>

            {/* Partners */}
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-[#1f1e1c]">Partners</h3>
              <p className="text-xs text-slate-650">
                Learn more about <Link href="/solutions" className="text-[#0066cc] hover:underline font-semibold">AxioVital PartnerNetwork</Link>.
              </p>
              <p className="text-xs text-slate-650">
                Looking to find an AxioVital Partner? <Link href="/solutions" className="text-[#0066cc] hover:underline">Search our Partner Finder</Link>.
              </p>
            </div>

            {/* Support Global Directory */}
            <div className="space-y-2 pt-2 border-t border-slate-100">
              <div className="text-xs space-y-1">
                <Link href="/support" className="text-[#0066cc] hover:underline block font-medium">AxioVital Support contacts global directory</Link>
                <Link href="/about" className="text-[#0066cc] hover:underline block font-medium">Public relations contacts for media inquiries</Link>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
