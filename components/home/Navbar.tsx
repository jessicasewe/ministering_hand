"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

interface NavItem {
  title: string;
  href: string;
}

const navigationItems: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/About" },
  { title: "What We Do", href: "/what-we-do" },
  { title: "Get Involved", href: "/get-involved" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/70 backdrop-blur shadow-sm" : "bg-white"
      } border-b border-gray-100 px-6 py-4 lg:px-12`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo */}
        <Logo />
        <div className="hidden lg:flex lg:items-center lg:space-x-12">
          {navigationItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.title}
                href={item.href}
                className={`text-sm font-medium transition-colors relative px-2 py-1 ${
                  isActive
                    ? "text-[#1e8e9d] after:absolute after:bottom-[-8px] after:left-0 after:right-0 after:h-0.5 after:bg-[#1e8e9d]"
                    : "text-gray-700 hover:text-[#1e8e9d]"
                }`}
              >
                {item.title}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA and Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          <Button className="hidden lg:block border border-[#1e8e9d] bg-transparent text-[#1e8e9d] hover:bg-[#1e8e9d] hover:text-white px-8 py-2 rounded-full transition-colors font-medium">
            Donate
          </Button>

          <button
            className="lg:hidden text-gray-700 hover:text-[#1e8e9d] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden mt-6 pb-6 border-t border-gray-100">
          <div className="pt-6 space-y-4">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className={`block text-base font-medium transition-colors px-2 py-1 ${
                    isActive
                      ? "text-[#1e8e9d] underline underline-offset-4"
                      : "text-gray-700 hover:text-[#1e8e9d]"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.title}
                </Link>
              );
            })}
            <div className="pt-4">
              <Button className="w-full border border-[#1e8e9d] bg-transparent text-[#1e8e9d] hover:bg-[#1e8e9d] hover:text-white px-8 py-3 rounded-full transition-colors font-medium">
                Donate
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
