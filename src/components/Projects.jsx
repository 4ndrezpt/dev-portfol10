import { ButtonBase } from "./ButtonBase";
import { SliderCards } from "../utils/ImageSlider";
import { v4 as uuid } from "uuid";

export const Projects = () => {
    const projectsContent = [
      {
        id: uuid(),
        title: "Vue-Todo-App",
        banner: "/assets/images/vue-todo-app.jpg",
        content: "Development of modern and responsive websites and Web applications with modern day technologies and freameworks",
        tags: ["Vue", "JavaScript","Vite", "CSS"],
        gitHub: "https://github.com/4ndrezpt/Vue---todo-app",
        preview: "https://luxury-froyo-c94c19.netlify.app/"
      },
      {
        id: uuid(),
        title: "Expenses-Tracker",
        banner: "../assets/images/budget-app.jpg",
        content: "Development of modern and responsive websites and Web applications with modern day technologies and freameworks",
        tags: ["React", "JavaScript","Vite", "CSS"],
        gitHub: "https://github.com/4ndrezpt/Budget-App-React",
        preview: "https://animated-narwhal-24b605.netlify.app/"
      },
      {
        id: uuid(),
        title: "Weather-App",
        banner: "/assets/images/weather-app.jpg",
        content: "Development of modern and responsive websites and Web applications with modern day technologies and freameworks",
        tags: ["React", "JavaScript","Vite", "CSS", "API-call"],
        gitHub: "https://github.com/4ndrezpt/weather-app-react",
        preview: "https://animated-genie-171977.netlify.app/"
      },
      {
        id: uuid(),
        title: "Color-Palettes",
        banner: "/assets/images/node-palettes1.jpg",
        content: "Development of modern and responsive websites and Web applications with modern day technologies and freameworks",
        tags: ["Node", "Express", "TypeScript", "CSS"],
        gitHub: "https://github.com/4ndrezpt/node-Ts-color-palettes",
        preview: "https://node-ts-color-palettes.onrender.com/"
      },
      {
        id: uuid(),
        title: "Task filter App",
        banner: "/assets/images/filter-tasks.jpg",
        content: "Development of modern and responsive websites and Web applications with modern day technologies and freameworks",
        tags: ["React", "TypeScript", "Vite", "CSS"],
        gitHub: "https://github.com/4ndrezpt/Todo-app-with-ts",
        preview: "https://beautiful-souffle-3f3d72.netlify.app/"
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
            ><a href={projectsContent[index]["gitHub"]}
                target="_blank"
            >Repository Code</a></ButtonBase>
            <ButtonBase
              className="info"
            ><a href={projectsContent[index]["preview"]}
                target="_blank"
            >preview</a></ButtonBase>
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
