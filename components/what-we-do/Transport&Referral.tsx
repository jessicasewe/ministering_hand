import Image from "next/image";
import Driver from "@/public/driver.png";

export default function HeroWithReferral() {
  return (
    <>
      {/* Hero Section */}
      <section id="transportation" className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h1
                className="text-9xl lg:text-9xl font-medium text-gray-900"
                style={{ fontFamily: "Corinthia, cursive" }}
              >
                Transportation
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                At Ministering Hand, we are committed to providing safe,
                accessible and reliable transportation to and from medical
                appointments, ensuring that patients can focus on healing, not
                logistics.
              </p>
            </div>

            {/* Right Content - Creative Image Layout */}
            <div className="relative">
              <div className="relative max-w-xl ml-auto rounded-3xl overflow-hidden shadow-lg">
                <Image
                  src={Driver}
                  alt="Community members"
                  className="w-full h-[400px] object-cover"
                  width={800}
                  height={400}
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Referral Details Section */}
      <section id="referral" className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="bg-[#5da4ae] rounded-2xl p-8 shadow-lg relative">
              {/* Sticky Note with Pin */}
              <div className="absolute -top-10 left-8 flex flex-col items-center z-10">
                {/* Pin SVG */}
                <div className="relative">
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 32 32"
                    fill="none"
                    className="drop-shadow-md"
                  >
                    <circle
                      cx="16"
                      cy="8"
                      r="6"
                      fill="#eab308"
                      stroke="#b45309"
                      strokeWidth="2"
                    />
                    <rect
                      x="14.5"
                      y="14"
                      width="3"
                      height="12"
                      rx="1.5"
                      fill="#b45309"
                    />
                  </svg>
                </div>

                {/* Sticky Note Label */}
                <div
                  className="bg-[#fef9c3] text-[#004e68] px-5 py-2 mt-[-8px] rounded-md text-6xl font-semibold shadow-lg border border-yellow-300 rotate-[-2deg]"
                  style={{ fontFamily: "Corinthia, cursive" }}
                >
                  Referral Services
                </div>
              </div>

              {/* Content */}
              <div className="flex items-start gap-6 mt-16">
                <div className="flex-1">
                  <p className="text-white text-lg leading-relaxed">
                    At Ministering Hand, we believe healing is not
                    one-dimensional. True healing touches every part of a
                    patient’s life; emotional, financial, spiritual, and
                    communal. Through our thoughtful referral services, we
                    connect our guests with trusted resources that extend care
                    beyond the clinic: counseling, financial assistance,
                    wellness programs, and more. At Ministering Hand, we care
                    about the whole person.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
