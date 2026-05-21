"use client";

import { useActionState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { registerUser, type RegisterState } from "./actions";

const initialState: RegisterState = {};

export default function RegisterForm() {
  const [state, formAction, isPending] = useActionState(registerUser, initialState);

  return (
    <form className="space-y-5" action={formAction}>
      {state.error ? (
        <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
          {state.error}
        </p>
      ) : null}

      <div>
        <label className="mb-1.5 block text-sm font-medium text-[#004F6E]">
          Nama Lengkap
        </label>
        <Input
          name="nama"
          type="text"
          placeholder="Masukkan nama lengkap"
          required
          autoComplete="name"
          className="w-full rounded-xl"
        />
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-[#004F6E]">
          Alamat Email
        </label>
        <Input
          name="email"
          type="email"
          placeholder="nama@email.com"
          required
          autoComplete="email"
          className="w-full rounded-xl"
        />
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-[#004F6E]">
          Password
        </label>
        <Input
          name="password"
          type="password"
          placeholder="Buat password yang kuat"
          required
          autoComplete="new-password"
          className="w-full rounded-xl"
        />
      </div>

      <Button
        type="submit"
        disabled={isPending}
        className="mt-4 w-full rounded-xl bg-[#00D27F] py-6 text-md font-semibold text-white shadow-md hover:bg-[#00b36c] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isPending ? "Mendaftarkan..." : "Daftar Sekarang"}
      </Button>
    </form>
  );
}