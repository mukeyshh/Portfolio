"use client";

import { useState } from "react";
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
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <p className="eyebrow mb-5">Portfolio</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 leading-[1.05]">
              Projects
            </h1>
            <p className="text-xl text-subtle max-w-xl mx-auto leading-relaxed">
              Automation frameworks, API test suites, and quality pipelines
              built to solve real-world testing problems.
            </p>
          </div>

          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-sm rounded-full border transition-colors duration-200 font-medium ${
                  activeCategory === cat
                    ? "bg-chip border-chip text-chip-fg"
                    : "bg-card border-border text-muted hover:text-foreground hover:border-border-strong"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} showDetails={true} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-subtle">
              No projects in this category yet.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
