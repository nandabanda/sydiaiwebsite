export type TechPillar = {
  id: string;
  title: string;
  description: string;
  capabilities: string[];
};

export const technologyPillars: TechPillar[] = [
  {
    id: "ai-engineering",
    title: "AI Engineering",
    description:
      "Production-grade ML and GenAI systems built for enterprise reliability, governance, and continuous learning.",
    capabilities: [
      "Foundation model fine-tuning and RAG architectures",
      "Agent frameworks with enterprise guardrails",
      "Model evaluation, monitoring, and drift detection",
      "Responsible AI and bias mitigation frameworks",
    ],
  },
  {
    id: "data-engineering",
    title: "Data Engineering",
    description:
      "Unified data fabrics that harmonize ERP, CRM, IoT, and partner data into decision-ready intelligence layers.",
    capabilities: [
      "Real-time and batch ingestion pipelines",
      "Master data management and entity resolution",
      "Feature stores for ML and analytics",
      "Data quality and lineage observability",
    ],
  },
  {
    id: "software-engineering",
    title: "Software Engineering",
    description:
      "Cloud-native platform engineering delivering modular, API-first operating systems for enterprise decision workflows.",
    capabilities: [
      "Microservices and event-driven architectures",
      "API gateways and integration hubs",
      "Multi-tenant SaaS platform design",
      "Security-first development practices",
    ],
  },
  {
    id: "mlops",
    title: "MLOps",
    description:
      "End-to-end ML lifecycle management from experiment to production with automated retraining and governance.",
    capabilities: [
      "CI/CD for models and pipelines",
      "A/B testing and champion-challenger frameworks",
      "Model registry and versioning",
      "Cost and performance optimization",
    ],
  },
  {
    id: "cloud",
    title: "Cloud-Native Architecture",
    description:
      "Horizontally scalable infrastructure optimized for global deployment, resilience, and enterprise compliance.",
    capabilities: [
      "Kubernetes-native service mesh",
      "Multi-region high availability",
      "Zero-trust security architecture",
      "FinOps and resource optimization",
    ],
  },
];
