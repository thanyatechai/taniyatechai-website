import Nav from "./Nav";
import Footer from "./Footer";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
}

export function SectionHero({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <section className="sectionHero">
      <span className="eyebrow">{eyebrow}</span>
      <h1>{title}</h1>
      <p>{text}</p>
    </section>
  );
}

export function Card({ title, text }: { title: string; text: string }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

export function VideoPanel({ title, text }: { title: string; text: string }) {
  return (
    <div className="videoPanel">
      <div className="pulseOrb"></div>
      <div className="scanLine"></div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}
