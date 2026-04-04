export interface SkillCategory {
  category: string;
  icon: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: number; // 0-100
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Testing Methodologies",
    icon: "test-tube",
    skills: [
      { name: "Manual Testing", level: 95 },
      { name: "Automated Testing", level: 88 },
      { name: "API Testing", level: 90 },
      { name: "Performance / Load Testing", level: 82 },
    ],
  },
  {
    category: "Automation Tools",
    icon: "code",
    skills: [
      { name: "Playwright (POM)", level: 90 },
      { name: "Selenium WebDriver", level: 88 },
      { name: "Cypress", level: 82 },
      { name: "JMeter", level: 80 },
      { name: "BlazeMeter", level: 75 },
    ],
  },
  {
    category: "AI & DevTools",
    icon: "zap",
    skills: [
      { name: "Chrome DevTools MCP", level: 88 },
      { name: "Claude / AI-Assisted Testing", level: 85 },
      { name: "AI Test Generation", level: 82 },
      { name: "Claude Code (Agentic QA)", level: 80 },
    ],
  },
  {
    category: "Testing Tools",
    icon: "bar-chart",
    skills: [
      { name: "Postman", level: 92 },
      { name: "JIRA", level: 90 },
      { name: "ClickUp", level: 85 },
      { name: "Figma / Balsamiq", level: 75 },
    ],
  },
  {
    category: "Programming Languages",
    icon: "zap",
    skills: [
      { name: "Python", level: 80 },
      { name: "JavaScript", level: 75 },
    ],
  },
  {
    category: "Concepts & Practices",
    icon: "layers",
    skills: [
      { name: "Regression Testing", level: 95 },
      { name: "Functional Testing", level: 95 },
      { name: "UI / Compatibility Testing", level: 88 },
      { name: "Migration / Data Testing", level: 80 },
    ],
  },
  {
    category: "Leadership & Management",
    icon: "git-branch",
    skills: [
      { name: "Team Leadership", level: 90 },
      { name: "Test Strategy Development", level: 92 },
      { name: "Agile / Scrum", level: 88 },
      { name: "Stakeholder Communication", level: 85 },
    ],
  },
];

export const techTags = [
  "Playwright",
  "Page Object Model",
  "Chrome DevTools MCP",
  "AI-Assisted Testing",
  "Claude Code",
  "Selenium WebDriver",
  "Cypress",
  "JMeter",
  "BlazeMeter",
  "Postman",
  "JIRA",
  "ClickUp",
  "Python",
  "JavaScript",
  "React.js",
  "WildFly",
  "MS Azure",
  "API Testing",
  "Manual Testing",
  "Agile",
  "Figma",
  "Balsamiq",
];
