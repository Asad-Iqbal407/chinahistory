import { NextResponse } from "next/server";

import { createFeedback, ensureCmsCollections, validateFeedbackInput } from "@/lib/cms";

export async function POST(request: Request) {
  try {
    await ensureCmsCollections();
    const payload = await request.json();
    const feedback = validateFeedbackInput(payload);
    const created = await createFeedback(feedback);

    return NextResponse.json({ feedback: created }, { status: 201 });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Feedback could not be submitted.";
    const status = message.includes("MongoDB is not configured.") ? 503 : 400;

    return NextResponse.json({ error: message }, { status });
  }
}
