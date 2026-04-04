"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/experience";
import WordReveal from "@/components/WordReveal";

export default function Experience() {
  return (
    <section className="py-24 px-6 ">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-3">
            Career
          </p>
          <h2 className="text-4xl font-bold text-slate-100 mb-4"><WordReveal text="Experience" /></h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            From manual QA analyst to automation engineer to QA lead — a
            decade-long journey shipping quality software.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-600/40 via-indigo-600/20 to-transparent ml-6 hidden sm:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={`${exp.company}-${exp.period}`}
                initial={{ opacity: 0, x: -28, scale: 0.98 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative sm:pl-16"
              >
                {/* Dot */}
                <div className="absolute left-0 top-6 w-12 h-12 rounded-full glass flex items-center justify-center text-indigo-400 hidden sm:flex">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>

                {/* Card */}
                <div className="glass rounded-2xl p-6 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-100">
                        {exp.title}
                      </h3>
                      <p className="text-indigo-400 font-medium text-sm">
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-sm text-slate-400">{exp.period}</p>
                      <p className="text-xs text-slate-500">{exp.location}</p>
                    </div>
                  </div>

                  <p className="text-sm text-slate-400 leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  <ul className="space-y-2 mb-4">
                    {exp.achievements.map((ach) => (
                      <li key={ach} className="flex items-start gap-2 text-sm">
                        <svg
                          className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-slate-300">{ach}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-1 text-xs bg-white/[0.05] border border-white/[0.07] text-slate-400 rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
