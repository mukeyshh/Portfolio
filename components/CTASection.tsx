import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="rounded-3xl bg-band px-8 py-14 sm:px-14 sm:py-16 text-center">
          <p className="eyebrow text-subtle mb-4">Let&apos;s work together</p>
          <h2 className="section-title text-4xl sm:text-5xl text-band-fg mb-5">
            Have a project in mind?
          </h2>
          <p className="text-[#a3a3a3] mb-9 max-w-lg mx-auto leading-relaxed">
            Whether you need an automation framework built from scratch, a QA
            strategy review, or a senior QA engineer on your team — I&apos;d
            love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="btn bg-band-btn text-band-btn-fg hover:bg-band-btn-hover px-6 py-3 text-sm"
            >
              Get in Touch
            </Link>
            <Link
              href="/about"
              className="btn border border-band-line text-band-fg hover:border-band-hover px-6 py-3 text-sm"
            >
              Learn More About Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
