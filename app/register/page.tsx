import Link from "next/link";
import Image from "next/image";
import RegisterForm from "./RegisterForm";

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

        <RegisterForm />

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