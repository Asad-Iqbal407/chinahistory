import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { requireAdminApiSession } from "@/lib/admin-api";
import { ensureCmsCollections, updateFeedbackStatus } from "@/lib/cms";
import type { FeedbackStatus } from "@/lib/cms-types";

type RouteContext = {
  params: Promise<{ id: string }>;
};

export async function PUT(request: NextRequest, { params }: RouteContext) {
  const { errorResponse } = requireAdminApiSession(request);

  if (errorResponse) {
    return errorResponse;
  }

  try {
    await ensureCmsCollections();
    const payload = (await request.json()) as {
      status?: FeedbackStatus;
    };
    const { id } = await params;
    const feedback = await updateFeedbackStatus(id, payload.status ?? "reviewed");

    return NextResponse.json({ feedback });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Feedback could not be updated.";
    const status = message.includes("not found") ? 404 : 400;

    return NextResponse.json({ error: message }, { status });
  }
}
