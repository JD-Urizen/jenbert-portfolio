import Hero from "@/components/hero";
import About from "@/components/about";
import Navbar from "@/components/navbar";
import Hobbies from "@/components/hobbies";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import BlurFade from "@/components/ui/blur-fade";

export default function Home() {
  return (  
    <>
      <div className="bg-[#4a9d4f]">
        <Navbar/>
      </div>
      <div className="my-64 lg:my-14">
      <BlurFade delay={0.25}>
        <Hero/>
      </BlurFade>
      </div>
      <div id="About" className="my-64 lg:my-40">
      <BlurFade delay={0.25}>
        <About/>
      </BlurFade>
      </div>
      <div id="Hobbies" className="my-64 lg:my-40">
      <BlurFade delay={0.25}>
        <Hobbies/>
      </BlurFade>
      </div>
      <div id="Projects" className="my-64 lg:my-40">
      <BlurFade delay={0.25}>
        <Projects/>
      </BlurFade>
      </div>
      <div id="Skills" className="my-64 lg:my-40">
      <BlurFade delay={0.25}>
        <Skills/>
      </BlurFade>
      </div>
      <div id="Contact" className="my-64 lg:my-40">
      <BlurFade delay={0.25}>
        <Contact/>
      </BlurFade>
      </div>
      <div className="">
        <Footer/>
      </div>
    </>
  );
}
