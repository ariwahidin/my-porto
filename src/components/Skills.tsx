const skills = [
  {
    category: "Frontend",
    icon: "🎨",
    items: [
      { name: "React / Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "HTML / CSS", level: 95 },
    ],
  },
  {
    category: "Backend",
    icon: "⚙️",
    items: [
      { name: "Node.js", level: 85 },
      { name: "Go (Golang)", level: 75 },
      { name: "REST API", level: 90 },
      { name: "PostgreSQL / MySQL", level: 80 },
    ],
  },
  {
    category: "Tools & Others",
    icon: "🛠️",
    items: [
      { name: "Git / GitHub", level: 90 },
      { name: "Docker", level: 75 },
      { name: "CI/CD", level: 70 },
      { name: "Linux", level: 80 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6">
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
          {skills.map((skillGroup) => (
            <div
              key={skillGroup.category}
              className="p-8 rounded-2xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--text-secondary)]/30 transition-colors"
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
