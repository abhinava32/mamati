const Contact = () => {
  const services = [
    "Customer Support",
    "Data Processing",
    "Back Office Support",
    "Technical Support",
    "Content Management",
    "Other",
  ];

  const contactInfo = [
    {
      title: "Main Office",
      address:
        "SE-G, Ashutosh Building, H.B. Road, Near Orchid Hospital, Ranchi 834001",
      phone: "+917428059857",
      email: "contact@mamati.in",
      hours: "Mon-Sat: 9:00 AM - 6:00 PM IST",
    },
  ];

  return (
    <div
      id="contact"
      className="min-h-screen bg-gradient-to-b from-[#001717] to-[#000d0d] py-20 px-4 sm:px-6 lg:px-8"
    >
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Let's Start a Conversation
        </h1>
        <p className="text-xl text-green-100 max-w-3xl mx-auto">
          Ready to transform your business operations? We're here to help you
          achieve your goals.
        </p>
      </div>

      <div className="max-w-7xl mx-auto text-center">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            {contactInfo.map((office, index) => (
              <div
                key={index}
                className=" bg-gradient-to-r from-[#011f1f] to-[#001717] p-6 rounded-lg shadow-xl"
              >
                <h3 className="text-xl font-semibold text-white mb-4">
                  {office.title}
                </h3>
                <div className=" text-green-100">
                  <p className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {office.address}
                  </p>
                  <p className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    {office.phone}
                  </p>
                  <p className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    {office.email}
                  </p>
                  <p className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {office.hours}
                  </p>
                </div>
              </div>
            ))}

            {/* Social Media Links */}
          </div>

          {/* Contact Form */}
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-[#011f1f] to-[#001717] p-4 rounded-lg shadow-xl">
            <iframe
              title="Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d645.8014229292926!2d85.33310946029889!3d23.37113142882438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e1002d1f7a55%3A0xb42cb985b7a3a693!2sAshutosh%20Apartment!5e1!3m2!1sen!2sin!4v1741604693582!5m2!1sen!2sin"
              className="w-full h-96 rounded-lg"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
