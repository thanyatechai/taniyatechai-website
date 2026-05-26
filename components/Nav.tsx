import Link from "next/link";
import Logo from "./Logo";

const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Services", "/services"],
  ["Solutions", "/solutions"],
  ["Salesforce AI", "/salesforce-ai"],
  ["Products", "/products"],
  ["Innovation", "/innovation"],
  ["Industries", "/industries"],
  ["Contact", "/contact"]
];

export default function Nav() {
  return (
    <header className="nav-shell">
      <nav className="nav container">
        <Link href="/" className="nav-logo"><Logo /></Link>
        <div className="nav-links">
          {links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
        </div>
      </nav>
    </header>
  );
}
