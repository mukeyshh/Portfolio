import type { ReactElement } from "react";
import type { SkillCategory } from "@/data/skills";
import { skillCategories, techTags } from "@/data/skills";

const iconMap: Record<string, ReactElement> = {
  code: (
    <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  "test-tube": (
    <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a3 3 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a6 6 0 00-1.806.547M8 4h8l-1 1v5.172a6 6 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A6 6 0 009 10.172V5L8 4z" />
    </svg>
  ),
  zap: (
    <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  "git-branch": (
    <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16a3 3 0 013 3m-3-3V8m0 8a3 3 0 003-3m-6-5a3 3 0 00-3 3m3-3v3m0-3a3 3 0 013 3" />
    </svg>
  ),
  layers: (
    <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
    </svg>
  ),
  "bar-chart": (
    <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a3 3 0 00-2-2H5a3 3 0 00-2 2v6a3 3 0 002 2h2a3 3 0 002-2zm0 0V9a3 3 0 012-2h2a3 3 0 012 2v10m-6 0a3 3 0 002 2h2a3 3 0 002-2m0 0V5a3 3 0 012-2h2a3 3 0 012 2v14a3 3 0 01-2 2h-2a3 3 0 01-2-2z" />
    </svg>
  ),
};

/* ------------------------------------------------------------------ *
 * Radar geometry
 *
 * One radar per skill category. Every spoke is one skill and the
 * distance from the centre is the proficiency, so the outline is the
 * shape of that category's profile.
 *
 * The scale is truncated to 60-100% (every skill on the site sits
 * between 75 and 95) so the outline keeps a readable shape instead of
 * collapsing into a near-circle. Rings mark 70/80/90/100 and every
 * spoke prints its exact number, so the truncated scale never hides a
 * value.
 *
 * All positions are percentages of the square plot box, which lets the
 * labels be real HTML - the type stays the same size at every
 * breakpoint while the drawing scales.
 * ------------------------------------------------------------------ */

const FLOOR = 60;
const CEIL = 100;
const RING = 22; // outer ring radius
const NAME_R = 41; // where the skill name sits
const VALUE_GAP = 6; // the value sits this far beyond its vertex
const RINGS = [70, 80, 90, 100];

function frac(level: number) {
  return (level - FLOOR) / (CEIL - FLOOR);
}

function pt(angleDeg: number, r: number) {
  const a = (angleDeg * Math.PI) / 180;
  return { x: 50 + r * Math.cos(a), y: 50 + r * Math.sin(a) };
}

// Keep hyphenated words (AI-Assisted) from splitting mid-word when the
// label wraps.
function NameText({ name }: { name: string }) {
  return (
    <>
      {name.split(/(\s+)/).map((part, i) =>
        part.includes("-") ? (
          <span key={i} className="whitespace-nowrap">
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

function RadarCard({ cat }: { cat: SkillCategory }) {
  const skills = [...cat.skills].sort((a, b) => b.level - a.level);
  const count = skills.length;

  const nodes = skills.map((skill, i) => {
    const angle = -90 + (360 / count) * i;
    return {
      ...skill,
      angle,
      point: pt(angle, frac(skill.level) * RING),
      outer: pt(angle, RING),
    };
  });

  // Two spokes enclose no area, so the outline closes through the
  // centre as a lens instead of collapsing to a line.
  let outline: string;
  if (count >= 3) {
    outline = `M ${nodes.map((n) => `${n.point.x},${n.point.y}`).join(" L ")} Z`;
  } else {
    const [a, b] = nodes.map((n) => n.point);
    const mx = (a.x + b.x) / 2;
    const my = (a.y + b.y) / 2;
    const len = Math.hypot(b.x - a.x, b.y - a.y) || 1;
    const nx = -(b.y - a.y) / len;
    const ny = (b.x - a.x) / len;
    const bulge = len * 0.6;
    const c1 = { x: mx + nx * bulge, y: my + ny * bulge };
    const c2 = { x: mx - nx * bulge, y: my - ny * bulge };
    outline = `M ${a.x},${a.y} Q ${c1.x},${c1.y} ${b.x},${b.y} Q ${c2.x},${c2.y} ${a.x},${a.y} Z`;
  }

  return (
    <div className="card flex flex-col p-5">
      <div className="flex items-center justify-center gap-2">
        <span className="text-subtle">{iconMap[cat.icon]}</span>
        <h3 className="text-center text-[11px] font-semibold uppercase leading-tight tracking-[0.08em] text-muted">
          {cat.category}
        </h3>
      </div>

      <div className="relative mt-3 aspect-square w-full">
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0 h-full w-full"
          role="img"
          aria-label={`${cat.category} proficiency radar chart`}
        >
          {/* Scale rings */}
          {RINGS.map((ring) => (
            <circle
              key={ring}
              cx="50"
              cy="50"
              r={frac(ring) * RING}
              className="fill-none stroke-border"
              strokeWidth="0.3"
            />
          ))}

          {/* Spokes */}
          {nodes.map((n) => (
            <line
              key={n.angle}
              x1="50"
              y1="50"
              x2={n.outer.x}
              y2={n.outer.y}
              className="stroke-border"
              strokeWidth="0.3"
            />
          ))}

          {/* The profile */}
          <path
            d={outline}
            className="fill-foreground stroke-foreground"
            fillOpacity="0.08"
            strokeWidth="0.45"
            strokeLinejoin="round"
          />

          {/* Vertices */}
          {nodes.map((n) => (
            <circle
              key={n.name}
              cx={n.point.x}
              cy={n.point.y}
              r="0.9"
              className="fill-foreground"
            />
          ))}
        </svg>

        {/* Spoke labels and values */}
        {nodes.map((n) => {
          const namePos = pt(n.angle, NAME_R);
          const valuePos = pt(n.angle, frac(n.level) * RING + VALUE_GAP);

          return (
            <div key={n.name} className="group">
              {/* The readout lands where the name sits and takes its
                  place, so the two never stack on top of each other. */}
              <span
                className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 text-center text-[11px] leading-[1.25] text-muted transition-opacity duration-150 halo group-hover:opacity-0 group-focus-within:opacity-0"
                style={{ left: `${namePos.x}%`, top: `${namePos.y}%`, maxWidth: "80px" }}
              >
                {n.name ? <NameText name={n.name} /> : null}
              </span>

              <div
                tabIndex={0}
                role="img"
                aria-label={`${n.name}, ${n.level} percent proficiency`}
                className="absolute grid h-9 w-9 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
                style={{ left: `${valuePos.x}%`, top: `${valuePos.y}%` }}
              >
                <span className="pointer-events-none rounded-sm bg-card px-1 text-[11px] font-semibold tabular-nums text-foreground transition-colors duration-150 group-hover:bg-chip group-hover:text-chip-fg group-focus-within:bg-chip group-focus-within:text-chip-fg">
                  {n.level}%
                </span>
              </div>

              {/* Clamped so the readout stays inside the plot box. */}
              <span
                className="pointer-events-none absolute z-20 flex max-w-[140px] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-0.5 rounded-lg bg-chip px-2.5 py-1.5 text-center text-[11px] opacity-0 shadow-lg transition-opacity duration-150 group-hover:opacity-100 group-focus-within:opacity-100"
                style={{
                  left: `clamp(26%, ${namePos.x}%, 74%)`,
                  top: `clamp(13%, ${namePos.y}%, 87%)`,
                }}
              >
                <strong className="font-semibold tabular-nums text-chip-fg">
                  {n.level}%
                </strong>
                <span className="text-chip-subtle">
                  {n.name ? <NameText name={n.name} /> : null}
                </span>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function HowToRead() {
  return (
    <div className="card flex flex-col gap-8 p-5">
      <div>
        <p className="eyebrow">How to read this</p>
        <p className="mt-4 text-sm leading-relaxed text-muted">
          Each spoke is one skill. The distance from the centre is the
          proficiency, so the outline is the shape of that category&apos;s
          profile.
        </p>
      </div>

      <div>
        <div className="flex items-end gap-4">
          {RINGS.map((ring, i) => (
            <div key={ring} className="flex flex-col items-center gap-2">
              <div
                className="rounded-full border border-border"
                style={{ width: 16 + i * 10, height: 16 + i * 10 }}
              />
              <span className="text-[10px] tabular-nums text-subtle">
                {ring}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-5 text-xs leading-relaxed text-subtle">
          Rings mark 70, 80, 90 and 100. The scale starts at 60% so the
          outline keeps its shape — every exact value is printed on its
          spoke and listed in the table below.
        </p>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section className="py-20 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="section-title text-4xl sm:text-5xl text-foreground mb-4">
            Skills &amp; Technologies
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            A toolkit built over 8+ years across manual testing, automation
            engineering, and QA leadership.
          </p>
        </div>

        {/* One radar per category */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat) => (
            <RadarCard key={cat.category} cat={cat} />
          ))}
          <HowToRead />
        </div>

        {/* Table view — the chart's WCAG-clean twin */}
        <details className="group/table mt-12 border-t border-border pt-6">
          <summary className="cursor-pointer list-none text-sm text-muted transition-colors hover:text-foreground [&::-webkit-details-marker]:hidden">
            <span className="inline-flex items-center gap-2">
              <svg
                className="w-3.5 h-3.5 transition-transform duration-200 group-open/table:rotate-90"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
              View all levels as a table
            </span>
          </summary>

          <div className="mt-5 overflow-x-auto">
            <table className="w-full text-sm">
              <caption className="sr-only">
                Proficiency level for every skill, grouped by category
              </caption>
              <thead>
                <tr className="border-b border-border text-left text-xs uppercase tracking-wide text-subtle">
                  <th scope="col" className="py-2 pr-4 font-medium">
                    Skill
                  </th>
                  <th scope="col" className="py-2 pr-4 font-medium">
                    Category
                  </th>
                  <th scope="col" className="py-2 text-right font-medium">
                    Level
                  </th>
                </tr>
              </thead>
              <tbody>
                {skillCategories.flatMap((cat) =>
                  cat.skills.map((skill) => (
                    <tr key={skill.name} className="border-b border-border">
                      <td className="py-2 pr-4 text-foreground">{skill.name}</td>
                      <td className="py-2 pr-4 text-muted">
                        {cat.category}
                      </td>
                      <td className="py-2 text-right tabular-nums text-foreground">
                        {skill.level}%
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </details>

        {/* Tech tag cloud */}
        <div className="mt-16 text-center">
          <p className="text-subtle text-sm mb-5">Also proficient with</p>
          <div className="flex flex-wrap justify-center gap-2">
            {techTags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 text-xs font-medium bg-surface border border-border text-muted rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
