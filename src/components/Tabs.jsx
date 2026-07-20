import { useState } from "react";
import "../styles/Tabs.css";


export const Tabs = ({ items, onChange }) =>
{
  const [selected, setSelected] = useState(items.length >= 0 ? 0 : null);

  const handleClick = (index, item) => {
    setSelected(index);
    onChange(item);
  }
  if (selected === null) {
    return null;
  }
  return (<div className="tabs-container">

      <div className="tabs-navigator">
    {
        items?.map((item, index) => (
          <TabView
            key={`TabView-${index}`}
            index={index}
            active={index === selected}
            item={ item }
            onClick={handleClick}
          />
      ))
    }
    </div>
    <div className="tabs-content-container">
      <div className="tabs__item">
    {
          items?.map((item, index) => (
          <div>{selected === index && <item.content
                  key={item.id}
              />}
          </div>
        ))
    }
      </div>
    </div>
  </div>);
}

const TabView = ({ index, active, item, onClick}) => {
  return active ? <div>{item.title}</div> :
    <button onClick={() => onClick(index, item)}>{item.title}</button>
}
