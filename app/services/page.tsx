import { PageShell, SectionHero, Card, VideoPanel } from "../../components/Page";

export default function Page() {
  return (
    <PageShell>
      <SectionHero eyebrow="Services" title="AI services for strategy, automation, integration, and intelligent transformation." text="We help clients move from idea to architecture to working AI solution. Our services include consulting, Salesforce AI, automation, AI product design, and data intelligence." />
      <section className="grid">
        <Card title="AI Strategy & Consulting" text="Identify high-value AI use cases, design business roadmaps, assess readiness, and build practical implementation plans." />
<Card title="Agentic AI Solutions" text="Design AI agents that can reason, retrieve context, execute workflows, call tools, and support teams across business functions." />
<Card title="Salesforce AI Architecture" text="Build Salesforce AI agents, multi-skill agents, Agentforce-ready flows, CRM automation, and enterprise data-connected experiences." />
<Card title="Intelligent Automation" text="Automate repetitive business processes using AI, APIs, workflows, integrations, and human approval checkpoints." />
<Card title="AI Product Engineering" text="Build prototypes, MVPs, internal tools, SaaS platforms, dashboards, and AI-powered customer portals." />
<Card title="Data & AI Analytics" text="Turn enterprise data into insights, recommendations, predictions, and decision-support experiences." />
      </section>
      
      
    </PageShell>
  );
}
