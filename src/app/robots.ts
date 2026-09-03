import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: [
          "/",
          "/platform",
          "/hospitals",
          "/clinics",
          "/providers",
          "/laboratories",
          "/patients",
          "/products",
          "/solutions",
          "/ai-features",
          "/pricing",
          "/about",
          "/careers",
          "/customer-stories",
          "/resources",
          "/documentation",
          "/support",
          "/contact",
          "/sitemap",
          "/profile",
        ],
        disallow: [
          "/login",
          "/register",
          "/dashboard/",
          "/admin/",
          "/api/",
          "/private/",
          "/account/",
          "/records/",
          "/search",
          "/query",
        ],
      },
    ],
    sitemap: "https://axiovital.quantaforze.com/sitemap.xml",
  };
}

