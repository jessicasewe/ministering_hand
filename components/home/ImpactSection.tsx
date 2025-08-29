"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import CancerSupportImg from "@/public/together.png";

export default function ImpactSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const rotation = scrollY * 0.4;

  return (
    <section className="relative w-full bg-gray-50 px-4 md:px-12 lg:px-24 py-16 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="relative">
            <div className="relative w-full h-[500px] bg-[#1e8e9d] rounded-2xl overflow-hidden">
              <Image
                src={CancerSupportImg || "/placeholder.svg"}
                alt="Woman with hands behind head, smiling"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div
              className="absolute -bottom-12 -right-12 w-48 h-48 bg-[#044b67] rounded-full flex items-center justify-center text-white transition-transform duration-100 ease-out z-20 shadow-2xl"
              style={{ transform: `rotate(${rotation}deg)` }}
            >
              <div className="text-center px-4">
                <div className="text-sm leading-tight">
                  MinisteringHand have
                  <br />
                  provided over 2
                  <br />
                  million cancer
                  <br />
                  health services to
                  <br />
                  women in need
                </div>
              </div>
            </div>
          </div>

          {/* Right Text Content */}
          <div className="space-y-6 lg:pl-8">
            {/* Small heading */}
            <p className="text-sm font-semibold text-gray-600 tracking-wider uppercase">
              CAUSE
            </p>

            {/* Main heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight">
              <span className="block">Supporting</span>
              <span className="block">Women Through</span>
              <span className="block relative">
                Compassion
                <span className="absolute bottom-1 left-0 w-96 h-3 bg-[#1e8e9d] -z-10 rounded"></span>
              </span>
              <span className="block">and Care</span>
            </h2>

            {/* Description */}
            <p className="text-gray-700 text-lg leading-relaxed max-w-lg">
              Focused on women facing financial hardship, distance from care,
              and lack of support, we strive to offer a nurturing environment to
              ease the non-medical burdens of cancer so patients can focus fully
              on healing.
            </p>

            {/* CTA Button */}
            <div className="pt-6">
              <Button className="bg-[#1e8e9d] hover:bg-[#1e8e9dee] text-white font-light px-8 py-3 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-200">
                Donate
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
