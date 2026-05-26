import { Hero, Section, Cards, Process } from "../components/Page";

export default function HomePage() {
  return (
    <main>
      <Hero eyebrow="AI-native technology company" title="We turn real business problems into intelligent AI solutions." text="TaniyaTechAI helps companies design, build and launch AI agents, Salesforce intelligence, automation workflows, SaaS products, and future-ready digital solutions." />
      <Section title="What we build" text="A company focused on practical innovation: consulting when clients need clarity, engineering when they need execution, and products when the opportunity is bigger than one project.">
        <Cards items={[
          { title: "Agentic AI Solutions", text: "Multi-step AI agents that reason, act, integrate with business systems, and reduce manual operations." },
          { title: "Salesforce AI Agents", text: "Salesforce-aware agents for solution architecture, service operations, sales intelligence, CRM automation and knowledge workflows." },
          { title: "AI Product Engineering", text: "From idea to MVP: SaaS platforms, internal copilots, intelligent dashboards and automation accelerators." }
        ]} />
      </Section>
      <Section title="Our method" text="We do not start with tools. We start with the problem, map the workflow, design the intelligence layer, and build measurable solutions."><Process /></Section>
      <div className="container banner"><h2>Innovate. Solve. Transform.</h2><p className="section-text">The brand mission is simple: use AI and modern technology to solve real-world business challenges across consulting, products, healthcare, manufacturing, Salesforce ecosystems and enterprise operations.</p></div>
    </main>
  );
}
