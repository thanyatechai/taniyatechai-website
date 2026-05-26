export default function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="brand-lockup" aria-label="TaniyaTechAI logo">
      <div className="logo-mark">
        <svg viewBox="0 0 120 120" role="img" aria-label="TaniyaTechAI intelligent transformation mark">
          <defs>
            <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#8be9ff" />
              <stop offset="45%" stopColor="#7c5cff" />
              <stop offset="100%" stopColor="#21e6c1" />
            </linearGradient>
            <radialGradient id="g2" cx="50%" cy="45%" r="60%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
              <stop offset="45%" stopColor="#8be9ff" stopOpacity="0.65" />
              <stop offset="100%" stopColor="#7c5cff" stopOpacity="0.05" />
            </radialGradient>
          </defs>
          <circle cx="60" cy="60" r="53" fill="#07111f" stroke="url(#g1)" strokeWidth="3" />
          <path d="M26 36h68M60 36v53" stroke="url(#g1)" strokeWidth="9" strokeLinecap="round" />
          <path d="M35 88c16-39 34-39 50 0" fill="none" stroke="#21e6c1" strokeWidth="7" strokeLinecap="round" />
          <path d="M31 68c16-17 41-17 58 0" fill="none" stroke="#7c5cff" strokeWidth="5" strokeLinecap="round" opacity="0.85" />
          <circle cx="31" cy="68" r="4" fill="#8be9ff" />
          <circle cx="60" cy="49" r="5" fill="url(#g2)" />
          <circle cx="89" cy="68" r="4" fill="#21e6c1" />
          <path d="M77 31c14 6 23 20 23 36" stroke="#8be9ff" strokeWidth="3" strokeLinecap="round" opacity="0.75" />
          <path d="M91 35l-4 10 10-4" fill="#8be9ff" opacity="0.85" />
        </svg>
      </div>
      {!compact && (
        <div>
          <div className="brand-name">TaniyaTechAI</div>
          <div className="brand-subtitle">AI Solutions • Consulting • Products</div>
        </div>
      )}
    </div>
  );
}
