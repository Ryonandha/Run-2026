import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function VerifyEmailPage() {
  return (
    <main className="min-h-screen bg-[#f8fdfa] flex flex-col items-center justify-center p-6 text-center">
      <div className="w-20 h-20 bg-[#00D27F]/10 text-[#00D27F] rounded-full flex items-center justify-center mb-6">
        {/* Ikon Amplop / Pesan */}
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      </div>
      
      <h1 className="text-3xl font-extrabold text-[#004F6E] mb-4">Cek Email Kamu!</h1>
      <p className="text-gray-600 max-w-md mx-auto mb-8">
        Kami telah mengirimkan tautan verifikasi ke email yang kamu daftarkan. Klik tautan tersebut untuk mengaktifkan akunmu.
      </p>

      {/* Tombol ini adalah simulasi jika user mengklik link dari dalam email mereka */}
      <div className="p-6 bg-white border border-dashed border-gray-300 rounded-2xl max-w-md w-full">
        <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-4">Kotak Simulasi Email (Untuk Demo)</p>
        <Link href="/dashboard">
          <Button className="w-full bg-[#004F6E] hover:bg-[#00384f] text-white rounded-xl py-6">
            [Simulasi] Klik Link Verifikasi
          </Button>
        </Link>
      </div>
    </main>
  );
}