"use client";

import { useState } from "react";
import {
  Target,
  Users,
  User,
  Heart,
  Handshake,
  DollarSign,
  Calendar,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function AboutPage() {
  const boardMembers = [
    {
      name: "Pearl Langhorne",
      position: "BOARD CHAIR",
      imageUrl: "/pearl.png",
    },
    {
      name: "Perry Maison",
      position: "BOARD MEMBER",
      imageUrl: "./perrymaison.jpg",
    },
    {
      name: "Catherine Hardy",
      position: "BOARD SECRETARY",
      imageUrl: "/Catherine.jpeg",
    },
    {
      name: "LeBone Wiggins",
      position: "TREASURER",
      imageUrl: "/board/lebone-wiggins.jpg",
    },
    {
      name: "Dawn Kum-Gray",
      position: "BOARD MEMBER",
      imageUrl: "/Dawn.jpeg",
    },
  ];

  const featuredBoardMembers = [
    {
      name: "Pearl Langhorne",
      position: "Founder & Board Chair",
      imageUrl: "/pearl.png",
      bio: [
        "With over two decades of experience in oncology patient care, Ms. Pearl Langhorne brings deep compassion, firsthand insight, and unwavering dedication to her role as the founder of Ministering Hand Incorporated.",
        "For 21 years, Pearl served as a manager at the UNC Cancer Center, where she worked closely with women battling cancer and witnessed the many obstacles they face, from emotional distress to financial hardship and housing insecurity.",
        "Moved by the recurring stories of women traveling long distances alone, navigating treatment without support, or struggling to afford basic needs, Ms. Langhorne was inspired to act. She founded Ministering Hand with a singular goal: to create a safe, supportive, and dignified space for women undergoing cancer treatment, particularly those lacking family support, stable income, or proximity to care.",
        "Ms. Langhorne's leadership is grounded in both professional expertise and personal empathy, enabling her to build a mission-driven organization rooted in healing, hope, and holistic care.",
      ],
    },
    {
      name: "Dawn Kum-Gray",
      position: "Board Member",
      imageUrl: "/Dawn.jpeg",
      bio: [
        "With a lifelong commitment to education and community service, Ms. Dawn Kum Gray brings vision, leadership, and compassionate advocacy to her role on the board of Ministering Hand Incorporated.",
        "Ms. Gray has spent decades shaping educational opportunities for youth and adults, founding and operating a school for 17 years that translated her dissertation into a real-world program, impacting countless students with special needs. Her work extends beyond education into mental health advocacy, as she is currently establishing group homes for individuals facing mental health challenges. She also serves on the board of Cedar Hill Medical Center.",
        "A prolific leader and grant writer, Ms. Gray recently secured funding for emergency preparedness programs at her church and continues to leverage her expertise to uplift communities. Her dedication to service is matched by her belief in empathy, inclusion, and creating spaces where individuals are seen, supported, and valued.",
        "Grounded in both professional accomplishment and personal integrity, Ms. Gray's leadership exemplifies thoughtful guidance, lifelong learning, and an unwavering commitment to nurturing others.",
        "Beyond her professional achievements, Ms. Gray is a lifelong learner with a love for reading, gardening, travel, and open-air safaris. Her leadership is grounded in thoughtful reflection, wit, and a caring spirit. She lives by the belief that understanding and empathy can change the world. She continuously strives to know, respect, and uplift those who are different from herself.",
        "Ms. Gray's personal mission is to live a purposeful life serving others, and her leadership embodies both compassion and vision, making her a driving force for positive change in education, mental health advocacy, and community development.",
      ],
    },
    {
      name: "Perry Maison",
      position: "Board Member",
      imageUrl: "./perrymaison.jpg",
      bio: [
        "With a lifelong commitment to ministry, leadership, and spiritual mentorship, Perry Maison brings vision and guidance to the Board. From his first encounter with Jesus Christ in 1988 to a transformative supernatural encounter in 2006, Perry Maison has dedicated his life to helping others connect to the reality of God and their destinies.",
        "Perry is the Co-Founder and Executive Director of Shekinah Glory International Inc. in Durham, NC, and serves as a Servant Leader at NewPath Church in Raleigh and Durham. He also provides Apostolic oversight to Organic Church in Maryland and serves on the board of NextGen in Maryland. A sought-after mentor and coach, he has counseled business leaders and ministry leaders both locally and internationally, including in Geneva, Switzerland; London, England; and France.",
        'A graduate of Grace Bible College with degrees in Biblical Studies and Ministerial Services, Perry\'s preferred title of "Kingdom Strategist" was given to him by the Holy Spirit during a time of prayer. His work is centered on raising "Oaks of Righteousness" and imparting the knowledge of God\'s glory, fostering spiritual growth, and encouraging an intimate relationship with God for all he serves.',
        "Beyond his ministry, Perry is deeply committed to family, residing in Durham, North Carolina with his wife, Michelle, and their children. His leadership is characterized by humility, service, and a steadfast commitment to helping others realize their divine calling, making him a driving force for spiritual and community transformation.",
      ],
    },
  ];

  const [currentMemberIndex, setCurrentMemberIndex] = useState(0);

  const nextMember = () => {
    setCurrentMemberIndex((prev) =>
      prev === featuredBoardMembers.length - 1 ? 0 : prev + 1
    );
  };

  const prevMember = () => {
    setCurrentMemberIndex((prev) =>
      prev === 0 ? featuredBoardMembers.length - 1 : prev - 1
    );
  };

  const currentMember = featuredBoardMembers[currentMemberIndex];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <section
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center text-white"
        style={{
          backgroundImage: "url('/holdinghands.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/10 z-0"></div>

        <div className="relative z-10 text-center px-6">
          <h1 className="text-6xl lg:text-7xl font-bold mb-6">
            ABOUT <span className="text-[#1e8e9d]">US</span>
          </h1>
        </div>

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

      {/* Mission Section */}
      <section
        id="mission"
        className="py-16 px-6 lg:px-12 bg-white scroll-mt-24"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h2
              className="text-6xl lg:text-8xl text-black font-normal mb-8"
              style={{ fontFamily: "Corinthia, cursive" }}
            >
              Our Mission
            </h2>
            <div className="flex justify-center mb-8">
              <div className="w-16 h-1 bg-[#5da4ae] rounded-full"></div>
            </div>
            <div className="flex justify-center">
              <p className="text-lg lg:text-xl text-[#5da4ae] max-w-4xl text-center leading-relaxed">
                To provide safe housing and emergency transportation assistance
                to women undergoing cancer treatment within the Duke and UNC
                Healthcare systems.
              </p>
            </div>
            <div className="flex justify-center mt-8">
              <div className="w-16 h-1 bg-[#5da4ae] rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section
        id="vision"
        className="py-16 px-6 lg:px-12 bg-white scroll-mt-24"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h2
              className="text-6xl lg:text-8xl text-black font-normal mb-8"
              style={{ fontFamily: "Corinthia, cursive" }}
            >
              Our Vision
            </h2>
            <div className="flex justify-center mb-8">
              <div className="w-16 h-1 bg-[#5da4ae] rounded-full"></div>
            </div>
            <div className="flex justify-center">
              <p className="text-lg lg:text-xl text-[#5da4ae] max-w-4xl text-center leading-relaxed">
                We envision a world where no woman faces cancer alone, where
                every woman has access to safe, supportive, and affordable
                housing, surrounded by compassion, empowered by resources, and
                uplifted by a caring community as she walks the path to healing
                with dignity and strength.
              </p>
            </div>
            <div className="flex justify-center mt-8">
              <div className="w-16 h-1 bg-[#5da4ae] rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section
        id="about-us"
        className="py-16 px-6 lg:px-12 bg-white scroll-mt-24"
      >
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2
            className="text-6xl lg:text-8xl text-black font-normal mb-8"
            style={{ fontFamily: "Corinthia, cursive" }}
          >
            About Us
          </h2>
          <div className="flex justify-center mb-8">
            <div className="w-16 h-1 bg-[#5da4ae] rounded-full"></div>
          </div>
          <p className="text-lg lg:text-xl text-[#5da4ae] max-w-3xl mx-auto text-center leading-relaxed">
            Ministering Hand Incorporated is a nonprofit, 501(c)(3)
            organization, dedicated to supporting women undergoing cancer
            treatment within the Duke and UNC Healthcare systems. Our services
            include safe, temporary housing tailored to each patient's treatment
            duration. Built on a strong foundation of experience and connection
            within the North Carolina cancer care community, Ministering Hand
            Incorporated is committed to providing referral services and
            resources to alleviate patients’ emotional, financial, counseling
            and social support needs. Focused on women facing financial
            hardship, distance from care, and lack of support, we strive to
            offer a nurturing environment to ease the non-medical burdens of
            cancer so patients can focus fully on healing. In time, we plan to
            expand our services to include male patients and broader healthcare
            networks. By addressing barriers to healthcare, we strive to ensure
            that no woman fights cancer alone.
          </p>
        </div>
      </section>

      <section id="board" className="py-16 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center mb-12">
            <Users className="text-[#1e8e9d] mr-4" size={32} />
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              OUR BOARD
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {boardMembers.map((member, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-96"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center bg-gray-300"
                  style={{
                    backgroundImage: `url('${member.imageUrl}')`,
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#1e8e9d]/80 via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3
                        className="text-4xl font-medium mb-1"
                        // style={{ fontFamily: "Corinthia, cursive" }}
                      >
                        {member.name}
                      </h3>
                      <p className="text-black font-normal text-sm mb-3">
                        {member.position}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="founder" className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Carousel Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Meet the Board
            </h2>
            <div className="flex justify-center items-center gap-4">
              <button
                onClick={prevMember}
                className="p-2 rounded-full border border-[#1e8e9d] hover:bg-[#1e8e9d] hover:text-white transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <span className="text-sm text-gray-600">
                {currentMemberIndex + 1} of {featuredBoardMembers.length}
              </span>
              <button
                onClick={nextMember}
                className="p-2 rounded-full border border-[#1e8e9d] hover:bg-[#1e8e9d] hover:text-white transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Carousel Content */}
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="w-full lg:w-1/2">
              <img
                src={currentMember.imageUrl || "/placeholder.jpg"}
                alt={currentMember.name}
                className="rounded-2xl shadow-lg object-cover w-full h-[500px]"
              />
            </div>
            <div className="w-full lg:w-1/2 bg-gradient-to-r from-[#1e8e9d]/10 to-[#1e8e9d]/5 p-8 lg:p-10 rounded-2xl border border-[#1e8e9d]/20 shadow-md text-left h-[500px] flex flex-col">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-1 bg-[#5da4ae] rounded-full"></div>
              </div>
              <h2 className="text-3xl font-normal text-black mb-2">
                {currentMember.name}
              </h2>
              <p className="text-[#1e8e9d] font-extra text-lg mb-6">
                {currentMember.position}
              </p>
              <div className="text-gray-700 space-y-5 leading-relaxed text-[17px] flex-1 overflow-y-auto pr-4">
                {currentMember.bio.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              <div className="flex justify-center mt-6">
                <div className="w-16 h-1 bg-[#5da4ae] rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
