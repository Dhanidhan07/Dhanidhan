export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-6 sm:px-8">
        <header className="flex items-center justify-between py-8">
          <a href="/" className="text-xl font-bold tracking-tight">
            DhaniDhan<span className="text-zinc-400">.</span>
          </a>

          <nav className="flex items-center gap-5 text-sm text-zinc-600 dark:text-zinc-300">
            <a
              href="/blog"
              className="transition hover:text-zinc-950 dark:hover:text-white"
            >
              Blog
            </a>

            <a
              href="/#projects"
              className="transition hover:text-zinc-950 dark:hover:text-white"
            >
              Projects
            </a>

            <a
              href="/#about"
              className="transition hover:text-zinc-950 dark:hover:text-white"
            >
              About
            </a>
          </nav>
        </header>

        <div className="py-16">
  <article
    className="
      prose prose-zinc max-w-none
      prose-headings:tracking-tight
      prose-h1:text-4xl
      prose-h1:font-semibold
      prose-h1:leading-tight
      prose-h2:mt-12
      prose-h2:text-2xl
      prose-h2:font-semibold
      prose-p:text-lg
      prose-p:leading-8
      prose-a:text-foreground
      dark:prose-invert
      sm:prose-h1:text-5xl
    "
  >
    {children}
  </article>
</div>

        <footer className="border-t border-zinc-200 py-10 text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
          © 2026 DhaniDhan.
        </footer>
      </div>
    </main>
  );
}