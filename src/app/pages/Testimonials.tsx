"use client";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Omkar Mittal",
      position: "CEO",
      company: "TechCorp Solutions",
      image: "/testimonials/sarah.jpg", // Add your image paths
      quote:
        "Mamati Web Solutions transformed our customer service operations. Their BPO solutions helped us achieve a 98% customer satisfaction rate while reducing operational costs by 40%.",
      rating: 4,
    },
    {
      name: "Ramkumar Yadav",
      position: "Operations Director",
      company: "Global Logistics Inc",
      image: "/testimonials/michael.jpg",
      quote:
        "The level of professionalism and efficiency we've experienced with Mamati is unmatched. They've been instrumental in scaling our business operations across multiple time zones.",
      rating: 5,
    },
    {
      name: "Rajesh Agarwal",
      position: "Head of Digital",
      company: "E-commerce Plus",
      image: "/testimonials/emma.jpg",
      quote:
        "Working with Mamati has been a game-changer for our e-commerce platform. Their 24/7 support and attention to detail have significantly improved our customer experience.",
      rating: 4,
    },
    {
      name: "Rajiv Singh",
      position: "CTO",
      company: "HealthTech Solutions",
      image: "/testimonials/david.jpg",
      quote:
        "The data processing solutions provided by Mamati have revolutionized how we handle patient records. Their accuracy and HIPAA compliance are impressive.",
      rating: 5,
    },
  ];

  const renderStars = (rating: number) => {
    return [...Array(rating)].map((_, index) => (
      <svg
        key={index}
        className="w-5 h-5 text-yellow-400"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div
      id="testimonials"
      className="min-h-screen bg-gradient-to-b from-[#001717] to-[#000d0d] py-20 px-4 sm:px-6 lg:px-8"
    >
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Client Testimonials
        </h1>
        <p className="text-xl text-green-100 max-w-3xl mx-auto">
          Don't just take our word for it - hear what our clients have to say
          about their experience working with us
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-[#011f1f] to-[#001717] p-8 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-start mb-6">
              <div className="flex-shrink-0">
                <img
                  className="h-14 w-14 rounded-full object-cover"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-white">
                  {testimonial.name}
                </h3>
                <p className="text-green-100">
                  {testimonial.position} at {testimonial.company}
                </p>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex mb-4">{renderStars(testimonial.rating)}</div>
              <p className="text-green-100 italic">"{testimonial.quote}"</p>
            </div>
          </div>
        ))}
      </div>

      {/* Statistics Section */}
      <div className="max-w-7xl mx-auto mt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-gradient-to-b from-[#011f1f] to-[#001717] rounded-lg">
            <div className="text-4xl font-bold text-white mb-2">98%</div>
            <p className="text-green-100">Client Satisfaction Rate</p>
          </div>
          <div className="text-center p-8 bg-gradient-to-b from-[#011f1f] to-[#001717] rounded-lg">
            <div className="text-4xl font-bold text-white mb-2">20+</div>
            <p className="text-green-100">Active Clients</p>
          </div>
          <div className="text-center p-8 bg-gradient-to-b from-[#011f1f] to-[#001717] rounded-lg">
            <div className="text-4xl font-bold text-white mb-2">5/5</div>
            <p className="text-green-100">Average Rating</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-4xl mx-auto mt-20 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">
          Ready to Join Our Success Stories?
        </h2>
        <p className="text-green-100 mb-8">
          Let's discuss how we can help transform your business operations
        </p>
        <button
          onClick={() => window.open("https://wa.me/917428059857", "_blank")}
          className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors duration-300"
        >
          Schedule a Consultation
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
