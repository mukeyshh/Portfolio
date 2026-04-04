"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-16">
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-4">
              Portfolio
            </p>
            <h1 className="text-5xl font-bold text-slate-100 mb-4">
              Projects
            </h1>
            <p className="text-slate-400 max-w-xl mx-auto text-lg leading-relaxed">
              Automation frameworks, API test suites, and quality pipelines
              built to solve real-world testing problems.
            </p>
          </motion.div>

          {/* Filter */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-sm rounded-full border transition-all duration-200 font-medium ${
                  activeCategory === cat
                    ? "bg-indigo-600 border-indigo-600 text-white"
                    : "border-white/[0.08] text-slate-400 hover:text-slate-200 hover:border-indigo-500/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                showDetails={true}
              />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-slate-500">
              No projects in this category yet.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
