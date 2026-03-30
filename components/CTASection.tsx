"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative glass rounded-3xl p-12 text-center overflow-hidden"
        >
          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 via-transparent to-violet-600/10 pointer-events-none" />

          <div className="relative z-10">
            <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-4">
              Let&apos;s Work Together
            </p>
            <h2 className="text-4xl font-bold text-slate-100 mb-4">
              Have a project in mind?
            </h2>
            <p className="text-slate-400 mb-8 max-w-lg mx-auto leading-relaxed">
              Whether you need an automation framework built from scratch, a QA
              strategy review, or a senior QA engineer on your team — I&apos;d
              love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-indigo-600/25 hover:-translate-y-0.5"
              >
                Get in Touch
              </Link>
              <Link
                href="/about"
                className="px-8 py-4 border border-[#2d2d3d] hover:border-indigo-600/50 text-slate-300 hover:text-slate-100 font-semibold rounded-xl transition-all duration-200 hover:bg-white/5 hover:-translate-y-0.5"
              >
                Learn More About Me
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
