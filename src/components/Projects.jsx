import { ButtonBase } from "./ButtonBase";
export const Projects = () => {
    const projectsContent = [
      {
        title: "Vue-Todo-App",
        banner: "../../public/images/placeholder.svg",
        content: "Development of modern and responsive websites and Web applications with modern day technologies and freameworks"
      },
      {
        title: "React-Expenses-Tracker",
        banner: "../../public/images/placeholder.svg",
        content: "Development of modern and responsive websites and Web applications with modern day technologies and freameworks"
      },
      {
        title: "React-Weather-App",
        banner: "../../public/images/placeholder.svg",
        content: "Development of modern and responsive websites and Web applications with modern day technologies and freameworks"
      },
      {
        title: "Node-Color-Palettes",
        banner: "../../public/images/placeholder.svg",
        content: "Development of modern and responsive websites and Web applications with modern day technologies and freameworks"
      },
      {
        title: "Contenarization and deployment",
        banner: "../../public/images/placeholder.svg",
        content: "Development of modern and responsive websites and Web applications with modern day technologies and freameworks"
      }
    ]
    const CardInjector = Array.from({ length: 5 }, (_, index) => {
      return <div key={index + 1} className="card-slide-container">
          <div className="header">
            <h2>{   projectsContent[index]["title"]}</h2>
          </div>
        <div className="body">
          <div className="body__layout__flex-dividier">
            <div className="techologies-gallery">

            </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero possimus nam cumque similique ratione totam! Eaque earum neque perspiciatis, blanditiis maxime aliquam impedit minima nobis perferendis suscipit a veritatis ab.</p>
          </div>

        </div>
        <div className="footer">
          <ButtonBase
            className="info"
            label="view"
          ></ButtonBase>
        </div>
         </div>
    });
  return (<section>
    <h2>Featured Projects</h2>

  </section>)
}
