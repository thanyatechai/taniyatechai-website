import { PageShell, Card, VideoPanel } from "../components/Page";

export default function Home() {
  return (
    <PageShell>
      <section className="hero">
        <div>
          <span className="eyebrow">AI Solutions • Salesforce Agents • Product Innovation</span>
          <h1>AI-powered solutions. <span className="gradient">Real-world impact.</span> Built for the future.</h1>
          <p>
            ThanyaTechAI helps businesses innovate, automate, and transform using AI agents,
            Salesforce intelligence, intelligent automation, data solutions, and product engineering.
          </p>
          <div className="ctaRow">
            <a className="btn" href="/services">Explore Services</a>
            <a className="btn secondary" href="mailto:info@thanyatechai.com">Contact Us</a>
          </div>
        </div>
        <div className="heroArt">
          <img src="/hero-brand.svg" alt="ThanyaTechAI AI solutions and innovation brand" />
        </div>
      </section>

      <section className="strip">
        <div className="metric"><strong>AI</strong><br/>Strategy & Consulting</div>
        <div className="metric"><strong>Agents</strong><br/>Salesforce & Multi-Skill</div>
        <div className="metric"><strong>Automation</strong><br/>Workflow Intelligence</div>
        <div className="metric"><strong>Products</strong><br/>SaaS & MVP Concepts</div>
        <div className="metric"><strong>Data</strong><br/>Analytics & Decisions</div>
        <div className="metric"><strong>Impact</strong><br/>Value, Growth, Excellence</div>
      </section>

      <section className="grid">
        <Card title="AI Strategy & Consulting" text="We identify high-value AI use cases, build roadmaps, and design practical solutions that reduce manual work and create business value." />
        <Card title="Salesforce AI Agents" text="We design Salesforce-connected agents, Agentforce-ready concepts, multi-skill assistants, and CRM automation patterns." />
        <Card title="Intelligent Automation" text="We build workflows where AI can summarize, classify, recommend, trigger actions, and support human approvals." />
        <Card title="AI Product Development" text="We convert ideas into prototypes, MVPs, demos, and future SaaS products." />
        <Card title="Human-Centered AI" text="We design solutions that support people, improve decisions, and keep business users in control." />
        <Card title="Innovation Portfolio" text="We create visible AI demos, architecture concepts, and product stories for clients, partners, and future investors." />
      </section>

      <section className="feature">
        <h2>Our goal: transform ideas into intelligent systems.</h2>
        <p>
          ThanyaTechAI is not just a service company. It is a future AI solutions and product innovation
          company focused on solving real problems through AI, automation, Salesforce intelligence,
          data, and enterprise-ready architecture.
        </p>
      </section>

      <section className="videoGrid">
        <VideoPanel title="Live AI Agent Concept" text="A visual concept of agents that understand context, plan next steps, call tools, and support human teams." />
        <VideoPanel title="Salesforce Solution Architect AI" text="A future assistant for requirements, data models, integrations, risks, and architecture recommendations." />
        <VideoPanel title="Innovation-to-Product Journey" text="From problem discovery to prototype, MVP, SaaS product, and enterprise adoption." />
      </section>
    </PageShell>
  );
}
