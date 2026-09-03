export const siteConfig = {
  name: "AxioVital Health Platform",
  operator: "QuantaForze",
  operatorUrl: "https://quantaforze.com",
  url: "https://axiovital.quantaforze.com",
  description: "Transforming Healthcare Through Intelligent Digital Care & Connected Ecosystems by QuantaForze",
  entity: {
    name: "AxioVital",
    legalName: "AxioVital Health Platform",
    alternateNames: ["Axio Vital", "AxioVital HealthTech", "AxioVital Healthcare Software", "AxioVital QuantaForze"],
    url: "https://axiovital.quantaforze.com",
    category: "Healthcare Technology / HealthTech Software",
    description: "AxioVital is an integrated healthcare technology platform developed and operated by QuantaForze, connecting patients, care providers, clinics, hospitals, and diagnostic laboratories.",
    parentOrganization: {
      name: "QuantaForze",
      url: "https://quantaforze.com",
      relationship: "developed and operated by"
    },
    logo: "https://axiovital.quantaforze.com/oracle_hero_doctor.jpg",
    sameAs: [
      "https://quantaforze.com",
      "https://www.linkedin.com/in/quantaforze-llc-b142a7398/",
      "https://x.com/axiovital",
      "https://www.youtube.com/@axiovital-hrm",
      "https://github.com/somraj-devji"
    ],

    contactPoint: {
      contactType: "customer support",
      email: "support@quantaforze.com",
      supportEmail: "support@quantaforze.com"
    }

  },


  megaMenu: {
    solutions: {
      category: "Healthcare Segments",
      description: "Comprehensive digital solutions connecting patients, doctors, hospitals, clinics, and laboratories.",
      items: [
        {
          title: "Hospitals & Medical Networks",
          description: "Digitize registration, centralize EHR records, reduce waiting times, and streamline department workflows.",
          href: "/hospitals",
          icon: "Hospital"
        },
        {
          title: "Outpatient Clinics & Practices",
          description: "Simplify doctor appointment management, eliminate paperwork, and issue instant digital prescriptions.",
          href: "/clinics",
          icon: "Stethoscope"
        },
        {
          title: "Physicians & Care Providers",
          description: "View complete patient history, maintain electronic records, schedule follow-ups, and speed up clinical care.",
          href: "/providers",
          icon: "Users"
        },
        {
          title: "Laboratories & Diagnostics",
          description: "Automate test result delivery, link lab reports to patient portals, and integrate directly with hospital EMRs.",
          href: "/laboratories",
          icon: "Microscope"
        },
        {
          title: "Patients & Family Portals",
          description: "Book appointments online, skip registration queues, track treatments, and store health records securely.",
          href: "/patients",
          icon: "Smartphone"
        }
      ],
      featured: {
        badge: "ENTERPRISE TRANSFORMATION",
        title: "Queue-Free Hospital Ecosystems",
        description: "See how AxioVital connects multi-facility hospital networks to eliminate paper forms and reduce patient waiting times by up to 80%.",
        href: "/customer-stories"
      }
    },
    services: {
      category: "Platform Capabilities",
      description: "Core digital care modules designed to simplify healthcare management.",
      items: [
        {
          title: "Electronic Health Records (EHR)",
          description: "Centralized, secure electronic medical history accessible across authorized care providers.",
          href: "/platform",
          icon: "Database"
        },
        {
          title: "Online Appointment Booking & Queue Control",
          description: "Reserve time slots online before visiting and bypass registration queues.",
          href: "/patients",
          icon: "Sparkles"
        },
        {
          title: "Digital Prescriptions & Treatment Tracking",
          description: "Create, view, and manage prescriptions digitally with automated refill notifications.",
          href: "/providers",
          icon: "CreditCard"
        },
        {
          title: "Hospital Administration & Workflows",
          description: "Improve operational efficiency, bed allocation, and inter-departmental communication.",
          href: "/pricing",
          icon: "BarChart3"
        },
        {
          title: "Laboratory & EMR Integration Gateway",
          description: "Direct connectivity for diagnostic reports, blood banks, and legacy medical software.",
          href: "/products#axioconnect",
          icon: "Cpu"
        }
      ],
      featured: {
        badge: "PLATFORM ARCHITECTURE",
        title: "AxioConnect FHIR & EMR Gateway",
        description: "Connect hospital diagnostic systems and EHR databases effortlessly to provide instant report delivery.",
        href: "/documentation"
      }
    },
    products: {
      category: "AxioVital Product Suite",
      description: "Hardware credentials, clinical tools, and mobile patient portals.",
      items: [
        {
          title: "AXIO-ID Token",
          description: "Unified digital identity token ensuring secure record matching across healthcare facilities.",
          href: "/products#axio-id",
          icon: "Shield"
        },
        {
          title: "AXIO Smart Card",
          description: "Contactless NFC hardware card for instant 1-tap hospital kiosk check-in and emergency data.",
          href: "/products#axio-card",
          icon: "CreditCard"
        },
        {
          title: "AxioAI Assistant",
          description: "Doctor documentation engine assisting physicians with automated consultation notes.",
          href: "/products#axioai",
          icon: "Sparkles"
        },
        {
          title: "AxioInsights Analytics",
          description: "Real-time hospital bed heatmaps, patient flow forecasting, and administrative dashboards.",
          href: "/products#axioinsights",
          icon: "BarChart3"
        },
        {
          title: "AxioConnect Engine",
          description: "High-speed integration engine linking laboratories, pharmacies, and EMR databases.",
          href: "/products#axioconnect",
          icon: "Database"
        },
        {
          title: "MyHealthcare App",
          description: "Patient companion mobile app for instant appointment booking and medical report viewing.",
          href: "/products#myhealthcare",
          icon: "Smartphone"
        }
      ],
      featured: {
        badge: "SMART CHECK-IN",
        title: "AXIO Smart NFC Card 3.0",
        description: "Skip long clinic lines by tapping your AXIO Card at hospital reception kiosks for instant appointment check-in.",
        href: "/products#axio-card"
      }
    }
  }
};
