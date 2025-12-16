import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Certificates from "./components/Certificates";
import Statistics from "./components/Statistics";
import Blog from "./components/Blog";
import Education from "./components/Education";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <div id="about">
        <About />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="portfolio">
        <Portfolio />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <Statistics />
      <Education />
      <Certificates />
      <Blog />
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}
