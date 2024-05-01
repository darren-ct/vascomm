import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    { code: 200, data: ["HAHA"], message: "ee" },
    {
      status: 200,
    }
  );
}
