import type { Metadata } from "next";
import { posts } from "../../lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Tulisan, catatan, pengalaman, dan hal-hal yang dipelajari di DhaniDhan.",
};

export default function BlogPage() {
  return (
    <>
      <section className="pb-20 pt-8 sm:pt-16">
        <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-zinc-400">
          WRITING
        </p>

        <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl">
          Blog
        </h1>

        <p className="mt-5 max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-300">
          Catatan, pengalaman, hal yang saya pelajari, dan apa pun yang
          rasanya layak disimpan.
        </p>
      </section>

      <section className="border-t border-zinc-200 pb-20 dark:border-zinc-800">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="border-b border-zinc-200 py-9 dark:border-zinc-800"
          >
            <div className="grid gap-3 sm:grid-cols-[160px_1fr]">
              <p className="text-sm text-zinc-400">{post.date}</p>

              <div>
                <a href={`/blog/${post.slug}`} className="group block">
                  <h2 className="text-2xl font-medium tracking-tight transition group-hover:text-zinc-500">
                    {post.title}
                  </h2>
                </a>

                <p className="mt-2 max-w-2xl leading-7 text-zinc-600 dark:text-zinc-300">
                  {post.excerpt}
                </p>
              </div>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}