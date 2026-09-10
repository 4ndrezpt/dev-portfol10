import { ButtonBase, DangerButton } from "../components/ButtonBase";
import { useRef } from "react";
import { useToast } from "../hooks/useToast";
import { Hero } from "../components/Hero";
import { StarBackground } from "../components/StarBackground";
import { About } from "./About";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { Contact } from "../pages/Contact";


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
        style={{ height: "50vh"}}>
        <Hero
        ></Hero>
        <div style={{ width: "200px",  marginTop: "21px", marginRight: "auto", marginLeft: "auto"}}>
        <ButtonBase
          className="warning"
        >
          <a href="#Projects">View my work</a>
          </ButtonBase>
        </div>
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
        <div style={{ width: "200px",  marginTop: "21px", marginRight: "auto", marginLeft: "auto"}}>
          <ButtonBase
            className="warning"
            style={{ backgroundColor : "steelblue"}}
          ><a href="https://www.linkedin.com/in/andres-zapata-d3v3loper/" target="_blank">See My LinkedIn</a></ButtonBase>
        </div>
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
        style={{ height: "70vh", marginTop: "50px"}}>
        <Projects></Projects>
        <div style={{ width: "200px", marginTop: "21px", marginRight: "auto", marginLeft: "auto"}}>
          <ButtonBase
            className="warning"
            style={{ backgroundColor : "steelblue"}}
          ><a href="https://github.com/4ndrezpt" target="_blank">
              See my GitHub Profile
            </a>
            </ButtonBase>
        </div>
      </section>

      { /* SKILLS SECTION  */}
      <section
        key={"Contact"}
        ref={(el) => { itemsRef.current["Contact"] = el; }}
        style={{ height: "62vh", margin: "55px 0"}}>
        <Contact>
        </Contact>
      </section>
    </main>);
}
