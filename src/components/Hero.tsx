export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-14 px-6"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Greeting */}
        <p className="text-[var(--text-secondary)] text-lg md:text-xl mb-3 animate-fade-in">
          Hello, I'm
        </p>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold mb-4 text-[var(--foreground)] tracking-tight animate-fade-in-up">
          Ari Wahidin
        </h1>

        {/* Role */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-[var(--text-secondary)] font-light mb-8 animate-fade-in-up animation-delay-200">
          Web Developer & Software Engineer
        </h2>

        {/* Description */}
        <p className="text-[var(--text-secondary)] max-w-2xl mx-auto text-lg md:text-xl leading-relaxed mb-12 animate-fade-in-up animation-delay-400">
          Passionate about building modern web applications with clean code and
          great user experiences.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-600">
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-7 py-3 rounded-lg bg-[var(--apple-blue)] text-white font-normal hover:opacity-90 transition-opacity"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-7 py-3 rounded-lg border border-[var(--border)] text-[var(--foreground)] font-normal hover:bg-[var(--surface)] transition-colors"
          >
            Contact Me
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 animate-float">
          <svg
            className="w-5 h-5 mx-auto text-[var(--text-secondary)]"
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
