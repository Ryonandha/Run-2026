import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { z } from "zod";

import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

const createTransactionSchema = z.object({
  ticketId: z.string().min(1, "ticketId wajib diisi."),
});

type MidtransSnapResponse = {
  token?: string;
  redirect_url?: string;
};

function buildBasicAuthHeader(serverKey: string) {
  return `Basic ${Buffer.from(`${serverKey}:`).toString("base64")}`;
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user) {
      return NextResponse.json(
        { message: "Unauthorized. Silakan login terlebih dahulu." },
        { status: 401 },
      );
    }

    const parsedBody = createTransactionSchema.safeParse(await request.json());

    if (!parsedBody.success) {
      return NextResponse.json(
        {
          message: parsedBody.error.issues[0]?.message ?? "Payload tidak valid.",
        },
        { status: 400 },
      );
    }

    const userId = (session.user as { id?: string }).id;
    const userEmail = session.user.email;

    if (!userId || !userEmail) {
      return NextResponse.json(
        { message: "Session user tidak lengkap." },
        { status: 401 },
      );
    }

    const ticket = await prisma.ticket.findUnique({
      where: { id: parsedBody.data.ticketId },
    });

    if (!ticket) {
      return NextResponse.json(
        { message: "Tiket tidak ditemukan." },
        { status: 404 },
      );
    }

    if (ticket.kuota <= 0) {
      return NextResponse.json(
        { message: "Tiket sudah habis." },
        { status: 400 },
      );
    }

    const transaction = await prisma.transaction.create({
      data: {
        userId,
        ticketId: ticket.id,
        status: "PENDING",
        paymentUrl: "",
      },
    });

    const serverKey = process.env.PAYMENT_GATEWAY_SERVER_KEY;

    if (!serverKey) {
      return NextResponse.json(
        { message: "PAYMENT_GATEWAY_SERVER_KEY belum diatur." },
        { status: 500 },
      );
    }

    const midtransResponse = await fetch("https://app.sandbox.midtrans.com/snap/v1/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: buildBasicAuthHeader(serverKey),
      },
      body: JSON.stringify({
        transaction_details: {
          order_id: transaction.id,
          gross_amount: ticket.harga,
        },
        customer_details: {
          first_name: session.user.name ?? "Pembeli",
          email: userEmail,
        },
        item_details: [
          {
            id: ticket.id,
            price: ticket.harga,
            quantity: 1,
            name: ticket.nama,
          },
        ],
      }),
    });

    if (!midtransResponse.ok) {
      const errorText = await midtransResponse.text();

      return NextResponse.json(
        {
          message: "Gagal membuat transaksi Midtrans.",
          detail: errorText,
        },
        { status: 502 },
      );
    }

    const midtransData = (await midtransResponse.json()) as MidtransSnapResponse;

    if (!midtransData.redirect_url) {
      return NextResponse.json(
        { message: "Midtrans tidak mengembalikan redirect_url." },
        { status: 502 },
      );
    }

    await prisma.transaction.update({
      where: { id: transaction.id },
      data: {
        paymentUrl: midtransData.redirect_url,
      },
    });

    return NextResponse.json(
      {
        message: "Transaksi berhasil dibuat.",
        transactionId: transaction.id,
        token: midtransData.token,
        redirect_url: midtransData.redirect_url,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("[TRANSACTION_POST]", error);

    return NextResponse.json(
      { message: "Terjadi kesalahan pada server." },
      { status: 500 },
    );
  }
}