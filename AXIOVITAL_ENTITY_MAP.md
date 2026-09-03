# AxioVital — Entity Map & Knowledge Graph Architecture

This document serves as the project's single source of truth for all public entity attributes, schema.org structured data configurations, social profiles, and brand relationship parameters.

---

## 1. Core Entity Definition

| Entity Property | Verified Canonical Value |
| :--- | :--- |
| **Primary Entity Name** | `AxioVital` |
| **Legal Entity Name** | `AxioVital Health Platform` |
| **Alternate Spellings** | `["Axio Vital", "AxioVital HealthTech", "AxioVital Healthcare Software", "AxioVital QuantaForze"]` |
| **Official Web Origin** | `https://axiovital.quantaforze.com/` |
| **Category** | `Healthcare Technology / HealthTech Software` |
| **Parent Organization** | `QuantaForze` (`https://quantaforze.com`) |
| **Entity Relationship** | `QuantaForze` develops and operates `AxioVital` |
| **Official Logo URL** | `https://axiovital.quantaforze.com/oracle_hero_doctor.jpg` |
| **Contact Point** | `support@quantaforze.com` |

---

## 2. Canonical Brand Description

> **"AxioVital is an integrated healthcare technology platform developed and operated by QuantaForze, connecting patients, care providers, clinics, hospitals, and diagnostic laboratories with secure EHR interoperability and clinical workflows."**

---

## 3. Official Entity Social & Code Profiles (`sameAs`)

* **Parent Company Web Origin:** `https://quantaforze.com`
* **LinkedIn:** `https://www.linkedin.com/in/quantaforze-llc-b142a7398/`
* **X / Twitter:** `https://x.com/axiovital`
* **YouTube:** `https://www.youtube.com/@axiovital-hrm`
* **GitHub:** `https://github.com/somraj-devji`

*Note: Unconfirmed social profiles (e.g. Instagram, Wikipedia) are intentionally excluded until officially claimed to preserve entity purity.*

---

## 4. Primary Indexable Canonical URLs (20 Public Endpoints)

1. **Homepage:** `https://axiovital.quantaforze.com/`
2. **Platform & Architecture:** `https://axiovital.quantaforze.com/platform`
3. **Hospital Solutions:** `https://axiovital.quantaforze.com/hospitals`
4. **Clinic Solutions:** `https://axiovital.quantaforze.com/clinics`
5. **Provider Workspace:** `https://axiovital.quantaforze.com/providers`
6. **Laboratory Gateway:** `https://axiovital.quantaforze.com/laboratories`
7. **Patient Companion:** `https://axiovital.quantaforze.com/patients`
8. **Product Directory:** `https://axiovital.quantaforze.com/products`
9. **Solutions Hub:** `https://axiovital.quantaforze.com/solutions`
10. **Healthcare AI:** `https://axiovital.quantaforze.com/ai-features`
11. **Pricing & Plans:** `https://axiovital.quantaforze.com/pricing`
12. **About & Credentials:** `https://axiovital.quantaforze.com/about`
13. **Careers:** `https://axiovital.quantaforze.com/careers`
14. **Customer Stories:** `https://axiovital.quantaforze.com/customer-stories`
15. **Resource Library:** `https://axiovital.quantaforze.com/resources`
16. **Developer Documentation:** `https://axiovital.quantaforze.com/documentation`
17. **Support & Helpdesk:** `https://axiovital.quantaforze.com/support`
18. **Contact Sales:** `https://axiovital.quantaforze.com/contact`
19. **HTML Sitemap Directory:** `https://axiovital.quantaforze.com/sitemap`
20. **Request Appointment & Profile:** `https://axiovital.quantaforze.com/profile`

---

## 5. Structured Data Stack Summary

* **RootLayout (`src/app/layout.tsx`):**
  * `Organization` Schema (bound to `siteConfig.entity`)
  * `WebSite` Schema (bound to `siteConfig.entity`)
* **Homepage (`src/app/page.tsx`):**
  * `SoftwareApplication` Schema
  * `FAQPage` Schema
* **Documentation (`src/app/documentation/page.tsx`):**
  * `TechArticle` Schema
  * `BreadcrumbList` Schema
* **Support (`src/app/support/page.tsx`):**
  * `FAQPage` Schema
  * `BreadcrumbList` Schema

---

## 6. Private Application Exclusion Policy

The following authenticated/private paths are explicitly blocked from indexing via `robots.ts` and excluded from `sitemap.ts`:
* `/login`
* `/register`
* `/dashboard/*`
* `/admin/*`
* `/api/*`
* `/private/*`
* `/account/*`
* `/records/*`
