import Hero from "./components/Hero";
import Certificates from "./components/Certificates";
import Statistics from "./components/Statistics";
import Blog from "./components/Blog";
import Education from "./components/Education";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Statistics />
      <Certificates />
      <Blog />
      <Education />
    </div>
  );
}
