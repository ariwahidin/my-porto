export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-[var(--border)]">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold text-[var(--foreground)]">
              AW
            </span>
          </div>

          <p className="text-sm text-[var(--text-secondary)] order-last md:order-none">
            &copy; {currentYear} Ari Wahidin. All rights reserved.
          </p>

          {/* <p className="text-sm text-[var(--text-secondary)]">
            Built with Next.js & Tailwind CSS
          </p> */}
        </div>
      </div>
    </footer>
  );
}
