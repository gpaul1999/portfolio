import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-border-soft">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-2 px-4 py-8 text-sm text-muted sm:px-6">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <p>
          Built with <span className="text-accent">Next.js</span>{" "}&amp;{" "}Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
