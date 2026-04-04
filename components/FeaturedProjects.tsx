"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import WordReveal from "@/components/WordReveal";

const featured = projects.filter((p) => p.featured);

export default function FeaturedProjects() {
  return (
    <section className="py-24 px-6 ">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-3">
            Work
          </p>
          <h2 className="text-4xl font-bold text-slate-100 mb-4">
            <WordReveal text="Featured Projects" />
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Real-world automation projects that delivered measurable quality
            improvements and faster release cycles.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#2d2d3d] hover:border-indigo-600/40 text-slate-300 hover:text-slate-100 rounded-xl transition-all duration-200 text-sm font-medium hover:bg-white/5"
          >
            View all projects
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
