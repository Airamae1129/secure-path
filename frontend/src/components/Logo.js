export function Logo({ light = false, compact = false, full = false }) {
  if (full) {
    return (
      <img
        src={light ? "/assets/logo-white-full.png" : "/assets/logo-official.png"}
        alt="SecurePath — shield with teal arrow"
        className="h-14 w-auto"
        data-testid="brand-logo"
      />
    );
  }
  return (
    <span className="inline-flex items-center gap-2.5" data-testid="brand-logo">
      <img
        src={light ? "/assets/shield-icon-white.png" : "/assets/shield-icon.png"}
        alt=""
        aria-hidden="true"
        className={compact ? "h-7 w-auto" : "h-9 w-auto"}
      />
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
