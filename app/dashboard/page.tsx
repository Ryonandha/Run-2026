import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  // Data dummy kategori tiket (bisa disesuaikan dengan harga aslinya nanti)
  const ticketCategories = [
    { id: 1, name: "Eco-Run (Individu)", price: "Rp 150.000", desc: "Termasuk Jersey Eco-friendly, Medali, dan Nomor Dada (Bib)." },
    { id: 2, name: "Festival Musik", price: "Rp 75.000", desc: "Akses masuk area festival musik sehari penuh." },
    { id: 3, name: "Indoor Hockey (Per Tim)", price: "Rp 500.000", desc: "Registrasi turnamen untuk 1 tim (5-7 orang)." },
  ];

  return (
    <main className="min-h-screen bg-[#f8fdfa]">
      {/* Navbar Khusus Dashboard */}
      <nav className="w-full bg-white border-b border-gray-100 shadow-sm px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image 
              src="/logo.png" 
              alt="Logo" 
              width={40} 
              height={40} 
              className="object-contain" 
            />
            <span className="font-bold text-lg text-[#004F6E] hidden sm:block">
              Dashboard Peserta
            </span>
          </div>
          {/* Tombol keluar pura-pura yang mengarah kembali ke halaman utama */}
          <Link href="/">
            <Button variant="outline" className="text-gray-500 border-gray-200 hover:bg-gray-50 rounded-full px-6">
              Keluar Akun
            </Button>
          </Link>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Pesan Sambutan */}
        <div className="mb-10">
          <h1 className="text-3xl font-extrabold text-[#004F6E]">Selamat Datang, Calon Peserta!</h1>
          <p className="text-gray-600 mt-2 text-lg">
            Silakan pilih kategori tiket acara Eco Padjadjarun 2026 yang ingin kamu ikuti di bawah ini.
          </p>
        </div>

        {/* Grid Pilihan Tiket */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ticketCategories.map((ticket) => (
            <div 
              key={ticket.id} 
              className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <h3 className="text-xl font-bold text-[#004F6E] mb-2">{ticket.name}</h3>
                <p className="text-sm text-gray-500 mb-6 min-h-[40px]">{ticket.desc}</p>
                <div className="text-3xl font-black text-[#00D27F] mb-6">{ticket.price}</div>
              </div>
              
              {/* Form yang mengarah ke halaman pembayaran (dummy) */}
              <form action="/payment">
                <Button 
                  type="submit" 
                  className="w-full bg-[#004F6E] hover:bg-[#00384f] text-white rounded-xl py-6 text-md font-semibold"
                >
                  Pilih Tiket Ini
                </Button>
              </form>
            </div>
          ))}
        </div>
        
      </div>
    </main>
  );
}