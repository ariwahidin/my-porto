"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-14 px-6 overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 -z-10 transition-transform duration-100 ease-out"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/img-0.png')",
          }}
        />
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-[var(--background)] dark:from-black/70 dark:via-black/60 dark:to-[var(--background)]" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Greeting */}
        <p className="text-white/90 dark:text-white/80 text-lg md:text-xl mb-3 animate-fade-in">
          Hello, I'm
        </p>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold mb-4 text-white tracking-tight animate-fade-in-up drop-shadow-lg">
          Ari Wahidin
        </h1>

        {/* Role */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-white/90 dark:text-white/80 font-light mb-8 animate-fade-in-up animation-delay-200">
          Web Developer & Software Engineer
        </h2>

        {/* Description */}
        <p className="text-white/80 dark:text-white/70 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed mb-12 animate-fade-in-up animation-delay-400">
          Passionate about building modern web applications with clean code and
          great user experiences.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-600">
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-7 py-3 rounded-lg bg-[var(--apple-blue)] text-white font-normal hover:opacity-90 transition-opacity shadow-lg"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-7 py-3 rounded-lg border border-white/30 backdrop-blur-sm bg-white/10 text-white font-normal hover:bg-white/20 transition-colors"
          >
            Contact Me
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 animate-float">
          <svg
            className="w-5 h-5 mx-auto text-white/70"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
