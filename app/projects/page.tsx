import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Beberapa project dan eksperimen yang sedang saya kerjakan.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        <header className="flex items-center justify-between py-8">
          <a href="/" className="text-xl font-bold tracking-tight">
            DhaniDhan<span className="text-zinc-400">.</span>
          </a>

          <nav className="flex items-center gap-5 text-sm text-zinc-600 dark:text-zinc-300">
            <a href="/blog" className="hover:text-black dark:hover:text-white">
              Blog
            </a>

            <a href="/projects" className="text-black dark:text-white">
              Projects
            </a>

            <a href="/about" className="hover:text-black dark:hover:text-white">
              About
            </a>
          </nav>
        </header>

        <section className="py-24">
          <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-zinc-400">
            PROJECTS
          </p>

          <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl">
            Yang sedang saya kerjakan
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-300">
            Beberapa project, eksperimen, dan hal yang sedang saya bangun atau
            pelajari.
          </p>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            <article className="rounded-2xl border border-zinc-200 bg-white p-7 dark:border-zinc-800 dark:bg-zinc-900">
              <p className="text-sm text-zinc-400">Personal website</p>

              <h2 className="mt-3 text-2xl font-semibold">
                DhaniDhan
              </h2>

              <p className="mt-4 leading-7 text-zinc-600 dark:text-zinc-300">
                Personal website dan blog yang saya bangun menggunakan Next.js,
                MDX, GitHub, dan Cloudflare.
              </p>

              <a
                href="/"
                className="mt-6 inline-block text-sm font-medium text-zinc-600 hover:text-black dark:text-zinc-300 dark:hover:text-white"
              >
                Lihat project →
              </a>
            </article>

            <article className="rounded-2xl border border-zinc-200 bg-white p-7 dark:border-zinc-800 dark:bg-zinc-900">
              <p className="text-sm text-zinc-400">Coming soon</p>

              <h2 className="mt-3 text-2xl font-semibold">
                Project berikutnya
              </h2>

              <p className="mt-4 leading-7 text-zinc-600 dark:text-zinc-300">
                Tempat untuk eksperimen, project pribadi, atau hal menarik
                berikutnya.
              </p>
            </article>
          </div>
        </section>

        <footer className="border-t border-zinc-200 py-10 text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
          © 2026 DhaniDhan.
        </footer>
      </div>
    </main>
  );
}