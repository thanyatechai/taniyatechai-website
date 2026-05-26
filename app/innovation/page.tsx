import { PageShell, SectionHero, Card, VideoPanel } from "../../components/Page";

export default function Page() {
  return (
    <PageShell>
      <SectionHero eyebrow="Innovation Lab" title="Research, prototypes, and AI ideas that become future-ready solutions." text="Innovation is not just a word for us. We use research, experimentation, and real-world problem discovery to create AI solutions that can grow into products." />
      <section className="grid">
        <Card title="Problem Discovery Workshops" text="Find painful business problems where AI can create measurable value instead of chasing hype." />
<Card title="Rapid AI Prototypes" text="Build quick demos to validate ideas, workflows, user experience, and business value." />
<Card title="Agent Evaluation" text="Test reliability, accuracy, safety, handoffs, workflow completion, and business usefulness." />
<Card title="AI Architecture Blueprints" text="Create reusable architecture patterns for enterprise AI, RAG, agents, APIs, security, and monitoring." />
<Card title="Demo-Driven Innovation" text="Use live demos and video-like product storytelling to help clients and investors understand the future state." />
<Card title="Continuous Learning" text="Track emerging AI capabilities and convert them into practical solutions for clients." />
      </section>
      
        <section className="videoGrid">
          <VideoPanel title="Agentic AI Workflow" text="A visual simulation of AI agents receiving context, planning actions, using tools, and handing off to humans when needed." />
          <VideoPanel title="Salesforce AI Command Center" text="A live-style concept for org health insights, agent recommendations, case intelligence, and architecture risks." />
          <VideoPanel title="Product Innovation Demo" text="A motion panel representing prototype-to-product thinking for SaaS, healthcare, manufacturing, and enterprise workflows." />
        </section>
        
      
    </PageShell>
  );
}
