import Link from "next/link";
import Experience from "@/components/Experience";

const journey = [
  {
    year: "2020",
    title: "Web Development Intern → React Dev & QA",
    summary:
      "Started at Origamy Technology as a web development intern, quickly moving into a dual role combining React.js development with quality assurance.",
  },
  {
    year: "2021",
    title: "QA Engineer – Aricalot Technology",
    summary:
      "Worked on multiple production projects with international clients, developed comprehensive test plans, and began mentoring interns and trainees.",
  },
  {
    year: "2024",
    title: "Lead QA Engineer – Webpoint Solutions",
    summary:
      "Led a QA team, established testing standards, and coordinated quality assurance across development teams for complex software deliverables.",
  },
  {
    year: "2024",
    title: "QA Manager & Instructor – Vee Inc",
    summary:
      "Stepped into QA management at Vee Inc while also teaching QA courses at Training Point and Kingsway Academy — engineering and educating simultaneously.",
  },
];

const values = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Quality is a culture, not a phase",
    description:
      "QA isn't a gate at the end of a sprint — it's a mindset that should permeate every part of the development process.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3l9 5-9 5-9-5 9-5zm9 9l-9 5-9-5m18 4.5l-9 5-9-5" />
      </svg>
    ),
    title: "Build for maintainability",
    description:
      "An automation framework that breaks every sprint isn't an asset. I build frameworks that age well and teams actually use.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 19V9m5 10V5m5 14v-7m5 7V7" />
      </svg>
    ),
    title: "Metrics over feelings",
    description:
      "Test coverage percentages, defect escape rates, cycle time — quality improvements should be measurable and defensible.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-1.13a4 4 0 10-4-6.93M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: "QA as a partner, not a gatekeeper",
    description:
      "The best outcomes come when QA is embedded in planning, not just handed a build to test. I shift left and collaborate early.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="eyebrow mb-5">About me</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-8 leading-[1.05]">
            Mukesh Raj Khadka
          </h1>
          <p className="text-xl sm:text-2xl text-subtle mb-8">
            QA Manager &amp; Automation Engineer
          </p>
          <div className="space-y-5 text-foreground text-lg leading-relaxed">
            <p>
              I&apos;m an experienced QA Manager with 7+ years in software
              quality assurance, test automation, and team leadership. Based
              in Bhaktapur, Nepal, I&apos;ve delivered high-quality software
              products across SaaS, FinTech, LegalTech, and travel industries
              — collaborating with international clients and cross-functional
              teams throughout my career.
            </p>
            <p>
              I have a proven track record in developing comprehensive QA
              strategies, leading QA teams, and shipping complex software
              systems to production. My expertise spans manual and automated
              testing, API testing, performance testing, and agile
              methodologies — with hands-on experience in tools like Selenium,
              Cypress, JMeter, and Postman.
            </p>
            <p>
              Beyond engineering, I&apos;m passionate about sharing knowledge.
              I&apos;ve taught QA courses at Training Point and Kingsway
              Academy, developing curriculum and mentoring the next generation
              of software testers in Nepal.
            </p>
          </div>

          <div className="mt-9 flex flex-col sm:flex-row gap-3">
            <Link href="/contact" className="btn btn-primary px-6 py-3 text-sm">
              Get in Touch
            </Link>
            <a href="/resume.pdf" download className="btn btn-secondary px-6 py-3 text-sm">
              Download Resume
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M7 17L17 7M9 7h8v8" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="py-20 px-6 bg-surface border-y border-border">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="section-title text-4xl sm:text-5xl text-foreground mb-4">
              Career journey
            </h2>
            <p className="text-muted">
              Manual → Automation → Leadership — a deliberate progression.
            </p>
          </div>

          <div className="space-y-4">
            {journey.map((step) => (
              <div
                key={step.title}
                className="card p-6 flex flex-col sm:flex-row sm:gap-8"
              >
                <div className="sm:w-20 shrink-0 text-foreground font-semibold text-sm tracking-wide">
                  {step.year}
                </div>
                <div>
                  <h3 className="text-foreground font-semibold mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {step.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title text-4xl sm:text-5xl text-foreground mb-4">
              How I think about quality
            </h2>
            <p className="text-muted">
              Core principles that guide every project I work on.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {values.map((v) => (
              <div key={v.title} className="card card-hover p-6">
                <div className="w-9 h-9 rounded-lg bg-surface border border-border text-foreground flex items-center justify-center mb-4">
                  {v.icon}
                </div>
                <h3 className="text-foreground font-semibold mb-2">{v.title}</h3>
                <p className="text-muted text-sm leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience component */}
      <Experience />
    </div>
  );
}
