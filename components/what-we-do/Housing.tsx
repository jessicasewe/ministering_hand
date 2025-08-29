"use client";

import Image from "next/image";
import Homes from "@/public/homes.jpg";
import Room from "@/public/room.jpg";

export default function WhatWeDoPage() {
  return (
    <div className="bg-gray-50 px-6 py-16 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1
              className="text-9xl lg:text-9xl font-medium text-gray-900"
              style={{ fontFamily: "Corinthia, cursive" }}
            >
              Safe Housing
            </h1>
            <p className="text-sm font-semibold text-gray-600 tracking-wider uppercase">
              Welcome to Safe
            </p>

            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                At Ministering Hand, we provide safe, affordable, and welcoming
                housing for women undergoing cancer treatment, especially those
                traveling from far distances or facing financial or logistical
                barriers. Our housing model is designed to relieve the stress of
                distance and instability, so women can focus fully on healing.
              </p>
              <p>
                We lease a comfortable, home-like residence where each guest is
                welcomed into a supportive, compassionate environment. Women may
                stay for the duration of their treatment, with lengths of stay
                tailored to their individual needs and treatment plans.
              </p>
            </div>
          </div>

          {/* Right Image Collage */}
          <div className="relative">
            <div className="relative h-[500px] lg:h-[600px]">
              <div className="absolute inset-0 bg-gray-200 rounded-2xl overflow-hidden">
                <Image
                  src={Homes}
                  alt="Happy children and families - charity work collage"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Overlapping second image */}
              <div className="absolute -bottom-10 -right-20 w-80 h-80 rounded-xl overflow-hidden shadow-lg border-4 border-white">
                <Image
                  src={Room}
                  alt="Overlapping image"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
