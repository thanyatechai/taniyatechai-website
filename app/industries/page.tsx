import { Hero, Section, Cards } from "../../components/Page";

export default function IndustriesPage() {
  return <main><Hero eyebrow="Industries" title="AI solutions for industries where complexity creates opportunity." text="TaniyaTechAI is designed to support multiple industries where AI can reduce friction, improve decisions and create intelligent operations." />
  <Section title="Focus industries"><Cards items={[
    { title: "Manufacturing", text: "AI for quality, maintenance, production planning, operations intelligence and workflow automation." },
    { title: "Healthcare", text: "AI assistance for operations, documentation, patient experience, administrative workflows and insight generation." },
    { title: "Salesforce Ecosystem", text: "CRM intelligence, service automation, Agentforce concepts and Salesforce solution architecture support." },
    { title: "Professional Services", text: "Knowledge agents, proposal acceleration, project intelligence and internal automation." },
    { title: "Small Businesses", text: "Affordable AI websites, automation, customer support, lead handling and operations tools." },
    { title: "Future Technology", text: "Surveying technologies, smart systems, digital twins, data intelligence and new AI product ideas." }
  ]} /></Section></main>;
}
