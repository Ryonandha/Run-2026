import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function PaymentPage() {
  return (
    <main className="min-h-screen bg-[#f8fdfa] py-12 px-6">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        
        {/* Header Pembayaran */}
        <div className="bg-[#004F6E] p-6 text-center text-white">
          <h1 className="text-2xl font-bold">Selesaikan Pembayaran</h1>
          <p className="opacity-80 text-sm mt-1">Batas waktu pembayaran: 15 Menit</p>
        </div>

        <div className="p-8">
          {/* Ringkasan Pesanan */}
          <div className="bg-gray-50 rounded-2xl p-6 mb-8 border border-gray-100">
            <h2 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Ringkasan Pesanan</h2>
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold text-[#004F6E] text-lg">Eco-Run (Individu)</span>
              <span className="font-bold text-[#00D27F] text-xl">Rp 150.000</span>
            </div>
            <p className="text-sm text-gray-500">Atas Nama: Ryonandha Mitchell</p>
          </div>

          {/* Dummy QRIS */}
          <div className="text-center mb-8">
            <h3 className="font-semibold text-[#004F6E] mb-4">Scan QRIS di bawah ini</h3>
            <div className="w-48 h-48 bg-gray-200 mx-auto rounded-xl flex items-center justify-center border-2 border-dashed border-gray-300">
              <span className="text-gray-400 text-sm">Gambar QRIS Dummy</span>
            </div>
          </div>

          {/* Tombol Konfirmasi mengarah ke E-Ticket */}
          <form action="/ticket">
            <Button 
              type="submit" 
              className="w-full bg-[#00D27F] hover:bg-[#00b36c] text-white rounded-xl py-6 text-md font-semibold"
            >
              Saya Sudah Bayar
            </Button>
          </form>
          
          <div className="text-center mt-4">
            <Link href="/dashboard" className="text-sm text-gray-500 hover:underline">
              Batalkan dan kembali
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}