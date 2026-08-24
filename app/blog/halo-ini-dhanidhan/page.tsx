export default function ArticlePage() {
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

        <article className="py-20">
          <a
            href="/blog"
            className="text-sm text-zinc-500 transition hover:text-zinc-900"
          >
            ← Kembali ke Blog
          </a>

          <p className="mt-16 text-sm text-zinc-400">24 Agustus 2026</p>

          <h1 className="mt-4 text-5xl font-semibold leading-tight tracking-tight sm:text-6xl">
            Halo, ini DhaniDhan.
          </h1>

          <p className="mt-8 text-xl leading-9 text-zinc-600">
            Catatan pertama tentang kenapa saya membuat ruang kecil ini di
            internet.
          </p>

          <div className="mt-16 space-y-7 text-lg leading-9 text-zinc-700">
            <p>
              Saya membuat DhaniDhan sebagai tempat untuk menyimpan hal-hal
              yang ingin saya ingat.
            </p>

            <p>
              Tidak harus selalu tulisan panjang atau sesuatu yang serius.
              Kadang mungkin hanya catatan kecil, pengalaman, proyek yang sedang
              saya kerjakan, atau sesuatu yang baru saya pelajari.
            </p>

            <p>
              Selama ini banyak hal menarik lewat begitu saja. Ada yang saya
              ingat beberapa hari, lalu hilang. Jadi saya ingin punya satu
              tempat yang bisa saya isi sedikit demi sedikit.
            </p>

            <p>
              Ini juga jadi kesempatan untuk belajar membangun website sendiri,
              menulis lebih rutin, dan melihat bagaimana DhaniDhan berkembang
              dari waktu ke waktu.
            </p>

            <p>
              Jadi, ini tulisan pertama. Kita lihat nanti akan jadi seperti apa.
            </p>
          </div>
        </article>

        <footer className="border-t border-zinc-200 py-10 text-sm text-zinc-500">
          © 2026 DhaniDhan.
        </footer>
      </div>
    </main>
  );
}