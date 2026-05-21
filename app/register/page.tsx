import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"; // Menggunakan komponen input dari Shadcn

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-[#f8fdfa] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-lg border border-gray-100 p-8">
        
        {/* Header Form */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-block mb-4">
            <Image 
              src="/logo.png" 
              alt="Logo" 
              width={60} 
              height={60} 
              className="mx-auto object-contain"
            />
          </Link>
          <h1 className="text-2xl font-bold text-[#004F6E]">Buat Akun</h1>
          <p className="text-sm text-gray-500 mt-2">
            Daftar untuk membeli tiket Eco Padjadjarun 2026
          </p>
        </div>

        {/* Form Dummy (Belum ada fungsi database, murni UI) */}
        <form className="space-y-5" action="/verify">
          <div>
            <label className="block text-sm font-medium text-[#004F6E] mb-1.5">
              Nama Lengkap
            </label>
            <Input 
              type="text" 
              placeholder="Masukkan nama lengkap" 
              required 
              className="w-full rounded-xl"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#004F6E] mb-1.5">
              Alamat Email
            </label>
            <Input 
              type="email" 
              placeholder="nama@email.com" 
              required 
              className="w-full rounded-xl"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#004F6E] mb-1.5">
              Password
            </label>
            <Input 
              type="password" 
              placeholder="Buat password yang kuat" 
              required 
              className="w-full rounded-xl"
            />
          </div>

          {/* Tombol Register akan langsung mengarah ke halaman Dashboard (sementara) */}
          <Button 
            type="submit" 
            className="w-full bg-[#00D27F] hover:bg-[#00b36c] text-white rounded-xl py-6 text-md font-semibold mt-4 shadow-md"
          >
            Daftar Sekarang
          </Button>
        </form>

        <div className="mt-8 text-center text-sm text-gray-600">
          Sudah punya akun?{" "}
          <Link href="/login" className="text-[#00D27F] font-semibold hover:underline">
            Masuk di sini
          </Link>
        </div>

      </div>
    </main>
  );
}