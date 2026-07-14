import { ButtonBase, DangerButton } from "../components/ButtonBase";
import { useToast } from "../hooks/useToast";
import { Hero } from "../components/Hero";
import { StarBackground } from "../components/StarBackground";
import { About } from "./About";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";

export const Home = () => {
  const {addToast} = useToast();

  return (
    <main style={{ backgroundColor: "transparent"}}>
      <StarBackground
      ></StarBackground>
      <Hero></Hero>

      <About id="#About"
        heading="About Me"
        subheading="Web developer and Tech Entusiast"
      >

      </About>
      <section id="#Skills">
        <Skills
        ></Skills>
      </section>
      <section id="#Projects">
        <h2>Featured Projects</h2>
      </section>
      <section id="#Contact">
        <h2>Contact</h2>
      </section>

      {/* Projects Gallery with Tabs and Inside Tab a Grid of Cards */}
      {/* Starred Projects with Slider */}
      {/* Contact Me */}

    </main>);
}
