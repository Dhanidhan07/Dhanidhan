import { posts } from "../lib/posts";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        {/* Header */}
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
              href="#projects"
              className="transition hover:text-zinc-950 dark:hover:text-white"
            >
              Projects
            </a>

            <a
              href="#about"
              className="transition hover:text-zinc-950 dark:hover:text-white"
            >
              About
            </a>
          </nav>
        </header>

        {/* Hero */}
        <section className="flex min-h-[72vh] items-center">
          <div className="max-w-3xl py-20">
            <p className="mb-5 text-sm font-medium text-zinc-500 dark:text-zinc-400">
              PERSONAL NOTES · PROJECTS · THOUGHTS
            </p>

            <h1 className="text-5xl font-semibold leading-[1.08] tracking-tight sm:text-7xl">
              Hai, saya Dhani.
              <br />
              Saya menulis apa yang ingin saya ingat.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-300 sm:text-xl">
              DhaniDhan adalah ruang pribadi untuk menyimpan cerita, hal yang
              saya pelajari, proyek yang saya kerjakan, dan hal-hal menarik
              yang saya temukan di perjalanan.
            </p>

            <div className="mt-10 flex gap-6 text-sm font-medium">
              <a
                href="#writing"
                className="border-b border-zinc-900 pb-1 transition hover:text-zinc-500 dark:border-zinc-100 dark:hover:text-zinc-400"
              >
                Baca tulisan ↓
              </a>

              <a
                href="#about"
                className="text-zinc-500 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
              >
                Tentang saya →
              </a>
            </div>
          </div>
        </section>

        {/* Writing */}
        <section
          id="writing"
          className="border-t border-zinc-200 py-20 dark:border-zinc-800"
        >
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-zinc-400">
                LATEST WRITING
              </p>

              <h2 className="text-3xl font-semibold tracking-tight">
                Tulisan terbaru
              </h2>
            </div>

            <a
              href="/blog"
              className="hidden text-sm text-zinc-500 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white sm:block"
            >
              Lihat semua →
            </a>
          </div>

          <div>
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group border-t border-zinc-200 py-8 first:border-t-0 dark:border-zinc-800"
              >
                <div className="grid gap-3 sm:grid-cols-[160px_1fr]">
                  <p className="text-sm text-zinc-400">{post.date}</p>

                  <div>
                    <a href={`/blog/${post.slug}`}>
                      <h3 className="text-2xl font-medium tracking-tight transition group-hover:text-zinc-500">
                        {post.title}
                      </h3>
                    </a>

                    <p className="mt-2 max-w-2xl leading-7 text-zinc-600 dark:text-zinc-300">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section
          id="projects"
          className="border-t border-zinc-200 py-20 dark:border-zinc-800"
        >
          <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-zinc-400">
            SELECTED PROJECTS
          </p>

          <h2 className="text-3xl font-semibold tracking-tight">
            Yang sedang saya kerjakan
          </h2>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            <div className="rounded-2xl border border-zinc-200 bg-white p-7 dark:border-zinc-800 dark:bg-zinc-900">
              <p className="text-sm text-zinc-400">Personal</p>

              <h3 className="mt-3 text-xl font-semibold">
                DhaniDhan
              </h3>

              <p className="mt-3 leading-7 text-zinc-600 dark:text-zinc-300">
                Membangun rumah kecil di internet untuk menulis dan
                mendokumentasikan perjalanan.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-7 dark:border-zinc-800 dark:bg-zinc-900">
              <p className="text-sm text-zinc-400">
                Coming soon
              </p>

              <h3 className="mt-3 text-xl font-semibold">
                Project berikutnya
              </h3>

              <p className="mt-3 leading-7 text-zinc-600 dark:text-zinc-300">
                Tempat untuk project, eksperimen, atau sesuatu yang menarik
                berikutnya.
              </p>
            </div>
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          className="border-t border-zinc-200 py-20 dark:border-zinc-800"
        >
          <div className="grid gap-8 sm:grid-cols-[1fr_2fr]">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-zinc-400">
                ABOUT
              </p>
            </div>

            <div>
              <h2 className="max-w-xl text-3xl font-semibold leading-tight tracking-tight">
                Sedikit tentang orang di balik DhaniDhan.
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-300">
                Saya suka belajar, mengerjakan sesuatu, dan sesekali
                menuliskannya. Website ini dibuat tanpa target yang terlalu
                rumit—cukup menjadi tempat yang bisa saya isi sedikit demi
                sedikit.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="flex flex-col gap-3 border-t border-zinc-200 py-10 text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 DhaniDhan.</p>
          <p>Built with Next.js.</p>
        </footer>
      </div>
    </main>
  );
}