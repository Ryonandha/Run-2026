'use client';

import Link from "next/link";
import dynamic from 'next/dynamic';
import { Button } from "@/components/ui/button";

// Penting: Import komponen Map secara dinamis agar tidak error saat dirender oleh server Next.js
const DynamicMap = dynamic(() => import('@/components/Map'), { ssr: false });

export default function TicketPage() {
  return (
    <main className="min-h-screen bg-[#f8fdfa] py-12 px-6">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Header E-Ticket */}
        <div className="flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-extrabold text-[#004F6E]">E-Ticket Kamu</h1>
            <p className="text-gray-500 mt-1">Tunjukkan tiket ini saat registrasi ulang di lokasi event.</p>
          </div>
          <Link href="/dashboard">
            <Button variant="outline" className="rounded-full">Kembali ke Dashboard</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Kolom Kiri: Kartu Tiket */}
          <div className="lg:col-span-1 bg-[#004F6E] rounded-3xl text-white p-8 shadow-lg relative overflow-hidden flex flex-col h-full">
            {/* Dekorasi Background */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            
            <div className="mb-8 relative z-10">
              <span className="bg-[#00D27F] text-[#004F6E] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                Lunas
              </span>
              <h2 className="text-2xl font-bold mt-4">Eco-Run (Individu)</h2>
              <p className="text-white/70 text-sm mt-1">25 Juli 2026 • 06:00 WIB</p>
            </div>

            <div className="mt-auto bg-white text-[#004F6E] p-4 rounded-2xl text-center relative z-10">
              <p className="text-xs font-bold text-gray-400 uppercase mb-1">Nama Peserta</p>
              <p className="font-extrabold text-lg truncate">Ryonandha Mitchell</p>
              <div className="w-full h-32 bg-gray-100 mt-4 rounded-xl flex items-center justify-center border-2 border-dashed border-gray-300">
                <span className="text-gray-400 text-sm font-medium">QR Code Dummy</span>
              </div>
              <p className="text-[10px] text-gray-400 mt-2">ID: ECO-26-099182</p>
            </div>
          </div>

          {/* Kolom Kanan: Web GIS Mirroring */}
          <div className="lg:col-span-2 bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
            <h3 className="text-xl font-bold text-[#004F6E] mb-2">Peta Rute & Lokasi Acara</h3>
            <p className="text-sm text-gray-500 mb-6">
              Garis hijau menunjukkan rute Eco-Run. Klik marker biru untuk melihat lokasi Green Bazaar.
            </p>
            
            {/* Memanggil komponen peta Leaflet di sini */}
            <DynamicMap />
            
          </div>
        </div>

      </div>
    </main>
  );
}