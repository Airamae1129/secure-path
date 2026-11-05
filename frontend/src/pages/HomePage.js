import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Hero } from "../components/Hero";
import { TrustStrip } from "../components/TrustStrip";
import { Approach } from "../components/Approach";
import { Services } from "../components/Services";
import { Process } from "../components/Process";
import { Audience } from "../components/Audience";
import { WhyUs } from "../components/WhyUs";
import { FinalCTA } from "../components/FinalCTA";
import { PathLine } from "../components/PathLine";
import { scrollToTarget } from "../components/shared";

export default function HomePage({ onBook }) {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const t = setTimeout(() => scrollToTarget(location.hash), 150);
      return () => clearTimeout(t);
    }
  }, [location.hash]);

  return (
    <div className="relative">
      <PathLine />
      <div className="relative" style={{ zIndex: 2 }}>
        <Hero onBook={onBook} />
        <TrustStrip />
        <Approach />
        <Services />
        <Process />
        <Audience onBook={onBook} />
        <WhyUs />
        <FinalCTA onBook={onBook} />
      </div>
    </div>
  );
}
