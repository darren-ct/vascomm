import { NextRequest, NextResponse } from "next/server";

import prisma from "@/lib/prisma";
import { SearchParams } from "@/api/types";
import { productSchema } from "@/services/product/types/entity";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const { take, skip, search } = searchParams as SearchParams;

  const data = await prisma.product.findMany({
    take,
    skip,
    where: { name: { contains: search as string, mode: "insensitive" } },
  });

  return NextResponse.json(
    {
      code: 200,
      data,
      message: "success",
    },
    {
      status: 200,
    }
  );
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  try {
    const parsedBody = productSchema.parse(body);
    const data = await prisma.product.create({ data: parsedBody });

    return NextResponse.json(
      {
        code: 200,
        data,
        message: "Produk berhasil dibuat!",
      },
      {
        status: 200,
      }
    );
  } catch (err) {
    return NextResponse.json(
      {
        code: 400,
        message: "Produk gagal dibuat!",
      },
      {
        status: 400,
      }
    );
  }
}

export async function DELETE(
  _request: NextRequest,
  {
    params: { productId },
  }: {
    params: { productId: string };
  }
) {
  try {
    const data = await prisma.product.update({
      where: { id: Number(productId) },
      data: { status: "INACTIVE" },
    });

    return NextResponse.json(
      {
        code: 200,
        data,
        message: "Produk berhasil dihapus!",
      },
      {
        status: 200,
      }
    );
  } catch (err) {
    return NextResponse.json(
      {
        code: 400,
        message: "Produk gagal dihapus!",
      },
      {
        status: 400,
      }
    );
  }
}

export async function UPDATE(
  request: NextRequest,
  {
    params: { productId },
  }: {
    params: { productId: string };
  }
) {
  const body = await request.json();

  try {
    const data = await prisma.product.update({
      where: { id: Number(productId) },
      data: body,
    });

    return NextResponse.json(
      {
        code: 200,
        data,
        message: "Produk berhasil diubah!",
      },
      {
        status: 200,
      }
    );
  } catch (err) {
    return NextResponse.json(
      {
        code: 400,
        message: "Produk gagal diubah!",
      },
      {
        status: 400,
      }
    );
  }
}
