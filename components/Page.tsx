import Link from "next/link";

type Feature = { title: string; text: string };

export function Hero({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <section className="hero container">
      <div className="hero-copy">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="hero-text">{text}</p>
        <div className="hero-actions">
          <Link className="btn primary" href="/contact">Start a conversation</Link>
          <Link className="btn secondary" href="/salesforce-ai">Explore AI agents</Link>
        </div>
      </div>
      <div className="hero-orb" aria-hidden="true">
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <div className="core">AI</div>
      </div>
    </section>
  );
}

export function Section({ title, text, children }: { title: string; text?: string; children?: React.ReactNode }) {
  return <section className="section container"><h2>{title}</h2>{text && <p className="section-text">{text}</p>}{children}</section>;
}

export function Cards({ items }: { items: Feature[] }) {
  return <div className="cards">{items.map(item => <article className="card" key={item.title}><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>;
}

export function Process() {
  const steps = ["Discover real business friction", "Design AI workflow and architecture", "Build secure agents and automations", "Measure value and improve continuously"];
  return <div className="process">{steps.map((s, i) => <div className="step" key={s}><span>{String(i + 1).padStart(2, "0")}</span><p>{s}</p></div>)}</div>;
}
