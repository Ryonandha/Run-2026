import Link from "next/link";
import Image from "next/image";

export default function NewsPage() {
  // Dummy data berita
  const newsList = [
    {
      id: 1,
      title: "Pendaftaran Early Bird Eco Padjadjarun 2026 Resmi Dibuka!",
      date: "22 Mei 2026",
      category: "Info Event",
      desc: "Dapatkan potongan harga khusus untuk 100 pendaftar pertama kategori Eco-Run dan Festival Musik.",
    },
    {
      id: 2,
      title: "Bocoran Guest Star Festival Musik: Musisi Indie Papan Atas Siap Hadir",
      date: "20 Mei 2026",
      category: "Hiburan",
      desc: "Festival musik tahun ini akan mengusung tema alam dengan mengundang musisi yang aktif dalam kampanye lingkungan.",
    },
    {
      id: 3,
      title: "Rute Eco-Run Tahun Ini Akan Melewati 3 Taman Kota",
      date: "18 Mei 2026",
      category: "Olahraga",
      desc: "Persiapkan fisikmu! Rute lari tahun ini dirancang agar peserta bisa menikmati udara pagi yang segar di area taman kota.",
    }
  ];

  return (
    <main className="min-h-screen bg-[#f8fdfa]">
      {/* Navbar Simple */}
      <nav className="w-full bg-white border-b border-gray-100 shadow-sm px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="Logo" width={40} height={40} className="object-contain" />
            <span className="font-bold text-lg text-[#004F6E] hidden sm:block">Eco Padjadjarun</span>
          </Link>
          <Link href="/" className="text-sm font-medium text-gray-500 hover:text-[#00D27F]">
            Kembali ke Beranda
          </Link>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-extrabold text-[#004F6E] mb-2">Berita & Informasi Terbaru</h1>
        <p className="text-gray-600 mb-10">Pantau terus *update* seputar persiapan dan pelaksanaan acara.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsList.map((news) => (
            <div key={news.id} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer">
              <span className="inline-block px-3 py-1 bg-[#00D27F]/10 text-[#00D27F] text-xs font-bold rounded-full mb-4">
                {news.category}
              </span>
              <h2 className="text-xl font-bold text-[#004F6E] mb-3 leading-snug">{news.title}</h2>
              <p className="text-sm text-gray-500 mb-6 line-clamp-3">{news.desc}</p>
              <div className="text-xs font-semibold text-gray-400 mt-auto">{news.date}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}