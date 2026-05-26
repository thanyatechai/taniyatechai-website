import { PageShell, SectionHero, Card, VideoPanel } from "../../components/Page";

export default function Page() {
  return (
    <PageShell>
      <SectionHero eyebrow="AI References" title="Selected AI platforms and learning references that inspire our work." text="These links help clients understand the direction of modern AI, agentic systems, and enterprise transformation. We reference official platform pages and learning resources." />
      <section className="grid">
        <Card title="OpenAI Business" text="Frontier AI platforms and business AI adoption ideas." />
<Card title="Salesforce Agentforce" text="Enterprise agentic AI platform concepts and CRM agent workflows." />
<Card title="Anthropic Claude" text="AI safety, reliable models, and enterprise assistant ideas." />
<Card title="Google Cloud AI" text="AI infrastructure, data, analytics, and enterprise AI deployment patterns." />
<Card title="Salesforce Trailhead" text="Learning resources for Salesforce, Agentforce, and AI skills." />
<Card title="AI Video Ideas" text="Create demo videos for agent workflows, Salesforce use cases, and product prototypes." />
      </section>
      
      
        <section className="linkGrid">
          <a className="resource" href="https://openai.com/business/" target="_blank"><small>Official</small><h3>OpenAI Business</h3><p>Business AI, productivity, models, and agent workflows.</p></a>
          <a className="resource" href="https://www.salesforce.com/agentforce/" target="_blank"><small>Official</small><h3>Salesforce Agentforce</h3><p>Agentic AI platform for customers and employees.</p></a>
          <a className="resource" href="https://www.anthropic.com/" target="_blank"><small>Official</small><h3>Anthropic Claude</h3><p>Reliable, interpretable, and steerable AI systems.</p></a>
          <a className="resource" href="https://cloud.google.com/ai" target="_blank"><small>Official</small><h3>Google Cloud AI</h3><p>Cloud AI infrastructure, data, and enterprise solutions.</p></a>
          <a className="resource" href="https://trailhead.salesforce.com/" target="_blank"><small>Official</small><h3>Salesforce Trailhead</h3><p>Learn Salesforce, Agentforce, and in-demand AI skills.</p></a>
          <a className="resource" href="https://www.youtube.com/@salesforce" target="_blank"><small>Video</small><h3>Salesforce YouTube</h3><p>Official demos, keynotes, and AI transformation videos.</p></a>
          <a className="resource" href="https://www.youtube.com/@OpenAI" target="_blank"><small>Video</small><h3>OpenAI YouTube</h3><p>Official AI product, research, and demo videos.</p></a>
          <a className="resource" href="https://www.youtube.com/@GoogleCloudTech" target="_blank"><small>Video</small><h3>Google Cloud Tech</h3><p>AI, cloud architecture, and enterprise technology videos.</p></a>
        </section>
        
    </PageShell>
  );
}
