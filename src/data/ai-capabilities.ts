export type AICapability = {
  id: string;
  title: string;
  description: string;
  highlights: string[];
};

export const aiCapabilities: AICapability[] = [
  {
    id: "agents",
    title: "AI Agents",
    description:
      "Autonomous and semi-autonomous agents that execute multi-step workflows across planning, commercial, and fulfillment domains—with human oversight at critical decision gates.",
    highlights: [
      "Domain-trained agent frameworks",
      "Tool-use orchestration across enterprise systems",
      "Policy-bound autonomous execution",
    ],
  },
  {
    id: "copilots",
    title: "GenAI Copilots",
    description:
      "Context-aware copilots embedded in planner, sales, and operations workflows—surfacing insights, drafting scenarios, and accelerating decision cycles.",
    highlights: [
      "Enterprise knowledge grounding",
      "Role-specific interaction models",
      "Secure, tenant-isolated inference",
    ],
  },
  {
    id: "forecasting",
    title: "Forecasting Intelligence",
    description:
      "Probabilistic and hierarchical forecasting that fuses internal data, external signals, and structured expert judgment into coherent demand views.",
    highlights: [
      "Multi-horizon forecast ensembles",
      "Signal fusion pipelines",
      "Bias detection and correction",
    ],
  },
  {
    id: "simulation",
    title: "Simulation Intelligence",
    description:
      "Digital twin and scenario simulation environments for war-gaming commercial, supply, and financial outcomes before commitment.",
    highlights: [
      "Monte Carlo scenario engines",
      "Cross-functional what-if modeling",
      "Sensitivity and driver analysis",
    ],
  },
  {
    id: "optimization",
    title: "Optimization Engines",
    description:
      "Mathematical optimization at scale for allocation, routing, assortment, and investment decisions—embedded in operational workflows.",
    highlights: [
      "Constraint-aware solvers",
      "Multi-objective trade-off surfaces",
      "Real-time re-optimization triggers",
    ],
  },
  {
    id: "explainable",
    title: "Explainable AI",
    description:
      "Transparency by design—every recommendation traceable to data, model logic, and business rules for audit-ready enterprise adoption.",
    highlights: [
      "Feature attribution and SHAP integration",
      "Decision lineage documentation",
      "Regulatory-grade audit trails",
    ],
  },
];
