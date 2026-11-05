import { TRUST_ITEMS } from "../content";
import { Reveal } from "./shared";

function TrustRow() {
  return (
    <div className="flex shrink-0 items-center">
      {TRUST_ITEMS.map((item, i) => (
        <span key={item} className="flex items-center">
          <span className="whitespace-nowrap text-sm font-medium tracking-wide text-slateink">
            {item}
          </span>
          <span aria-hidden="true" className="mx-8 h-1 w-1 rounded-full bg-teal/60" />
        </span>
      ))}
      <span className="flex items-center gap-3 pr-8">
        <span className="text-xs uppercase tracking-[0.18em] text-navy-40">Certification partner</span>
        <img
          src="/assets/pecb-logo.png"
          alt="PECB"
          className="h-6 w-auto opacity-60 grayscale transition-all duration-500 ease-brand hover:opacity-100 hover:grayscale-0"
          data-testid="trust-pecb-logo"
        />
      </span>
    </div>
  );
}

export function TrustStrip() {
  return (
    <section className="border-y border-navy-20/70 bg-white" data-testid="trust-strip">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* desktop: one quiet row */}
        <Reveal className="hidden items-center justify-center py-6 md:flex" y={12}>
          <TrustRow />
        </Reveal>
        {/* mobile: slow marquee */}
        <div className="relative overflow-hidden py-6 md:hidden" aria-hidden="false">
          <div className="marquee-track flex w-max">
            <TrustRow />
            <TrustRow />
          </div>
        </div>
      </div>
    </section>
  );
}
