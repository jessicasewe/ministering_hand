"use client";

import HeroSection from "./HeroSection";
import ImpactSection from "./ImpactSection";
import PartnershipSection from "./PartnershipSection";
import GetInvolvedSection from "./GetInvolvedSection";
import CurvedFooter from "./Footer";

export default function HomePage() {
  return (
    <div className="bg-gray-100 pt-24">
      <HeroSection />
      <ImpactSection />
      <PartnershipSection />
      <GetInvolvedSection />
    </div>
  );
}
