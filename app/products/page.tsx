import { Hero, Section, Cards } from "../../components/Page";

export default function ProductsPage() {
  return <main><Hero eyebrow="Products" title="Future SaaS products built from real client problems." text="The product vision is to convert repeated business pain points into reusable AI platforms, accelerators and intelligent SaaS tools." />
  <Section title="Product directions"><Cards items={[
    { title: "AI Agent Studio", text: "Reusable framework for business workflow agents, task agents and knowledge agents." },
    { title: "Salesforce Architecture Copilot", text: "Assistant for Salesforce design decisions, documentation, risk review and delivery planning." },
    { title: "Industry AI Accelerators", text: "Healthcare, manufacturing, service and operations accelerators that solve common industry problems." },
    { title: "Automation Command Center", text: "Central dashboard to track AI workflows, exceptions, savings and business outcomes." },
    { title: "Knowledge-to-Action Platform", text: "Turn policies, documents and CRM history into guided answers and next actions." },
    { title: "Innovation Portfolio", text: "A growing set of prototypes and AI ideas that can become investable product lines." }
  ]} /></Section></main>;
}
