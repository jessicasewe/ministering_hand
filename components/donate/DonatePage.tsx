export default function DonatePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center text-white"
        style={{
          backgroundImage: "url('/jar.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/10 z-0"></div>

        <div className="relative z-10 text-center px-6">
          <h1 className="text-6xl lg:text-7xl font-bold mb-6">DONATE</h1>
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

      {/* Donation Description Section (moved below header, above form) */}
      <section className="py-10 px-4 lg:px-0 bg-white">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-1 bg-[#5da4ae] rounded-full"></div>
          </div>
          <h2
            className="text-8xl lg:text-8xl font-medium text-gray-900 mb-4"
            style={{ fontFamily: "Corinthia, cursive" }}
          >
            Your Gift Makes Healing Possible
          </h2>
          <p className="text-lg lg:text-xl text-[#1e8e9d] max-w-xl mx-auto leading-relaxed">
            Ministering Hand Incorporated is a registered 501(c)(3) nonprofit
            organization (EIN: 99-3614985). Your tax-deductible gift helps us
            mitigate non-medical barriers to cancer treatment by providing
            cancer patients with a conducive healing environment.
          </p>
        </div>
      </section>
      {/* Donorbox Embed */}
      <section className="flex justify-center py-12 px-4">
        <div className="w-full flex justify-center">
          <div
            className="w-full"
            style={{ maxWidth: "500px", minWidth: "250px" }}
          >
            <iframe
              src="https://donorbox.org/embed/donate-to-ministering-hands-inc?"
              name="donorbox"
              frameBorder="0"
              scrolling="auto"
              className="w-full min-h-[600px] max-h-[90vh] rounded-xl shadow-lg overflow-auto"
              style={{ maxHeight: "90vh", minHeight: "600px" }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
