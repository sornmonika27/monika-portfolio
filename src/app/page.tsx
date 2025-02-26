import Image from "next/image";
import About from "@/app/about/page";
import Project from "@/app/project/page";
import Skill from "@/app/skill/page";
import Contact from "@/app/contact/page";
import App from "@/app/App/app"
import Menu from "@/app/Menu/page"


export default function Home() {
  return (
    <div className="relative min-h-screen bg-gray-800">
        <App />
        {/* <Menu/> */}

      <div className="relative z-10">
        <section id="about" className="p-4">
          <About />
        </section>
        <section id="skills" className="p-4">
          <Skill />
        </section>
        <section id="project" className="p-4">
          <Project />
        </section>
        <section id="contact" className="p-4">
          <Contact />
        </section>
      </div>
    </div>
  );
}
