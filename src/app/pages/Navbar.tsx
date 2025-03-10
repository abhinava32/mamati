"use client";
const Navbar = () => {
  const buttonClass =
    "px-4 py-2 hover:bg-white hover:text-gray-800 font-medium rounded-md transition duration-300 ease-in-out";

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      console.log("Element not found");
    }
  };

  return (
    <>
      <div className="flex items-center justify-between bg-gradient-to-r from-[#001717] from-80% to-[#000d0d] text-white h-20 w-full px-6 animate-fadeInSlow fixed top-0 z-50">
        <div onClick={() => scrollToSection("home")} className="-mx-10 md:mx-0">
          <img
            src="logo-light.png"
            alt="image logo"
            className="h-28"
            onClick={() => scrollToSection("home")}
            style={{ cursor: "pointer" }}
          />
        </div>

        {/* Mobile Menu Toggle using details/summary */}
        <details className="lg:hidden">
          <summary className="list-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </summary>

          {/* Mobile Menu Content */}
          <div className="absolute left-0 right-0 bg-[#001717] border-b-2 z-10 mt-6">
            <div className="flex flex-col px-6 py-4 space-y-4 animate-fadeInDown">
              <button
                className={buttonClass}
                onClick={() => scrollToSection("about")}
              >
                About
              </button>

              <button
                className={buttonClass}
                onClick={() => scrollToSection("portfolio")}
              >
                Portfolio
              </button>

              <button
                className={buttonClass}
                onClick={() => scrollToSection("vision")}
              >
                Vision
              </button>
              <button
                className={buttonClass}
                onClick={() => scrollToSection("testimonials")}
              >
                Testimonials
              </button>

              <button
                className={buttonClass}
                onClick={() => scrollToSection("contact")}
              >
                Contact
              </button>
            </div>
          </div>
        </details>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-6">
          <button
            className={buttonClass}
            onClick={() => scrollToSection("about")}
          >
            About
          </button>

          <button
            className={buttonClass}
            onClick={() => scrollToSection("portfolio")}
          >
            Portfolio
          </button>

          <button
            className={buttonClass}
            onClick={() => scrollToSection("vision")}
          >
            Vision
          </button>
          <button
            className={buttonClass}
            onClick={() => scrollToSection("testimonials")}
          >
            Testimonials
          </button>

          <button
            className={buttonClass}
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </button>
        </div>
      </div>
      {/* Add spacing to prevent content from hiding behind fixed navbar */}
      <div className="h-20"></div>
    </>
  );
};

export default Navbar;
