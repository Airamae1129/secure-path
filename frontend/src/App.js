import { useEffect, useState } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BookingModal } from "@/components/BookingModal";
import { useLenis, EASE } from "@/components/shared";
import HomePage from "@/pages/HomePage";
import ServicesPage from "@/pages/ServicesPage";
import AboutPage from "@/pages/AboutPage";
import PrivacyPage from "@/pages/PrivacyPage";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AnimatedRoutes({ onBook }) {
  const location = useLocation();
  const reduceMotion = useReducedMotion();
  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: reduceMotion ? 0.15 : 0.45, ease: EASE }}
      >
        <Routes location={location}>
          <Route path="/" element={<HomePage onBook={onBook} />} />
          <Route path="/services" element={<ServicesPage onBook={onBook} />} />
          <Route path="/about" element={<AboutPage onBook={onBook} />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="*" element={<HomePage onBook={onBook} />} />
        </Routes>
      </motion.main>
    </AnimatePresence>
  );
}

function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  useLenis();
  const openBooking = () => setBookingOpen(true);

  return (
    <div className="App min-h-screen bg-white">
      <BrowserRouter>
        <ScrollToTop />
        <Navbar onBook={openBooking} />
        <AnimatedRoutes onBook={openBooking} />
        <Footer />
        <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
      </BrowserRouter>
    </div>
  );
}

export default App;
