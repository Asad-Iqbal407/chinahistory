import { NextResponse } from "next/server";

import { createAdminSession } from "@/lib/admin-auth";
import { ensureCmsCollections, getAdminUserByEmail } from "@/lib/cms";
import { verifyPassword } from "@/lib/password";

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as {
      email?: string;
      password?: string;
    };

    const email = payload.email?.trim().toLowerCase();
    const password = payload.password?.trim();

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required." },
        { status: 400 },
      );
    }

    await ensureCmsCollections();

    const adminUser = await getAdminUserByEmail(email);

    if (!adminUser || !verifyPassword(password, adminUser.passwordHash)) {
      return NextResponse.json(
        { error: "Invalid email or password." },
        { status: 401 },
      );
    }

    await createAdminSession(adminUser.id, adminUser.email);

    return NextResponse.json({
      ok: true,
      user: {
        email: adminUser.email,
      },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Login failed.";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
