import Logo from "./Logo";

const nav = [
  ["Home", "/"],
  ["About", "/about"],
  ["Services", "/services"],
  ["Solutions", "/solutions"],
  ["Salesforce AI", "/salesforce-ai"],
  ["Products", "/products"],
  ["Innovation", "/innovation"],
  ["Industries", "/industries"],
  ["Resources", "/resources"],
  ["Contact", "/contact"]
];

export default function Nav() {
  return (
    <header className="nav">
      <Logo />
      <nav>
        {nav.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
      </nav>
      <a className="navCta" href="mailto:info@thanyatechai.com">Let&apos;s Talk</a>
    </header>
  );
}
