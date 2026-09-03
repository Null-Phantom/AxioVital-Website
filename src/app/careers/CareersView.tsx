"use client";

import { useState } from "react";
import { MapPin, Send } from "lucide-react";

export default function CareersView() {
  const [department, setDepartment] = useState("all");

  const jobs = [
    { title: "Senior Healthcare ML Engineer", dept: "engineering", location: "San Francisco, CA / Remote" },
    { title: "EHR Integration Solutions Architect", dept: "solutions", location: "Austin, TX / Hybrid" },
    { title: "Enterprise Account Executive", dept: "sales", location: "New York, NY / Hybrid" },
    { title: "Full Stack Engineer (FHIR APIs)", dept: "engineering", location: "San Francisco, CA / Remote" }
  ];

  const filteredJobs = department === "all" ? jobs : jobs.filter(j => j.dept === department);

  return (
    <div className="bg-slate-50 min-h-screen py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">Careers at AxioVital</span>
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl">
            Build Connected Health Tech
          </h1>
          <p className="text-lg text-slate-600">
            Join our mission to optimize medical systems, streamline clinician charting, and secure patient data pipelines.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2">
          {[
            { id: "all", label: "All Departments" },
            { id: "engineering", label: "Engineering" },
            { id: "solutions", label: "Solutions" },
            { id: "sales", label: "Sales & Growth" }
          ].map(d => (
            <button
              key={d.id}
              onClick={() => setDepartment(d.id)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all border ${
                department === d.id 
                  ? "bg-blue-600 text-white border-blue-600 shadow-md" 
                  : "bg-white text-slate-600 border-slate-200 hover:border-slate-300"
              }`}
            >
              {d.label}
            </button>
          ))}
        </div>

        {/* Job Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {filteredJobs.map((job, idx) => (
            <div key={idx} className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider">{job.dept}</div>
                <h3 className="text-lg font-bold text-slate-900">{job.title}</h3>
                <div className="text-xs text-slate-400 flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5" /> {job.location}
                </div>
              </div>
              <div className="pt-2">
                <button className="rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white hover:bg-slate-800 transition-all flex items-center gap-1.5">
                  Apply Now <Send className="h-3 w-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
