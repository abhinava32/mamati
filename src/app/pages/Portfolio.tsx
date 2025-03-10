"use client";

const Portfolio = () => {
  const projects = [
    {
      title: "Global Customer Support Transformation",
      client: "TechCorp Solutions",
      category: "Customer Service",
      description:
        "Implemented 24/7 multilingual customer support operations handling 50,000+ monthly queries with 98% satisfaction rate.",
      duration: "8 months",
      impact: "Reduced response time by 60%",
      technologies: ["Zendesk", "Salesforce", "Freshdesk"],
      icon: "🌟",
    },
    {
      title: "Healthcare Data Management",
      client: "MediCare Systems",
      category: "Data Processing",
      description:
        "Processed and digitized over 1 million medical records with 99.9% accuracy, ensuring HIPAA compliance.",
      duration: "12 months",
      impact: "Improved data accessibility by 85%",
      technologies: ["Epic Systems", "MEDITECH", "OCR Technology"],
      icon: "🏥",
    },
    {
      title: "E-commerce Order Processing",
      client: "ShopMax International",
      category: "Back Office Support",
      description:
        "Managed end-to-end order processing for a major e-commerce platform, handling 100,000+ monthly transactions.",
      duration: "Ongoing",
      impact: "Reduced processing time by 75%",
      technologies: ["Shopify", "SAP", "NetSuite"],
      icon: "🛍️",
    },
    {
      title: "Financial Data Analysis",
      client: "Global Finance Corp",
      category: "Finance & Accounting",
      description:
        "Provided comprehensive financial analysis and reporting services for a Fortune 500 company.",
      duration: "18 months",
      impact: "40% cost reduction",
      technologies: ["QuickBooks", "Xero", "Tableau"],
      icon: "📊",
    },
  ];

  const statistics = [
    { number: "500+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "50+", label: "Countries Served" },
    { number: "24/7", label: "Support Available" },
  ];

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-[#001717] to-[#000d0d] py-20 px-4 sm:px-6 lg:px-8"
      id="portfolio"
    >
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Our Success Stories
        </h1>
        <p className="text-xl text-green-100 max-w-3xl mx-auto">
          Delivering excellence through innovative BPO solutions and timely
          project execution
        </p>
      </div>

      {/* Statistics Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-6xl mx-auto">
        {statistics.map((stat, index) => (
          <div
            key={index}
            className="text-center p-6 bg-gradient-to-b from-[#011f1f] to-[#001717] rounded-lg transform hover:scale-105 transition-duration-300"
          >
            <h2 className="text-4xl font-bold text-white mb-2">
              {stat.number}
            </h2>
            <p className="text-green-100">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-[#011f1f] to-[#001717] p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-4xl">{project.icon}</span>
              <span className="bg-green-800 text-white px-3 py-1 rounded-full text-sm">
                {project.category}
              </span>
            </div>
            <h3 className="text-2xl font-semibold text-white mb-3">
              {project.title}
            </h3>
            <p className="text-green-100 mb-4">{project.description}</p>
            <div className="border-t border-green-800 pt-4 mt-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-green-100 text-sm">Client</p>
                  <p className="text-white font-medium">{project.client}</p>
                </div>
                <div>
                  <p className="text-green-100 text-sm">Duration</p>
                  <p className="text-white font-medium">{project.duration}</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-green-100 text-sm">Impact</p>
                <p className="text-white font-medium">{project.impact}</p>
              </div>
              <div className="mt-4">
                <p className="text-green-100 text-sm mb-2">Technologies Used</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-green-900 text-green-100 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Delivery Process Section */}
      <div className="max-w-7xl mx-auto mt-20">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">
          Our Delivery Process
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-gradient-to-b from-[#011f1f] to-[#001717] rounded-lg">
            <div className="text-3xl mb-4">📋</div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Requirements Analysis
            </h3>
            <p className="text-green-100">
              Thorough understanding of client needs and objectives
            </p>
          </div>
          <div className="text-center p-6 bg-gradient-to-b from-[#011f1f] to-[#001717] rounded-lg">
            <div className="text-3xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Strategic Planning
            </h3>
            <p className="text-green-100">
              Detailed project roadmap and resource allocation
            </p>
          </div>
          <div className="text-center p-6 bg-gradient-to-b from-[#011f1f] to-[#001717] rounded-lg">
            <div className="text-3xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Agile Execution
            </h3>
            <p className="text-green-100">
              Flexible and efficient implementation process
            </p>
          </div>
          <div className="text-center p-6 bg-gradient-to-b from-[#011f1f] to-[#001717] rounded-lg">
            <div className="text-3xl mb-4">📈</div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Continuous Improvement
            </h3>
            <p className="text-green-100">
              Regular monitoring and optimization
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-20">
        <h2 className="text-3xl font-bold text-white mb-6">
          Ready to Transform Your Business?
        </h2>
        <button
          onClick={() =>
            window.open("https://wa.me/917428059857?text=Hi", "_blank")
          }
          className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors duration-300"
        >
          Start Your Project
        </button>
      </div>
    </div>
  );
};

export default Portfolio;
