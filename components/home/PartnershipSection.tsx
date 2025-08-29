"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";

interface AccordionItem {
  title: string;
  content: string;
}

const services: AccordionItem[] = [
  {
    title: "Safe Housing & Transportation",
    content:
      "We provide safe, temporary housing tailored to each patient's treatment duration within the UNC Healthcare system. Our housing services are complemented by reliable transportation assistance to ensure patients can attend all their appointments without the stress of logistics. We understand that distance from care can be a significant barrier, so we work to eliminate this obstacle for women facing cancer treatment.",
  },
  {
    title: "Nutritional Support & Meals",
    content:
      "At Ministering Hand, we provide light snacks and simple meals to our guests whenever possible. While we don’t offer full, consistent meal service, we warmly welcome community support through cookouts and food donations to help nourish those we serve. Our focus is on creating a caring environment where every small comfort counts.",
  },
  {
    title: "Comprehensive Support Services",
    content:
      "Built on a strong foundation of experience within the North Carolina cancer care community, we provide referral services and resources to address patients' emotional, financial, counseling, and social support needs. We focus on women facing financial hardship, distance from care, and lack of support, striving to offer a nurturing environment that eases the non-medical burdens of cancer so patients can focus fully on healing.",
  },
];

export default function HowWeHelpSection() {
  const [expandedIndex, setExpandedIndex] = useState<number>(0);

  const toggleAccordion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  return (
    <section className="w-full bg-gray-50 py-20 px-4 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="absolute top-1/4 right-0 w-full h-full opacity-5 transform rotate-12"
          viewBox="0 0 1200 800"
          preserveAspectRatio="none"
        >
          <path
            d="M1200,200 Q1000,250 800,150 T400,200 Q200,250 0,180"
            stroke="#1e8e9d"
            strokeWidth="2"
            fill="none"
          />
        </svg>
        <svg
          className="absolute bottom-0 right-0 w-full h-full opacity-6 transform rotate-3"
          viewBox="0 0 1200 800"
          preserveAspectRatio="none"
        >
          <path
            d="M1200,600 Q900,550 600,650 T0,600"
            stroke="#1e8e9d"
            strokeWidth="2.5"
            fill="none"
          />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-gray-600 tracking-wider uppercase mb-4">
            WHAT WE DO
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="relative">
              How we help
              <span className="absolute bottom-1 left-0 w-full h-3 bg-[#1e8e9d] -z-10 rounded"></span>
            </span>
          </h2>
          {/* <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Ministering Hand Incorporated supports women undergoing cancer
            treatment by addressing the non-medical barriers that can interfere
            with healing and recovery.
          </p> */}
        </div>

        {/* Accordion */}
        <div className="space-y-0">
          {services.map((service, index) => (
            <div key={index} className="border-b border-gray-200">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-0 py-6 text-left flex items-center justify-between hover:bg-gray-50/50 transition-colors duration-200 group"
              >
                <div className="flex items-center">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {service.title}
                  </h3>
                  {expandedIndex === index && (
                    <div className="ml-3 w-2 h-2 bg-[#1e8e9d] rounded-full"></div>
                  )}
                </div>
                <div className="ml-4 flex-shrink-0 transition-transform duration-200">
                  {expandedIndex === index ? (
                    <X className="w-5 h-5 text-gray-500 group-hover:text-gray-700 transition-colors duration-200" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-500 group-hover:text-gray-700 transition-colors duration-200" />
                  )}
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  expandedIndex === index
                    ? "max-h-96 opacity-100 pb-6"
                    : "max-h-0 opacity-0 pb-0"
                }`}
              >
                <div className="pl-0 pt-2">
                  <p className="text-gray-700 leading-relaxed max-w-4xl">
                    {service.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        {/* <div className="mt-16 text-center bg-white rounded-lg p-8 shadow-sm border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ministering Hand Incorporated
          </h3>
          <p className="text-lg text-[#1e8e9d] font-medium mb-6">
            Sheltering Hope, Nurturing Strength
          </p>
          <div className="space-y-2 text-gray-700">
            <p>706D Constitution Drive, Durham, NC 27705</p>
            <p>
              Phone:{" "}
              <a
                href="tel:+19193576714"
                className="text-[#1e8e9d] hover:underline"
              >
                +1 (919) 357-6714
              </a>
            </p>
            <p>
              Email:{" "}
              <a
                href="mailto:ministeringhand25@gmail.com"
                className="text-[#1e8e9d] hover:underline"
              >
                ministeringhand25@gmail.com
              </a>
            </p>
            <p>
              Website:{" "}
              <a
                href="https://www.ministeringhand.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1e8e9d] hover:underline"
              >
                www.ministeringhand.com
              </a>
            </p>
          </div>
        </div> */}

        {/* Mission Statement */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 italic max-w-3xl mx-auto leading-relaxed">
            "By addressing barriers to healthcare, we strive to ensure that no
            woman fights cancer alone. Focused on women facing financial
            hardship, distance from care, and lack of support, we offer a
            nurturing environment to ease the non-medical burdens of cancer."
          </p>
        </div>
      </div>
    </section>
  );
}
