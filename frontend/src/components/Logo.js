export function Logo({ light = false, compact = false }) {
  const shieldFill = light ? "rgba(255,255,255,0.10)" : "#0B2545";
  const shieldStroke = light ? "#FFFFFF" : "none";
  return (
    <span className="inline-flex items-center gap-2.5" data-testid="brand-logo">
      <svg
        viewBox="0 0 64 64"
        className={compact ? "h-7 w-7" : "h-8 w-8"}
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M32 4.5c6.8 4.6 14.2 6.8 23.5 7.8 0 20.6-6.9 36.6-23.5 47.2C15.4 48.9 8.5 32.9 8.5 12.3 17.8 11.3 25.2 9.1 32 4.5Z"
          fill={shieldFill}
          stroke={shieldStroke}
          strokeWidth={light ? 2.5 : 0}
        />
        <path
          d="M22.5 43.5 40 20"
          stroke="#14B8A6"
          strokeWidth="4.4"
          strokeLinecap="round"
        />
        <path
          d="M28.6 19.4 40.8 18l-2 12.1"
          stroke="#14B8A6"
          strokeWidth="4.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {!compact && (
        <span
          className={`font-heading text-xl font-semibold tracking-tight ${
            light ? "text-white" : "text-navy"
          }`}
        >
          Secure<span className="text-teal">Path</span>
        </span>
      )}
    </span>
  );
}
