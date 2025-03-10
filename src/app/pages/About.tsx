import React from "react";

const About = () => {
  const services = [
    {
      title: "Data Entry Projects",
      description:
        "Professional and accurate data entry services tailored to your business needs.",
      icon: "📊",
    },
    {
      title: "Form Filling Projects",
      description:
        "Efficient and precise form filling services with attention to detail.",
      icon: "📝",
    },
    {
      title: "Offline BPO Projects",
      description:
        "Comprehensive offline BPO solutions to streamline your business operations.",
      icon: "💼",
    },
    {
      title: "None Voice Projects",
      description:
        "Expert handling of non-voice processes and back-office operations.",
      icon: "📑",
    },
    {
      title: "Inbound Voice Process",
      description:
        "Professional customer support and inquiry handling services.",
      icon: "📞",
    },
    {
      title: "Outbound Voice Process",
      description:
        "Strategic outbound calling solutions for sales and customer engagement.",
      icon: "🎯",
    },
  ];

  return (
    <div
      id="about"
      className="min-h-screen bg-[#000d0d] py-20 px-4 sm:px-6 lg:px-8 "
    >
      {/* About Section */}
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            About Mamti Web Solutions
          </h1>
          <p className="text-xl text-green-100 mb-12 max-w-3xl mx-auto">
            We are a leading provider of comprehensive BPO services, delivering
            excellence through innovative solutions and dedicated professional
            support.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-lg flex flex-row shadow-lg p-6 animate-fadeInUp"
            >
              <div className="text-5xl mt-6 mr-4 mb-4">{service.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-100">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Company Values */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Expertise
              </h3>
              <p className="text-gray-600">
                Years of experience in delivering quality BPO services
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Quality
              </h3>
              <p className="text-gray-600">
                Commitment to excellence and customer satisfaction
              </p>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Support
              </h3>
              <p className="text-gray-600">
                24/7 dedicated support and professional assistance
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
