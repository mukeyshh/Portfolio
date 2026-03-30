"use client";

import { motion } from "framer-motion";
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
    icon: "🔬",
    title: "Quality is a culture, not a phase",
    description:
      "QA isn't a gate at the end of a sprint — it's a mindset that should permeate every part of the development process.",
  },
  {
    icon: "🏗️",
    title: "Build for maintainability",
    description:
      "An automation framework that breaks every sprint isn't an asset. I build frameworks that age well and teams actually use.",
  },
  {
    icon: "📊",
    title: "Metrics over feelings",
    description:
      "Test coverage percentages, defect escape rates, cycle time — quality improvements should be measurable and defensible.",
  },
  {
    icon: "🤝",
    title: "QA as a partner, not a gatekeeper",
    description:
      "The best outcomes come when QA is embedded in planning, not just handed a build to test. I shift left and collaborate early.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-4">
              About Me
            </p>
            <h1 className="text-5xl font-bold text-slate-100 mb-6 leading-tight">
              Mukesh Raj Khadka —{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
                QA Manager
              </span>
            </h1>
            <div className="prose prose-invert max-w-none space-y-4 text-slate-400 text-lg leading-relaxed">
              <p>
                I&apos;m an experienced QA Manager with 5+ years in software
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

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-xl transition-colors text-sm"
              >
                Get in Touch
              </Link>
              <a
                href="/resume.pdf"
                download
                className="px-6 py-3 border border-[#2d2d3d] hover:border-indigo-600/50 text-slate-300 hover:text-slate-100 font-medium rounded-xl transition-all text-sm hover:bg-white/5"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Journey */}
      <section className="py-20 px-6 ">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold text-slate-100 mb-3">
              Career Journey
            </h2>
            <p className="text-slate-400">
              Manual → Automation → Leadership — a deliberate progression.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-600/40 to-transparent hidden md:block" />
            <div className="space-y-8">
              {journey.map((step, i) => (
                <motion.div
                  key={step.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`md:flex md:items-center gap-8 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : ""}`}>
                    <div className="glass rounded-2xl p-6 transition-all duration-300">
                      <div className="text-indigo-400 font-bold text-2xl mb-2">
                        {step.year}
                      </div>
                      <h3 className="text-slate-100 font-semibold mb-2">
                        {step.title}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {step.summary}
                      </p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex w-4 h-4 rounded-full bg-indigo-600 border-4 border-[#0d0d14] shrink-0 z-10" />

                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-100 mb-3">
              How I Think About Quality
            </h2>
            <p className="text-slate-400">
              Core principles that guide every project I work on.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass rounded-2xl p-6 transition-all duration-300"
              >
                <div className="text-3xl mb-4">{v.icon}</div>
                <h3 className="text-slate-100 font-semibold mb-2">{v.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {v.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience component */}
      <Experience />
    </div>
  );
}
