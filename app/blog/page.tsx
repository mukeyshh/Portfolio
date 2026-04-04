"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { blogPosts } from "@/data/blog";

export default function BlogPage() {
  return (
    <div className="pt-16">
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-4">
              Writing
            </p>
            <h1 className="text-5xl font-bold text-slate-100 mb-4">Blog</h1>
            <p className="text-slate-400 max-w-xl mx-auto text-lg leading-relaxed">
              Thoughts on test automation, QA strategy, and building quality
              engineering cultures.
            </p>
          </motion.div>

          {/* Posts */}
          <div className="space-y-6">
            {blogPosts.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group glass rounded-2xl p-8 transition-all duration-300"
              >
                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
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

                <h2 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-indigo-300 transition-colors leading-snug">
                  {post.title}
                </h2>

                <p className="text-slate-400 text-sm leading-relaxed mb-5">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs bg-white/[0.05] border border-white/[0.07] text-slate-400 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-sm text-indigo-400 hover:text-indigo-300 font-medium flex items-center gap-1.5 transition-colors shrink-0 ml-4"
                  >
                    Read more
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Newsletter CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16 glass rounded-2xl p-8 text-center"
          >
            <h3 className="text-xl font-bold text-slate-100 mb-2">
              More content coming soon
            </h3>
            <p className="text-slate-400 text-sm mb-4">
              Follow me on LinkedIn or GitHub to get notified when I publish new
              articles on test automation and QA engineering.
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://www.linkedin.com/in/mukeyshh/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 text-sm bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-medium transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 text-sm border border-[#2d2d3d] hover:border-indigo-600/40 text-slate-300 hover:text-slate-100 rounded-xl font-medium transition-all hover:bg-white/5"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
