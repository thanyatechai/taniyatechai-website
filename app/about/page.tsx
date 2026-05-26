import { PageShell, SectionHero, Card, VideoPanel } from "../../components/Page";

export default function Page() {
  return (
    <PageShell>
      <SectionHero eyebrow="About ThanyaTechAI" title="A future-focused AI solutions company built to turn ideas into intelligent systems." text="ThanyaTechAI exists to help businesses discover real problems, design AI-powered solutions, build automation, and create scalable products with measurable impact." />
      <section className="grid">
        <Card title="Human-Centered AI" text="We believe AI should empower people, not replace good judgment. Our solutions improve decision-making, productivity, quality, and customer experience." />
<Card title="Innovation + Execution" text="We combine research thinking with practical delivery: strategy, architecture, prototyping, implementation, and adoption." />
<Card title="Product Vision" text="Beyond consulting, we design reusable AI accelerators, agent frameworks, and future SaaS products for real-world business problems." />
<Card title="Enterprise Mindset" text="We focus on trustworthy architecture, security-aware design, integration readiness, and long-term maintainability." />
<Card title="Founder Energy" text="The company is built with a strong family-backed vision: create meaningful technology, solve problems, and build lasting value." />
<Card title="Minnesota Roots, Global Ambition" text="Starting from Minnesota, we aim to support clients with global-quality AI solutions and innovation practices." />
      </section>
      
      
    </PageShell>
  );
}
