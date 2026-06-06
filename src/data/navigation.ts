export const navItems = [
  { label: "Home", href: "/" },
  { label: "Platforms", href: "/#platforms" },
  { label: "AI & Decision Intelligence", href: "/#ai-intelligence" },
  { label: "Industries", href: "/#industries" },
  { label: "Technology", href: "/#technology" },
  { label: "Insights", href: "/#insights" },
  { label: "Enterprise Conversations", href: "/enterprise-conversations-planiq" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
] as const;

export const demandStages = [
  {
    id: "sensing",
    title: "Demand Sensing",
    description:
      "Real-time signal fusion across markets, channels, and partners to detect demand shifts before they surface in orders.",
  },
  {
    id: "shaping",
    title: "Demand Shaping",
    description:
      "AI-guided interventions across pricing, promotion, and assortment to steer demand toward strategic outcomes.",
  },
  {
    id: "capturing",
    title: "Demand Capturing",
    description:
      "Intelligent order orchestration that converts latent demand into committed revenue across every route to market.",
  },
  {
    id: "execution",
    title: "Demand Execution",
    description:
      "Closed-loop execution that aligns sales, trade, and field operations with enterprise decision priorities.",
  },
  {
    id: "forecasting",
    title: "Demand Forecasting",
    description:
      "Probabilistic forecasting engines that reconcile statistical models with human judgment and market context.",
  },
  {
    id: "fulfillment",
    title: "Demand Fulfillment",
    description:
      "End-to-end fulfillment intelligence connecting inventory, logistics, and service levels to demand commitments.",
  },
] as const;
