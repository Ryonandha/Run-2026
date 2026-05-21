import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Countdown from "@/components/Countdown"; // 1. Mengimpor komponen Countdown yang sudah dibuat

export default function Home() {
  // Data rangkaian acara untuk di-map ke dalam card
  const events = [
    { title: "Indoor Hockey Tournament", desc: "Kompetisi hoki dalam ruangan yang kompetitif dan sportif." },
    { title: "Eco-Run", desc: "Lari santai menyusuri rute hijau untuk mengkampanyekan udara bersih." },
    { title: "Festival Musik", desc: "Hiburan musik dari artis lokal dan nasional dengan tema ramah lingkungan." },
    { title: "Green Bazaar", desc: "Bazar UMKM yang menjual produk organik, daur ulang, dan eco-friendly." },
    { title: "Penanaman Pohon & Edukasi", desc: "Aksi nyata penanaman bibit dan workshop pengelolaan sampah." },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Navbar Section */}
      <nav className="w-full bg-white border-b border-gray-100 shadow-sm px-6 py-3 fixed top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image 
              src="/logo.png" 
              alt="Logo Eco Padjadjarun" 
              width={45} 
              height={45} 
              className="object-contain"
            />
            <span className="font-bold text-xl text-[#004F6E] hidden sm:block">
              Eco Padjadjarun
            </span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/news" className="text-sm font-medium text-gray-600 hover:text-[#004F6E] transition-colors">
              Berita
            </Link>
            <Link href="/register">
            <Button className="bg-[#00D27F] hover:bg-[#00b36c] text-white rounded-full px-6">
              Daftar Sekarang
            </Button>
          </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section (Dengan Countdown) */}
      <section className="pt-36 pb-20 flex flex-col items-center justify-center text-center px-4 bg-gradient-to-b from-[#00D27F]/10 to-white">
        <Image 
          src="/logo.png" 
          alt="Eco Padjadjarun 2026 Large Logo" 
          width={180} 
          height={180} 
          className="mb-6 object-contain"
          priority
        />
        
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#004F6E] mb-4">
          Eco Padjadjarun 2026
        </h1>
        <p className="text-gray-600 max-w-2xl mb-8">
          Platform pendaftaran resmi untuk Green Event terbesar. Ikuti Indoor Hockey, Eco-Run, Festival Musik, dan masih banyak lagi.
        </p>

        {/* 2. Memanggil Countdown dengan target tanggal event klien (25 Juli 2026) */}
        <div className="mb-10 w-full">
          <Countdown targetDate="2026-07-25T08:00:00" />
        </div>

        <Button className="bg-[#004F6E] hover:bg-[#00384f] text-white rounded-full px-8 py-6 text-lg shadow-lg">
          Amankan Tiketmu Sekarang
        </Button>
      </section>

      {/* Event Profile Section (Request Klien: Paling Pertama) */}
      <section className="py-20 px-6 bg-[#f8fdfa]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#004F6E] mb-4">
              Rangkaian Acara
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Berbagai kegiatan seru dan bermanfaat yang bisa kamu ikuti di Eco Padjadjarun 2026. Pilih kategori favoritmu!
            </p>
          </div>

          {/* Grid Layout untuk Card Acara */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-[#00D27F]/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-[#00D27F]/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#00D27F] transition-colors">
                  {/* Ikon daun sederhana menggunakan SVG */}
                  <svg className="w-6 h-6 text-[#00D27F] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#004F6E] mb-3">
                  {event.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {event.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}