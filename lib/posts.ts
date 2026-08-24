export type Post = {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
};

export const posts: Post[] = [
  {
    title: "Halo, ini DhaniDhan.",
    slug: "halo-ini-dhanidhan",
    date: "24 Agustus 2026",
    excerpt:
      "Catatan pertama tentang kenapa saya membuat ruang kecil ini di internet.",
  },
  {
    title: "Belajar sesuatu, lalu menuliskannya.",
    slug: "artikel-pertama",
    date: "20 Agustus 2026",
    excerpt:
      "Kadang cara terbaik memahami sesuatu adalah mencoba menjelaskannya kembali.",
  },
];