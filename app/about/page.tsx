import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Sedikit tentang Dhani dan alasan di balik DhaniDhan.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-6 sm:px-8">
        <header className="flex items-center justify-between py-8">
          <a href="/" className="text-xl font-bold tracking-tight">
            DhaniDhan<span className="text-zinc-400">.</span>
          </a>

          <nav className="flex items-center gap-5 text-sm text-zinc-600 dark:text-zinc-300">
            <a href="/blog" className="hover:text-black dark:hover:text-white">
              Blog
            </a>
            <a href="/projects" className="hover:text-black dark:hover:text-white">
              Projects
            </a>
            <a href="/about" className="text-black dark:text-white">
              About
            </a>
          </nav>
        </header>

        <section className="py-24">
          <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-zinc-400">
            ABOUT
          </p>

          <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl">
            Tentang saya
          </h1>

          <div className="mt-10 space-y-7 text-lg leading-9 text-zinc-700 dark:text-zinc-300">
            <p>
              Saya Dhani. Saya suka belajar, mengerjakan sesuatu, dan
              mendokumentasikan hal-hal yang rasanya layak untuk disimpan.
            </p>

            <p>
              DhaniDhan dibuat sebagai ruang pribadi di internet untuk menulis
              tentang pengalaman, proyek, hal yang sedang dipelajari, dan
              catatan kecil dari perjalanan sehari-hari.
            </p>

            <p>
              Website ini tidak dibuat untuk menjadi sempurna sejak awal.
              Saya ingin membangunnya sedikit demi sedikit, sambil terus belajar
              dan melihat ke mana arah DhaniDhan berkembang.
            </p>
          </div>
        </section>

        <footer className="border-t border-zinc-200 py-10 text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
          © 2026 DhaniDhan.
        </footer>
      </div>
    </main>
  );
}