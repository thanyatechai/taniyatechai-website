import type { Metadata } from "next";
import "./globals.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "TaniyaTechAI | AI Solutions, Salesforce Agents & Innovation",
  description: "TaniyaTechAI builds AI agents, Salesforce intelligence, enterprise automation, SaaS products and innovation solutions for real-world business problems."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
