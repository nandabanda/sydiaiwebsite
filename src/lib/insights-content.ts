import type { InsightSection } from "@/data/insights/types";

type BriefKind = "demand" | "engineering" | "applied";

function sentences(title: string, focus: string, kind: BriefKind): InsightSection[] {
  const t = title.toLowerCase();

  if (kind === "demand") {
    return [
      {
        heading: "Executive Summary",
        paragraphs: [
          `${title} examines how enterprise leaders can translate demand intelligence from concept to operating advantage. ${focus}`,
          "This edition frames the decision shifts, capability gaps, and orchestration patterns that separate reactive enterprises from AI-native operators across the demand-to-fulfillment loop.",
        ],
      },
      {
        heading: "Why It Matters",
        paragraphs: [
          "Markets now move faster than annual cycles. Fragmented signals, channel complexity, and execution variance mean that even accurate forecasts fail when disconnected from commercial and supply decisions.",
          `Leaders addressing ${t} are not optimizing a single function—they are redesigning how strategy, finance, commercial, and operations converge under uncertainty.`,
        ],
      },
      {
        heading: "The AI Shift",
        paragraphs: [
          "AI is moving demand work from retrospective reporting to continuous sensing, probabilistic forecasting, and governed recommendation systems.",
          "External signals, causal models, agent workflows, and explainable decision layers are replacing static spreadsheets as the primary interface between insight and action.",
        ],
      },
      {
        heading: "Enterprise Implications",
        paragraphs: [
          "Organizations must invest in unified data fabrics, cross-functional decision rights, and accountability mechanisms that connect plans to outcomes.",
          "The enterprises gaining advantage treat demand intelligence as an operating system—not a dashboard layer—embedding intelligence into sensing, shaping, capturing, execution, forecasting, and fulfillment.",
        ],
      },
      {
        heading: "Closing Perspective",
        paragraphs: [
          `${title} is ultimately about closing the gap between intent and result. Model sophistication matters only when it improves revenue, margin, service, and organizational learning.`,
          "SYDIAI Insights will continue to track how executive teams build coherence across the demand cycle—where AI amplifies judgment rather than replacing it.",
        ],
      },
    ];
  }

  if (kind === "engineering") {
    return [
      {
        heading: "Executive Summary",
        paragraphs: [
          `${title} explores the engineering realities behind enterprise AI at scale. ${focus}`,
          "This edition outlines why production-grade decision systems require more than models—they demand architecture, governance, and orchestration across data, software, and human accountability.",
        ],
      },
      {
        heading: "System Context",
        paragraphs: [
          "Modern enterprises run on heterogeneous ERP, CRM, planning, logistics, and partner systems. AI layers must integrate without compromising security, latency, or auditability.",
          "The engineering stack is shifting from isolated ML pipelines to connected platforms where agents, tools, memory, and policy engines operate as first-class components.",
        ],
      },
      {
        heading: "Engineering Challenge",
        paragraphs: [
          "Teams face tension between experimentation velocity and production rigor: model drift, data quality variance, permission boundaries, and workflow failure modes.",
          `${title} highlights where conventional MLOps and application engineering converge—and where new patterns for agentic systems, retrieval, and decision lineage are required.`,
        ],
      },
      {
        heading: "Architectural Response",
        paragraphs: [
          "Reference architectures now emphasize feature stores, governed retrieval, event-driven orchestration, observability, and human-in-the-loop checkpoints at decision gates.",
          "Platform teams are standardizing agent frameworks, evaluation harnesses, and policy-as-code so AI capabilities can compose across commercial, planning, and supply domains.",
        ],
      },
      {
        heading: "Enterprise Implications",
        paragraphs: [
          "CIOs and engineering leaders must treat decision intelligence as a product discipline—with roadmaps, SLAs, and cross-functional ownership—not as a series of proofs of concept.",
          "The organizations that win will engineer for trust, composability, and continuous improvement across the full decision stack.",
        ],
      },
    ];
  }

  return [
    {
      heading: "Executive Summary",
      paragraphs: [
        `${title} applies structured research to a concrete enterprise challenge. ${focus}`,
        "This framework educates leaders on the business problem, constraints, AI approaches, architecture, and outcomes before recommending action.",
      ],
    },
    {
      heading: "Industry Reality",
      paragraphs: [
        "Enterprises operate under margin pressure, volatility, fragmented data, and rising expectations for speed and accountability.",
        "Most organizations have invested in analytics—but struggle to convert insight into coordinated decisions across functions and time horizons.",
      ],
    },
    {
      heading: "Structural Challenges",
      paragraphs: [
        "Legacy processes, incentive misalignment, and siloed systems create friction between strategy and execution.",
        `${title} surfaces the structural barriers—data latency, organizational boundaries, and governance gaps—that block intelligent action at scale.`,
      ],
    },
    {
      heading: "Emerging AI Approaches",
      paragraphs: [
        "AI-native approaches combine sensing, forecasting, optimization, and agentic workflows with explainability and human oversight.",
        "Rather than single-model deployments, leading teams orchestrate capabilities across signals, recommendations, simulations, and closed-loop execution.",
      ],
    },
    {
      heading: "Enterprise Architecture",
      paragraphs: [
        "A durable architecture connects data ingestion, feature layers, decision services, workflow engines, and accountability systems.",
        "Integration with ERP, planning, CRM, and logistics platforms must preserve audit trails, security boundaries, and operational resilience.",
      ],
    },
    {
      heading: "Implementation Considerations",
      paragraphs: [
        "Successful programs sequence use cases by value and feasibility, establish cross-functional ownership, and invest in change management alongside technology.",
        "Pilot-to-scale paths require evaluation metrics, champion-challenger models, and explicit decision rights at each maturity stage.",
      ],
    },
    {
      heading: "Expected Outcomes",
      paragraphs: [
        "Organizations can expect improved decision velocity, forecast accuracy, service levels, working capital efficiency, and commercial effectiveness—when intelligence is embedded in workflows.",
        "Outcomes should be measured as business results, not model metrics alone.",
      ],
    },
    {
      heading: "Related SYDIAI Perspectives",
      paragraphs: [
        "Explore the Demand Intelligence Brief for executive demand-cycle perspectives, the Engineering Stack for technical deep dives, and additional Applied Intelligence research across commercial, planning, supply chain, and enterprise domains.",
        "SYDIAI Insights Team publishes weekly to bridge strategy, technology, and execution for AI-native enterprises.",
      ],
    },
  ];
}

export function buildDemandSections(
  title: string,
  description: string
): InsightSection[] {
  return sentences(title, description, "demand");
}

export function buildEngineeringSections(
  title: string,
  description: string
): InsightSection[] {
  return sentences(title, description, "engineering");
}

export function buildAppliedSections(
  title: string,
  abstract: string
): InsightSection[] {
  return sentences(title, abstract, "applied");
}
