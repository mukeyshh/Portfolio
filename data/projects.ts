export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
  featured: boolean;
  category: string;
  details: {
    problem: string;
    solution: string;
    result: string;
  };
}

export const projects: Project[] = [
  {
    id: "playwright-pom-framework",
    title: "Playwright POM Automation Framework",
    description:
      "End-to-end test automation framework built with Playwright using the Page Object Model pattern, integrated with Chrome DevTools MCP for real-time browser inspection and AI-assisted test generation via Claude Code.",
    tech: ["Playwright", "Page Object Model", "TypeScript", "Chrome DevTools MCP", "Claude Code", "AI Testing"],
    github: "#",
    featured: true,
    category: "Automation Framework",
    details: {
      problem:
        "Modern web applications require maintainable, scalable automation that keeps pace with rapid UI changes. Traditional locator-heavy scripts break frequently and lack intelligent debugging capabilities.",
      solution:
        "Built a structured Playwright framework using the Page Object Model pattern to encapsulate UI interactions. Integrated Chrome DevTools MCP for live DOM inspection and network monitoring during test runs. Leveraged Claude Code (AI) for test case generation, selector suggestions, and failure analysis — dramatically reducing time-to-coverage.",
      result:
        "Delivered a maintainable automation suite with significantly lower maintenance overhead. AI-assisted debugging and test generation cut new test authoring time by ~40%, while the POM structure keeps the suite stable across UI iterations.",
    },
  },
  {
    id: "pacesetter-tax",
    title: "Pacesetter Tax",
    description:
      "SaaS taxation system serving thousands of users in the United States. Features chat, task management, appointment scheduling, multiple payment gateway integrations, and QuickBooks integration.",
    tech: ["Selenium", "Postman", "JIRA", "Manual Testing", "API Testing", "Stripe", "QuickBooks"],
    github: "#",
    featured: true,
    category: "SaaS / FinTech",
    details: {
      problem:
        "A complex SaaS tax platform with multiple payment gateways (Stripe, ACH, Authorize.net, Nexio) and QuickBooks integration required rigorous QA to handle thousands of US users during peak tax season.",
      solution:
        "Led QA efforts covering functional, regression, API, and payment flow testing across the full system. Built comprehensive test plans for each integration point and coordinated with the dev team through the 2021 and 2022 tax seasons.",
      result:
        "Successfully processed the 2021 tax season with zero critical production incidents. System peaked in performance during 2022 season, meeting all SLA requirements.",
    },
  },
  {
    id: "legal-cadence",
    title: "Legal Cadence",
    description:
      "SaaS legal case management system for the US market. Manages legal cases, case schedules, case logs, attorney task management, and appointment scheduling.",
    tech: ["Manual Testing", "API Testing", "Postman", "JIRA", "Test Planning"],
    github: "#",
    featured: true,
    category: "SaaS / LegalTech",
    details: {
      problem:
        "A legal case management system for US attorneys required thorough QA across case workflows, scheduling logic, and documentation — with zero tolerance for data loss or incorrect case state transitions.",
      solution:
        "Served as QA lead responsible for full test planning, execution, and documentation. Designed test cases covering all case lifecycle states, scheduling conflicts, and multi-user permission scenarios.",
      result:
        "Delivered a stable production release with comprehensive test documentation. System successfully adopted by US legal teams with high data integrity across all case management workflows.",
    },
  },
  {
    id: "speak-tu",
    title: "Speak Tu",
    description:
      "Employee report generation system for US organizations. Creates dynamic reports based on ethnicity, salary, gender, and demographic factors for government compliance including California Pay Equity reports.",
    tech: ["Manual Testing", "Regression Testing", "API Testing", "Postman", "JIRA"],
    github: "#",
    featured: true,
    category: "Compliance / HR Tech",
    details: {
      problem:
        "Generating accurate government compliance reports (California Pay Equity, EEO) from complex demographic data required precise data validation — any errors could result in legal non-compliance for client organizations.",
      solution:
        "Designed and executed comprehensive data validation test cases, cross-referencing report outputs against source data. Tested dynamic report generation logic across multiple demographic filter combinations.",
      result:
        "Reports passed data integrity validation with 100% accuracy. System deployed to production and successfully used by US organizations for annual government submissions.",
    },
  },
  {
    id: "one-globe-nepal",
    title: "One Globe Nepal",
    description:
      "Multi-country travel company website covering Bhutan, India, and Nepal. Features ticket booking for inbound/outbound tours and tour package management.",
    tech: ["Manual Testing", "Functional Testing", "UI Testing", "Postman", "Regression Testing"],
    github: "#",
    featured: false,
    category: "Travel / E-Commerce",
    details: {
      problem:
        "A multi-country travel booking platform needed QA coverage across complex tour package logic, booking flows, and availability management for three countries simultaneously.",
      solution:
        "Executed thorough functional, UI, and booking flow testing across all country-specific tour packages. Validated ticket booking end-to-end and confirmed package management behaved correctly under varied booking scenarios.",
      result:
        "Phase 1 successfully completed and deployed to production. Additional development phases ongoing with an established QA baseline.",
    },
  },
  {
    id: "tegw",
    title: "TEGW – Book Translation Platform",
    description:
      "Online book translation application enabling translation of existing books into different languages and publishing them as ebooks. Currently live in production.",
    tech: ["Manual Testing", "Functional Testing", "UI Testing", "Regression Testing"],
    github: "#",
    featured: false,
    category: "EdTech / Publishing",
    details: {
      problem:
        "An ebook translation platform with multi-language publishing workflows required validation of translation accuracy, formatting consistency, and export reliability across language pairs.",
      solution:
        "Designed test cases covering translation workflows, ebook export formats, and multi-language content rendering. Executed regression cycles after each feature addition.",
      result:
        "Application deployed to production and currently serving live users with stable translation and publishing functionality.",
    },
  },
  {
    id: "hotel-grand-view",
    title: "Hotel Grand View",
    description:
      "Business portfolio and booking website with room availability checking and reservation system. Served as both project lead and QA lead.",
    tech: ["Manual Testing", "Functional Testing", "UI Testing", "API Testing", "Project Management"],
    github: "#",
    featured: false,
    category: "Hospitality / Booking",
    details: {
      problem:
        "A hotel booking website needed reliable room availability logic and a smooth reservation flow — with dual responsibility as both project lead and QA lead creating coordination challenges.",
      solution:
        "Managed project delivery while simultaneously owning the QA strategy. Defined acceptance criteria with stakeholders, executed functional and UI testing, and ensured the reservation system handled edge cases like overlapping bookings.",
      result:
        "Successfully deployed to production. Room availability and booking system operates reliably with no critical post-launch defects reported.",
    },
  },
];
