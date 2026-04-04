export interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  type: "full-time" | "contract" | "freelance" | "part-time";
  description: string;
  achievements: string[];
  tech: string[];
}

export const experiences: Experience[] = [
  {
    title: "QA Manager",
    company: "Vee Inc",
    period: "April 2024 – Present",
    location: "Kathmandu, Nepal",
    type: "full-time",
    description:
      "Leading and managing the QA team across multiple projects and product lines, owning end-to-end quality assurance strategy, test planning, and engineering standards.",
    achievements: [
      "Lead and manage QA team across multiple projects and product lines",
      "Develop and implement comprehensive quality assurance strategies and processes",
      "Oversee test planning, execution, and reporting for complex software systems",
      "Collaborate with stakeholders to define quality standards and metrics",
      "Mentor QA engineers and establish best practices for testing methodologies",
      "Manage resource allocation and project timelines for QA activities",
      "Implement automated testing frameworks and integration processes",
      "Conduct quality reviews and ensure compliance with industry standards",
    ],
    tech: ["Selenium WebDriver", "Cypress", "JMeter", "Postman", "JIRA", "Agile"],
  },
  {
    title: "QA Instructor",
    company: "Training Point",
    period: "July 2024 – April 2025",
    location: "Gairidhara, Kathmandu, Nepal",
    type: "part-time",
    description:
      "Taught QA methodologies and test automation to students and professionals, developing curriculum and conducting hands-on training sessions.",
    achievements: [
      "Taught QA methodologies and best practices to students and professionals",
      "Developed comprehensive curriculum for software testing courses",
      "Conducted hands-on training sessions on test automation tools",
      "Mentored students in practical testing scenarios and real-world projects",
      "Designed assessment methods and evaluated student progress",
    ],
    tech: ["Selenium", "Cypress", "Postman", "JMeter", "Manual Testing"],
  },
  {
    title: "QA Instructor",
    company: "Kingsway Academy",
    period: "April 2024 – April 2025",
    location: "Gairidhara, Kathmandu, Nepal",
    type: "part-time",
    description:
      "Delivered comprehensive QA training programs to aspiring software testers, covering manual testing, automation, and API testing.",
    achievements: [
      "Delivered comprehensive QA training programs to aspiring software testers",
      "Taught manual testing, automation testing, and API testing concepts",
      "Provided guidance on industry tools and best practices",
      "Evaluated student performance and provided constructive feedback",
    ],
    tech: ["Manual Testing", "Automation Testing", "API Testing", "Postman"],
  },
  {
    title: "Lead QA Engineer",
    company: "Webpoint Solutions, LLC",
    period: "January 2024 – April 2024",
    location: "Gairidhara, Kathmandu, Nepal",
    type: "full-time",
    description:
      "Led the QA team in planning and executing manual and automated testing procedures, establishing quality standards across the engineering organization.",
    achievements: [
      "Developed and implemented comprehensive QA strategies",
      "Led team of QA analysts in conducting manual and automated testing procedures",
      "Established testing standards and quality assurance processes",
      "Coordinated with development teams to ensure quality deliverables",
    ],
    tech: ["Selenium", "Postman", "JIRA", "Manual Testing", "API Testing"],
  },
  {
    title: "QA Engineer",
    company: "Aricalot Technology",
    period: "April 2021 – January 2024",
    location: "Baluwater, Kathmandu, Nepal",
    type: "full-time",
    description:
      "Worked on multiple projects from ideation to production, collaborating with international clients and mentoring junior team members while managing enterprise application deployments.",
    achievements: [
      "Worked on and shipped multiple projects from ideation to production release",
      "Collaborated with international clients and development teams",
      "Assisted interns and trainees with learning processes and projects",
      "Developed comprehensive test plans and test cases",
      "Deployed and managed enterprise Java applications using WildFly",
      "Managed storage solutions on MS Azure Blob Storage",
    ],
    tech: ["Selenium", "Postman", "JIRA", "WildFly", "MS Azure Blob Storage", "Python"],
  },
  {
    title: "React Developer & QA",
    company: "Origamy Technology",
    period: "July 2020 – March 2021",
    location: "Kathmandu, Nepal",
    type: "full-time",
    description:
      "Dual role combining front-end React development with quality assurance, ensuring product quality while contributing to the codebase.",
    achievements: [
      "Worked with development team to create and maintain project quality",
      "Gained experience with popular React.js workflows",
      "Identified and fixed bugs within codebase",
      "Performed functional and regression testing",
    ],
    tech: ["React.js", "JavaScript", "Manual Testing", "Regression Testing"],
  },
  {
    title: "Web Development Intern",
    company: "Origamy Technology",
    period: "February 2020 – June 2020",
    location: "Kathmandu, Nepal",
    type: "full-time",
    description:
      "Started career as a web development intern, gaining hands-on experience in team collaboration, web technologies, and QA practices.",
    achievements: [
      "Learned team collaboration and web development skills",
      "Gained hands-on experience in web development technologies",
      "Participated in code reviews and testing activities",
    ],
    tech: ["HTML", "CSS", "JavaScript", "React.js"],
  },
];
