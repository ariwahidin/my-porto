"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function About() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <section
      ref={ref}
      id="about"
      className={`py-32 px-6 bg-[var(--surface)] transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold mb-3 text-[var(--foreground)] tracking-tight">
            About Me
          </h2>
          <p className="text-[var(--text-secondary)] text-lg">
            Get to know me better
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Avatar / Illustration */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-3xl bg-[var(--background)] border border-[var(--border)] flex items-center justify-center">
                <div className="text-center">
                  <div className="text-7xl md:text-8xl mb-4">👨‍💻</div>
                  <p className="text-sm text-[var(--text-secondary)] font-mono">
                    &lt;developer /&gt;
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6">
            <p className="text-[var(--foreground)] leading-relaxed text-lg">
              I&apos;m a passionate web developer with experience in building modern,
              responsive web applications. I love working with the latest
              technologies and frameworks to create solutions that make a
              difference.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed text-lg">
              My journey in software development started with a curiosity about
              how things work on the web. Since then, I&apos;ve been continuously
              learning and improving my skills to deliver high-quality
              applications.
            </p>

            {/* Info Cards */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="p-5 rounded-2xl bg-[var(--background)] border border-[var(--border)]">
                <div className="text-3xl font-semibold text-[var(--apple-blue)] mb-1">5+</div>
                <div className="text-sm text-[var(--text-secondary)]">Years Experience</div>
              </div>
              <div className="p-5 rounded-2xl bg-[var(--background)] border border-[var(--border)]">
                <div className="text-3xl font-semibold text-[var(--apple-blue)] mb-1">20+</div>
                <div className="text-sm text-[var(--text-secondary)]">Projects Completed</div>
              </div>
              <div className="p-5 rounded-2xl bg-[var(--background)] border border-[var(--border)]">
                <div className="text-3xl font-semibold text-[var(--apple-blue)] mb-1">10+</div>
                <div className="text-sm text-[var(--text-secondary)]">Technologies</div>
              </div>
              <div className="p-5 rounded-2xl bg-[var(--background)] border border-[var(--border)]">
                <div className="text-3xl font-semibold text-[var(--apple-blue)] mb-1">100%</div>
                <div className="text-sm text-[var(--text-secondary)]">Dedication</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
