export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#fafafa] text-zinc-900">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <header className="flex items-center justify-between py-8">
          <a href="/" className="text-xl font-bold tracking-tight">
            DhaniDhan<span className="text-zinc-400">.</span>
          </a>

          <nav className="flex items-center gap-5 text-sm text-zinc-600">
            <a href="/blog" className="text-black">
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

        <section className="py-24">
          <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-zinc-400">
            WRITING
          </p>

          <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl">
            Blog
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-8 text-zinc-600">
            Catatan, pengalaman, hal yang saya pelajari, dan apa pun yang
            rasanya layak disimpan.
          </p>
        </section>

        <section className="border-t border-zinc-200 pb-20">
          <article className="border-b border-zinc-200 py-9">
            <div className="grid gap-3 sm:grid-cols-[160px_1fr]">
              <p className="text-sm text-zinc-400">24 Agustus 2026</p>

              <div>
                <a
  href="/blog/halo-ini-dhanidhan"
  className="group block"
>
  <h2 className="text-2xl font-medium tracking-tight transition group-hover:text-zinc-500">
    Halo, ini DhaniDhan.
  </h2>
</a>

                <p className="mt-2 max-w-2xl leading-7 text-zinc-600">
                  Catatan pertama tentang kenapa saya membuat ruang kecil ini
                  di internet.
                </p>
              </div>
            </div>
          </article>

          <article className="border-b border-zinc-200 py-9">
            <div className="grid gap-3 sm:grid-cols-[160px_1fr]">
              <p className="text-sm text-zinc-400">20 Agustus 2026</p>

              <div>
                <h2 className="text-2xl font-medium tracking-tight">
                  Belajar sesuatu, lalu menuliskannya.
                </h2>

                <p className="mt-2 max-w-2xl leading-7 text-zinc-600">
                  Kadang cara terbaik memahami sesuatu adalah mencoba
                  menjelaskannya kembali.
                </p>
              </div>
            </div>
          </article>
        </section>

        <footer className="border-t border-zinc-200 py-10 text-sm text-zinc-500">
          © 2026 DhaniDhan.
        </footer>
      </div>
    </main>
  );
}