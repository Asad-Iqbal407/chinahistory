import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { requireAdminApiSession } from "@/lib/admin-api";
import {
  deleteCmsArticle,
  ensureCmsCollections,
  getAdminArticleById,
  updateCmsArticle,
  validateCmsArticleInput,
} from "@/lib/cms";

type RouteContext = {
  params: Promise<{ id: string }>;
};

export async function GET(request: NextRequest, { params }: RouteContext) {
  const { errorResponse } = requireAdminApiSession(request);

  if (errorResponse) {
    return errorResponse;
  }

  await ensureCmsCollections();

  const { id } = await params;
  const article = await getAdminArticleById(id);

  if (!article) {
    return NextResponse.json({ error: "Article not found." }, { status: 404 });
  }

  return NextResponse.json({ article });
}

export async function PUT(request: NextRequest, { params }: RouteContext) {
  const { session, errorResponse } = requireAdminApiSession(request);

  if (errorResponse || !session) {
    return errorResponse;
  }

  try {
    await ensureCmsCollections();

    const { id } = await params;
    const payload = await request.json();
    const article = validateCmsArticleInput(payload);
    const updated = await updateCmsArticle(id, article, session.email);

    return NextResponse.json({ article: updated });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Could not update article.";
    const status = message.includes("not found")
      ? 404
      : message.includes("E11000")
        ? 409
        : 400;

    return NextResponse.json({ error: message }, { status });
  }
}

export async function DELETE(request: NextRequest, { params }: RouteContext) {
  const { errorResponse } = requireAdminApiSession(request);

  if (errorResponse) {
    return errorResponse;
  }

  try {
    const { id } = await params;
    await deleteCmsArticle(id);

    return NextResponse.json({ ok: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Could not delete article.";

    return NextResponse.json({ error: message }, { status: 400 });
  }
}
