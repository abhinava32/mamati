const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = {
    services: {
      title: "Services",
      links: [
        { name: "Customer Support", href: "#" },
        { name: "Data Processing", href: "#" },
        { name: "Back Office Support", href: "#" },
        { name: "Technical Support", href: "#" },
        { name: "Content Management", href: "#" },
      ],
    },
    company: {
      title: "Company",
      links: [
        { name: "About Us", href: "#" },
        { name: "Our Vision", href: "#" },
        { name: "Portfolio", href: "#" },
        { name: "Testimonials", href: "#" },
        { name: "Careers", href: "#" },
      ],
    },
    resources: {
      title: "Resources",
      links: [
        { name: "Blog", href: "#" },
        { name: "Case Studies", href: "#" },
        { name: "White Papers", href: "#" },
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
      ],
    },
    contact: {
      title: "Contact",
      info: [
        { label: "Email", value: "contact@mamati.in" },
        { label: "Phone", value: "+917428059857" },
        {
          label: "Address",
          value:
            "SE-G, Ashutosh Building, H.B. Road, Near Orchid Hospital, Ranchi 834001",
        },
      ],
    },
  };

  const socialLinks = [
    { name: "LinkedIn", icon: "linkedin.svg", href: "#" },
    { name: "Twitter", icon: "twitter.svg", href: "#" },
    { name: "Facebook", icon: "facebook.svg", href: "#" },
    { name: "Instagram", icon: "instagram.svg", href: "#" },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#001717] to-[#000d0d] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center">
              <img src="/logo-light.png" alt="Mamati Logo" className="h-12" />
            </div>
            <p className="text-green-100 text-sm">
              Empowering businesses with innovative BPO solutions and
              exceptional service delivery worldwide.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-green-100 hover:text-white transition-colors duration-300"
                >
                  <img
                    src={`/social/${social.icon}`}
                    alt={social.name}
                    className="h-6 w-6"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {footerSections.services.title}
            </h3>
            <ul className="space-y-3">
              {footerSections.services.links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-green-100 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {footerSections.company.title}
            </h3>
            <ul className="space-y-3">
              {footerSections.company.links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-green-100 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {footerSections.contact.title}
            </h3>
            <ul className="space-y-3">
              {footerSections.contact.info.map((item) => (
                <li key={item.label} className="text-green-100">
                  <span className="font-semibold">{item.label}: </span>
                  {item.value}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-12 border-t border-green-800 pt-8">
          <div className="max-w-md mx-auto lg:mx-0">
            <h3 className="text-lg font-semibold mb-4">
              Subscribe to Our Newsletter
            </h3>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-[#011f1f] border border-green-800 focus:outline-none focus:border-green-600"
              />
              <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-green-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-green-100 text-sm">
              © {currentYear} Mamati Web Solutions Pvt. Ltd. All rights
              reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-green-100 hover:text-white text-sm transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-green-100 hover:text-white text-sm transition-colors duration-300"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-green-100 hover:text-white text-sm transition-colors duration-300"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
