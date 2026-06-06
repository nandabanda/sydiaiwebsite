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
      "Receive executive perspectives, engineering deep dives, and applied AI frameworks from the SYDIAI Insights Team.",
    buttonLabel: "Subscribe to SYDIAI Insights",
    defaultPreferences: [
      "demand-intelligence-brief",
      "engineering-stack",
    ] as NewsletterPreferenceId[],
  },
  demandBrief: {
    title: "Never Miss a Demand Signal",
    description:
      "Receive weekly perspectives on demand sensing, shaping, capturing, execution, forecasting, and fulfillment.",
    buttonLabel: "Subscribe to Demand Intelligence Brief™",
    defaultPreferences: ["demand-intelligence-brief"] as NewsletterPreferenceId[],
  },
  engineeringStack: {
    title: "Follow the Enterprise AI Stack",
    description:
      "Receive technical perspectives on AI agents, decision architectures, data systems, MLOps, and governed enterprise AI.",
    buttonLabel: "Subscribe to Engineering Stack™",
    defaultPreferences: ["engineering-stack"] as NewsletterPreferenceId[],
  },
  researchCircle: {
    title: "Join the SYDIAI Research Circle",
    subtitle:
      "Receive executive perspectives, engineering deep dives, and applied AI frameworks from the SYDIAI Insights Team.",
    description:
      "A curated intelligence stream for leaders building AI-powered commercial, planning, supply chain, and enterprise decision systems.",
    buttonLabel: "Subscribe",
    defaultPreferences: [
      "demand-intelligence-brief",
      "engineering-stack",
    ] as NewsletterPreferenceId[],
  },
  modal: {
    headline: "Stay Ahead of the Demand Curve",
    description:
      "Subscribe to research-led perspectives from the SYDIAI Insights Team on AI, decision intelligence, demand transformation, and enterprise orchestration.",
    chips: [
      "Executive Intelligence",
      "Engineering Deep Dives",
      "Applied AI Frameworks",
    ],
  },
  edition: {
    title: "Receive future editions from SYDIAI Insights Team",
    description:
      "Stay connected to the latest research-led perspectives from SYDIAI Insights.",
    buttonLabel: "Subscribe",
  },
} as const;

export const researchCircleTiles = [
  {
    title: "Demand Intelligence Brief™",
    description:
      "Signal-to-fulfillment perspectives for commercial and planning leaders.",
    preference: "demand-intelligence-brief" as NewsletterPreferenceId,
  },
  {
    title: "SYDIAI Engineering Stack™",
    description:
      "Technical deep dives on the systems behind enterprise AI.",
    preference: "engineering-stack" as NewsletterPreferenceId,
  },
  {
    title: "Applied Intelligence™",
    description:
      "Research frameworks connecting AI theory with enterprise reality.",
    preference: "applied-intelligence" as NewsletterPreferenceId,
  },
] as const;

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

export const SUCCESS_MESSAGE =
  "Thank you for subscribing. Future editions will be shared with you by the SYDIAI Insights Team.";
