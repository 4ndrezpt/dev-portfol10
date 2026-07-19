import  { ButtonBase } from "../components/ButtonBase";
import { useToast } from "../hooks/useToast";
import { GridText } from "../components/GridText";
import { SliderCards } from "../utils/ImageSlider";

export const About = (
  {heading, subheading}
)=> {
  const { addToast } = useToast();
  const skillsContent = [
    {
      title: "Web Development",
      content: "The internet is always moving forward. This means you will never get bored. You can learn new tricks like Flexbox to make layout designs easier. Every day is a new puzzle to solve. When you fix a bug or finish a feature, you get a great feeling of success",
      from: "https://www.youtube.com/watch?v=wZoJBLjS6Tw"
    },
    {
      title: "Frontend Development",
      content: "Frontend developers make complex technology easy and fun to use. You ensure buttons click smoothly, pages load fast, and everyone—including people with disabilities—can enjoy the site. Your work directly shapes how the world experiences the internet",
      from : "https://www.greatfrontend.com/blog/is-frontend-development-a-good-career"
    },
    {
      title: "Backend Development",
      content: "Backend development is one of the best fields for people who love solving logic puzzles. Every day presents a new, fun challenge. Whether it is finding out why a server runs slowly or designing a way to process thousands of orders in seconds, the work is exciting. It is like building a complex machine and watching it run perfectly.",
      from: "https://dev.to/jpoly1219/why-i-decided-to-become-a-web-backend-developer-1817"
    },
    {
      title: "Full-Stack Management",
      content: "Full-stack developers act as digital architects. They connect the front-end (what users see and click) to the back-end (where data is stored and processed). Seeing an app work from start to finish brings a deep sense of satisfaction. It is like baking a cake and decorating it too; you control the whole creative process",
      from: "https://www.youtube.com/watch?v=DPBjcbDJWHU"
    },
    {
      title: "Dockerization and Deployment",
      content: "Before Docker, software would often break when it moved from a developer's computer to a live server. Docker solves this problem completely. It creates an identical environment for testing and production. This means less time fixing setup bugs and more time building great features",
      from : "https://dev.to/meghasharmaaaa/-2966"
    }
  ]
  const CardInjector = Array.from({ length: 5 }, (_, index) => {
    return <div key={index + 1} className="card-slide-container">
        <div className="header">
          <h2>{   skillsContent[index]["title"]}</h2>
        </div>
        <div className="body">
          <p>{ skillsContent[index]["content"]}</p>
      </div>
      <div className="footer">
        <ButtonBase
          className="info"
          label="view"
        ></ButtonBase>
      </div>
       </div>
  });

  return (
    <main  style={{ textAlign: "center", color: "var(--main-color)"}}>
      <h2>{heading}</h2>
      <h4 style={{ color: "orangered" }}>{subheading}
      </h4>
      <GridText
      >
        <div>
          <h4>Trajectory</h4>
          <p>I've been working in developing software since 5 years ago, When my first aproach to
            software was Java language,
          </p>
        </div>
        <div>
          <h4>Mision</h4>
          <p>
            I'm passionate for develop solutions with modern technologies and components, specially
            based on Web technologies
          </p>
        </div>
        <div>
          <h4>Relevant Grades</h4>
          <ul>
           	<li>Software Analist and Developer (2025)</li>
           	<li>FullStack Foundations technician (2025)</li>
           	<li>Node JS course (2026)</li>
           	<li>ReactJs course (2026)</li>
           	<li>Cloud Computing Technician (2025)</li>
           	<li>Web responsive Designer (2026)</li>
           	<li>Git course (2025)</li>
          </ul>
        </div>
      </GridText>
      <SliderCards
        slides={ CardInjector }
      >
      </SliderCards>
    </main>);
}
