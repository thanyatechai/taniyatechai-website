import { Hero, Section, Cards } from "../../components/Page";

export default function SalesforceAIPage() {
  return <main><Hero eyebrow="Salesforce AI" title="Salesforce-aware agents and solution architecture intelligence." text="TaniyaTechAI highlights deep Salesforce experience through AI agents, multi-skill assistants and architecture-focused automation for CRM teams." />
  <Section title="Salesforce AI capabilities"><Cards items={[
    { title: "Solution Architect AI", text: "Assist with requirements, architecture options, integration patterns, risks, estimates and implementation plans." },
    { title: "Multi-Skill Salesforce Agents", text: "Agents that support sales, service, field operations, knowledge, case routing and CRM insights." },
    { title: "Agentforce Concepts", text: "Design agent actions, prompts, flows, approvals, data grounding and human escalation paths." },
    { title: "CRM Intelligence", text: "Summarize opportunities, accounts, cases and customer activity into decision-ready insights." },
    { title: "Integration Advisors", text: "AI guidance for MuleSoft, APIs, data flows, external systems and Salesforce platform patterns." },
    { title: "Governed AI", text: "Security, permissions, traceability and responsible rollout for enterprise AI adoption." }
  ]} /></Section></main>;
}
