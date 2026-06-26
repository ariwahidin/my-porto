"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const skills = [
  {
    category: "Technologies",
    icon: "🚀",
    items: [
      { name: "React / Next.js", level: 90 },
      { name: "Golang", level: 85 },
      { name: "SQL Server", level: 90 },
      { name: "ASP.NET", level: 95 },
    ],
  },
  {
    category: "Tools",
    icon: "⚙️",
    items: [
      { name: "Claude", level: 85 },
      { name: "Docker", level: 75 },
      { name: "IIS", level: 90 },
      { name: "NGINX", level: 80 },
    ],
  },
  {
    category: "Others",
    icon: "🛠️",
    items: [
      { name: "Problem Solving", level: 95 },
      { name: "Communication", level: 90 },
      { name: "Creative", level: 70 },
      { name: "Adaptability", level: 90 },
    ],
  },
];

export default function Skills() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <section
      ref={ref}
      id="skills"
      className={`py-32 px-6 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold mb-3 text-[var(--foreground)] tracking-tight">
            My Skills
          </h2>
          <p className="text-[var(--text-secondary)] text-lg">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((skillGroup, index) => (
            <div
              key={skillGroup.category}
              className={`p-8 rounded-2xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--text-secondary)]/30 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-8">
                <span className="text-4xl">{skillGroup.icon}</span>
                <h3 className="text-xl font-semibold text-[var(--foreground)]">{skillGroup.category}</h3>
              </div>

              {/* Skill List */}
              <div className="space-y-4">
                {skillGroup.items.map((skill) => (
                  <div key={skill.name} className="text-[var(--text-secondary)] text-base">
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
