export const NEWSLETTER_PREFERENCES = [
  {
    id: "demand-intelligence-brief",
    label: "Demand Intelligence Brief™",
  },
  {
    id: "engineering-stack",
    label: "SYDIAI Engineering Stack™",
  },
  {
    id: "applied-intelligence",
    label: "Applied Intelligence™ updates",
  },
] as const;

export type NewsletterPreferenceId =
  (typeof NEWSLETTER_PREFERENCES)[number]["id"];

export const newsletterCopy = {
  hub: {
    title: "Subscribe to SYDIAI Insights",
    description:
      "Subscribe to receive executive perspectives, engineering deep dives, and applied AI frameworks from the SYDIAI Insights Team.",
    buttonLabel: "Subscribe to SYDIAI Insights",
    defaultPreferences: [
      "demand-intelligence-brief",
      "engineering-stack",
    ] as NewsletterPreferenceId[],
  },
  demandBrief: {
    title: "Subscribe to Demand Intelligence Brief™",
    description:
      "Receive weekly perspectives on how AI is transforming demand sensing, shaping, capturing, execution, forecasting, and fulfillment.",
    buttonLabel: "Subscribe to Demand Intelligence Brief™",
    defaultPreferences: ["demand-intelligence-brief"] as NewsletterPreferenceId[],
  },
  engineeringStack: {
    title: "Subscribe to SYDIAI Engineering Stack™",
    description:
      "Receive technical perspectives on AI agents, data systems, decision architectures, MLOps, and enterprise-grade AI platforms.",
    buttonLabel: "Subscribe to Engineering Stack™",
    defaultPreferences: ["engineering-stack"] as NewsletterPreferenceId[],
  },
  edition: {
    title: "Receive Future Editions",
    description:
      "Receive future editions from SYDIAI Insights Team.",
    buttonLabel: "Subscribe to SYDIAI Insights",
  },
} as const;

export type NewsletterPayload = {
  fullName: string;
  workEmail: string;
  company: string;
  designation: string;
  country: string;
  preferences: NewsletterPreferenceId[];
  consent: boolean;
  sourcePage: string;
  submittedAt: string;
};
