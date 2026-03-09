import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { getAdminSessionCookieName, getAdminSessionFromToken } from "@/lib/admin-auth";

export function requireAdminApiSession(request: NextRequest) {
  const token = request.cookies.get(getAdminSessionCookieName())?.value;
  const session = getAdminSessionFromToken(token);

  if (!session) {
    return {
      session: null,
      errorResponse: NextResponse.json({ error: "Unauthorized" }, { status: 401 }),
    };
  }

  return {
    session,
    errorResponse: null,
  };
}
