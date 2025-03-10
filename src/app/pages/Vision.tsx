const Vision = () => {
  const visionPoints = [
    {
      title: "Global Impact",
      description:
        "Transforming businesses worldwide through innovative BPO solutions and digital excellence.",
      icon: "🌍",
    },
    {
      title: "Digital Innovation",
      description:
        "Pioneering cutting-edge technologies to revolutionize business processes and enhance efficiency.",
      icon: "💡",
    },
    {
      title: "Customer Success",
      description:
        "Dedicated to delivering exceptional value and ensuring our clients' sustainable growth and success.",
      icon: "🎯",
    },
    {
      title: "Sustainable Growth",
      description:
        "Building lasting partnerships while maintaining environmental and social responsibility.",
      icon: "🌱",
    },
  ];

  return (
    <div
      id="vision"
      className="min-h-screen bg-gradient-to-b from-[#001717] to-[#000d0d] py-20 px-4 sm:px-6 lg:px-8"
    >
      {/* Main Vision Section */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Vision
          </h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
            Empowering businesses to thrive in the digital age through
            innovative solutions and excellence in service delivery.
          </p>
        </div>

        {/* Vision Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {visionPoints.map((point, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-[#011f1f] to-[#001717] p-8 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
            >
              <div className="text-4xl mb-4">{point.icon}</div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                {point.title}
              </h3>
              <p className="text-green-100 text-lg">{point.description}</p>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-[#012424] to-[#001a1a] p-10 rounded-xl shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
            Our Mission
          </h2>
          <p className="text-lg md:text-xl text-green-100 text-center max-w-4xl mx-auto leading-relaxed">
            To be the catalyst for digital transformation, providing innovative
            BPO solutions that empower businesses to achieve operational
            excellence and sustainable growth in an ever-evolving global
            marketplace.
          </p>
        </div>

        {/* Core Values */}
        <div className="mt-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">
            Core Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gradient-to-b from-[#011f1f] to-[#001717] rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-2">
                Excellence
              </h3>
              <p className="text-green-100">
                Striving for the highest standards in everything we do
              </p>
            </div>
            <div className="text-center p-6 bg-gradient-to-b from-[#011f1f] to-[#001717] rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-2">
                Innovation
              </h3>
              <p className="text-green-100">
                Embracing new technologies and creative solutions
              </p>
            </div>
            <div className="text-center p-6 bg-gradient-to-b from-[#011f1f] to-[#001717] rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-2">
                Integrity
              </h3>
              <p className="text-green-100">
                Maintaining highest ethical standards and transparency
              </p>
            </div>
            <div className="text-center p-6 bg-gradient-to-b from-[#011f1f] to-[#001717] rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-2">
                Collaboration
              </h3>
              <p className="text-green-100">
                Building strong partnerships for mutual success
              </p>
            </div>
          </div>
        </div>

        {/* Future Goals */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Looking Ahead
          </h2>
          <p className="text-lg md:text-xl text-green-100 max-w-4xl mx-auto leading-relaxed">
            We envision a future where businesses of all sizes can harness the
            power of digital transformation to reach their full potential.
            Through continuous innovation and dedication to excellence, we're
            committed to being your trusted partner in this journey.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Vision;
