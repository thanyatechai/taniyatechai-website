import "./globals.css";

export const metadata = {
  title: "ThanyaTechAI | AI Solutions, Salesforce Agents & Product Innovation",
  description: "ThanyaTechAI builds AI solutions, Salesforce AI agents, intelligent automation, AI products, and innovation-driven technology consulting."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
