import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import { BOOKING, SERVICES } from "../content";
import { EASE } from "./shared";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function SuccessCheck() {
  const reduceMotion = useReducedMotion();
  return (
    <svg viewBox="0 0 96 96" fill="none" className="mx-auto h-24 w-24" aria-hidden="true">
      <motion.circle
        cx="48"
        cy="48"
        r="44"
        stroke="#0D9488"
        strokeWidth="2.5"
        initial={reduceMotion ? {} : { pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, ease: EASE }}
      />
      <motion.path
        d="M30 49 L 43 62 L 67 36"
        stroke="#0D9488"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={reduceMotion ? {} : { pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.5, delay: 0.6, ease: EASE }}
      />
    </svg>
  );
}

const initialForm = {
  name: "",
  email: "",
  company: "",
  size: "",
  services: [],
  message: "",
};

export function BookingModal({ open, onClose }) {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (open) {
      setSubmitted(false);
      setErrors({});
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const toggleService = (title) => {
    setForm((f) => ({
      ...f,
      services: f.services.includes(title)
        ? f.services.filter((s) => s !== title)
        : [...f.services, title],
    }));
  };

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Please enter your name";
    if (!form.email.trim()) errs.email = "Please enter your work email";
    else if (!EMAIL_RE.test(form.email)) errs.email = "That email doesn't look right";
    if (!form.company.trim()) errs.company = "Please enter your company";
    if (!form.size) errs.size = "Please choose a company size";
    if (form.services.length === 0) errs.services = "Pick at least one area";
    return errs;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
      setForm(initialForm);
    }
  };

  const inputCls = (hasError) =>
    `w-full rounded-xl border bg-white px-4 py-3 text-[15px] text-navy placeholder:text-navy-40/70 transition-colors duration-300 focus:border-teal focus:outline-none ${
      hasError ? "border-red-400" : "border-navy-20"
    }`;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[60] flex items-end justify-center bg-navy/60 backdrop-blur-sm sm:items-center sm:p-6"
          onClick={onClose}
          data-testid="booking-modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={BOOKING.title}
        >
          <motion.div
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 48, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 32, scale: 0.98 }}
            transition={{ duration: 0.5, ease: EASE }}
            onClick={(e) => e.stopPropagation()}
            data-lenis-prevent
            className="relative max-h-[92vh] w-full max-w-xl overflow-y-auto rounded-t-3xl bg-white p-7 shadow-2xl sm:rounded-3xl sm:p-10"
            data-testid="booking-modal"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close booking form"
              data-testid="booking-modal-close-btn"
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full text-slateink transition-colors hover:bg-steel hover:text-navy"
            >
              <X className="h-5 w-5" strokeWidth={1.5} />
            </button>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="py-10 text-center"
                data-testid="booking-success-state"
              >
                <SuccessCheck />
                <h3 className="mt-8 font-heading text-2xl font-medium text-navy">
                  {BOOKING.successTitle}
                </h3>
                <p className="mx-auto mt-4 max-w-sm text-[15px] leading-relaxed text-slateink">
                  {BOOKING.successLine}
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  data-testid="booking-success-close-btn"
                  className="mt-9 rounded-full border border-navy-20 px-7 py-3 font-medium text-navy transition-colors duration-300 hover:border-teal hover:text-teal"
                >
                  Close
                </button>
              </motion.div>
            ) : (
              <>
                <h3 className="font-heading text-2xl font-medium tracking-tight text-navy sm:text-3xl">
                  {BOOKING.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-slateink">{BOOKING.sub}</p>

                <form onSubmit={onSubmit} noValidate className="mt-8 space-y-5" data-testid="booking-form">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="bk-name" className="mb-1.5 block text-sm font-medium text-navy">
                        Name
                      </label>
                      <input
                        id="bk-name"
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Jane Murphy"
                        data-testid="booking-name-input"
                        className={inputCls(errors.name)}
                      />
                      {errors.name && <p className="mt-1.5 text-xs text-red-500" role="alert">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="bk-email" className="mb-1.5 block text-sm font-medium text-navy">
                        Work email
                      </label>
                      <input
                        id="bk-email"
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="jane@company.ie"
                        data-testid="booking-email-input"
                        className={inputCls(errors.email)}
                      />
                      {errors.email && <p className="mt-1.5 text-xs text-red-500" role="alert">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="bk-company" className="mb-1.5 block text-sm font-medium text-navy">
                        Company
                      </label>
                      <input
                        id="bk-company"
                        type="text"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        placeholder="Company Ltd."
                        data-testid="booking-company-input"
                        className={inputCls(errors.company)}
                      />
                      {errors.company && <p className="mt-1.5 text-xs text-red-500" role="alert">{errors.company}</p>}
                    </div>
                    <div>
                      <label htmlFor="bk-size" className="mb-1.5 block text-sm font-medium text-navy">
                        Company size
                      </label>
                      <select
                        id="bk-size"
                        value={form.size}
                        onChange={(e) => setForm({ ...form, size: e.target.value })}
                        data-testid="booking-size-select"
                        className={`${inputCls(errors.size)} ${form.size ? "" : "text-navy-40/70"}`}
                      >
                        <option value="" disabled>
                          Select size
                        </option>
                        {BOOKING.sizes.map((s) => (
                          <option key={s} value={s}>
                            {s} people
                          </option>
                        ))}
                      </select>
                      {errors.size && <p className="mt-1.5 text-xs text-red-500" role="alert">{errors.size}</p>}
                    </div>
                  </div>

                  <fieldset>
                    <legend className="mb-2.5 text-sm font-medium text-navy">
                      What do you need help with?
                    </legend>
                    <div className="flex flex-wrap gap-2" data-testid="booking-service-chips">
                      {SERVICES.items.map((s) => {
                        const selected = form.services.includes(s.title);
                        return (
                          <button
                            key={s.id}
                            type="button"
                            onClick={() => toggleService(s.title)}
                            aria-pressed={selected}
                            data-testid={`booking-chip-${s.id}`}
                            className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ease-brand ${
                              selected
                                ? "border-teal bg-teal text-white"
                                : "border-navy-20 text-slateink hover:border-teal hover:text-teal"
                            }`}
                          >
                            {s.title}
                          </button>
                        );
                      })}
                    </div>
                    {errors.services && <p className="mt-1.5 text-xs text-red-500" role="alert">{errors.services}</p>}
                  </fieldset>

                  <div>
                    <label htmlFor="bk-message" className="mb-1.5 block text-sm font-medium text-navy">
                      Message <span className="font-normal text-navy-40">(optional)</span>
                    </label>
                    <textarea
                      id="bk-message"
                      rows={3}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us briefly about your situation…"
                      data-testid="booking-message-input"
                      className={`${inputCls(false)} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    data-testid="booking-submit-btn"
                    className="w-full rounded-full bg-cyber py-3.5 font-medium text-white transition-all duration-400 ease-brand hover:bg-navy hover:shadow-lg hover:shadow-navy/20"
                  >
                    Request Consultation
                  </button>
                  <p className="text-center text-xs text-navy-40">
                    This form is a demo — no data leaves your browser.
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
