import { Hero, Section, Cards } from "../../components/Page";

export default function AboutPage() {
  return <main><Hero eyebrow="About TaniyaTechAI" title="Built as a future AI solutions and innovation company." text="TaniyaTechAI is the public digital presence of Thanya Technologies LLC, focused on AI consulting, product innovation, Salesforce AI agents and intelligent transformation." />
  <Section title="Company aim" text="Our aim is to help businesses move from manual, disconnected and slow processes into intelligent, automated and measurable systems.">
    <Cards items={[
      { title: "Practical AI", text: "AI solutions that can be used in real business workflows, not only presentations." },
      { title: "Innovation thinking", text: "We explore product ideas, R&D concepts and AI opportunities that can become future platforms." },
      { title: "Enterprise trust", text: "We design with security, scalability, adoption and business value in mind." }
    ]} />
  </Section></main>;
}
