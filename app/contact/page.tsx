import { Hero, Section } from "../../components/Page";

export default function ContactPage() {
  return <main><Hero eyebrow="Contact" title="Bring your AI idea or business problem." text="Reach out to discuss AI solutions, Salesforce agents, consulting, product ideas, automation opportunities or innovation partnerships." />
  <Section title="Contact us" text="For consulting, innovation, AI solutioning, Salesforce AI agents or future product discussions, contact:">
    <a className="contact-box" href="mailto:info@taniyatechai.com">info@taniyatechai.com</a>
    <div className="badge-row"><span className="badge">AI Consulting</span><span className="badge">Salesforce AI</span><span className="badge">Agentic AI</span><span className="badge">SaaS Products</span><span className="badge">Innovation</span></div>
  </Section></main>;
}
