export type Industry = {
  id: string;
  name: string;
  description: string;
  focusAreas: string[];
};

export const industries: Industry[] = [
  {
    id: "fmcg",
    name: "FMCG & CPG",
    description:
      "Category-led growth, trade investment optimization, and demand sensing across fragmented retail landscapes.",
    focusAreas: [
      "Category management",
      "Trade promotion",
      "Perfect store execution",
    ],
  },
  {
    id: "beverages",
    name: "Beverages",
    description:
      "Route-to-market intelligence, cooler asset performance, and seasonal demand orchestration for liquid portfolios.",
    focusAreas: [
      "Cold chain assets",
      "On-premise & off-premise",
      "Seasonality modeling",
    ],
  },
  {
    id: "pharma",
    name: "Pharma",
    description:
      "Compliance-aware decision intelligence for market access, supply continuity, and patient-centric fulfillment.",
    focusAreas: [
      "Regulatory traceability",
      "Market access",
      "Supply assurance",
    ],
  },
  {
    id: "retail",
    name: "Retail",
    description:
      "Omnichannel demand fusion, inventory precision, and customer promise optimization at enterprise scale.",
    focusAreas: [
      "Assortment intelligence",
      "Omnichannel fulfillment",
      "Margin optimization",
    ],
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    description:
      "Demand-driven production alignment, capacity planning, and supplier network resilience.",
    focusAreas: [
      "S&OP integration",
      "Capacity planning",
      "Supplier risk",
    ],
  },
  {
    id: "engineering",
    name: "Engineering",
    description:
      "Project demand forecasting, configure-to-order intelligence, and aftermarket service optimization.",
    focusAreas: [
      "Project pipelines",
      "Spare parts demand",
      "Service level agreements",
    ],
  },
  {
    id: "logistics",
    name: "Logistics",
    description:
      "Network design, carrier intelligence, and fulfillment orchestration for 3PL and asset-heavy operators.",
    focusAreas: [
      "Network optimization",
      "Last-mile efficiency",
      "SLA management",
    ],
  },
];
