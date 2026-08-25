import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Halo, ini DhaniDhan",
  description:
    "Catatan pertama tentang kenapa saya membuat ruang kecil ini di internet.",
};

export default function ArticlePage() {
  return (
    <article className="pb-16">
      <a
        href="/blog"
        className="text-sm text-zinc-500 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
      >
        ← Kembali ke Blog
      </a>

      <header className="mt-14">
        <p className="text-sm text-zinc-400">24 Agustus 2026</p>

        <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
          Halo, ini DhaniDhan.
        </h1>

        <p className="mt-7 text-xl leading-9 text-zinc-600 dark:text-zinc-300">
          Catatan pertama tentang kenapa saya membuat ruang kecil ini di
          internet.
        </p>
      </header>

      <div className="mt-14 border-t border-zinc-200 pt-12 dark:border-zinc-800">
        <div className="space-y-7 text-lg leading-9 text-zinc-700 dark:text-zinc-300">
          <p>
            Saya membuat DhaniDhan sebagai tempat untuk menyimpan hal-hal
            yang ingin saya ingat.
          </p>

          <p>
            Tidak harus selalu tulisan panjang atau sesuatu yang serius.
            Kadang mungkin hanya catatan kecil, pengalaman, proyek yang sedang
            saya kerjakan, atau sesuatu yang baru saya pelajari.
          </p>

          <h2 className="pt-6 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white">
            Kenapa membuat ruang sendiri?
          </h2>

          <p>
            Selama ini banyak hal menarik lewat begitu saja. Ada yang saya
            ingat beberapa hari, lalu hilang. Saya ingin punya satu tempat
            yang bisa saya isi sedikit demi sedikit.
          </p>

          <h2 className="pt-6 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white">
            Sekalian belajar
          </h2>

          <p>
            DhaniDhan juga menjadi kesempatan untuk belajar membangun website
            sendiri, memahami hal-hal baru, dan menulis dengan lebih rutin.
          </p>

          <p>
            Untuk sekarang, ini tulisan pertama. Kita lihat nanti akan jadi
            seperti apa.
          </p>
        </div>
      </div>

      <div className="mt-16 border-t border-zinc-200 pt-8 dark:border-zinc-800">
        <a
          href="/blog"
          className="text-sm font-medium text-zinc-600 transition hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white"
        >
          ← Lihat tulisan lainnya
        </a>
      </div>
    </article>
  );
}