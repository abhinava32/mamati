import Image from "next/image";
import About from "./pages/About";
import Hero from "./pages/Hero";
import Navbar from "./pages/Navbar";
import Vision from "./pages/Vision";
import Portfolio from "./pages/Portfolio";
import Testimonials from "./pages/Testimonials";
import Footer from "./pages/Footer";
import Contact from "./pages/Contact";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Hero />
      <About />
      <Vision></Vision>
      <Portfolio></Portfolio>
      <Testimonials></Testimonials>

      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}
