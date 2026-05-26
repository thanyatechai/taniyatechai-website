import { PageShell, SectionHero, Card, VideoPanel } from "../../components/Page";

export default function Page() {
  return (
    <PageShell>
      <SectionHero eyebrow="Contact" title="Let us explore your AI idea, business problem, or product vision." text="Reach out for AI consulting, Salesforce AI agents, automation ideas, innovation workshops, or product prototypes." />
      <section className="grid">
        <Card title="Email" text="info@thanyatechai.com" />
<Card title="What to Send" text="Share your business problem, current process, systems involved, and expected outcome." />
<Card title="Engagement Style" text="We can start with a discovery session, proof of concept, architecture roadmap, or product prototype." />
<Card title="Best Fit" text="AI agents, Salesforce solutions, process automation, data intelligence, SaaS concepts, and enterprise transformation." />
<Card title="Location" text="Minnesota, USA. Supporting clients remotely and globally." />
<Card title="Next Step" text="We review your idea, identify quick wins, and propose a practical AI solution path." />
      </section>
      
      
    </PageShell>
  );
}
