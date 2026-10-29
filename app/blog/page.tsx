import Link from "next/link";
import { blogPosts } from "@/data/blog";

export default function BlogPage() {
  return (
    <div className="pt-16">
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14">
            <p className="eyebrow mb-5">Writing</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 leading-[1.05]">
              Blog
            </h1>
            <p className="text-xl text-subtle max-w-xl mx-auto leading-relaxed">
              Thoughts on test automation, QA strategy, and building quality
              engineering cultures.
            </p>
            <a
              href="https://medium.com/@mrkhadka17"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 text-sm text-muted hover:text-foreground transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
              </svg>
              Browse the full archive on Medium
            </a>
          </div>

          {/* Posts */}
          <div className="space-y-5">
            {blogPosts.map((post) => (
              <article key={post.slug} className="group card card-hover p-8">
                {/* Meta */}
                <div className="flex items-center gap-3 text-xs text-subtle mb-4">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </time>
                  <span>&middot;</span>
                  <span>{post.readTime}</span>
                </div>

                <h2 className="text-xl font-bold text-foreground mb-3 group-hover:underline group-hover:underline-offset-4 transition-colors leading-snug">
                  {post.title}
                </h2>

                <p className="text-muted text-sm leading-relaxed mb-5">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs bg-surface text-muted rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-sm text-foreground font-medium flex items-center gap-1.5 hover:underline hover:underline-offset-4 transition-colors shrink-0 ml-4"
                  >
                    Read more
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M7 17L17 7M9 7h8v8" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter CTA */}
          <div className="mt-14 rounded-3xl bg-band p-10 text-center">
            <h2 className="section-title text-3xl sm:text-4xl text-band-fg mb-3">
              More writing on Medium
            </h2>
            <p className="text-[#a3a3a3] text-sm mb-7 max-w-md mx-auto">
              New articles on test automation and QA engineering land on my
              Medium first — follow along there, or connect with me on LinkedIn.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="https://medium.com/@mrkhadka17"
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-band-btn text-band-btn-fg hover:bg-band-btn-hover px-5 py-2.5 text-sm"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                </svg>
                Read on Medium
              </a>
              <a
                href="https://www.linkedin.com/in/mukeyshh/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn border border-band-line text-band-fg hover:border-band-hover px-5 py-2.5 text-sm"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/mukeyshh"
                target="_blank"
                rel="noopener noreferrer"
                className="btn border border-band-line text-band-fg hover:border-band-hover px-5 py-2.5 text-sm"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
