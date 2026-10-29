"use client";

import Link from "next/link";
import type { BlogPost } from "@/data/blog";

interface Props {
  post: BlogPost;
}

export default function BlogPostClient({ post }: Props) {
  // Minimal markdown-ish renderer: handles ## headings, **bold**, `code`, and paragraphs
  const renderInline = (text: string) =>
    text
      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground font-semibold">$1</strong>')
      .replace(/`(.*?)`/g, '<code class="px-1.5 py-0.5 bg-surface text-foreground rounded text-sm font-mono">$1</code>');

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
              className="section-title text-3xl text-foreground mt-10 mb-4"
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
                <li key={j} className="flex items-start gap-2 text-muted">
                  <span className="text-foreground mt-1">•</span>
                  <span dangerouslySetInnerHTML={{ __html: renderInline(item.slice(2)) }} />
                </li>
              ))}
            </ul>
          );
        }

        return (
          <p
            key={i}
            className="text-foreground leading-relaxed my-4"
            dangerouslySetInnerHTML={{ __html: renderInline(trimmed) }}
          />
        );
      });
  };

  return (
    <div className="pt-16">
      <article className="py-20 px-6">
        <div className="max-w-2xl mx-auto">
          {/* Back */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-subtle hover:text-foreground transition-colors mb-10"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Back to Blog
          </Link>

          {/* Header */}
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-xs bg-surface text-muted rounded-full border border-border"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight mb-6">
            {post.title}
          </h1>

          <div className="flex items-center gap-3 text-sm text-subtle mb-10 pb-10 border-b border-border">
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

          {/* Content */}
          <div className="text-foreground">
            {renderContent(post.content)}
          </div>

          {/* Footer */}
          <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              href="/blog"
              className="text-sm text-foreground hover:underline hover:underline-offset-4 transition-colors flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              All articles
            </Link>
            <Link
              href="/contact"
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              Have questions? Get in touch →
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
