import { ButtonBase } from "./ButtonBase";
import { SliderCards } from "../utils/ImageSlider";
import { v4 as uuid } from "uuid";

export const Projects = () => {
    const projectsContent = [
      {
        id: uuid(),
        title: "Vue-Todo-App",
        banner: "/assets/images/placeholder.svg",
        content: "Development of modern and responsive websites and Web applications with modern day technologies and freameworks",
        tags: ["Vue", "JavaScript","Vite", "CSS"],
        gitHub: "",
        preview: ""
      },
      {
        id: uuid(),
        title: "React-Expenses-Tracker",
        banner: "../assets/images/placeholder.svg",
        content: "Development of modern and responsive websites and Web applications with modern day technologies and freameworks",
        tags: ["React", "JavaScript","Vite", "CSS"],
        gitHub: "",
        preview: ""
      },
      {
        id: uuid(),
        title: "React-Weather-App",
        banner: "/assets/images/placeholder.svg",
        content: "Development of modern and responsive websites and Web applications with modern day technologies and freameworks",
        tags: ["React", "JavaScript","Vite", "CSS"],
        gitHub: "",
        preview: ""
      },
      {
        id: uuid(),
        title: "Node-Color-Palettes",
        banner: "/assets/images/placeholder.svg",
        content: "Development of modern and responsive websites and Web applications with modern day technologies and freameworks",
        tags: ["Node", "TypeScript", "CSS"],
        gitHub: "",
        preview: ""

      },
      {
        id: uuid(),
        title: "Task filter App",
        banner: "/assets/images/placeholder.svg",
        content: "Development of modern and responsive websites and Web applications with modern day technologies and freameworks",
        tags: ["React", "TypeScript", "Vite", "CSS"],
        gitHub: "",
        preview: ""
      }
    ]
    const CardInjector = Array.from({ length: 5 }, (_, index) => {
      return <div key={projectsContent[index]["id"]} className="featured-slide-container">
        <div className="header">
          <img src={projectsContent[index]["banner"]} alt=""/>
          </div>
        <div className="body__layout__flex-divider">
          <div className="body">
            <h2>{   projectsContent[index]["title"]}</h2>
            <div className="techologies-gallery">
              <ul>{projectsContent[index]["tags"].map((item, index) => <li
                key={`${projectsContent[index]["id"]}-tag-${index + 1}`}>{item}</li>)}</ul>
            </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero possimus nam cumque similique ratione totam! Eaque earum neque perspiciatis, blanditiis maxime aliquam impedit minima nobis perferendis suscipit a veritatis ab.</p>
          </div>
          <div className="footer">
            <ButtonBase
              className="info"
              label="GitHub"
            ></ButtonBase>
            <ButtonBase
              className="info"
              label="View Project"
            ></ButtonBase>
          </div>
        </div>
         </div>
    });
  return (<>
    <h2
      style={{ color: "var(--main-color)", textAlign: "center"}}
    >Featured Projects</h2>
    <SliderCards
      slides= { CardInjector }
    >
    </SliderCards>
  </>)
}
