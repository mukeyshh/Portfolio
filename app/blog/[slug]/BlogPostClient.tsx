"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { BlogPost } from "@/data/blog";

interface Props {
  post: BlogPost;
}

export default function BlogPostClient({ post }: Props) {
  // Minimal markdown-ish renderer: handles ## headings, **bold**, `code`, and paragraphs
  const renderContent = (content: string) => {
    return content
      .trim()
      .split("\n\n")
      .map((block, i) => {
        const trimmed = block.trim();
        if (!trimmed) return null;

        if (trimmed.startsWith("## ")) {
          return (
            <h2
              key={i}
              className="text-2xl font-bold text-slate-100 mt-10 mb-4"
            >
              {trimmed.slice(3)}
            </h2>
          );
        }

        if (trimmed.startsWith("- ")) {
          const items = trimmed.split("\n").filter((l) => l.startsWith("- "));
          return (
            <ul key={i} className="space-y-2 my-4">
              {items.map((item, j) => (
                <li key={j} className="flex items-start gap-2 text-slate-300">
                  <span className="text-indigo-400 mt-1">•</span>
                  <span dangerouslySetInnerHTML={{ __html: renderInline(item.slice(2)) }} />
                </li>
              ))}
            </ul>
          );
        }

        return (
          <p
            key={i}
            className="text-slate-300 leading-relaxed my-4"
            dangerouslySetInnerHTML={{ __html: renderInline(trimmed) }}
          />
        );
      });
  };

  const renderInline = (text: string) =>
    text
      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-slate-100 font-semibold">$1</strong>')
      .replace(/`(.*?)`/g, '<code class="px-1.5 py-0.5 bg-white/[0.06] text-indigo-300 rounded text-sm font-mono">$1</code>');

  return (
    <div className="pt-16">
      <article className="py-24 px-6">
        <div className="max-w-2xl mx-auto">
          {/* Back */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-200 transition-colors mb-10"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              Back to Blog
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 text-xs bg-indigo-600/10 text-indigo-400 rounded-md border border-indigo-600/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-4xl font-bold text-slate-100 leading-tight mb-4">
              {post.title}
            </h1>

            <div className="flex items-center gap-4 text-sm text-slate-500 mb-10 pb-10 border-b border-white/[0.08]">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
              <span>&middot;</span>
              <span>{post.readTime}</span>
              <span>&middot;</span>
              <span>By Mukesh Raj Khadka</span>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-300"
          >
            {renderContent(post.content)}
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <Link
              href="/blog"
              className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              All articles
            </Link>
            <Link
              href="/contact"
              className="text-sm text-slate-400 hover:text-slate-200 transition-colors"
            >
              Have questions? Get in touch →
            </Link>
          </motion.div>
        </div>
      </article>
    </div>
  );
}
