"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  ChevronDown,
  Target,
  Users,
  Handshake,
  User,
  DollarSign,
  Calendar,
  Home,
  Car,
  HeadphonesIcon,
  Heart,
  Utensils,
} from "lucide-react";
import { Logo } from "./Logo";

interface DropdownItem {
  title: string;
  href: string;
  icon: React.ReactNode;
}

interface NavItem {
  title: string;
  href?: string;
  dropdown?: DropdownItem[];
}

const navigationItems: NavItem[] = [
  { title: "Home", href: "/" },
  {
    title: "About Us",
    dropdown: [
      {
        title: "Our Mission and Vision",
        href: "/about",
        icon: <Target size={16} />,
      },
      { title: "Our Board", href: "/about#board", icon: <Users size={16} /> },
      {
        title: "Meet the Founder",
        href: "/about#founder",
        icon: <User size={16} />,
      },
      {
        title: "Partnerships",
        href: "/partnership",
        icon: <Handshake size={16} />,
      },
      {
        title: "Fundraising",
        href: "/partnership#fundraising",
        icon: <DollarSign size={16} />,
      },
      {
        title: "Event Planning",
        href: "/partnership#event-planning",
        icon: <Calendar size={16} />,
      },
    ],
  },
  {
    title: "What We Do",
    dropdown: [
      {
        title: "Housing",
        href: "/what-we-do",
        icon: <Home size={16} />,
      },
      {
        title: "Transportation",
        href: "/what-we-do#transportation",
        icon: <Car size={16} />,
      },
      {
        title: "Referral Services",
        href: "/what-we-do#referral",
        icon: <HeadphonesIcon size={16} />,
      },
    ],
  },
  {
    title: "Get Involved",
    href: "/get-involved",
    dropdown: [
      {
        title: "Volunteer",
        href: "/get-involved#volunteer",
        icon: <Heart size={16} />,
      },
      {
        title: "Provide a Meal",
        href: "/get-involved/provide-meal",
        icon: <Utensils size={16} />,
      },
    ],
  },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);
  const [mobileDropdowns, setMobileDropdowns] = useState<{
    [key: string]: boolean;
  }>({});
  const pathname = usePathname();
  const dropdownTimeouts = useRef<{ [key: string]: NodeJS.Timeout }>({});

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Clean up timeouts on unmount
  useEffect(() => {
    return () => {
      Object.values(dropdownTimeouts.current).forEach((timeout) =>
        clearTimeout(timeout)
      );
    };
  }, []);

  const handleDropdownEnter = (title: string) => {
    if (dropdownTimeouts.current[title]) {
      clearTimeout(dropdownTimeouts.current[title]);
    }
    setHoveredDropdown(title);
  };

  const handleDropdownLeave = (title: string) => {
    dropdownTimeouts.current[title] = setTimeout(() => {
      setHoveredDropdown(null);
    }, 150);
  };

  // const handleMobileDropdownToggle = (title: string) => {
  //   setMobileDropdowns((prev) => ({
  //     ...prev,
  //     [title]: !prev[title],
  //   }));
  // };

  const handleMobileDropdownToggle = (title: string) => {
    setMobileDropdowns((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const isItemActive = (item: NavItem) => {
    if (item.href) return pathname === item.href;
    if (item.dropdown) {
      return item.dropdown.some(
        (dropdownItem) => pathname === dropdownItem.href
      );
    }
    return false;
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      } px-6 py-4 lg:px-12`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo */}
        <Logo />
        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:space-x-12">
          {navigationItems.map((item) => {
            const isActive = isItemActive(item);

            if (item.dropdown) {
              return (
                <div
                  key={item.title}
                  className="relative"
                  onMouseEnter={() => handleDropdownEnter(item.title)}
                  onMouseLeave={() => handleDropdownLeave(item.title)}
                >
                  <Link
                    href="#"
                    className={`flex items-center text-sm font-medium transition-colors relative px-2 py-1 ${
                      isActive
                        ? "text-[#1e8e9d] after:absolute after:bottom-[-8px] after:left-0 after:right-0 after:h-0.5 after:bg-[#1e8e9d]"
                        : "text-gray-700 hover:text-[#1e8e9d]"
                    }`}
                  >
                    {item.title}
                    <ChevronDown
                      size={16}
                      className={`ml-1 transition-transform duration-200 ${
                        hoveredDropdown === item.title ? "rotate-180" : ""
                      }`}
                    />
                  </Link>

                  {hoveredDropdown === item.title && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-md border border-gray-200/50 rounded-xl shadow-xl py-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.title}
                          href={dropdownItem.href}
                          className={`flex items-center gap-3 px-4 py-3 text-sm transition-all duration-200 rounded-lg mx-2 ${
                            pathname === dropdownItem.href
                              ? "text-[#1e8e9d] bg-[#1e8e9d]/10 shadow-sm"
                              : "text-gray-700 hover:text-[#1e8e9d] hover:bg-gray-50/80 hover:translate-x-1"
                          }`}
                        >
                          <div
                            className={`transition-colors ${
                              pathname === dropdownItem.href
                                ? "text-[#1e8e9d]"
                                : "text-gray-500"
                            }`}
                          >
                            {dropdownItem.icon}
                          </div>
                          {dropdownItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.title}
                href={item.href!}
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
          <Link href="/donate" passHref>
            <Button className="hidden lg:block border border-[#1e8e9d] bg-transparent text-[#1e8e9d] hover:bg-[#1e8e9d] hover:text-white px-8 py-2 rounded-full transition-colors font-medium">
              Donate
            </Button>
          </Link>

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
          <div className="pt-6 space-y-2">
            {navigationItems.map((item) => {
              const isActive = isItemActive(item);

              if (item.dropdown) {
                return (
                  <div key={item.title} className="space-y-1">
                    <button
                      onClick={() => handleMobileDropdownToggle(item.title)}
                      className={`flex items-center justify-between w-full text-left text-base font-medium transition-colors px-2 py-2 ${
                        isActive
                          ? "text-[#1e8e9d]"
                          : "text-gray-700 hover:text-[#1e8e9d]"
                      }`}
                    >
                      {item.title}
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${
                          mobileDropdowns[item.title] ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {mobileDropdowns[item.title] && (
                      <div className="pl-4 space-y-1">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.title}
                            href={dropdownItem.href}
                            className={`flex items-center gap-3 text-sm transition-colors px-2 py-2 rounded-lg ${
                              pathname === dropdownItem.href
                                ? "text-[#1e8e9d] font-medium bg-[#1e8e9d]/10"
                                : "text-gray-600 hover:text-[#1e8e9d] hover:bg-gray-50/80"
                            }`}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <div
                              className={`transition-colors ${
                                pathname === dropdownItem.href
                                  ? "text-[#1e8e9d]"
                                  : "text-gray-400"
                              }`}
                            >
                              {dropdownItem.icon}
                            </div>
                            {dropdownItem.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.title}
                  href={item.href!}
                  className={`block text-base font-medium transition-colors px-2 py-2 ${
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
