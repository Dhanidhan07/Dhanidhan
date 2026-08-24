export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen bg-[#fafafa] text-zinc-900">
      <div className="mx-auto max-w-3xl px-6 sm:px-8">
        <header className="flex items-center justify-between py-8">
          <a href="/" className="text-xl font-bold tracking-tight">
            DhaniDhan<span className="text-zinc-400">.</span>
          </a>

          <nav className="flex items-center gap-5 text-sm text-zinc-600">
            <a href="/blog" className="hover:text-black">
              Blog
            </a>
            <a href="/#projects" className="hover:text-black">
              Projects
            </a>
            <a href="/#about" className="hover:text-black">
              About
            </a>
          </nav>
        </header>

        <div className="py-16">
          <a
            href="/blog"
            className="text-sm text-zinc-500 transition hover:text-zinc-900"
          >
            ← Kembali ke Blog
          </a>

          <article className="prose prose-zinc mt-12 max-w-none">
            {children}
          </article>
        </div>

        <footer className="border-t border-zinc-200 py-10 text-sm text-zinc-500">
          © 2026 DhaniDhan.
        </footer>
      </div>
    </main>
  );
}