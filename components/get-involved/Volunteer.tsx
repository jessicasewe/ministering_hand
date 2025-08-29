"use client";

import { useState } from "react";

export default function Volunteer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    volunteerType: "",
    experience: "",
    availability: "",
    message: "",
  });

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("Volunteer application submitted:", formData);
    setIsModalOpen(false);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      volunteerType: "",
      experience: "",
      availability: "",
      message: "",
    });
    alert(
      "Thank you for your interest in volunteering! We will contact you soon."
    );
  };

  const [activeMealTab, setActiveMealTab] = useState<
    "dinner" | "merry" | "weekend"
  >("dinner");

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero */}
      <section
        id="volunteer"
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/getinvolved.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/10 z-0"></div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-6xl lg:text-7xl font-bold mb-6">GET INVOLVED</h1>
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

      {/* Volunteer Section */}
      <section className="py-20 px-6 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2
              className="text-8xl font-medium text-gray-900 mb-6"
              style={{ fontFamily: "Corinthia, cursive" }}
            >
              Become a Volunteer
            </h2>
            <p className="text-lg text-gray-700 mb-10 leading-relaxed">
              <span className="text-3xl font-bold text-[#1e8e9d]">
                Community Support Volunteers
              </span>{" "}
              <br />
              Ministering Hand welcomes warm-hearted individuals who wish to
              offer emotional, spiritual, or practical support to our guests
              undergoing cancer treatment. Whether it's sharing a prayer,
              offering companionship, organizing a cookout, or simply being
              present — your time and kindness help create the sense of
              community and care that our guests need most. If you feel called
              to be a comforting presence or lend a hand in simple, meaningful
              ways, we'd love to have you join us.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              <span className="text-3xl font-bold text-[#1e8e9d]">
                Professional Volunteers
              </span>{" "}
              <br />
              We also invite professionals who are passionate about our mission
              to contribute their skills in a volunteer capacity. We are
              currently seeking support in areas such as grant writing,
              administration, legal assistance, communications, and social work.
              Your expertise can play a key role in helping us build a strong
              foundation and expand our impact. Whether you can give a few hours
              a month or lead a special project, your contribution will be
              deeply valued.
            </p>

            <div className="flex gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-[#5da4ae] hover:bg-[#20646d] text-white px-6 py-3 rounded-lg font-semibold shadow-md transition flex items-center gap-2"
              >
                Volunteer
                <span>↗</span>
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <div className="w-[500px] h-[500px]">
              <img
                src="/driver.png"
                alt="Volunteers"
                style={{
                  clipPath:
                    "polygon(50% 0%,74% 21%,98% 35%,89% 65%,86% 98%,50% 85%,16% 98%,13% 66%,2% 35%,25% 22%)",
                }}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Provide a Meal Section */}
      <section className="py-20 px-6 lg:px-16 bg-white" id="provide-meal">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-4">
              Ways to Serve a Meal
            </h2>
            <div className="w-24 h-1 bg-[#5da4ae] mx-auto"></div>
          </div>

          {/* Three Options - Now Clickable Tabs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <button
              onClick={() => setActiveMealTab("dinner")}
              className={`text-center p-4 rounded-lg transition-all ${
                activeMealTab === "dinner"
                  ? "bg-[#5da4ae] text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              <h3 className="text-xl font-semibold mb-2">Provide a Dinner</h3>
            </button>
            <button
              onClick={() => setActiveMealTab("merry")}
              className={`text-center p-4 rounded-lg transition-all ${
                activeMealTab === "merry"
                  ? "bg-[#5da4ae] text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              <h3 className="text-xl font-semibold mb-2">
                Contribute to Merry Meals
              </h3>
            </button>
            <button
              onClick={() => setActiveMealTab("weekend")}
              className={`text-center p-4 rounded-lg transition-all ${
                activeMealTab === "weekend"
                  ? "bg-[#5da4ae] text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              <h3 className="text-xl font-semibold mb-2">
                Drop Off Weekend Lunches
              </h3>
            </button>
          </div>

          {/* Dynamic Content Based on Active Tab */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div>
              {activeMealTab === "dinner" && (
                <>
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    Bring Dinner for the Whole House
                  </h2>
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    Meals offer much-needed hospitality at the end of a long day
                    at the hospital and ensure that the Family House is "more
                    than just a place to stay." Let's show some love from our
                    community!
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Here is how you can help:
                  </h3>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#5da4ae] rounded-full mt-3"></div>
                      <p className="text-gray-700">
                        <strong>
                          Dinners are served at 5:30, Monday through Thursday.
                        </strong>
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#5da4ae] rounded-full mt-3"></div>
                      <p className="text-gray-700">
                        Use this{" "}
                        <span className="text-[#5da4ae] underline cursor-pointer">
                          online calendar
                        </span>{" "}
                        to sign up for a date that works for you.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#5da4ae] rounded-full mt-3"></div>
                      <div className="text-gray-700">
                        <p className="mb-2">
                          When you register, you will be asked to indicate:
                        </p>
                        <ul className="ml-6 space-y-1 text-gray-600">
                          <li>• Group name (if applicable)</li>
                          <li>• Planned menu</li>
                          <li>
                            • Whether you are a first-time volunteer/group
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#5da4ae] rounded-full mt-3"></div>
                      <p className="text-gray-700">
                        <strong>Send 3-8 volunteers</strong> to serve the meal
                        at 5:30 in the Family House kitchen.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#5da4ae] rounded-full mt-3"></div>
                      <p className="text-gray-700">
                        <strong>
                          Provide dinner and drinks for 45-50 people.
                        </strong>
                      </p>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Helpful Tips:
                  </h3>
                  <div className="space-y-2">
                    <p className="text-[#5da4ae] underline cursor-pointer">
                      Family House Dinner Instructions - Recipe for Success
                    </p>
                    <p className="text-gray-700">
                      Groups need to send 3-8 volunteers to serve the meal.
                    </p>
                  </div>
                </>
              )}

              {activeMealTab === "merry" && (
                <>
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    Contribute to Merry Meals
                  </h2>
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    Join our Merry Meals program and help bring joy and
                    nourishment to families during their stay. Your contribution
                    helps create special moments and memorable experiences for
                    our guests.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    How Merry Meals works:
                  </h3>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#5da4ae] rounded-full mt-3"></div>
                      <p className="text-gray-700">
                        Support special holiday and celebration meals throughout
                        the year.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#5da4ae] rounded-full mt-3"></div>
                      <p className="text-gray-700">
                        Contribute financially or donate specific items for
                        themed meals.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#5da4ae] rounded-full mt-3"></div>
                      <p className="text-gray-700">
                        Help create festive atmospheres during difficult times
                        for families.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#5da4ae] rounded-full mt-3"></div>
                      <p className="text-gray-700">
                        Participate in organizing special events and
                        celebrations.
                      </p>
                    </div>
                  </div>

                  <div className="bg-[#5da4ae]/10 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Get Involved
                    </h4>
                    <p className="text-gray-700">
                      Contact us to learn about upcoming Merry Meals
                      opportunities and how you can make a difference in
                      creating joyful moments for our families.
                    </p>
                  </div>
                </>
              )}

              {activeMealTab === "weekend" && (
                <>
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    Drop Off Weekend Lunches
                  </h2>
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    Weekends can be especially challenging for families as
                    hospital services are limited and dining options may be
                    reduced. Your weekend lunch donations provide comfort and
                    convenience when families need it most.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Weekend lunch guidelines:
                  </h3>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#5da4ae] rounded-full mt-3"></div>
                      <p className="text-gray-700">
                        <strong>Drop off times:</strong> Saturdays and Sundays
                        between 11:00 AM - 1:00 PM.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#5da4ae] rounded-full mt-3"></div>
                      <p className="text-gray-700">
                        Provide lunch for approximately 30-40 people.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#5da4ae] rounded-full mt-3"></div>
                      <p className="text-gray-700">
                        No volunteers needed to serve - simply drop off
                        ready-to-eat meals.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#5da4ae] rounded-full mt-3"></div>
                      <p className="text-gray-700">
                        Coordinate with staff for delivery timing and any
                        special requirements.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#5da4ae] rounded-full mt-3"></div>
                      <p className="text-gray-700">
                        Consider easy-to-serve options like sandwiches, salads,
                        or individually packaged meals.
                      </p>
                    </div>
                  </div>

                  <div className="bg-[#5da4ae]/10 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Contact Us
                    </h4>
                    <p className="text-gray-700">
                      Please reach out to coordinate your weekend lunch donation
                      and ensure we can properly receive and serve your generous
                      contribution.
                    </p>
                  </div>
                </>
              )}
            </div>

            {/* Right Content - Image placeholder */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-md">
                <div className="bg-gray-200 rounded-lg h-80 flex items-center justify-center">
                  <p className="text-gray-500 text-center">
                    Meal Service
                    <br />
                    Image Placeholder
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-[#5da4ae]">
                  Volunteer Application
                </h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              {/* Personal Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Personal Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border text-gray-600 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5da4ae]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border text-gray-600 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5da4ae]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border text-gray-600 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5da4ae]"
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
                      className="w-full px-3 py-2 border text-gray-600 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5da4ae]"
                    />
                  </div>
                </div>
              </div>

              {/* Volunteer Type */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Volunteer Interest
                </h3>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Type of Volunteering *
                  </label>
                  <select
                    name="volunteerType"
                    value={formData.volunteerType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border text-gray-600 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5da4ae]"
                  >
                    <option value="">Select volunteer type</option>
                    <option value="community-support">
                      Community Support Volunteer
                    </option>
                    <option value="professional">Professional Volunteer</option>
                    <option value="both">Both</option>
                  </select>
                </div>
              </div>

              {/* Professional Skills (if applicable) */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Professional Skills/Experience (if applicable)
                </label>
                <textarea
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  placeholder="Please describe any relevant professional skills (grant writing, administration, legal, communications, social work, etc.)"
                  rows={3}
                  className="w-full px-3 py-2 border text-gray-600 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5da4ae]"
                />
              </div>

              {/* Availability */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Availability
                </label>
                <textarea
                  name="availability"
                  value={formData.availability}
                  onChange={handleInputChange}
                  placeholder="Please describe your availability (days, times, frequency)"
                  rows={2}
                  className="w-full px-3 py-2 border text-gray-600 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5da4ae]"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Why do you want to volunteer with Ministering Hand?
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us what motivates you to volunteer and how you'd like to help our mission"
                  rows={4}
                  className="w-full px-3 py-2 border text-gray-600 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5da4ae]"
                />
              </div>

              {/* Submit Button */}
              <div className="flex gap-4 pt-4">
                <button
                  onClick={handleSubmit}
                  className="bg-[#5da4ae] hover:bg-[#20646d] text-white px-6 py-3 rounded-lg font-semibold shadow-md transition flex-1"
                >
                  Submit Application
                </button>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-6 py-3 rounded-lg font-semibold shadow-md transition"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
