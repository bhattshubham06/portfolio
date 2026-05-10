export type Project = {
  title: string;
  subtitle: string;
  impact: string;
  metrics?: string;
  highlights: string[];
  star: {
    situation: string;
    task: string;
    action: string;
    result: string;
  };
};

export const projects: Project[] = [
  {
    title: "Credit Card Fraud Detection",
    subtitle: "Risk Analytics · Model Governance · DataOps",
    impact: "Potential Savings: $108,636 with a recall-first approach to fraud interdiction.",
    metrics: "Recall Score: 75% | 12-hour refresh",
    highlights: [
      "Scikit-learn recall-optimized pipeline with Pandas feature views and drift monitors.",
      "Tableau + Plotly telemetry dashboards for executive visibility and auditability.",
      "Data quality guardrails with anomaly rules to reduce false negatives at scale."
    ],
    star: {
      situation: "Revenue erosion from rising fraud exposure across card transactions.",
      task: "Deliver a recall-first model with strong governance and rapid incident response.",
      action:
        "Built Pandas/Scikit-learn pipeline, tuned thresholds for recall, instrumented Plotly diagnostics, and enforced CI drift checks.",
      result: "Protected $108,636 in potential losses while sustaining a 75% recall score with auditable change history."
    }
  },
  {
    title: "Lead Scoring Model",
    subtitle: "RevOps Acceleration · Prioritization Engine",
    impact: "Identified high-conversion leads to improve sales efficiency and coverage.",
    metrics: "Segment lift +22% | SLA-aware scoring",
    highlights: [
      "Python + SQL scoring layers feeding Tableau for revenue pods with real-time prioritization.",
      "MLOps guardrails for refresh schedules, rollout safety, and feedback loops.",
      "Scenario-ready dashboards to help sales teams act on the highest-likelihood segments."
    ],
    star: {
      situation: "Sales teams treated all leads equally, slowing revenue velocity.",
      task: "Rank leads by conversion likelihood with transparent, data-backed scoring.",
      action:
        "Engineered a prioritized scoring model, validated with holdout testing, and embedded insights in Tableau with stakeholder training.",
      result: "Sales focused on top-tier leads, accelerating conversion pathways and boosting pipeline efficiency."
    }
  },
  {
    title: "CodeIQ",
    subtitle: "Full-Stack Analytics Validation Platform",
    impact: "Full-stack architecture for analytical validation with service-level tracing.",
    metrics: "Zero-downtime deploys | Traceable validation",
    highlights: [
      "Modular services with API observability and Plotly-based validation reports.",
      "DataOps checks for input contracts, schema drift alerts, and deployment safety nets.",
      "Aligned technical delivery with business outcomes via governed release playbooks."
    ],
    star: {
      situation: "Analytical checks were inconsistent and lacked traceability across services.",
      task: "Create a governed platform to validate analytics with end-to-end auditability.",
      action:
        "Architected a service mesh for validation, integrated Plotly reports, and codified MLOps policies for consistent rollouts.",
      result: "Shipped reliable validation flows with clean audit trails, confident releases, and zero-downtime deploys."
    }
  }
];

export default projects;

