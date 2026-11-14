/**
 * Servixo Website Content & Configuration Data
 * 
 * Edit this file to easily update all text, links, pricing, services,
 * FAQs, and features across the website in one place.
 */

export interface NavLink {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  name: string;
  mobileName: string;
  icon: string;
  badge: string;
  visits: string;
  description: string;
}

export interface PlanItem {
  id: string;
  name: string;
  badge?: string;
  price: string;
  period: string;
  validity: string;
  visits: string;
  description: string;
  isPopular?: boolean;
  features: Array<{ text: string; highlighted?: boolean }>;
  buttonText: string;
  buttonHref: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

export const siteConfig = {
  // Brand & Company Info
  brand: {
    name: "Servixo",
    tagline: "Your Home. Your Services. All in One Plan.",
    logoUrl: "/logo/logo.png",
    defaultCity: "Bengaluru",
    defaultPincode: "560103",
    contactEmail: "contact@servixo.in",
    tollFree: "1800-SERVIXO",
    isoBadge: "Verified & Insured Home Care",
    copyright: "© 2025 Servixo. All rights reserved.",
  },

  // Central Legal & Transparency Details
  // Edit these fields to reflect your actual registered entity and infrastructure
  legal: {
    lastUpdated: "November 2025",
    entityName: "[Registered Legal Entity Name]",
    registeredAddress: "[Registered Office Address]",
    websiteUrl: "https://servixo.in",
    privacyEmail: "privacy@servixo.in",
    supportEmail: "contact@servixo.in",
    grievanceContact: "[Authorised Grievance Officer]",
    governingState: "[Approved State and City, India]",
    databaseProvider: "[Database Provider]",
    hostingProvider: "[Hosting Provider]",
    fileStorageProvider: "[File Storage Provider]",
    backupProvider: "[Backup Provider]",
    primaryStorageRegion: "[Country and Region]",
    backupStorageRegion: "[Country and Region]",
  },

  // Main Navigation Links
  navigation: {
    links: [
      { label: "Home", href: "/" },
      { label: "Services", href: "#services" },
      { label: "Premium Plans", href: "#plans" },
      { label: "How It Works", href: "#how-it-works" },
    ] as NavLink[],
    loginHref: "/login/",
    partnerHref: "/become-professional/",
    checkAvailabilityHref: "#pincode-checker",
    dashboardHref: "/customer/dashboard/",
  },

  // 1. Hero Section Content
  hero: {
    trustBadge: "Verified Pros • Fixed Visits • Zero Surcharges",
    headlinePart1: "Your Home. Your Services.",
    headlineHighlight: "All in One Plan.",
    description:
      "Book trusted home services, manage subscriptions, and get certified professional assistance at your convenience with Servixo.",
    primaryCtaText: "Explore Premium Plans",
    primaryCtaHref: "#plans",
    secondaryCtaText: "How Servixo Works",
    secondaryCtaHref: "#how-it-works",
    trustStrip: [
      { text: "Verified Local Professionals", icon: "verified" },
      { text: "Fixed Included Visits", icon: "event_repeat" },
      { text: "Transparent Booking", icon: "receipt_long" },
    ],
    pincodeChecker: {
      label: "Check Service In Your Locality",
      badge: "Live Coverage",
      placeholder: "Enter 6-digit PIN (e.g. 560103, 400050)",
      defaultPin: "560103",
      demoPins: [
        { label: "Active", pin: "560103" },
        { label: "Waitlist", pin: "190001" },
        { label: "Invalid", pin: "5600" },
      ],
      footnote:
        "Service availability is location-dependent. Approved professionals are allocated per booking.",
    },
    technicianProfile: {
      name: "Rajesh Kumar",
      rating: "4.9 ★ (420+ jobs)",
      specialty: "Approved Appliance Specialist",
      planBadge: "Annual Care Plan: 4 of 6 Visits Remaining",
      visitsFraction: "4/6",
      heroImage:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBghvV0envH9GmsD8acIqFriXf0kEs8Sd7gF1SrDMRzZsmK1YMLlaeiSAdGuUXrz3ay_6doAkwQVMUa2spanbzLiggJJWdWlZnBv6b2zDEv_t56_Ns-DOEy5Be5dsxdy_rT7996iVR7WVgyWgrHRJS5sjSqz4nKhPOmP_fsMHKXjQAycFGnsEhqpFB7GwqXeTFB387_th3YvZq63ahOgHXt12jXljMv7lZ1b0k6yGI",
      avatarImage:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBRsR21YMp3aCrVV-E-LTKhZDJNV443wniCffunDdvIs5T4yvfajLf_LF_geWwzQuYGFG_tXj2VzWLUD2ML31N83Q8_mYZiZp04hEiB78eGX-UvmQ1ubuIdAjfsBOxFQ99DK86HQYZpsKRXBaoNjAUN_hx1MKesVV4AFEMtnNADx_wPrfLkTGyKoClRL1RHkvnRnzwBnC3Zs9A2mx6WsvDInjfNDLkyPlnN5oLNGWY",
    },
  },

  // 2. How It Works Steps
  howItWorks: {
    subtitle: "Clear & Predictable Process",
    title: "How Servixo Works",
    description:
      "A structured, reliable subscription model designed around your home's seasonal and everyday needs.",
    steps: [
      {
        stepNumber: "01",
        title: "Check Availability",
        description:
          "Enter your PIN code to see which services are active and eligible in your designated locality.",
        icon: "location_searching",
      },
      {
        stepNumber: "02",
        title: "Choose Your Plan",
        description:
          "Explore plans with upfront dedicated visits and eligible service packages.",
        icon: "card_membership",
      },
      {
        stepNumber: "03",
        title: "Book Your Service",
        description:
          "Select an available service, address, preferred date and time slot from your personal dashboard.",
        icon: "calendar_month",
      },
      {
        stepNumber: "04",
        title: "Get Your Professional",
        description:
          "Our team allocates a vetted, trade-certified technician directly to your doorstep with equipment.",
        icon: "engineering",
      },
    ],
  },

  // 3. Services Catalog Content
  services: {
    subtitle: "Curated Trades",
    title: "Home Services Made Simpler",
    description:
      "Configurable services covered under your subscription visits. Delivered by verified specialists across metropolitan Indian hubs.",
    items: [
      {
        id: "cleaning",
        name: "Home Cleaning",
        mobileName: "Home Cleaning",
        icon: "cleaning_services",
        badge: "Included in All Plans",
        visits: "Takes 1 plan visit",
        description:
          "Comprehensive deep scrubbing, mechanized floor cleaning, kitchen degreasing, bathroom sanitation, and sofa upholstery shampooing.",
      },
      {
        id: "plumbing",
        name: "Plumbing Repairs",
        mobileName: "Plumbing Repairs",
        icon: "plumbing",
        badge: "Essential & Up",
        visits: "Takes 1 plan visit",
        description:
          "Emergency leak stoppage, tap & shower mixer replacement, drain unblocking, concealed pipe repairs, and overhead water tank inspection.",
      },
      {
        id: "electrical",
        name: "Electrical Repairs",
        mobileName: "Electrical Repairs",
        icon: "bolt",
        badge: "Essential & Up",
        visits: "Takes 1 plan visit",
        description:
          "Switchboard diagnostics, MCB tripping resolution, ceiling fan mounting, chandelier installations, and inverter backup checkups.",
      },
      {
        id: "appliances",
        name: "Appliance Services",
        mobileName: "Appliance Care",
        icon: "kitchen",
        badge: "Comprehensive Tier",
        visits: "Takes 1–2 plan visits",
        description:
          "Split/Window AC foam-jet cleaning and gas pressure checks, washing machine motor recalibration, and double-door refrigerator cooling tune-ups.",
      },
      {
        id: "maintenance",
        name: "Home Maintenance",
        mobileName: "Home Maintenance",
        icon: "handyman",
        badge: "Estate Tier",
        visits: "Takes 1 plan visit",
        description:
          "Door alignment, latch repairs, wall frame drilling, wardrobe hinge re-tensioning, curtain rod fixes, and minor dry-wall restoration.",
      },
    ] as ServiceItem[],
    dynamicAllocationCard: {
      title: "Dynamic Allocation",
      description:
        "Need multi-skilled support? Servixo lets you schedule multi-point services during single scheduled visits or spread them across seasons.",
      guaranteeText: "100% Guaranteed Tool & Part Integrity",
    },
    complianceNotice:
      "Administrative Notice: All services are administered strictly based on admin-configured plan eligibility. Service pricing is modular and transparent without hidden charges.",
  },

  // 4. Premium Subscription Plans & Visit Ledger
  plans: {
    subtitle: "Simple Predictable Pricing",
    title: "One Subscription. Multiple Service Visits.",
    description:
      "Choose a plan that works for your home and manage your service visits from one place without unpredictable billing.",
    
    // Visit Ledger Preview Component Data
    ledgerPreview: {
      title: "Member Visit Ledger Preview",
      badge: "Live Simulation",
      utilizedVisits: 4,
      remainingVisits: 6,
      totalVisits: 10,
      utilizedPercent: 40,
      validityText: "Valid for 8 Months",
    },

    // 3 Plan Tiers
    items: [
      {
        id: "essential",
        name: "Servixo Essential",
        badge: "Starter",
        price: "₹2,499",
        period: "/ 6 Months",
        validity: "6 Months",
        visits: "4 Dedicated",
        description: "Ideal for compact apartments and routine plumbing or electrical repairs.",
        features: [
          { text: "Plumbing and Electrical triage" },
          { text: "Standard 48-hr slot allocation" },
          { text: "Basic seasonal appliance checks" },
          { text: "Live Remaining Visit Ledger" },
        ],
        buttonText: "Select Essential",
        buttonHref: "/signup/",
      },
      {
        id: "comprehensive",
        name: "Servixo Comprehensive",
        badge: "1 Year Peace",
        price: "₹4,999",
        period: "/ 12 Months",
        validity: "12 Months",
        visits: "10 Dedicated",
        isPopular: true,
        description: "Complete seasonal protection for modern 2–3 BHK residences.",
        features: [
          { text: "AC deep clean & diagnostic tune-up", highlighted: true },
          { text: "Deep kitchen & bathroom sanitation" },
          { text: "Plumbing, carpentry & power audits" },
          { text: "Priority scheduled slot allocation", highlighted: true },
          { text: "Status updates & verified technician details" },
        ],
        buttonText: "Choose Comprehensive Plan",
        buttonHref: "/signup/",
      },
      {
        id: "estate",
        name: "Estate & Villa",
        badge: "Bespoke",
        price: "₹8,999",
        period: "/ 12 Months",
        validity: "12 Months",
        visits: "20 Dedicated",
        description: "Designed for spacious independent bungalows, villas, and estates.",
        features: [
          { text: "Bi-annual structural inspection" },
          { text: "Dedicated personal residential manager", highlighted: true },
          { text: "Dedicated scheduling coordination" },
          { text: "Extended revisit support warranty" },
        ],
        buttonText: "Select Estate Tier",
        buttonHref: "/signup/",
      },
    ] as PlanItem[],

    // Visual Flow Breakdown Module below cards
    flowBreakdown: {
      title: "How Your Visits Count Works",
      subtitle: "Every service booking deducts exactly from your prepaid quota in real time.",
      steps: [
        {
          label: "Total Plan Allocation",
          value: "10 Visits",
          note: "Purchased Upfront",
        },
        {
          label: "Utilized Home Visits",
          value: "4 Visits",
          note: "AC Cleaning + Plumbing",
        },
        {
          label: "Remaining Quota",
          value: "6 Visits",
          note: "Valid for 8 Months",
        },
      ],
      disclaimer:
        "* Plan eligibility, visit deduction policies and covered services are defined by your active subscription policy.",
    },
  },

  // 5. Why Choose Servixo Features
  whyChoose: {
    subtitle: "Uncompromising Quality",
    title: "Engineered for Predictable, Hassle-Free Home Care",
    description:
      "Built specifically around actual platform capabilities without false guarantees or artificial claims.",
    items: [
      {
        icon: "location_on",
        title: "PIN-Bound Readiness",
        description:
          "Pinpoint eligibility via verified postal mapping so you only view and book technicians physically stationed within your immediate precinct.",
      },
      {
        icon: "loyalty",
        title: "Upfront Fixed Visits",
        description:
          "Prepaid structured visits with zero surge charges during festivals, monsoon seasons, or peak emergency morning hours.",
      },
      {
        icon: "touch_app",
        title: "3-Tap Easy Booking",
        description:
          "Effortlessly schedule visits with your preferred date and time, specific room instructions, and custom technician preferences.",
      },
      {
        icon: "fact_check",
        title: "Transparent Job Status",
        description:
          "Clear status updates from confirmation, assigned professional details, on-site diagnostics, to digital completion sign-off.",
      },
      {
        icon: "badge",
        title: "Approved Professionals",
        description:
          "Rigorous police background verification, technical qualification checks, and standardized tool audits before any pro is onboarded.",
      },
      {
        icon: "hub",
        title: "Centralised Management",
        description:
          "One unified portal to review past job logs, access GST compliant tax invoices, track remaining visit quotas, and coordinate renewals.",
      },
    ] as FeatureItem[],
  },

  // 6. Professional Partner Program
  partner: {
    badge: "Partner With Us",
    cities: "Bengaluru & Hyderabad",
    title: "Grow Your Work with Servixo",
    description:
      "Join the Servixo professional network and get consistent opportunities to provide home services in your verified service areas with prompt weekly payouts.",
    ctaText: "Become a Professional",
    ctaHref: "/become-professional/",
    requirementsText: "View Partner Requirements",
    perks: [
      { icon: "payments", text: "Weekly Direct Bank Settlement" },
      { icon: "near_me", text: "Hyper-local Pin Route Optimisation" },
      { icon: "shield", text: "Accidental Damage Cover" },
    ],
    mockPortal: {
      portalId: "SRV-TECH-8492",
      badge: "Active Dispatch",
      assignedSector: "Indiranagar & HAL 2nd Stage",
      sectorPincode: "560103",
      jobsQueued: "3 confirmed jobs queued for tomorrow",
      equipmentStatus: "Servixo tool equipment support enabled",
      estimatedEarnings: "₹28,450",
    },
  },

  // 7. Frequently Asked Questions
  faqs: {
    subtitle: "Clear Answers",
    title: "Frequently Asked Questions",
    description:
      "Everything you need to know about our subscription model, visit allocation, and service professionals.",
    items: [
      {
        question: "What is Servixo?",
        answer:
          "Servixo is India's dedicated home services subscription platform. Rather than paying volatile, unpredictable rates for isolated repairs, homeowners purchase structured subscription packages that include dedicated visits from vetted, certified service technicians for cleaning, plumbing, electrical, and appliance care.",
      },
      {
        question: "How do premium plans work?",
        answer:
          "Each premium plan comes with a set validity period (e.g. 6 or 12 months) and a quota of prepaid service visits. Once you activate a plan, you can book any eligible service covered under that plan at zero additional labor charge until your included visits are consumed.",
      },
      {
        question: "How can I check service availability?",
        answer:
          "You can enter your 6-digit postal PIN code into our availability checker at the top of the homepage or in the header. Our system checks whether technicians and required trade supplies are operational in your locality and displays available service categories immediately.",
      },
      {
        question: "How are service visits calculated and deducted?",
        answer:
          "A standard service booking typically deducts exactly one (1) visit from your active plan balance upon technician completion. Certain high-intensity services (like complete deep sanitization of an entire multi-bedroom villa or multi-split AC overhauls) may consume two visits, which is clearly shown prior to confirming the booking.",
      },
      {
        question: "How do I book a service?",
        answer:
          "Log in to your Servixo customer account, navigate to 'Services', select your needed category, choose your registered home address, and pick an open date and time slot. Our scheduling system automatically reserves your booking and assigns an approved specialist.",
      },
      {
        question: "Can I track my remaining visits?",
        answer:
          "Yes! Your personal Customer Subscription Portal provides a real-time ledger detailing your total purchased visits, completed visits with service history dates, scheduled upcoming visits, and currently remaining balance.",
      },
      {
        question: "How do professionals join Servixo?",
        answer:
          "Technicians apply through the 'Become a Professional' onboarding portal. Applicants must provide government identification, pass local police verification, submit trade qualifications or experience records, and complete an in-person diagnostic skill audit with Servixo technical leads.",
      },
      {
        question: "How are professionals assigned to bookings?",
        answer:
          "Our dispatch engine dynamically pairs your requested trade category and chosen time slot with verified specialists mapped to your exact PIN code area, optimizing arrival time and guaranteeing trade expertise for your specific task.",
      },
    ] as FaqItem[],
  },

  // 8. Bottom High-Impact Call to Action
  cta: {
    title: "Make Home Services Easier with Servixo.",
    description:
      "Explore available services and find a subscription plan that fits your needs. Trusted professionals are ready in your neighborhood.",
    primaryBtnText: "Check Availability",
    secondaryBtnText: "Explore Plans",
    trustPoints: [
      "No hidden fees",
      "Cancel anytime policy",
      "GST invoices provided",
    ],
  },

  // Footer Navigation Structure
  footer: {
    exploreLinks: [
      { label: "Home", href: "/" },
      { label: "Services", href: "#services" },
      { label: "Premium Plans", href: "#plans" },
      { label: "How It Works", href: "#how-it-works" },
    ],
    accountLinks: [
      { label: "Customer Login", href: "/login/" },
      { label: "Become a Professional", href: "/become-professional/" },
      { label: "Subscription Portal", href: "/customer/dashboard/" },
    ],
    supportLinks: [
      { label: "Pincode Checker", href: "#pincode-checker" },
      { label: "FAQs", href: "#faqs" },
      { label: "Contact Helpdesk", href: "mailto:contact@servixo.in" },
    ],
    legalLinks: [
      {
        label: "Privacy Policy",
        href: "/privacy-policy/",
      },
      {
        label: "Terms & Conditions",
        href: "/terms-and-conditions/",
      },
      {
        label: "Subscription Terms",
        href: "/subscription-terms/",
      },
      {
        label: "Data Storage & Security",
        href: "/data-storage/",
      },
    ],
  },
};

