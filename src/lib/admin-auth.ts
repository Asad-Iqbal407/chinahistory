import { createHmac, timingSafeEqual } from "node:crypto";

import { cookies } from "next/headers";

import type { AdminSession } from "@/lib/cms-types";

const SESSION_COOKIE = "china_atlas_admin_session";
const SESSION_MAX_AGE_SECONDS = 60 * 60 * 24 * 7;

function getSessionSecret() {
  const secret = process.env.CMS_SESSION_SECRET;

  if (!secret) {
    throw new Error("CMS_SESSION_SECRET is not configured.");
  }

  return secret;
}

function signValue(value: string) {
  return createHmac("sha256", getSessionSecret()).update(value).digest("base64url");
}

function encodeSession(session: AdminSession) {
  const payload = Buffer.from(JSON.stringify(session)).toString("base64url");
  const signature = signValue(payload);

  return `${payload}.${signature}`;
}

function decodeSession(token: string): AdminSession | null {
  const [payload, signature] = token.split(".");

  if (!payload || !signature) {
    return null;
  }

  const expectedSignature = signValue(payload);
  const providedBuffer = Buffer.from(signature);
  const expectedBuffer = Buffer.from(expectedSignature);

  if (providedBuffer.length !== expectedBuffer.length) {
    return null;
  }

  if (!timingSafeEqual(providedBuffer, expectedBuffer)) {
    return null;
  }

  try {
    const parsed = JSON.parse(Buffer.from(payload, "base64url").toString("utf8")) as AdminSession;

    if (!parsed.userId || !parsed.email || parsed.exp < Date.now()) {
      return null;
    }

    return parsed;
  } catch {
    return null;
  }
}

export async function createAdminSession(userId: string, email: string) {
  const session: AdminSession = {
    userId,
    email,
    exp: Date.now() + SESSION_MAX_AGE_SECONDS * 1000,
  };

  const cookieStore = await cookies();

  cookieStore.set(SESSION_COOKIE, encodeSession(session), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: SESSION_MAX_AGE_SECONDS,
  });
}

export async function clearAdminSession() {
  const cookieStore = await cookies();

  cookieStore.set(SESSION_COOKIE, "", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 0,
  });
}

export async function getAdminSession() {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE)?.value;

  if (!token) {
    return null;
  }

  return decodeSession(token);
}

export function getAdminSessionFromToken(token: string | undefined) {
  if (!token) {
    return null;
  }

  return decodeSession(token);
}

export function getAdminSessionCookieName() {
  return SESSION_COOKIE;
}
