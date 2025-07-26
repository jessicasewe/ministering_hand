"use client";

import HeroSection from "./HeroSection";
// import Navbar from "./Navbar";
import ImpactSection from "./ImpactSection";
import PartnershipSection from "./PartnershipSection";
import GetInvolvedSection from "./GetInvolvedSection";
import CurvedFooter from "./Footer";

export default function HomePage() {
  return (
    <div className="bg-gray-100 pt-24">
      {/* <Navbar /> */}
      <HeroSection />
      <ImpactSection />
      <PartnershipSection />
      <GetInvolvedSection />
      <CurvedFooter />
    </div>
  );
}
