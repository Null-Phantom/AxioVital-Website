import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AxioVital Website Directory & Navigation Sitemap",
  description: "Browse the complete directory of AxioVital platform pages, healthcare solutions, products, documentation, and resources.",
  alternates: {
    canonical: "https://axiovital.quantaforze.com/sitemap",
  },
  openGraph: {
    title: "AxioVital Website Directory & Navigation Sitemap",
    description: "Browse the complete directory of AxioVital platform pages, healthcare solutions, products, documentation, and resources.",
    url: "https://axiovital.quantaforze.com/sitemap",
    siteName: "AxioVital Health Platform",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AxioVital Website Directory & Navigation Sitemap",
    description: "Browse the complete directory of AxioVital platform pages, healthcare solutions, products, documentation, and resources.",
  },
};

export default function SitemapPage() {
  return (
    <div className="bg-white min-h-screen py-12 px-6 sm:px-12 font-[-apple-system,BlinkMacSystemFont,'Segoe_UI',Helvetica,Arial,sans-serif,'Apple_Color_Emoji','Segoe_UI_Emoji'] text-[#24292f]">
      <div className="max-w-[1012px] mx-auto space-y-10">
        
        {/* Title */}
        <h1 className="text-[32px] font-semibold tracking-tight text-[#1F2328]">
          Sitemap
        </h1>

        {/* Section: Explore AxioVital */}
        <div className="space-y-6">
          <h2 className="text-[24px] font-semibold text-[#1F2328] pb-2 border-b border-[#d0d7de]">
            Explore AxioVital
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start pt-2">
            {/* Column 1 */}
            <div className="space-y-6">
              <div>
                <Link href="/contact" className="text-[16px] text-[#0969da] hover:underline font-semibold block mb-2">
                  Create AxioVital Account
                </Link>
                <Link href="/contact" className="text-[16px] text-[#0969da] hover:underline font-semibold block mb-2">
                  AxioVital Login
                </Link>
                <Link href="/pricing" className="text-[16px] text-[#0969da] hover:underline font-semibold block mb-2">
                  AxioVital Pricing
                </Link>
                <Link href="/about" className="text-[16px] text-[#0969da] hover:underline font-semibold block mb-2">
                  What is AxioVital?
                </Link>
              </div>

              <div>
                <Link href="/solutions" className="text-[16px] text-[#0969da] hover:underline font-semibold block mb-2">
                  AxioVital Teams
                </Link>
                <ul className="list-disc pl-5 space-y-1.5 text-[12px] text-[#24292f]">
                  <li>Slack Integration</li>
                  <li>CI/CD workflows - AxioVital Actions</li>
                  <li>AxioVital Apps</li>
                </ul>
              </div>

              <div>
                <Link href="/platform" className="text-[16px] text-[#0969da] hover:underline font-semibold block mb-2">
                  AxioVital for Enterprise
                </Link>
                <ul className="list-disc pl-5 space-y-1.5 text-[12px] text-[#24292f]">
                  <li>Enterprise Premium Support</li>
                  <li>Enterprise Startups</li>
                </ul>
              </div>

              <div>
                <Link href="/platform" className="text-[16px] text-[#0969da] hover:underline font-semibold block mb-2">
                  AxioVital Platform
                </Link>
                <ul className="list-disc pl-5 space-y-1.5 text-[12px] text-[#24292f]">
                  <li><Link href="/documentation" className="hover:underline">Developer API</Link></li>
                  <li>Partners</li>
                  <li>AxioVital CLI</li>
                  <li>AxioVital Desktop</li>
                  <li><Link href="/products" className="hover:underline">AxioVital Mobile</Link></li>
                </ul>
              </div>
            </div>

            {/* Column 2 */}
            <div className="space-y-6">
              <div>
                <span className="text-[14px] font-semibold text-[#1F2328] block mb-2">
                  Features
                </span>
                <ul className="list-disc pl-5 space-y-1.5 text-[12px] text-[#24292f]">
                  <li>Code Review</li>
                  <li>Code Search</li>
                  <li>Codespaces</li>
                  <li>
                    <span>Copilot</span>
                    <ul className="list-disc pl-5 mt-1.5 space-y-1.5">
                      <li>Copilot Business</li>
                      <li>Copilot Extensions</li>
                      <li>Copilot Plans</li>
                      <li>Copilot Tutorials</li>
                    </ul>
                  </li>
                  <li>Discussions</li>
                  <li>Issues</li>
                  <li>Actions - workflows</li>
                  <li>
                    <span>Security</span>
                    <ul className="list-disc pl-5 mt-1.5 space-y-1.5">
                      <li>Secure your code</li>
                      <li>Software supply chain</li>
                    </ul>
                  </li>
                  <li>Hosting</li>
                </ul>
              </div>

              <div>
                <Link href="/solutions" className="text-[16px] text-[#0969da] hover:underline font-semibold block">
                  AxioVital Sponsors
                </Link>
              </div>

              <div>
                <Link href="/resources" className="text-[16px] text-[#0969da] hover:underline font-semibold block">
                  The ReadME Project
                </Link>
              </div>
            </div>

            {/* Column 3 */}
            <div className="space-y-6">
              <div>
                <span className="text-[14px] font-semibold text-[#1F2328] block mb-2">
                  Repositories
                </span>
                <ul className="list-disc pl-5 space-y-1.5 text-[12px] text-[#24292f]">
                  <li>Collections</li>
                  <li>Topics</li>
                  <li>Trending Repositories</li>
                </ul>
              </div>

              <div>
                <span className="text-[14px] font-semibold text-[#1F2328] block mb-2">
                  Resources
                </span>
                <ul className="list-disc pl-5 space-y-1.5 text-[12px] text-[#24292f]">
                  <li>
                    <span>Articles</span>
                    <ul className="list-disc pl-5 mt-1.5 space-y-1.5">
                      <li>AI Articles</li>
                      <li>DevOps Articles</li>
                      <li>Security Articles</li>
                      <li>Software Development Articles</li>
                    </ul>
                  </li>
                  <li>Whitepapers</li>
                </ul>
              </div>

              <div>
                <span className="text-[14px] font-semibold text-[#1F2328] block mb-2">
                  Solutions
                </span>
                <ul className="list-disc pl-5 space-y-1.5 text-[12px] text-[#24292f]">
                  <li>Executive Insights</li>
                  <li>
                    <span>Industry Solutions</span>
                    <ul className="list-disc pl-5 mt-1.5 space-y-1.5">
                      <li>Financial Solutions</li>
                      <li>Government Solutions</li>
                      <li>Healthcare Solutions</li>
                      <li>Manufacturing Solutions</li>
                      <li>Nonprofit Solutions</li>
                    </ul>
                  </li>
                  <li>
                    <span>Use Cases</span>
                    <ul className="list-disc pl-5 mt-1.5 space-y-1.5">
                      <li>CI/CD Use Cases</li>
                      <li>DevOps Use Cases</li>
                      <li>DevSecOps Use Cases</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Section: Additional Resources */}
        <div className="space-y-6 pt-6">
          <h2 className="text-[24px] font-semibold text-[#1F2328] pb-2 border-b border-[#d0d7de]">
            Additional Resources
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start pt-2">
            {/* Column 1 */}
            <div>
              <span className="text-[14px] font-semibold text-[#1F2328] block mb-2">
                Support
              </span>
              <ul className="list-disc pl-5 space-y-1.5 text-[12px] text-[#24292f]">
                <li><Link href="/documentation" className="hover:underline">Docs</Link></li>
                <li>CodeQL Documentation</li>
                <li>Advisories</li>
                <li>Community Discussions</li>
                <li>Skills</li>
                <li>Status</li>
                <li><Link href="/support" className="hover:underline">Contact AxioVital</Link></li>
                <li>Newsroom</li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <span className="text-[14px] font-semibold text-[#1F2328] block mb-2">
                AxioVital
              </span>
              <ul className="list-disc pl-5 space-y-1.5 text-[12px] text-[#24292f]">
                <li><Link href="/about" className="hover:underline">About</Link></li>
                <li>Blog</li>
                <li><Link href="/careers" className="hover:underline">Careers</Link></li>
                <li>Press</li>
                <li>Social Impact</li>
                <li>Diversity, Inclusion, and Belonging</li>
                <li>Shop</li>
                <li><Link href="/customer-stories" className="hover:underline">Customer Stories</Link></li>
                <li>Education</li>
                <li>AxioVital Roadmap</li>
                <li>FAQs</li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <span className="text-[14px] font-semibold text-[#1F2328] block mb-2">
                Learn
              </span>
              <ul className="list-disc pl-5 space-y-1.5 text-[12px] text-[#24292f]">
                <li><Link href="/resources" className="hover:underline">Resources</Link></li>
                <li>Compare AxioVital to DevOps Tools</li>
                <li>Learning Pathways</li>
                <li>The State of AxioVital</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
