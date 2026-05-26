import { PageShell, SectionHero, Card, VideoPanel } from "../../components/Page";

export default function Page() {
  return (
    <PageShell>
      <SectionHero eyebrow="Salesforce AI" title="Salesforce AI agents, multi-skill assistants, and intelligent CRM transformation." text="ThanyaTechAI brings strong Salesforce architecture thinking into the AI era. We design Salesforce-connected agents that understand business context, CRM workflows, and enterprise data." />
      <section className="grid">
        <Card title="Multi-Skill Salesforce Agents" text="Agents that can answer questions, summarize records, recommend actions, create tasks, and support cross-cloud workflows." />
<Card title="Solution Architect AI" text="AI assistant for Salesforce architects: requirements clarification, data model suggestions, integration patterns, and implementation risks." />
<Card title="Agentforce-Ready Concepts" text="Design agent topics, actions, prompts, flows, APIs, guardrails, and human handoff strategies for enterprise use cases." />
<Card title="Sales Cloud Intelligence" text="Lead scoring, opportunity summaries, account planning, pipeline insights, and seller productivity assistants." />
<Card title="Service Cloud Automation" text="Case triage, knowledge recommendations, customer sentiment, and automated response drafting." />
<Card title="Salesforce Integration AI" text="Connect Salesforce with ERP, documents, data lakes, APIs, MuleSoft patterns, and enterprise workflows." />
      </section>
      
        <section className="videoGrid">
          <VideoPanel title="Agentic AI Workflow" text="A visual simulation of AI agents receiving context, planning actions, using tools, and handing off to humans when needed." />
          <VideoPanel title="Salesforce AI Command Center" text="A live-style concept for org health insights, agent recommendations, case intelligence, and architecture risks." />
          <VideoPanel title="Product Innovation Demo" text="A motion panel representing prototype-to-product thinking for SaaS, healthcare, manufacturing, and enterprise workflows." />
        </section>
        
      
    </PageShell>
  );
}
