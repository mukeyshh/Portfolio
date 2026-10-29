import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="section-title text-4xl sm:text-5xl text-foreground mb-4">
            Experience
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            From manual QA analyst to automation engineer to QA lead — a
            decade-long journey shipping quality software.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-border ml-6 hidden sm:block" />

          <div className="space-y-8">
            {experiences.map((exp) => (
              <div key={`${exp.company}-${exp.period}`} className="relative sm:pl-16">
                {/* Dot */}
                <div className="absolute left-0 top-6 w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-foreground hidden sm:flex">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>

                {/* Card */}
                <div className="card p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {exp.title}
                      </h3>
                      <p className="text-foreground font-medium text-sm">
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-sm text-muted">{exp.period}</p>
                      <p className="text-xs text-subtle">{exp.location}</p>
                    </div>
                  </div>

                  <p className="text-sm text-muted leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  <ul className="space-y-2 mb-4">
                    {exp.achievements.map((ach) => (
                      <li key={ach} className="flex items-start gap-2 text-sm">
                        <svg
                          className="w-4 h-4 text-foreground mt-0.5 shrink-0"
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
                        <span className="text-muted">{ach}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-xs bg-surface text-muted rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
