import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Healthcare Customer Stories & Operational Case Studies",
  description: "Read how top hospital networks and clinical facilities reduced patient wait times by 80% and digitized care operations with AxioVital.",
  alternates: {
    canonical: "https://axiovital.quantaforze.com/customer-stories",
  },
  openGraph: {
    title: "Healthcare Customer Stories & Operational Case Studies",
    description: "Read how top hospital networks and clinical facilities reduced patient wait times by 80% and digitized care operations with AxioVital.",
    url: "https://axiovital.quantaforze.com/customer-stories",
    siteName: "AxioVital Health Platform",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Healthcare Customer Stories & Operational Case Studies",
    description: "Read how top hospital networks and clinical facilities reduced patient wait times by 80% and digitized care operations with AxioVital.",
  },
};

export default function CustomerStories() {
  const stories = [
    {
      facility: "Metro General Health System",
      impact: "34% Reduction in Admin Overheads",
      quote: "AxioAI allowed our nurses to spend less time typing charts and more time in direct patient rooms.",
      rep: "Dr. Amanda Ross, Chief Medical Officer"
    },
    {
      facility: "Beacon Labs Network",
      impact: "Zero Mislabeled Specimens in 12 Months",
      quote: "Binding diagnostic orders to the AXIO-ID token system resolved our specimen tracking issues completely.",
      rep: "Marcus Vance, Director of Lab Operations"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">Case Studies</span>
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl">
            Operational Results that Matter
          </h1>
          <p className="text-lg text-slate-600">
            Read how hospitals, regional practices, and clinical systems deploy AxioVital daily.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {stories.map((s, idx) => (
            <div key={idx} className="bg-white border border-slate-200 p-8 rounded-3xl shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider">{s.facility}</div>
                <div className="text-2xl font-bold text-slate-900">{s.impact}</div>
                <p className="text-slate-600 text-sm italic leading-relaxed">&ldquo;{s.quote}&rdquo;</p>
              </div>
              <div className="pt-4 border-t border-slate-150 text-xs font-semibold text-slate-500">
                {s.rep}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
