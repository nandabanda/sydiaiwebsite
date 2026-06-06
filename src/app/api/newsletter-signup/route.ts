import { NextResponse } from "next/server";
import {
  NEWSLETTER_PREFERENCES,
  type NewsletterPayload,
  type NewsletterPreferenceId,
} from "@/data/newsletter";

const validPreferenceIds = new Set<string>(
  NEWSLETTER_PREFERENCES.map((p) => p.id)
);

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePayload(body: unknown): {
  valid: boolean;
  errors: string[];
  data?: NewsletterPayload;
} {
  const errors: string[] = [];

  if (!body || typeof body !== "object") {
    return { valid: false, errors: ["Invalid request body."] };
  }

  const b = body as Record<string, unknown>;

  const fullName = typeof b.fullName === "string" ? b.fullName.trim() : "";
  const workEmail = typeof b.workEmail === "string" ? b.workEmail.trim() : "";
  const company = typeof b.company === "string" ? b.company.trim() : "";
  const designation =
    typeof b.designation === "string" ? b.designation.trim() : "";
  const country = typeof b.country === "string" ? b.country.trim() : "";
  const consent = b.consent === true;
  const sourcePage =
    typeof b.sourcePage === "string" ? b.sourcePage.trim() : "";
  const preferences = Array.isArray(b.preferences)
    ? (b.preferences as unknown[]).filter(
        (p): p is NewsletterPreferenceId =>
          typeof p === "string" && validPreferenceIds.has(p)
      )
    : [];

  if (!fullName) errors.push("Full name is required.");
  if (!workEmail) errors.push("Work email is required.");
  else if (!isValidEmail(workEmail)) errors.push("Enter a valid work email.");
  if (!company) errors.push("Company is required.");
  if (!designation) errors.push("Designation is required.");
  if (!country) errors.push("Country is required.");
  if (preferences.length === 0)
    errors.push("Select at least one newsletter preference.");
  if (!consent) errors.push("Consent is required.");

  if (errors.length > 0) return { valid: false, errors };

  return {
    valid: true,
    errors: [],
    data: {
      fullName,
      workEmail,
      company,
      designation,
      country,
      preferences,
      consent,
      sourcePage,
      submittedAt: new Date().toISOString(),
    },
  };
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = validatePayload(body);

    if (!result.valid || !result.data) {
      return NextResponse.json(
        { success: false, errors: result.errors },
        { status: 400 }
      );
    }

    console.log("[newsletter-signup]", result.data);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { success: false, errors: ["Unable to process subscription."] },
      { status: 500 }
    );
  }
}
