import  { ButtonBase } from "../components/ButtonBase";
import { useToast } from "../hooks/useToast";
import { GridText } from "../components/GridText";
import { SliderCards } from "../utils/ImageSlider";

export const About = (
  {id, heading, subheading}
)=> {
  const { addToast } = useToast();
  const skillsContent = [
    {
      title: "Web Development",
      content: "Development of modern and responsive websites and Web applications with modern day technologies and freameworks"
    },
    {
      title: "Frontend Development",
      content: "Development of modern and responsive websites and Web applications with modern day technologies and freameworks"
    },
    {
      title: "Backend Development",
      content: "Development of modern and responsive websites and Web applications with modern day technologies and freameworks"
    },
    {
      title: "Full-Stack Management",
      content: "Development of modern and responsive websites and Web applications with modern day technologies and freameworks"
    },
    {
      title: "Contenarization and deployment",
      content: "Development of modern and responsive websites and Web applications with modern day technologies and freameworks"
    }

  ]
  const CardInjector = Array.from({ length: 5 }, (_, index) => {
    return <div key={index + 1} className="card-slide-container">
        <div className="header">
          <h2>{   skillsContent[index]["title"]}</h2>
        </div>
        <div className="body">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero possimus nam cumque similique ratione totam! Eaque earum neque perspiciatis, blanditiis maxime aliquam impedit minima nobis perferendis suscipit a veritatis ab.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero possimus nam cumque similique ratione totam! Eaque earum neque perspiciatis, blanditiis maxime aliquam impedit minima nobis perferendis suscipit a veritatis ab.</p>
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
    <main id={id ? id : "#About"} style={{ textAlign: "center"}}>
      <h2>{heading}</h2>
      <h4>{subheading}

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
          <h4>Some of my grades</h4>
          <ul>
           	<li>Software Analist and Developer (2025)</li>
           	<li>FullStack Foundations technician (2025)</li>
           	<li>Nonde JS course (2026)</li>
           	<li>ReactJs course (2026)</li>
           	<li>Cloud Computing Technician (2025)</li>
           	<li>Webresponsive Designer (2026)</li>
           	<li>Git course (2025)</li>
          </ul>
        </div>
      </GridText>
      <SliderCards
        slides={ CardInjector }
      >
      </SliderCards>

      <ButtonBase
        label="Info"
        className="info"
        onClick={()=>addToast("Information Toast", "Message Content for Information toast", "toast-info")}
      ></ButtonBase>
    </main>);
}
