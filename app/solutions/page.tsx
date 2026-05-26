import { Hero, Section, Cards, Process } from "../../components/Page";

export default function SolutionsPage() {
  return <main><Hero eyebrow="Solutions" title="From business friction to AI-powered execution." text="Our solutions focus on real-world problems: slow operations, missed customer signals, manual analysis, disconnected systems and complex decision-making." />
  <Section title="Solution areas"><Cards items={[
    { title: "Business Process Agents", text: "Agents that triage requests, summarize information, trigger workflows and guide users to next-best actions." },
    { title: "Knowledge Intelligence", text: "AI systems that search, explain and recommend from company knowledge, policies, documents and CRM history." },
    { title: "Decision Dashboards", text: "Executive dashboards with AI summaries, insights, risk indicators and action recommendations." }
  ]} /></Section><Section title="How solutions are delivered"><Process /></Section></main>;
}
