"use server";

import bcrypt from "bcrypt";
import { redirect } from "next/navigation";
import { z } from "zod";

import { prisma } from "@/lib/prisma";

const registerSchema = z.object({
  nama: z.string().trim().min(2, "Nama minimal 2 karakter."),
  email: z.string().trim().email("Format email tidak valid."),
  password: z.string().min(8, "Password minimal 8 karakter."),
});

export type RegisterState = {
  error?: string;
};

export async function registerUser(
  _prevState: RegisterState,
  formData: FormData,
): Promise<RegisterState> {
  const parsed = registerSchema.safeParse({
    nama: formData.get("nama"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!parsed.success) {
    return {
      error: parsed.error.issues[0]?.message ?? "Input tidak valid.",
    };
  }

  const { nama, email, password } = parsed.data;

  const existingUser = await prisma.user.findUnique({
    where: { email },
    select: { id: true },
  });

  if (existingUser) {
    return {
      error: "Email sudah terdaftar. Silakan gunakan email lain.",
    };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await prisma.user.create({
    data: {
      nama,
      email,
      password: hashedPassword,
      isVerified: false,
    },
  });

  redirect("/verify");
}