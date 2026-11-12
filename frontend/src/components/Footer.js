import { Link } from "react-router-dom";
import { Linkedin, Mail } from "lucide-react";
import { Logo } from "./Logo";
import { BRAND, NAV_LINKS, SERVICES, FOOTER } from "../content";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy" data-testid="site-footer">
      <div className="noise-dark pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link to="/" aria-label="SecurePath home" data-testid="footer-home-logo">
              <Logo light full />
            </Link>
            <p className="mt-5 max-w-xs font-heading text-lg font-light leading-snug text-navy-20">
              {BRAND.tagline}
            </p>
            <p className="mt-3 text-sm text-navy-40">{FOOTER.note}</p>
          </div>

          <nav aria-label="Footer navigation">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-navy-40">Navigate</h3>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    data-testid={`footer-link-${link.label.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                    className="text-[15px] text-navy-20 transition-colors duration-300 hover:text-teal-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-navy-40">Services</h3>
            <ul className="mt-5 space-y-3">
              {SERVICES.items.map((s) => (
                <li key={s.id}>
                  <Link
                    to="/services"
                    data-testid={`footer-service-${s.id}`}
                    className="text-[15px] text-navy-20 transition-colors duration-300 hover:text-teal-light"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-navy-40">Contact</h3>
            <ul className="mt-5 space-y-4">
              <li>
                <a
                  href={`mailto:${BRAND.email}`}
                  data-testid="footer-email-link"
                  className="group flex items-center gap-3 text-[15px] text-navy-20 transition-colors duration-300 hover:text-teal-light"
                >
                  <Mail className="h-4 w-4 text-teal-light" strokeWidth={1.5} />
                  {BRAND.email}
                </a>
              </li>
              <li>
                <a
                  href={BRAND.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="footer-linkedin-link"
                  className="group flex items-center gap-3 text-[15px] text-navy-20 transition-colors duration-300 hover:text-teal-light"
                >
                  <Linkedin className="h-4 w-4 text-teal-light" strokeWidth={1.5} />
                  LinkedIn Profile
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-sm text-navy-40" data-testid="footer-copyright">
            © 2026 {BRAND.legalName} All rights reserved.
          </p>
          <Link
            to="/privacy"
            data-testid="footer-privacy-link"
            className="text-sm text-navy-40 transition-colors duration-300 hover:text-teal-light"
          >
            Privacy & Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
