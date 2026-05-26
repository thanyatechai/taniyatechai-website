import { Hero, Section, Cards } from "../../components/Page";

export default function InnovationPage() {
  return <main><Hero eyebrow="Innovation" title="Research-minded problem solving for future AI opportunities." text="Innovation at TaniyaTechAI means discovering problems, designing intelligent systems, building proof-of-concepts, and converting the best ideas into client solutions or products." />
  <Section title="Innovation themes"><Cards items={[
    { title: "Human + AI Collaboration", text: "AI agents that support experts, accelerate decisions and keep humans in control of important outcomes." },
    { title: "Agentic Workflows", text: "AI systems that can plan, call tools, coordinate tasks, use context and complete multi-step work." },
    { title: "Real-World AI", text: "Solutions focused on measurable business value in healthcare, manufacturing, CRM, operations and service." },
    { title: "Reusable Accelerators", text: "Build once, improve continuously, and reuse patterns across industries and client problems." },
    { title: "Responsible Architecture", text: "Design AI with security, governance, data quality, reliability and auditability from the beginning." },
    { title: "Investable Ideas", text: "Identify AI product concepts that can grow beyond consulting into scalable SaaS platforms." }
  ]} /></Section></main>;
}
