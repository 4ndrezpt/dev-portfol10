import { ButtonBase, DangerButton } from "../components/ButtonBase";
import { useRef } from "react";
import { useToast } from "../hooks/useToast";
import { Hero } from "../components/Hero";
import { StarBackground } from "../components/StarBackground";
import { About } from "./About";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";


export const Home = ({ elements, scrollToSection, refs }) => {
  const itemsRef = refs;
  const { addToast } = useToast();

  return (
    <main>
      <StarBackground
      ></StarBackground>
      { /* HOME SECTION  */}
      <section
        key={"HOME"}
        ref={(el) => { itemsRef.current["HOME"] = el; }}
        style={{ height: "|00%"}}>
        <Hero
        ></Hero>
      </section>
      { /* ABOUT SECTION  */}
      <section
        key={"About"}
        ref={(el) => { itemsRef.current["About"] = el; }}
        style={{ height: "100%" }}>
          <About id="#About"
            heading="About Me"
            subheading="Web developer and Tech Entusiast"
          >
          </About>
      </section>
      { /* SKILLS SECTION  */}
      <section
        key={"Skills"}
        ref={(el) => { itemsRef.current["Skills"] = el; }}
        style={{ height: "70vh"}}>
          <Skills
          ></Skills>
      </section>
      { /* SKILLS SECTION  */}
      <section
        key={"Projects"}
        ref={(el) => { itemsRef.current["Projects"] = el; }}
        style={{ height: "70vh"}}>
          <Projects></Projects>
      </section>

      { /* SKILLS SECTION  */}
      <section
        key={"Projects"}
        ref={(el) => { itemsRef.current["Contact"] = el; }}
        style={{ height: "70vh"}}>
          <Contact></Contact>
      </section>
    </main>);
}
