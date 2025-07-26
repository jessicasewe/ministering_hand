"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram } from "lucide-react";
import Logo from "@/public/ministeringhandlogo.png";
import Image from "next/image";

export default function ModernFooter() {
  return (
    <footer className="relative bg-gray-50 text-gray-800 py-16 px-4 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center z-0 opacity-5">
        <Image
          src={Logo}
          alt="Logo background"
          className="w-80 h-80 object-contain"
        />
      </div>
      <div className="max-w-4xl mx-auto">
        {/* Call to Action Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Help support
            <br />
            women in need
          </h2>
          <Link
            href="/donate"
            className="inline-block bg-[#1e8e9d] hover:bg-[#1e8e9dee] text-white font-semibold px-8 py-3 rounded-full text-lg transition-colors duration-200"
          >
            Donate
          </Link>
        </div>

        {/* Divider */}
        <div className="border-t border-[#1e8e9dee] my-12"></div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-12">
          <Link
            href="/what-we-do"
            className="text-gray-700 hover:text-[#1e8e9dee] font-medium transition-colors duration-200"
          >
            What We Do
          </Link>
          <Link
            href="/about"
            className="text-gray-700 hover:text-[#1e8e9dee] font-medium transition-colors duration-200"
          >
            About Us
          </Link>
          <Link
            href="/get-involved"
            className="text-gray-700 hover:text-[#1e8e9dee] font-medium transition-colors duration-200"
          >
            Get Involved
          </Link>
          <Link
            href="/support"
            className="text-gray-700 hover:text-[#1e8e9dee] font-medium transition-colors duration-200"
          >
            Support & Giving
          </Link>
        </div>

        {/* Divider */}
        <div className="border-t border-[#1e8e9dee] my-12"></div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-4 mb-12">
          <Link
            href="#"
            className="w-12 h-12 border-2 border-gray-400 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-900 hover:border-[#1e8e9dee] transition-all duration-200"
          >
            <Facebook size={20} />
          </Link>
          <Link
            href="#"
            className="w-12 h-12 border-2 border-gray-400 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-900 hover:border-[#1e8e9dee] transition-all duration-200"
          >
            <Twitter size={20} />
          </Link>
          <Link
            href="#"
            className="w-12 h-12 border-2 border-gray-400 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-900 hover:border-[#1e8e9dee] transition-all duration-200"
          >
            <Instagram size={20} />
          </Link>
        </div>

        {/* Divider */}
        <div className="border-t border-[#1e8e9dee] my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
          <div className="flex flex-wrap gap-6">
            <Link
              href="/terms"
              className="hover:text-[#1e8e9dee] transition-colors duration-200"
            >
              Terms of use
            </Link>
            <Link
              href="/contact"
              className="hover:text-[#1e8e9dee] transition-colors duration-200"
            >
              Contact Us
            </Link>
            <Link
              href="/privacy"
              className="hover:text-[#1e8e9dee] transition-colors duration-200"
            >
              Privacy Policy
            </Link>
          </div>
          <div className="text-center md:text-right">
            <p>© 2025 Ministering Hand Incorporated. All rights reserved.</p>
          </div>
        </div>

        <div className="text-center mt-8 pt-6 border-t border-[#1e8e9dee]">
          <p className="text-gray-600 text-sm italic">
            <span className="text-[#1e8e9d] font-semibold">
              "Sheltering Hope, Nurturing Strength"
            </span>
            <br />A 501(c)3 nonprofit organization serving women through cancer
            treatment
          </p>
        </div>
      </div>
    </footer>
  );
}
