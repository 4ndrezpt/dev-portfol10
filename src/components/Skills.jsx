import { Tabs } from "./Tabs";
import { v4 as uuid } from "uuid";

  const skillItem = [
    { id: uuid(), name: "HTML/CSS", level: 100, category: "frontend" },
    { id: uuid(), name: "JavaScript", level: 90, category: "frontend" },
    { id: uuid(), name: "TypeScript", level: 90, category: "frontend" },
    { id: uuid(), name: "React", level: 85, category: "frontend" },
    { id: uuid(), name: "Vue", level: 75, category: "frontend" },
    { id: uuid(), name: "Angular", level: 75, category: "frontend" },
    { id: uuid(), name: "Next.Js", level: 90, category: "frontend" },
    { id: uuid(), name: "Sass", level: 95, category: "frontend" },
    //Backender
    { id: uuid(), name: "NodeJS", level: 85, category: "backender" },
    { id: uuid(), name: "Express", level: 80, category: "backender" },
    { id:  uuid(), name: "PHP", level: 90, category: "backender" },
    { id:  uuid(), name: "Python", level: 90, category: "backender" },
    { id:  uuid(), name: "Spring", level: 75, category: "backender" },
    //Database
    { id:  uuid(), name: "MySQL/MariaDB", level: 90, category: "databases" },
    { id:  uuid(), name: "PostgreSQL", level: 60, category: "databases" },
    { id:  uuid(), name: "MongoDB", level: 80, category: "databases" },
    { id:  uuid(), name: "GraphQL", level: 60, category: "databases" },
    //Tools
    { id:  uuid(), name: "Git/Git-Hub", level: 80, category: "tools" },
    { id:  uuid(), name: "Docker", level: 60, category: "tools" },
    { id:  uuid(), name: "Postman", level: 60, category: "tools" },
    { id:  uuid(), name: "Bash", level: 80, category: "tools" },
    { id:  uuid(), name: "Lunacy", level: 90, category: "tools" },
  ]
export const DisplayContent = ({ category }) =>
  {
    if(category !== "All") {
      const filtered = skillItem.filter((item) => item.category === category)
      return <div key={ uuid() } className="tab-content__grid">
              {filtered.map((item, index) =>
                <div key={`${category}-${item.id}-${index}`} >
                <h6>{item.name}</h6>
                <div  style={{
                  width: item.level+"%",
                  height: ".62rem",
                  backgroundColor: "var(--main-color)",
                  borderRadius: "5px"
                }}></div>
                <p>{ item.level } %</p>
              </div>)}
            </div>;
    } else {
      return <div key={ uuid() } className="tab-content__grid">
            {skillItem.map((item, index) =>
              <div key={`all-${item.id}-${index}`} >
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
      title: "Databases",
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
      </div>
      <div className="body">
        <DisplayContent category={category}>
        </DisplayContent>
      </div>
    </div>
  }



  const handleChange = (item) => {
    //console.log(item.title);
  }
  return (<div>
    <h2 style={{ textAlign: "center", paddingBottom: "21px", color:"var(--main-color)"}}>Skills</h2>
    <Tabs
      key={"Tabs-Projects"}
      items={ defaultItems }
      onChange={handleChange}
    ></Tabs>
  </div>);
}
