"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Girl from "@/public/girl.jpg";

const actionItems = [
  {
    title: "Donate",
    href: "/donate",
  },
  {
    title: "Contribute",
    href: "/contribute",
  },
  {
    title: "Volunteer",
    href: "/volunteer",
  },
];

export default function GetInvolvedSection() {
  return (
    <section className="w-full bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-gray-600 tracking-wider uppercase mb-4">
            GET INVOLVED
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="relative inline-block">
              Want to Help
              <span className="absolute bottom-1 left-0 w-full h-3 bg-[#1e8e9d] -z-10 rounded"></span>
            </span>
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 max-w-5xl mx-auto">
          {/* Left Image Section */}
          <div className="relative h-[400px] lg:h-[500px]">
            <Image
              src={Girl}
              alt="Smiling woman ready to help"
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* <div className="bg-[#1e8e9d] p-6 rounded-xl text-center mt-8">
                <p className="text-white font-bold text-xl italic">
                  "Her vision is clear: No woman should face cancer alone."
                </p>
              </div> */}

          {/* Right Action Items Section */}
          <div className="bg-[#1e8e9d] h-[400px] lg:h-[500px] flex flex-col justify-center px-12 lg:px-16">
            <div className="space-y-12">
              {actionItems.map((item, index) => (
                <div key={index} className="group">
                  <a
                    href={item.href}
                    className="flex items-center justify-between py-4 border-b-2 border-[#044b67] group-hover:border-[#044b67] transition-colors duration-200"
                  >
                    <h3 className="text-2xl lg:text-3xl font-semibold text-white group-hover:text-[#044b67] transition-colors duration-200">
                      {item.title}
                    </h3>
                    <ArrowRight className="w-8 h-8 text-white group-hover:text-[#044b67] group-hover:translate-x-2 transition-all duration-200" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
