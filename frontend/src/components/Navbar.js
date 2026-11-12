import { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";
import { NAV_LINKS } from "../content";
import { EASE, scrollToTarget } from "./shared";

export function Navbar({ onBook }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const goSection = (hash) => (e) => {
    e.preventDefault();
    setOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToTarget(hash), 120);
    } else {
      scrollToTarget(hash);
    }
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-brand ${
          scrolled
            ? "border-b border-white/10 bg-navy/90 shadow-lg shadow-navy/40 backdrop-blur-md"
            : "border-b border-white/5 bg-navy"
        }`}
        data-testid="site-navbar"
      >
        <nav
          className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8"
          aria-label="Main navigation"
        >
          <Link to="/" aria-label="SecurePath home" data-testid="nav-home-logo">
            <Logo light />
          </Link>

          <div className="hidden items-center gap-9 lg:flex">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                data-testid={`nav-link-${link.label.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                className={({ isActive }) =>
                  `group relative text-[15px] font-medium transition-colors duration-300 ${
                    isActive ? "text-white" : "text-navy-20 hover:text-white"
                  }`
                }
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-teal-light transition-all duration-500 ease-brand group-hover:w-full" />
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onBook}
              data-testid="nav-book-consultation-btn"
              className="group hidden items-center gap-2 rounded-full bg-cyber px-5 py-2.5 text-[15px] font-medium text-white transition-all duration-400 ease-brand hover:bg-teal hover:shadow-lg hover:shadow-teal/25 sm:inline-flex"
            >
              Book a Consultation
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-400 ease-brand group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={1.8}
              />
            </button>
            <button
              type="button"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              data-testid="nav-mobile-menu-btn"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 lg:hidden"
            >
              {open ? <X className="h-5 w-5" strokeWidth={1.5} /> : <Menu className="h-5 w-5" strokeWidth={1.5} />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="fixed inset-0 z-[70] flex flex-col bg-navy lg:hidden"
            data-testid="mobile-menu"
          >
            <div className="noise-dark pointer-events-none absolute inset-0" />
            <div className="flex flex-1 flex-col justify-center gap-2 px-8 pt-20">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={reduceMotion ? { opacity: 0 } : { opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.08 + i * 0.07, ease: EASE }}
                >
                  <NavLink
                    to={link.to}
                    data-testid={`mobile-nav-link-${link.label.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                    className="group flex items-center justify-between border-b border-white/10 py-5"
                  >
                    <span className="font-heading text-3xl font-light text-white transition-colors group-hover:text-teal-light">
                      {link.label}
                    </span>
                    <ArrowUpRight className="h-6 w-6 text-teal-light opacity-0 transition-all duration-400 group-hover:opacity-100" strokeWidth={1.5} />
                  </NavLink>
                </motion.div>
              ))}
              <motion.button
                type="button"
                onClick={() => {
                  setOpen(false);
                  onBook();
                }}
                data-testid="mobile-nav-book-btn"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.42, ease: EASE }}
                className="mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-cyber px-7 py-4 font-medium text-white"
              >
                Book a Consultation
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.8} />
              </motion.button>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="px-8 pb-10 text-sm text-navy-40"
            >
              Guiding organisations on the path to sustainable security.
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
