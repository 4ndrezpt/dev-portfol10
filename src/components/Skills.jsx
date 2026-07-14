import { Tabs } from "./Tabs";
import { v4 as uuid } from "uuid";

  const skillItem = [
    { name: "HTML/CSS", level: 100, category: "frontend" },
    { name: "JavaScript", level: 90, category: "frontend" },
    { name: "TypeScript", level: 90, category: "frontend" },
    { name: "React", level: 85, category: "frontend" },
    { name: "Vue", level: 75, category: "frontend" },
    { name: "Angular", level: 75, category: "frontend" },
    { name: "Next.Js", level: 90, category: "frontend" },
    { name: "Sass", level: 95, category: "frontend" },
    //Backender
    { name: "NodeJS", level: 85, category: "backender" },
    { name: "Express", level: 80, category: "backender" },
    { name: "PHP", level: 90, category: "backender" },
    { name: "Python", level: 90, category: "backender" },
    { name: "Spring", level: 75, category: "backender" },
    //Database
    { name: "MySQL/MariaDB", level: 90, category: "databases" },
    { name: "PostgreSQL", level: 60, category: "databases" },
    { name: "MongoDB", level: 80, category: "databases" },
    { name: "GraphQL", level: 60, category: "databases" },
    //Tools
    { name: "Git/Git-Hub", level: 80, category: "tools" },
    { name: "Docker", level: 60, category: "tools" },
    { name: "Lunacy", level: 90, category: "tools" },
  ]
export const DisplayContent = ({ category }) =>
  {
    if(category !== "All") {
      const filtered = skillItem.filter((item) => item.category === category)
      return <div key={`cst-${category}`} className="tab-content__grid">
        {filtered.map((item, index) => <div key={`all-${index}`} >
          <h6>{item.name}</h6>
          <div style={{
            width: item.level+"%",
            height: ".62rem",
            backgroundColor: "var(--main-color)",
            borderRadius: "5px"
          }}></div>
          <p>{ item.level } %</p>
        </div>)}
            </div>;
    } else {
      return <div key={`cst-${category}`} className="tab-content__grid">
        {skillItem.map((item, index) => <div key={`all-${index}`} >
          <h6>{item.name}</h6>
          <div style={{
            width: item.level+"%",
            height: ".62rem",
            backgroundColor: "var(--main-color)",
            borderRadius: "5px"
          }}></div>
          <p>{ item.level } %</p>
        </div>)}
          </div>;
    }
  }

export const Skills = () => {
  const defaultItems = [
    {
      id: uuid(),
      title: "All",
      content: ()=>contentJSX("All")
    },
    {
      id: uuid(),
      title: "Frontend",
      content: ()=>contentJSX("frontend")
    },
    {
      id: uuid(),
      title: "Backender",
      content: ()=>contentJSX("backender")
    },
    {
      id: uuid(),
      title: "Database Management",
      content: ()=>contentJSX("databases")
    },
    {
      id: uuid(),
      title: "Tools",
      content: ()=>contentJSX("tools")
    }
  ]
  function contentJSX(category) {

    return <div className="Tab-content-container">
      <div className="header">
        <h4>Content Tab</h4>
      </div>
      <div className="body">
        <DisplayContent category={category}></DisplayContent>
      </div>
    </div>

  }



  const handleChange = (item) => {
    //console.log(item.title);
  }
  return (<div>
    <h2 style={{ textAlign: "center", paddingBottom: "21px"}}>Skills</h2>
    <Tabs
      items={ defaultItems }
      onChange={handleChange}
    ></Tabs>
  </div>);
}
