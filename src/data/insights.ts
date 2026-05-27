export type InsightPost = {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
};

export const insightPosts: InsightPost[] = [
  {
    id: "decision-coherence",
    title: "Decision Coherence: The Missing Layer in Enterprise AI",
    excerpt:
      "Why point solutions fail—and how orchestrated decision intelligence creates compounding value across the demand-to-fulfillment loop.",
    category: "Decision Intelligence",
    date: "May 2026",
    readTime: "8 min read",
  },
  {
    id: "demand-sensing",
    title: "Beyond Forecast Accuracy: Demand Sensing as a Strategic Capability",
    excerpt:
      "Leading enterprises are shifting from lagging indicators to real-time signal fusion that reshapes planning horizons.",
    category: "Demand Intelligence",
    date: "April 2026",
    readTime: "6 min read",
  },
  {
    id: "explainable-ai",
    title: "Explainable AI in High-Stakes Commercial Decisions",
    excerpt:
      "How transparency, auditability, and human-in-the-loop design build trust in AI-native operating systems.",
    category: "AI Engineering",
    date: "March 2026",
    readTime: "10 min read",
  },
  {
    id: "control-towers",
    title: "From Dashboards to Command Layers: The Evolution of Control Towers",
    excerpt:
      "Modern control towers don't visualize data—they orchestrate decisions, actions, and accountability across the enterprise.",
    category: "Platforms",
    date: "February 2026",
    readTime: "7 min read",
  },
];
