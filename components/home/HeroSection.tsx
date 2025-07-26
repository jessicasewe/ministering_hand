"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import SmilingWomen from "@/public/smilingwomen.png";

export default function HeroSection() {
  return (
    <div className="bg-gray-50 px-6 py-10 lg:px-12 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:ml-8 xl:ml-40">
            {/* Small heading */}
            <p className="text-sm font-semibold text-gray-600 tracking-wider uppercase">
              OUR MISSION IS SIMPLE
            </p>

            {/* Main heading */}
            <div className="space-y-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                <span className="block">Sheltering</span>
                <span className="block">hope,</span>
                <span className="block relative">
                  nurturing
                  <svg
                    className="absolute bottom-0 left-0 w-80 h-10 animate-pulse-line"
                    viewBox="0 0 200 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 8 Q100 2 190 8"
                      stroke="#1e8e9d"
                      strokeWidth="4"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <span className="block relative">
                  strength
                  {/* Yellow underline accent */}
                  <span className="absolute bottom-1 left-0 w-full h-7 bg-#1e8e9d -z-10"></span>
                </span>
              </h1>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Button
                variant="link"
                className="text-gray-900 font-medium text-base p-0 h-auto hover:text-[#1e8e9d] transition-colors underline decoration-1 underline-offset-4"
              >
                Learn more
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden bg-gradient-to-br from-[#1e8e9d] to-teal-600">
              <Image
                src={SmilingWomen}
                alt="Smiling woman representing hope and strength"
                fill
                className="object-cover"
                priority
              />
              {/* Optional overlay for better image blend */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1e8e9d]/20 to-teal-600/20 mix-blend-multiply" />
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes pulse-line {
          0%,
          100% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
        }

        .animate-pulse-line {
          animation: pulse-line 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
