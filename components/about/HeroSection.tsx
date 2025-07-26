"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import SmilingWomen from "@/public/smilingwomen.png";

export default function HeroSection() {
  return (
    <div className="relative w-full h-screen min-h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={
            SmilingWomen ||
            "/placeholder.svg?height=800&width=1200&query=smiling woman representing hope"
          }
          alt="Smiling woman representing hope and strength"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-xl">
            {/* Small heading */}
            <p className="text-sm font-medium text-white/80 tracking-wider uppercase mb-6 letterspacing-wide">
              ABOUT US
            </p>

            {/* Main heading with white background box */}
            <div className="bg-white p-8 md:p-10 shadow-2xl mb-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                We make the best
                <br />
                for all our children
              </h1>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-white leading-relaxed mb-8 max-w-lg">
              Supporting families and children with comprehensive care,
              education, and opportunities to build brighter futures in our
              community.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-[#1e8e9d] hover:bg-[#1a7a87] text-white font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-300 shadow-lg">
                Learn More
              </Button>
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold px-8 py-4 text-lg bg-transparent rounded-lg transition-all duration-300"
              >
                Get Involved
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70">
        <div className="flex flex-col items-center animate-bounce">
          <span className="text-sm mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
