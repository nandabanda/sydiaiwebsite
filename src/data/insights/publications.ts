import {
  buildDemandSections,
  buildEngineeringSections,
} from "@/lib/insights-content";
import type { EditionArticle, PublicationMeta } from "@/data/insights/types";

const dibMeta: Omit<EditionArticle, "edition" | "slug" | "sections">[] = [
  {
    title: "Introducing the Demand Intelligence Brief",
    description:
      "A new executive series on how AI is transforming demand across sensing, shaping, capturing, execution, forecasting, and fulfillment.",
    readTime: "6 min read",
  },
  {
    title: "Building the Demand Intelligence Foundation",
    description:
      "The data, operating model, analytical, and governance foundations required for enterprise demand intelligence.",
    readTime: "7 min read",
  },
  {
    title: "AI and the New Demand Signal Economy",
    description:
      "Why future-ready enterprises need to integrate market, consumer, customer, supply, and execution signals into decision systems.",
    readTime: "7 min read",
  },
  {
    title: "The Evolution of Demand Sensing",
    description:
      "How demand sensing is moving beyond historical sales data into external signals, market indicators, and early-warning intelligence.",
    readTime: "8 min read",
  },
  {
    title: "Demand Shaping: Moving Beyond Promotions",
    description:
      "How AI can help organizations influence demand through pricing, assortment, visibility, trade investments, and portfolio choices.",
    readTime: "8 min read",
  },
  {
    title: "Demand Capturing in an Omnichannel World",
    description:
      "How organizations convert opportunity into revenue across channels, customers, outlets, and digital touchpoints.",
    readTime: "8 min read",
  },
  {
    title: "Demand Execution: The Missing Link Between Planning and Results",
    description:
      "Why execution intelligence is critical to closing the gap between commercial intent and market reality.",
    readTime: "9 min read",
  },
  {
    title: "The Emerging Demand Intelligence Operating Model",
    description:
      "How organizations can connect sensing, shaping, capturing, execution, forecasting, and fulfillment into one operating rhythm.",
    readTime: "9 min read",
  },
  {
    title: "Finance in the Age of Demand Intelligence",
    description:
      "How finance can move from performance reporting to forward-looking growth, margin, risk, and scenario intelligence.",
    readTime: "8 min read",
  },
  {
    title: "Demand Forecasting Beyond Statistics",
    description:
      "Why forecasting is moving beyond statistical models toward explainable, causal, AI-powered decision orchestration.",
    readTime: "9 min read",
  },
  {
    title: "The Future of Rolling Forecasts in an AI-Driven Enterprise",
    description:
      "How rolling forecasts are evolving from periodic updates into continuous, signal-driven planning systems.",
    readTime: "8 min read",
  },
  {
    title: "Demand Fulfillment: Closing the Gap Between Planning and Results",
    description:
      "Why the ultimate measure of planning is not model sophistication, but whether the business delivers revenue, margin, service, and learning outcomes.",
    readTime: "9 min read",
  },
];

export const demandIntelligenceBriefMeta: PublicationMeta = {
  id: "demand-intelligence-brief",
  title: "Demand Intelligence Brief™",
  subtitle: "Tracking how AI is transforming demand—from signal to fulfillment.",
  description:
    "A weekly executive intelligence series exploring how organizations can sense, shape, capture, execute, forecast, and fulfill demand in an AI-first enterprise.",
  publisher: "Published by SYDIAI Insights Team",
  cadence: "Published Weekly",
  chips: [
    "Demand Sensing",
    "Demand Shaping",
    "Demand Capturing",
    "Demand Execution",
    "Demand Forecasting",
    "Demand Fulfillment",
    "AI & Decision Intelligence",
    "Commercial Excellence",
    "Supply Chain Intelligence",
  ],
};

export const demandIntelligenceEditions: EditionArticle[] = dibMeta.map(
  (item, index) => {
    const edition = index + 1;
    return {
      edition,
      slug: `edition-${edition}`,
      ...item,
      sections: buildDemandSections(item.title, item.description),
    };
  }
);

export function getDemandEdition(slug: string): EditionArticle | undefined {
  return demandIntelligenceEditions.find((e) => e.slug === slug);
}

const engMeta: Omit<EditionArticle, "edition" | "slug" | "sections">[] = [
  {
    title: "Engineering the Decision Stack",
    description:
      "A foundational perspective on how data, software, AI, workflows, and human governance come together to power enterprise decisions.",
    readTime: "10 min read",
  },
  {
    title: "Agentic Technologies: The New Engineering Layer for Enterprise AI",
    description:
      "Why agents, tools, workflows, memory, and governance are becoming core components of modern enterprise systems.",
    readTime: "11 min read",
  },
  {
    title: "Can Enterprise AI Be Trusted With Your Data?",
    description:
      "The trust, security, governance, and architecture questions that determine whether enterprise AI can scale responsibly.",
    readTime: "10 min read",
  },
  {
    title: "Agentic AI Is Moving From Isolated Use Cases to Governed Production Systems",
    description:
      "How enterprises can move from experiments to controlled, auditable, production-grade AI systems.",
    readTime: "11 min read",
  },
  {
    title: "The Enterprise AI Stack Is Entering Its Orchestration Era",
    description:
      "Why the next phase of enterprise AI is not isolated models, but connected orchestration across data, decisions, workflows, and governance.",
    readTime: "12 min read",
  },
  {
    title: "The Future of Agentic AI Systems",
    description:
      "How agentic systems are becoming the next operating layer for enterprise decision intelligence.",
    readTime: "12 min read",
  },
];

export const engineeringStackMeta: PublicationMeta = {
  id: "engineering-stack",
  title: "SYDIAI Engineering Stack™",
  subtitle:
    "What's changing in data, software, and AI systems—and what needs to change next.",
  description:
    "A technical publication series exploring AI agents, data foundations, forecasting systems, optimization engines, decision architectures, MLOps, and enterprise-grade AI platforms.",
  publisher: "Published by SYDIAI Insights Team",
  cadence: "Published Weekly",
  chips: [
    "AI Agents",
    "Data Engineering",
    "Forecasting Engines",
    "Optimization Engines",
    "MLOps",
    "Decision Intelligence",
    "Enterprise Architecture",
    "GenAI Systems",
    "Control Towers",
    "Governed AI",
  ],
};

export const engineeringStackEditions: EditionArticle[] = engMeta.map(
  (item, index) => {
    const edition = index + 1;
    return {
      edition,
      slug: `edition-${edition}`,
      ...item,
      sections: buildEngineeringSections(item.title, item.description),
    };
  }
);

export function getEngineeringEdition(slug: string): EditionArticle | undefined {
  return engineeringStackEditions.find((e) => e.slug === slug);
}
