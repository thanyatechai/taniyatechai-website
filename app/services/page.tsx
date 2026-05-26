import { Hero, Section, Cards } from "../../components/Page";

export default function ServicesPage() {
  return <main><Hero eyebrow="Services" title="AI consulting, architecture and implementation services." text="We help clients identify high-value AI opportunities, design the solution architecture, build prototypes and deliver production-ready intelligent workflows." />
  <Section title="Core services"><Cards items={[
    { title: "AI Strategy & Roadmaps", text: "Assess business problems, identify AI use cases, prioritize ROI and create execution plans." },
    { title: "Agentic AI Development", text: "Design autonomous agents, workflow agents, multi-skill agents and human-in-the-loop approvals." },
    { title: "Enterprise Automation", text: "Automate repetitive workflows across CRM, operations, service, support and data systems." },
    { title: "Salesforce AI Consulting", text: "AI-powered Salesforce solution architecture, Agentforce ideas, CRM copilots and service automation." },
    { title: "SaaS MVP Development", text: "Build cloud-ready minimum viable products for new AI product ideas." },
    { title: "AI Integration", text: "Connect AI with APIs, databases, Salesforce, documents, knowledge bases and enterprise apps." }
  ]} /></Section></main>;
}
