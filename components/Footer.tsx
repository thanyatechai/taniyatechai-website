import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <Logo />
        <div>
          <h3>Built for future-ready businesses</h3>
          <p>AI agents, Salesforce intelligence, enterprise automation, product engineering, and innovation consulting.</p>
          <a className="email-link" href="mailto:info@taniyatechai.com">info@taniyatechai.com</a>
        </div>
      </div>
    </footer>
  );
}
