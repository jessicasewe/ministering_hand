import Housing from "@/components/what-we-do/Housing";
import HomeOffers from "@/components/what-we-do/HomeOffers";
import HeroWithReferral from "@/components/what-we-do/Transport&Referral";

export default function WhatWeDoPage() {
  return (
    <div className="bg-gray-100 pt-24">
      <Housing />
      <HomeOffers />
      <HeroWithReferral />
    </div>
  );
}
