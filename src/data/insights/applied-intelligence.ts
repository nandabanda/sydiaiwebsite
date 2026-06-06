import { buildAppliedSections } from "@/lib/insights-content";
import type { AppliedArticle, PublicationMeta } from "@/data/insights/types";

type AppliedInput = {
  slug: string;
  title: string;
  abstract: string;
  readTime: string;
};

const commercial: AppliedInput[] = [
  {
    slug: "reimagining-category-management-with-ai",
    title: "Reimagining Category Management with AI",
    abstract:
      "How AI can identify growth pools, profit pools, distribution gaps, and share opportunities across categories, channels, geographies, brands, and packs.",
    readTime: "12 min read",
  },
  {
    slug: "customer-growth-intelligence",
    title: "The Future of Customer Growth Intelligence",
    abstract:
      "How customer intelligence, predictive analytics, and decision systems can improve growth, profitability, retention, and commercial effectiveness.",
    readTime: "11 min read",
  },
  {
    slug: "route-to-market-intelligence",
    title: "The Next Generation Route-to-Market Engine",
    abstract:
      "How territory design, outlet potential, beat optimization, and coverage intelligence are evolving into AI-powered market activation systems.",
    readTime: "12 min read",
  },
  {
    slug: "commercial-execution-in-the-age-of-ai",
    title: "Commercial Execution in the Age of AI",
    abstract:
      "How image recognition, field intelligence, asset analytics, execution signals, and AI recommendations are transforming retail execution.",
    readTime: "13 min read",
  },
];

const planning: AppliedInput[] = [
  {
    slug: "demand-sensing-beyond-historical-data",
    title: "Demand Sensing Beyond Historical Data",
    abstract:
      "How organizations can use external signals, market indicators, weather, events, and consumer behavior to improve planning responsiveness.",
    readTime: "11 min read",
  },
  {
    slug: "evolution-of-demand-forecasting",
    title: "The Evolution of Demand Forecasting",
    abstract:
      "How forecasting is moving from statistical prediction to explainable AI, causal intelligence, and decision orchestration.",
    readTime: "12 min read",
  },
  {
    slug: "scenario-planning-at-enterprise-scale",
    title: "Scenario Planning at Enterprise Scale",
    abstract:
      "How organizations can move from annual planning cycles to continuous scenario-driven decision making.",
    readTime: "12 min read",
  },
  {
    slug: "planning-as-a-competitive-advantage",
    title: "Planning as a Competitive Advantage",
    abstract:
      "Why planning maturity is becoming one of the most important differentiators in modern enterprises.",
    readTime: "10 min read",
  },
];

const supplyChain: AppliedInput[] = [
  {
    slug: "inventory-optimization-in-an-uncertain-world",
    title: "Inventory Optimization in an Uncertain World",
    abstract:
      "How AI can help organizations balance service, working capital, resilience, and volatility.",
    readTime: "11 min read",
  },
  {
    slug: "intelligent-supply-planning",
    title: "Supply Planning Beyond Constraint Management",
    abstract:
      "How modern planning systems orchestrate supply, capacity, inventory, and service simultaneously.",
    readTime: "12 min read",
  },
  {
    slug: "transportation-network-intelligence",
    title: "Intelligent Transportation Networks",
    abstract:
      "How AI can improve routing, fleet productivity, service reliability, cost efficiency, and logistics visibility.",
    readTime: "11 min read",
  },
  {
    slug: "autonomous-supply-chain-orchestration",
    title: "Building Autonomous Supply Chains",
    abstract:
      "The roadmap from reactive planning to intelligent orchestration across supply networks.",
    readTime: "13 min read",
  },
];

const enterprise: AppliedInput[] = [
  {
    slug: "from-dashboards-to-decision-systems",
    title: "From Dashboards to Decision Systems",
    abstract:
      "Why enterprises are moving beyond reporting toward intelligent decision environments.",
    readTime: "10 min read",
  },
  {
    slug: "rise-of-ai-agents-in-the-enterprise",
    title: "The Rise of AI Agents in the Enterprise",
    abstract:
      "How agentic systems are transforming planning, commercial operations, finance, and supply chains.",
    readTime: "12 min read",
  },
  {
    slug: "future-enterprise-control-towers",
    title: "The Future Enterprise Control Tower",
    abstract:
      "How visibility platforms are evolving into orchestration systems with recommendations, workflows, and governance.",
    readTime: "11 min read",
  },
  {
    slug: "decision-intelligence-as-a-strategic-capability",
    title: "Decision Intelligence as a Strategic Capability",
    abstract:
      "How organizations can institutionalize better decisions through AI, data, workflows, and accountability.",
    readTime: "12 min read",
  },
];

function toArticles(
  items: AppliedInput[],
  domain: string
): AppliedArticle[] {
  return items.map((item) => ({
    ...item,
    domain,
    category: domain,
    sections: buildAppliedSections(item.title, item.abstract),
  }));
}

export const appliedIntelligenceMeta: PublicationMeta = {
  id: "applied-intelligence",
  title: "Applied Intelligence™",
  subtitle: "Where theory meets enterprise reality.",
  description:
    "In-depth analytical frameworks exploring how AI, advanced analytics, and decision systems can solve complex commercial, planning, supply chain, and enterprise transformation challenges.",
  publisher: "Published by SYDIAI Insights Team",
  cadence: "Research Publication",
  chips: [],
};

export const appliedIntelligenceDomains = [
  {
    id: "commercial-intelligence",
    title: "Commercial Intelligence",
    articles: toArticles(commercial, "Commercial Intelligence"),
  },
  {
    id: "planning-intelligence",
    title: "Planning Intelligence",
    articles: toArticles(planning, "Planning Intelligence"),
  },
  {
    id: "supply-chain-intelligence",
    title: "Supply Chain Intelligence",
    articles: toArticles(supplyChain, "Supply Chain Intelligence"),
  },
  {
    id: "enterprise-intelligence",
    title: "Enterprise Intelligence",
    articles: toArticles(enterprise, "Enterprise Intelligence"),
  },
] as const;

export const appliedIntelligenceArticles: AppliedArticle[] =
  appliedIntelligenceDomains.flatMap((d) => d.articles);

export function getAppliedArticle(slug: string): AppliedArticle | undefined {
  return appliedIntelligenceArticles.find((a) => a.slug === slug);
}
