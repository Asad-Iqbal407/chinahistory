import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { requireAdminApiSession } from "@/lib/admin-api";
import {
  createCmsArticle,
  ensureCmsCollections,
  listAdminArticles,
  validateCmsArticleInput,
} from "@/lib/cms";

export async function GET(request: NextRequest) {
  const { errorResponse } = requireAdminApiSession(request);

  if (errorResponse) {
    return errorResponse;
  }

  await ensureCmsCollections();
  const articles = await listAdminArticles();

  return NextResponse.json({ articles });
}

export async function POST(request: NextRequest) {
  const { session, errorResponse } = requireAdminApiSession(request);

  if (errorResponse || !session) {
    return errorResponse;
  }

  try {
    await ensureCmsCollections();
    const payload = await request.json();
    const article = validateCmsArticleInput(payload);
    const created = await createCmsArticle(article, session.email);

    return NextResponse.json({ article: created }, { status: 201 });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Could not create article.";
    const status = message.includes("E11000") ? 409 : 400;

    return NextResponse.json({ error: message }, { status });
  }
}
