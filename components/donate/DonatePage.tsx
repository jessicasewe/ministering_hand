export default function DonatePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <section
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center text-white"
        style={{
          backgroundImage: "url('/jar.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/10 z-0"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-6">
          <h1 className="text-6xl lg:text-7xl font-bold mb-6">DONATE</h1>
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
    </div>
  );
}
