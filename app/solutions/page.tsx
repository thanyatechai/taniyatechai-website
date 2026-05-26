import { PageShell, SectionHero, Card, VideoPanel } from "../../components/Page";

export default function Page() {
  return (
    <PageShell>
      <SectionHero eyebrow="Solutions" title="Practical AI solutions designed for real business outcomes." text="Our solutions are built around measurable impact: reduce manual work, improve customer response, speed decision-making, and unlock new product opportunities." />
      <section className="grid">
        <Card title="AI Customer Support Agent" text="Knowledge-based AI assistant for customer service, ticket triage, case summarization, and next-best-action support." />
<Card title="Salesforce Org Health AI Agent" text="Analyze Salesforce metadata, security, flows, Apex, integrations, and automation risks with AI-driven recommendations." />
<Card title="Proposal & RFP AI Assistant" text="Generate proposal drafts, analyze RFP requirements, map capabilities, and create response frameworks." />
<Card title="Healthcare Workflow AI" text="Support intake, document review, scheduling, care coordination, and operational insights with responsible AI workflows." />
<Card title="Manufacturing Intelligence" text="Enable predictive maintenance ideas, quality insights, shop-floor reporting, and process optimization." />
<Card title="Executive Decision Copilot" text="AI assistant for leadership dashboards, business summaries, KPIs, risk tracking, and action planning." />
      </section>
      
        <section className="videoGrid">
          <VideoPanel title="Agentic AI Workflow" text="A visual simulation of AI agents receiving context, planning actions, using tools, and handing off to humans when needed." />
          <VideoPanel title="Salesforce AI Command Center" text="A live-style concept for org health insights, agent recommendations, case intelligence, and architecture risks." />
          <VideoPanel title="Product Innovation Demo" text="A motion panel representing prototype-to-product thinking for SaaS, healthcare, manufacturing, and enterprise workflows." />
        </section>
        
      
    </PageShell>
  );
}
