import { PageShell, SectionHero, Card, VideoPanel } from "../../components/Page";

export default function Page() {
  return (
    <PageShell>
      <SectionHero eyebrow="Products" title="Future AI products and accelerators for repeatable innovation." text="Our long-term goal is to build reusable AI products that solve repeatable business problems across industries." />
      <section className="grid">
        <Card title="Agent Studio Accelerator" text="A reusable framework for building business-specific AI agents with tools, prompts, workflows, and evaluation patterns." />
<Card title="Salesforce AI Command Center" text="A dashboard concept for org health, automation risks, AI readiness, security insights, and architecture recommendations." />
<Card title="AI Knowledge Hub" text="A secure internal knowledge assistant for company documents, policies, proposals, and project history." />
<Card title="Manufacturing AI Insights" text="Prototype product for process intelligence, operational reporting, quality analysis, and maintenance recommendations." />
<Card title="Healthcare AI Workflow Kit" text="AI intake, summarization, coordination, and operational support patterns for healthcare-adjacent workflows." />
<Card title="Founder Innovation Portfolio" text="A showcase of prototypes, demos, architecture diagrams, videos, and product concepts for clients and investors." />
      </section>
      
        <section className="videoGrid">
          <VideoPanel title="Agentic AI Workflow" text="A visual simulation of AI agents receiving context, planning actions, using tools, and handing off to humans when needed." />
          <VideoPanel title="Salesforce AI Command Center" text="A live-style concept for org health insights, agent recommendations, case intelligence, and architecture risks." />
          <VideoPanel title="Product Innovation Demo" text="A motion panel representing prototype-to-product thinking for SaaS, healthcare, manufacturing, and enterprise workflows." />
        </section>
        
      
    </PageShell>
  );
}
