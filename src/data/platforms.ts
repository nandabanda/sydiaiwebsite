export type Platform = {
  id: string;
  name: string;
  tagline: string;
  capabilities: string[];
};

export type PlatformCategory = {
  id: string;
  title: string;
  subtitle: string;
  platforms: Platform[];
};

export const platformCategories: PlatformCategory[] = [
  {
    id: "commercial",
    title: "Commercial Intelligence",
    subtitle: "Category, growth, and revenue operating systems for enterprise go-to-market.",
    platforms: [
      {
        id: "category-os",
        name: "SYDIAI Category OS",
        tagline:
          "The category intelligence operating system that unifies market structure, competitive dynamics, and growth levers.",
        capabilities: [
          "Category hierarchy modeling with AI-enriched taxonomies",
          "Share-of-wallet and whitespace analytics across segments",
          "Competitive displacement simulation and scenario planning",
          "Assortment architecture recommendations powered by demand signals",
          "Executive category scorecards with explainable drivers",
          "Cross-portfolio cannibalization and halo effect detection",
          "Automated insight narratives for category leadership reviews",
        ],
      },
      {
        id: "groppro",
        name: "GroPro.ai",
        tagline:
          "Growth programming intelligence that orchestrates investment, activation, and returns across the commercial portfolio.",
        capabilities: [
          "Growth lever prioritization with multi-objective optimization",
          "Investment ROI forecasting under uncertainty bands",
          "Program-level P&L attribution across channels",
          "GenAI copilots for growth strategy formulation",
          "Dynamic budget reallocation recommendations",
          "Benchmarking against category and peer performance",
          "Board-ready growth narrative generation",
        ],
      },
      {
        id: "partneriq",
        name: "PartnerIQ",
        tagline:
          "Partner ecosystem intelligence for distributor, retailer, and strategic alliance performance.",
        capabilities: [
          "Partner scorecards with predictive health indicators",
          "Joint business planning automation and variance tracking",
          "Incentive design simulation and fairness analytics",
          "Coverage gap detection across geographies and channels",
          "Partner churn risk modeling with intervention playbooks",
          "Contract and compliance intelligence surfacing",
          "Ecosystem network graph analytics for influence mapping",
        ],
      },
      {
        id: "salespulse",
        name: "SalesPulse.ai",
        tagline:
          "Real-time sales intelligence that senses pipeline health and accelerates revenue execution.",
        capabilities: [
          "Pipeline velocity and conversion intelligence",
          "Whitespace and cross-sell opportunity ranking",
          "Sales forecast reconciliation with demand signals",
          "Rep performance coaching via AI agents",
          "Territory and quota optimization engines",
          "Deal risk scoring with explainable factors",
          "Executive revenue pulse dashboards",
        ],
      },
    ],
  },
  {
    id: "market-route",
    title: "Market & Route Intelligence",
    subtitle: "Precision market access and route-to-market orchestration at scale.",
    platforms: [
      {
        id: "reachai",
        name: "ReachAI",
        tagline:
          "Route and market reach intelligence that optimizes coverage, service levels, and profitable access.",
        capabilities: [
          "Route-to-market design and redesign simulation",
          "Coverage optimization with constraint-aware algorithms",
          "Outlet and geography potential scoring",
          "Service level vs. cost trade-off intelligence",
          "Distributor and direct model scenario comparison",
          "White-space mapping for new market entry",
          "Field force deployment recommendations",
          "Channel conflict detection and resolution insights",
        ],
      },
    ],
  },
  {
    id: "commerce",
    title: "Commerce & Fulfillment",
    subtitle: "Order-to-cash and fulfillment intelligence for resilient supply execution.",
    platforms: [
      {
        id: "orbitai",
        name: "OrbitAI",
        tagline:
          "Commerce orchestration intelligence connecting digital and physical order flows.",
        capabilities: [
          "Omnichannel order promising with real-time ATP",
          "Cart and basket intelligence for conversion optimization",
          "Dynamic allocation across fulfillment nodes",
          "Customer promise date accuracy modeling",
          "Returns and reverse logistics optimization",
          "B2B and B2C commerce decision unification",
          "Revenue leakage detection across order lifecycle",
        ],
      },
      {
        id: "moveai",
        name: "MoveAI",
        tagline:
          "Logistics and movement intelligence for last-mile, line-haul, and network efficiency.",
        capabilities: [
          "Transportation mode and carrier selection optimization",
          "Load consolidation and route sequencing engines",
          "ETA prediction with disruption-aware rerouting",
          "Freight cost intelligence and contract analytics",
          "Carbon-aware routing recommendations",
          "Warehouse-to-customer flow orchestration",
          "Exception management with autonomous triage agents",
        ],
      },
    ],
  },
  {
    id: "asset",
    title: "Asset Intelligence",
    subtitle: "Cold chain, placement, and asset performance operating systems.",
    platforms: [
      {
        id: "cts",
        name: "CTS",
        tagline:
          "Connected trade systems intelligence linking assets, outlets, and commercial outcomes.",
        capabilities: [
          "Asset registry with real-time utilization telemetry",
          "Trade equipment ROI and placement analytics",
          "Maintenance prediction and service scheduling",
          "Outlet-level asset performance correlation",
          "Compliance and audit trail automation",
          "Capital allocation recommendations for asset fleets",
        ],
      },
      {
        id: "placer",
        name: "Placer.ai",
        tagline:
          "Spatial placement intelligence optimizing visibility, availability, and sell-through.",
        capabilities: [
          "Planogram and placement optimization models",
          "Heat-map analytics for in-store and on-premise performance",
          "Competitive adjacency and blocking intelligence",
          "Placement ROI simulation before field deployment",
          "Visual compliance verification via computer vision",
          "Seasonal and event-driven placement playbooks",
        ],
      },
      {
        id: "coolersense",
        name: "CoolerSense",
        tagline:
          "Refrigeration and cooler intelligence for temperature integrity and asset uptime.",
        capabilities: [
          "IoT temperature monitoring with anomaly detection",
          "Cooler door-open and energy efficiency analytics",
          "Predictive maintenance for refrigeration units",
          "Product quality risk scoring from thermal events",
          "Fleet health dashboards for field service teams",
          "Regulatory compliance documentation automation",
        ],
      },
      {
        id: "ecochill",
        name: "EcoChill Nexus",
        tagline:
          "Sustainable cold chain intelligence balancing energy, emissions, and product integrity.",
        capabilities: [
          "Energy consumption optimization across cold assets",
          "Refrigerant and emissions tracking with reporting",
          "Green retrofit ROI modeling and prioritization",
          "Carbon footprint attribution by route and SKU",
          "Sustainability scorecards for enterprise ESG targets",
          "Hybrid cooling technology scenario analysis",
        ],
      },
    ],
  },
  {
    id: "planning",
    title: "Planning & Control Tower",
    subtitle: "Enterprise command layers for integrated planning and decision coherence.",
    platforms: [
      {
        id: "command-nexus",
        name: "Command Nexus",
        tagline:
          "The enterprise command layer unifying S&OP, IBP, and executive decision workflows.",
        capabilities: [
          "Cross-functional planning convergence dashboards",
          "Scenario war rooms with collaborative simulation",
          "Decision audit trails and accountability mapping",
          "KPI hierarchy from board metrics to operational levers",
          "Exception escalation with AI-recommended resolutions",
          "Meeting intelligence and action item orchestration",
          "Enterprise planning calendar automation",
        ],
      },
      {
        id: "demand-nexus",
        name: "Demand Nexus",
        tagline:
          "Demand planning intelligence hub connecting sensing, shaping, and fulfillment decisions.",
        capabilities: [
          "Consensus demand planning with bias correction",
          "Promotional lift modeling integrated with base forecast",
          "New product introduction demand intelligence",
          "Forecast accuracy diagnostics with root-cause analysis",
          "Inventory and service level implication modeling",
          "Planner copilots for assumption documentation",
          "Multi-horizon forecast reconciliation engines",
        ],
      },
    ],
  },
];
