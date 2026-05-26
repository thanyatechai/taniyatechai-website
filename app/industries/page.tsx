import { PageShell, SectionHero, Card, VideoPanel } from "../../components/Page";

export default function Page() {
  return (
    <PageShell>
      <SectionHero eyebrow="Industries" title="AI ideas across consulting, SaaS, healthcare, manufacturing, and enterprise operations." text="ThanyaTechAI is built to serve multiple industries where intelligence, automation, and data can create business value." />
      <section className="grid">
        <Card title="Technology Consulting" text="AI strategy, architecture, product development, Salesforce automation, and intelligent workflow design." />
<Card title="SaaS & Product Startups" text="MVPs, AI agents, customer portals, dashboards, and product accelerators." />
<Card title="Manufacturing" text="Quality insights, process optimization, automation, digital twins ideas, and operational intelligence." />
<Card title="Healthcare & Life Sciences" text="Workflow assistance, documentation support, patient engagement ideas, and operational automation." />
<Card title="Retail & Customer Experience" text="Personalization, support automation, feedback intelligence, and service improvements." />
<Card title="Professional Services" text="Proposal automation, knowledge search, project assistants, and client delivery acceleration." />
      </section>
      
      
    </PageShell>
  );
}
