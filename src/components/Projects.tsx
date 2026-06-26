import Image from "next/image";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce application with product management, shopping cart, and payment integration.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    image: "https://picsum.photos/seed/ecommerce/600/400",
    url: "https://logspeedy.com",
  },
  {
    title: "Dashboard Analytics",
    description:
      "Interactive analytics dashboard with real-time data visualization and reporting features.",
    tags: ["React", "Chart.js", "Node.js", "REST API"],
    image: "https://picsum.photos/seed/dashboard/600/400",
    url: "https://logspeedy.com",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management tool with drag-and-drop, real-time updates, and team features.",
    tags: ["Next.js", "WebSocket", "MongoDB", "Docker"],
    image: "https://picsum.photos/seed/taskapp/600/400",
    url: "https://logspeedy.com",
  },
  {
    title: "API Gateway Service",
    description:
      "Microservice API gateway with rate limiting, authentication, and request routing.",
    tags: ["Go", "gRPC", "Redis", "Docker"],
    image: "https://picsum.photos/seed/apigateway/600/400",
    url: "https://logspeedy.com",
  },
  {
    title: "Video Streaming Service",
    description:
      "Video streaming platform with upload, transcoding, and adaptive streaming capabilities.",
    tags: ["Node.js", "FFmpeg", "AWS S3", "HLS"],
    image: "https://picsum.photos/seed/streaming/600/400",
    url: "https://logspeedy.com",
  },
  {
    title: "Warehouse Management",
    description:
      "Inventory and warehouse management system with barcode scanning and real-time tracking.",
    tags: ["React", "Go", "PostgreSQL", "REST API"],
    image: "https://picsum.photos/seed/warehouse/600/400",
    url: "https://logspeedy.com",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-32 px-6 bg-[var(--surface)]"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-semibold mb-3 text-[var(--foreground)] tracking-tight">
            My Projects
          </h2>
          <p className="text-[var(--text-secondary)] text-lg">
            A selection of projects I&apos;ve worked on recently
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl bg-[var(--background)] border border-[var(--border)] overflow-hidden hover:border-[var(--text-secondary)]/30 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-[var(--surface)] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[var(--foreground)]">{project.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-[var(--surface)] text-[var(--text-secondary)] border border-[var(--border)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Link Indicator */}
                <div className="mt-4 flex items-center gap-1.5 text-sm text-[var(--apple-blue)] group-hover:gap-2 transition-all">
                  <span>View Project</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 17L17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
