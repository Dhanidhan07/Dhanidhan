import { posts } from "../../lib/posts";

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

            <a href="/#projects" className="transition hover:text-black">
              Projects
            </a>

            <a href="/#about" className="transition hover:text-black">
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
          {posts.map((post) => (
            <article
              key={post.slug}
              className="border-b border-zinc-200 py-9"
            >
              <div className="grid gap-3 sm:grid-cols-[160px_1fr]">
                <p className="text-sm text-zinc-400">{post.date}</p>

                <div>
                  <a href={`/blog/${post.slug}`} className="group block">
                    <h2 className="text-2xl font-medium tracking-tight transition group-hover:text-zinc-500">
                      {post.title}
                    </h2>
                  </a>

                  <p className="mt-2 max-w-2xl leading-7 text-zinc-600">
                    {post.excerpt}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </section>

        <footer className="border-t border-zinc-200 py-10 text-sm text-zinc-500">
          © 2026 DhaniDhan.
        </footer>
      </div>
    </main>
  );
}