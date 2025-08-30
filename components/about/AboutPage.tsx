import {
  Target,
  Users,
  User,
  Heart,
  Handshake,
  DollarSign,
  Calendar,
} from "lucide-react";

export default function AboutPage() {
  const boardMembers = [
    {
      name: "Pearl Langhorne",
      position: "BOARD CHAIR",
      imageUrl: "./placeholderpearl.jpg",
    },
    {
      name: "Perry Maison",
      position: "BOARD MEMBER",
      imageUrl: "./perrymaison.jpg",
    },
    {
      name: "Catherine Hardy",
      position: "BOARD SECRETARY",
      imageUrl: "/board/catherine-hardy.jpg",
    },
    {
      name: "LeBone Wiggins",
      position: "TREASURER",
      imageUrl: "/board/lebone-wiggins.jpg",
    },
    {
      name: "Dawn Kum-Gray",
      position: "BOARD MEMBER",
      imageUrl: "/board/dawn-kum-gray.jpg",
    },
  ];

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

      <section className="py-16 px-6 lg:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
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

          <div className="text-center mt-20">
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
                Ministering Hand Incorporated is a nonprofit organization
                dedicated to supporting women undergoing cancer treatment within
                the Duke and UNC Healthcare system by providing safe housing and
                transportation assistance throughout the course of treatment.
                Our services include safe, temporary housing tailored to each
                patient's treatment duration and the provision of simple,
                nutritious meals. Built on a strong foundation of experience and
                connection within the North Carolina cancer care community,
                Ministering Hand Incorporated is committed to providing referral
                services and resources to alleviate patients’ emotional,
                financial, counseling and social support needs. Focused on women
                facing financial hardship, distance from care, and lack of
                support, we strive to offer a nurturing environment to ease the
                non-medical burdens of cancer so patients can focus fully on
                healing. In time, we plan to expand our services to include male
                patients and broader healthcare networks. By addressing barriers
                to healthcare, we strive to ensure that no woman fights cancer
                alone.
              </p>
            </div>
            <div className="flex justify-center mt-8">
              <div className="w-16 h-1 bg-[#5da4ae] rounded-full"></div>
            </div>
          </div>
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
                        className="text-4xl font-bold mb-1"
                        style={{ fontFamily: "Corinthia, cursive" }}
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
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10">
          <div className="w-full lg:w-1/2">
            <img
              src="./placeholderpearl.jpg"
              alt="Pearl Langhorne"
              className="rounded-2xl shadow-lg object-cover w-full h-[500px]"
            />
          </div>
          <div className="w-full lg:w-1/2 bg-gradient-to-r from-[#1e8e9d]/10 to-[#1e8e9d]/5 p-8 lg:p-10 rounded-2xl border border-[#1e8e9d]/20 shadow-md text-left">
            <div className="flex justify-center mb-8">
              <div className="w-16 h-1 bg-[#5da4ae] rounded-full"></div>
            </div>
            <h2
              className="text-6xl font-normal text-black mb-2"
              style={{ fontFamily: "Corinthia, cursive" }}
            >
              Pearl Langhorne
            </h2>
            <p className="text-[#1e8e9d] font-extra text-lg mb-6">
              Founder & Board Chair
            </p>
            <div className="text-gray-700 space-y-5 leading-relaxed text-[17px]">
              <p>
                With over two decades of experience in oncology patient care,
                Ms. Pearl Langhorne brings deep compassion, firsthand insight,
                and unwavering dedication to her role as the founder of
                Ministering Hand Incorporated.
              </p>
              <p>
                For 21 years, Pearl served as a manager at the UNC Cancer
                Center, where she worked closely with women battling cancer and
                witnessed the many obstacles they face, from emotional distress
                to financial hardship and housing insecurity.
              </p>
              <p>
                Moved by the recurring stories of women traveling long distances
                alone, navigating treatment without support, or struggling to
                afford basic needs, Ms. Langhorne was inspired to act. She
                founded Ministering Hand with a singular goal: to create a safe,
                supportive, and dignified space for women undergoing cancer
                treatment, particularly those lacking family support, stable
                income, or proximity to care.
              </p>
              <p>
                Ms. Langhorne's leadership is grounded in both professional
                expertise and personal empathy, enabling her to build a
                mission-driven organization rooted in healing, hope, and
                holistic care.
              </p>
            </div>
            <div className="flex justify-center mb-8">
              <div className="w-16 h-1 bg-[#5da4ae] rounded-full"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
