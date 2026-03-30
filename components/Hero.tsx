"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import AnimatedCounter from "@/components/AnimatedCounter";
import WordReveal from "@/components/WordReveal";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" as const },
  }),
};

const stats = [
  { to: 5, suffix: "+", label: "Years in QA" },
  { to: 6, suffix: "+", label: "Projects Shipped" },
  { to: 3, suffix: "", label: "Teams Led" },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });

  // Parallax: blobs drift up as you scroll
  const blobY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Parallax background blobs (local, on top of layout blobs) */}
      <motion.div style={{ y: blobY }} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-indigo-600/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-violet-600/8 rounded-full blur-[100px]" />
      </motion.div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(90deg, #6366f1 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content — parallax drift + fade on scroll */}
      <motion.div
        style={{ y: contentY, opacity }}
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
      >
        {/* Badge */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-sm font-medium mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
          Open to new opportunities
        </motion.div>

        {/* Name — word reveal */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-slate-100 mb-4">
          <WordReveal text="Hi, I'm" className="text-slate-100" delay={0.1} />{" "}
          <motion.span
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400"
          >
            Mukesh
          </motion.span>
        </h1>

        {/* Title */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.55}
          className="text-xl sm:text-2xl font-medium text-slate-300 mb-6"
        >
          QA Manager &amp; Automation Engineer
        </motion.p>

        {/* Tagline — word reveal */}
        <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          <WordReveal
            text="Experienced QA Manager with 5+ years in software quality assurance, test automation, and team leadership — delivering high-quality software products across SaaS, FinTech, and LegalTech."
            delay={0.65}
          />
        </p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.9}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/projects"
            className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-indigo-600/25 hover:-translate-y-0.5"
          >
            View Projects
          </Link>
          <a
            href="/resume.pdf"
            download
            className="px-8 py-4 border border-white/[0.1] hover:border-indigo-500/50 text-slate-300 hover:text-slate-100 font-semibold rounded-xl transition-all duration-200 hover:bg-white/5 hover:-translate-y-0.5"
          >
            Download Resume
          </a>
        </motion.div>

        {/* Stats — counting numbers */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={1.05}
          className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-indigo-400 mb-1">
                <AnimatedCounter to={stat.to} suffix={stat.suffix} duration={1.8} />
              </div>
              <div className="text-sm text-slate-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-slate-600 to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}
