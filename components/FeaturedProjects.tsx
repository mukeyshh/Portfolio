import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const featured = projects.filter((p) => p.featured);

export default function FeaturedProjects() {
  return (
    <section className="py-20 px-6 bg-surface border-y border-border">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="section-title text-4xl sm:text-5xl text-foreground mb-4">
            Selected work
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            Real-world automation projects that delivered measurable quality
            improvements and faster release cycles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/projects"
            className="btn btn-secondary px-6 py-3 text-sm"
          >
            View all projects
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M7 17L17 7M9 7h8v8" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
