"use client";

import PartnershipSignupSheet from "@/components/partnership/PartnershipSignupDialog";
import { useState } from "react";
import {
  DollarSign,
  Moon,
  Heart,
  Award,
  Utensils,
  Users,
  ShoppingCart,
  Gift,
  Car,
  Target,
  Calendar,
  Clock,
  Home,
  Megaphone,
  Star,
  CheckCircle,
  Mail,
  Phone,
  MessageSquare,
  ArrowRight,
} from "lucide-react";

export default function PartnershipPage() {
  type FormData = {
    fullName: string;
    email: string;
    phone: string;
    contactMethod: string;
    roles: string[];
    timeCommitment: string;
    skills: string;
    joinEmailGroup: string;
  };

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    contactMethod: "Email",
    roles: [],
    timeCommitment: "",
    skills: "",
    joinEmailGroup: "Yes",
  });

  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;
    const { name, value, type } = target;
    const checked = (target as HTMLInputElement).checked;

    if (type === "checkbox" && name === "roles") {
      setFormData((prev) => ({
        ...prev,
        roles: checked
          ? [...prev.roles, value]
          : prev.roles.filter((role) => role !== value),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setSubmitted(true);
    setShowForm(false);
  };

  const eventRoles = [
    {
      icon: <Users className="text-purple-600" size={20} />,
      title: "Event Lead",
      description:
        "Help coordinate the big picture — from timelines to vendor management.",
    },
    {
      icon: <Heart className="text-pink-500" size={20} />,
      title: "Hospitality & Logistics",
      description:
        "Organize meals, housing coordination, or transportation for guests.",
    },
    {
      icon: <DollarSign className="text-green-500" size={20} />,
      title: "Fundraising & Sponsorships",
      description:
        "Reach out to local businesses, faith groups, and civic organizations to secure donations or sponsorships.",
    },
    {
      icon: <Megaphone className="text-blue-500" size={20} />,
      title: "Marketing & Communications",
      description:
        "Spread the word! Manage social media, design flyers, or help with press outreach.",
    },
    {
      icon: <Users className="text-orange-500" size={20} />,
      title: "Volunteer Coordinator",
      description: "Recruit, schedule, and support event-day volunteers.",
    },
    {
      icon: <Star className="text-yellow-500" size={20} />,
      title: "Program Support",
      description:
        "Assist with entertainment, guest speakers, or auction/raffle activities.",
    },
    {
      icon: <Clock className="text-indigo-500" size={20} />,
      title: "Day-of Support",
      description:
        "Be hands-on during the event with setup, check-in, and guest assistance.",
    },
  ];

  const impactStats = [
    {
      number: "150+",
      label: "Women housed annually",
      icon: <Heart className="text-pink-500" size={16} />,
    },
    {
      number: "25",
      label: "Events hosted yearly",
      icon: <Calendar className="text-purple-600" size={16} />,
    },
    {
      number: "500+",
      label: "Volunteers engaged",
      icon: <Users className="text-blue-500" size={16} />,
    },
    {
      number: "$85K",
      label: "Raised last year",
      icon: <DollarSign className="text-green-500" size={16} />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <section
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center text-white"
        style={{
          backgroundImage: "url('/allhands.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/10 z-0"></div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-6xl lg:text-7xl font-bold mb-6">PARTNERSHIPS</h1>
        </div>

        {/* Inward Curve */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-10">
          <svg
            className="relative block w-full h-[100px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 C480,100 960,100 1440,0 L1440,100 L0,100 Z"
              fill="#ffffff"
            />
          </svg>
        </div>
      </section>

      {/* Partnerships Section */}
      <section id="partnerships" className="py-16 px-6 lg:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="text-6xl lg:text-8xl text-black font-normal mb-8"
              style={{ fontFamily: "Corinthia, cursive" }}
            >
              Building Meaningful Connections
            </h2>
            <div className="flex justify-center mb-8">
              <div className="w-16 h-1 bg-[#5da4ae] rounded-full"></div>
            </div>
            <div className="flex justify-center">
              <p className="text-lg lg:text-xl text-[#5da4ae] max-w-4xl text-center leading-relaxed">
                At Ministering Hand, we believe that meaningful care is built
                through meaningful connections. We are seeking partnerships with
                local organizations, medical institutions, faith-based groups,
                and community leaders who share our vision of compassionate,
                whole-person care for patients undergoing cancer treatment.
                <br />
                <br />
                We're especially focused on building strong, collaborative
                relationships with organizations, groups, and individuals
                already supporting cancer patients. Through shared resources,
                mutual referrals, and aligned programs, we aim to create a
                seamless network of care that surrounds each patient with the
                practical help and emotional strength necessary for healing.
                <br />
                <br />
                <span className="text-[#1e8e9d] font-semibold">
                  While we are actively seeking partnerships in Durham and
                  across North Carolina, we welcome collaboration from across
                  the United States and across the globe.
                </span>
              </p>
            </div>
            <div className="flex justify-center mt-8">
              <div className="w-16 h-1 bg-[#5da4ae] rounded-full"></div>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="flex justify-center mt-12">
              <PartnershipSignupSheet />
            </div>
          </div>
        </div>
      </section>

      <section id="fundraising" className="py-16 px-6 lg:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <DollarSign className="text-[#1e8e9d] mr-4" size={40} />
              <h2
                className="text-3xl lg:text-9xl font-medium text-gray-900"
                style={{ fontFamily: "Corinthia, cursive" }}
              >
                Fund Raising
              </h2>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Fundraising Programs
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto">
              We've designed these programs so every dollar you give directly
              impacts women receiving care at Duke and UNC Health Systems.
              Whether you want to give once, monthly, or through a special
              event, there's a way for you to make a difference.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* All fundraising program cards - keeping original content */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <div className="flex items-center mb-4">
                <Moon className="text-[#1e8e9d] mr-3" size={24} />
                <h3 className="text-xl font-bold text-gray-900">
                  Adopt a Night Program
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Here, you as a donor get to sponsor the cost of a patient's
                stay, whether for one night or their entire treatment period.
                Your gift ensures safe, comfortable housing so women can focus
                on healing, not accommodation costs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <div className="flex items-center mb-4">
                <Heart className="text-[#1e8e9d] mr-3" size={24} />
                <h3 className="text-xl font-bold text-gray-900">
                  Hope Sustainers Club
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Our monthly giving community keeps our doors open year-round. As
                a sustainer, you'll receive quarterly updates, personal stories
                from the women you've helped, and the satisfaction of knowing
                you're making healing possible every month.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <div className="flex items-center mb-4">
                <Award className="text-[#1e8e9d] mr-3" size={24} />
                <h3 className="text-xl font-bold text-gray-900">
                  Heart of Healing – In Honor/In Memory Giving
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Make your gift in honor of a loved one, or in memory of someone
                special. We'll send a heartfelt acknowledgment to the person or
                family you choose, letting them know your gift is helping others
                in their time of need.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <div className="flex items-center mb-4">
                <Utensils className="text-[#1e8e9d] mr-3" size={24} />
                <h3 className="text-xl font-bold text-gray-900">
                  Miles for Meals
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                A fun and healthy way to give back! Join our annual 5K walk/run
                and raise pledges to fund nutritious meals for patients. Every
                step you take puts food on the table for women in treatment.
                We'll announce the dates at the beginning of every year.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <div className="flex items-center mb-4">
                <Users className="text-[#1e8e9d] mr-3" size={24} />
                <h3 className="text-xl font-bold text-gray-900">
                  Partner in Care – Community Sponsorships
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Local businesses, civic groups, and faith communities can become
                official partners in care. Your organization's annual pledge
                will be celebrated on our website, at events, and in our
                newsletters.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <div className="flex items-center mb-4">
                <ShoppingCart className="text-[#1e8e9d] mr-3" size={24} />
                <h3 className="text-xl font-bold text-gray-900">
                  Fill the Pantry Drive
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Your donations keep our pantry stocked with healthy, comforting
                meals. Whether you give toward groceries or ship items from our
                wish list, you'll be feeding women and families during their
                most difficult days.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <div className="flex items-center mb-4">
                <Gift className="text-[#1e8e9d] mr-3" size={24} />
                <h3 className="text-xl font-bold text-gray-900">
                  Yuletide in July – Welcome Kits Fund
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Help us provide warm blankets, toiletries, and comfort items for
                women arriving far from home. Your mid-year gift brings
                holiday-style cheer and relief in the heat of summer.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <div className="flex items-center mb-4">
                <Car className="text-[#1e8e9d] mr-3" size={24} />
                <h3 className="text-xl font-bold text-gray-900">
                  Back to Care – Transportation Fund
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Many women travel long distances for treatment. Your gift covers
                fuel cards, rideshares, and shuttle services so patients never
                miss an appointment because of transportation barriers.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <div className="flex items-center mb-4">
                <Target className="text-[#1e8e9d] mr-3" size={24} />
                <h3 className="text-xl font-bold text-gray-900">
                  Circle of Support
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Host your own mini-campaign to support our work — in honor of
                your birthday, a recovery milestone, or just because you believe
                in what we do. We'll give you a toolkit with stories, images,
                and tips to guide you through the process.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <div className="flex items-center mb-4">
                <Calendar className="text-[#1e8e9d] mr-3" size={24} />
                <h3 className="text-xl font-bold text-gray-900">
                  Awareness & Action Month
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Join us every October as we raise funds and awareness for
                women's health. From local business events to pink-themed giving
                challenges, this is a month for the whole community to get
                involved.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <div className="flex items-center mb-4">
                <Clock className="text-[#1e8e9d] mr-3" size={24} />
                <h3 className="text-xl font-bold text-gray-900">
                  24 Hours of Hope – Giving Day
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                One day. One goal. A huge impact. During our annual Giving Day,
                every hour is packed with livestreams, patient stories, and
                matching challenges to keep the momentum going.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <div className="flex items-center mb-4">
                <Home className="text-[#1e8e9d] mr-3" size={24} />
                <h3 className="text-xl font-bold text-gray-900">
                  Season of Shelter – Year-End Appeal
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Close out the year by giving the gift of warmth and shelter.
                Your holiday gift ensures no woman has to face treatment without
                a safe place to stay.
              </p>
            </div>
          </div>
          <div className="mt-16 bg-gray-50 p-8 rounded-lg shadow-inner border border-gray-200">
            <h3 className="text-2xl font-bold text-center text-[#1e8e9d] mb-6">
              ✨ A Note About Our Fundraising Calendar ✨
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              While each of our fundraising activities is highlighted in a
              particular month, please know that{" "}
              <strong>your support is welcome at any time of the year</strong>.
              The monthly themes you see on our calendar are simply for our
              internal planning and organization — they help us spread out
              events and campaigns so we can serve women consistently throughout
              the year.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              There are <strong>no restrictions</strong> on when you can give,
              participate, or get involved. Whether you want to “Adopt a Night”
              in April, join the “Fill the Pantry Drive” in June, or support “24
              Hours of Hope” outside of November, your generosity will always
              make a difference.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Your gift, no matter the time of year, provides meals, housing,
              and vital support for women receiving care at Duke and UNC Health
              Systems.
            </p>

            {/* <div className="text-center mb-8">
              <a
                href="https://www.secufh.org/get-involved/group-volunteer-opportunities"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1e8e9d] font-semibold underline hover:text-[#166d77]"
              >
                View Our Volunteer Opportunities
              </a>
            </div> */}

            <div className="border-t border-gray-300 pt-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">
                Details for Writing to a Team Member
              </h4>
              <p className="text-gray-700 leading-relaxed mb-4">
                To learn more about and sign up for individual service
                opportunities, contact the Director of Volunteer Services or
                another staff member:
              </p>

              {/* Example contact card */}
              <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-md border border-gray-200">
                <img
                  src="/girl.jpg"
                  alt="Staff Member"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <p className="text-lg font-bold text-gray-900">Name Here</p>
                  <p className="text-gray-600">
                    Director of Volunteer Services
                  </p>
                  <p className="text-[#1e8e9d] font-medium">
                    email@example.org
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Event Planning Section */}
      <section id="event-planning" className="py-16 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Success Message */}
          {submitted && (
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="bg-white p-12 rounded-3xl shadow-2xl border border-purple-100">
                <CheckCircle
                  className="mx-auto mb-6 text-green-500"
                  size={64}
                />
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Thank You!
                </h2>
                <p className="text-gray-700 text-lg mb-6">
                  Thank you for joining our event planning team! Our staff will
                  contact you soon with next steps. Together, we'll create
                  events that bring care, comfort, and community to women who
                  need it most.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      fullName: "",
                      email: "",
                      phone: "",
                      contactMethod: "Email",
                      roles: [],
                      timeCommitment: "",
                      skills: "",
                      joinEmailGroup: "Yes",
                    });
                    setShowForm(false);
                  }}
                  className="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors"
                >
                  Submit Another Response
                </button>
              </div>
            </div>
          )}

          {/* Header */}
          {!submitted && (
            <>
              <div className="text-center mb-16">
                <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                  <span
                    className="text-black text-9xl font-normal"
                    style={{ fontFamily: "Corinthia, cursive" }}
                  >
                    Event Planning
                  </span>
                  <br />
                  <span className="text-[#1e8e9d]">& Support</span>
                </h1>
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    Plan With Us, Build With Us
                  </h2>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Our fundraising events are only possible because of
                    dedicated people who bring energy, ideas, and skills to the
                    table. It takes a village to plan an event, and we invite
                    you to be a part of ours.
                  </p>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Left side - Stats and Steps */}
                <div className="space-y-8">
                  <div className="bg-white rounded-3xl p-8 shadow-xl border border-[#bff8ff]">
                    <div className="grid grid-cols-2 gap-6">
                      {impactStats.map((stat, index) => (
                        <div
                          key={index}
                          className="text-center p-4 bg-gradient-to-br from-[#bff8ff] to-pink-50 rounded-2xl"
                        >
                          <div className="flex justify-center mb-2">
                            {stat.icon}
                          </div>
                          <div className="text-2xl font-bold text-gray-900">
                            {stat.number}
                          </div>
                          <div className="text-sm text-gray-600">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white rounded-3xl p-8 shadow-xl border border-[#bff8ff]">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">
                      How to Get Started
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="bg-[#bff8ff] rounded-full p-2 mt-1">
                          <span className="text-[#1e8e9d] font-bold text-sm">
                            1
                          </span>
                        </div>
                        <p className="text-gray-700">
                          Sign Up Below to let us know your interests and
                          skills.
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="bg-[#bff8ff] rounded-full p-2 mt-1">
                          <span className="text-[#1e8e9d] font-bold text-sm">
                            2
                          </span>
                        </div>
                        <p className="text-gray-700">
                          Our team will connect with you to match you to a role
                          that fits your strengths.
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="bg-[#bff8ff] rounded-full p-2 mt-1">
                          <span className="text-[#1e8e9d] font-bold text-sm">
                            3
                          </span>
                        </div>
                        <p className="text-gray-700">
                          Together, we'll plan and deliver impactful events that
                          raise vital funds for housing, meals, and referral
                          services.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right side - Roles or Form */}
                <div className="space-y-8">
                  {!showForm ? (
                    <>
                      <div className="bg-white rounded-3xl p-8 shadow-xl border border-[#bff8ff]">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">
                          Ways You Can Help Plan an Event
                        </h3>
                        <p className="text-gray-700 mb-8">
                          Whether you have an hour a week or you want to take on
                          a leadership role, there's a place for you in event
                          planning:
                        </p>

                        <div className="space-y-4">
                          {eventRoles.map((role, index) => (
                            <div
                              key={index}
                              className="flex items-start space-x-4 p-4 bg-gradient-to-r from-[#bff8ff] to-pink-50 rounded-xl border border-[#bff8ff]"
                            >
                              <div className="flex-shrink-0 mt-1">
                                {role.icon}
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-900 mb-1">
                                  {role.title}
                                </h4>
                                <p className="text-gray-600 text-sm">
                                  {role.description}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="text-center">
                        <p className="text-gray-700 mb-6">
                          No matter your background, you can play a part in
                          creating events that bring hope, comfort, and support
                          to women in need.
                        </p>
                        <button
                          onClick={() => setShowForm(true)}
                          className="bg-[#5da4ae] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#20646d] transition-colors text-lg inline-flex items-center"
                        >
                          Join Our Event Planning Team
                          <ArrowRight className="ml-2" size={20} />
                        </button>
                      </div>
                    </>
                  ) : (
                    /* Form */
                    <div className="bg-white rounded-3xl p-8 shadow-xl border border-[#bff8ff]">
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">
                        Event Planning Volunteer Sign-Up
                      </h3>
                      <p className="text-gray-700 mb-8">
                        Thank you for helping us plan events that raise hope and
                        support for women receiving care at Duke and UNC Health
                        Systems.
                      </p>

                      <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Contact Information */}
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-4">
                            Contact Information
                          </h4>
                          <div className="space-y-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Full Name *
                              </label>
                              <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5da4ae] focus:border-[#5da4ae] text-gray-600"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Email Address *
                              </label>
                              <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-2 border border-[#bff8ff] rounded-lg focus:ring-2 focus:ring-[#5da4ae] focus:border-[#5da4ae] text-gray-600"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Phone Number
                              </label>
                              <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5da4ae]  focus:border-[#5da4ae] text-gray-600"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Preferred Contact Method
                              </label>
                              <div className="space-y-2 text-gray-600">
                                {["Email", "Phone", "Text"].map((method) => (
                                  <label
                                    key={method}
                                    className="flex items-center"
                                  >
                                    <input
                                      type="radio"
                                      name="contactMethod"
                                      value={method}
                                      checked={
                                        formData.contactMethod === method
                                      }
                                      onChange={handleInputChange}
                                      className="mr-2 text-[#20646d] focus:ring-[#5da4ae]"
                                    />
                                    {method}
                                  </label>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Event Planning Roles */}
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-4">
                            Event Planning Roles *
                          </h4>
                          <p className="text-sm text-gray-600 mb-4">
                            Which areas of event planning are you most
                            interested in?
                          </p>
                          <div className="space-y-2">
                            {eventRoles.map((role, index) => (
                              <label
                                key={index}
                                className="flex items-start space-x-3 text-gray-600"
                              >
                                <input
                                  type="checkbox"
                                  name="roles"
                                  value={role.title}
                                  checked={formData.roles.includes(role.title)}
                                  onChange={handleInputChange}
                                  className="mt-1 text-[#20646d] focus:ring-[#5da4ae]"
                                />
                                <div className="flex-1">
                                  <span className="font-medium text-[#5da4ae]">
                                    {role.title}
                                  </span>
                                  <p className="text-sm text-gray-600">
                                    {role.description}
                                  </p>
                                </div>
                              </label>
                            ))}
                          </div>
                        </div>

                        {/* Availability & Skills */}
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-4">
                            Availability & Skills
                          </h4>
                          <div className="space-y-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                How much time are you able to contribute?
                              </label>
                              <div className="space-y-2 text-gray-600">
                                {[
                                  "A few hours a month",
                                  "A few hours a week",
                                  "Available for major events only",
                                ].map((option) => (
                                  <label
                                    key={option}
                                    className="flex items-center"
                                  >
                                    <input
                                      type="radio"
                                      name="timeCommitment"
                                      value={option}
                                      checked={
                                        formData.timeCommitment === option
                                      }
                                      onChange={handleInputChange}
                                      className="mr-2 text-[#20646d] focus:ring-[#5da4ae] "
                                    />
                                    {option}
                                  </label>
                                ))}
                              </div>
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-[#5da4ae] mb-2">
                                Special Skills or Connections
                              </label>
                              <p className="text-sm text-gray-600 mb-2">
                                Do you have any special skills or connections
                                that will be beneficial to our events? (e.g.,
                                vendors, sponsors, design, catering,
                                entertainment)
                              </p>
                              <textarea
                                name="skills"
                                value={formData.skills}
                                onChange={handleInputChange}
                                rows={3}
                                className="w-full px-4 py-2 border border-[#bff8ff] rounded-lg focus:ring-2 focus:ring-[#5da4ae]  focus:border-[#5da4ae] text-gray-600"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Stay Connected */}
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-4">
                            Stay Connected
                          </h4>
                          <label className="flex items-center">
                            <input
                              type="checkbox"
                              name="joinEmailGroup"
                              checked={formData.joinEmailGroup === "Yes"}
                              onChange={(e) =>
                                setFormData((prev) => ({
                                  ...prev,
                                  joinEmailGroup: e.target.checked
                                    ? "Yes"
                                    : "No",
                                }))
                              }
                              className="mr-3 text-[#20646d] focus:ring-[#5da4ae]"
                            />
                            <span className="text-gray-600">
                              Would you like to join our event planning email
                              group for updates and coordination?
                            </span>
                          </label>
                        </div>

                        {/* Submit Button */}
                        <div className="flex space-x-4">
                          <button
                            type="submit"
                            className="flex-1 bg-[#20646d] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#bff8ff] transition-colors"
                          >
                            Submit Application
                          </button>
                          <button
                            type="button"
                            onClick={() => setShowForm(false)}
                            className="px-8 py-3 border border-[#bff8ff] text-gray-700 rounded-full font-semibold hover:bg-[#20646d] transition-colors hover:text-white flex-1"
                          >
                            Back
                          </button>
                        </div>
                      </form>
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
