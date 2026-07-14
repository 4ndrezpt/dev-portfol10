import { useState } from "react";


export const Navbar = ({title, subheading, handleChange, isChecked})=>{
  const [val, setVal] = useState(isChecked);
    return (
        <nav>
            <div className="logo">
              <h3>
                <a href="/">Zain-logo</a>
              </h3>
            </div>

            <div className="Menu-options">
              <div className="menu__theme">
                <input type="checkbox"
                className="toggle"
                id="theme-toggle"
                onChange={handleChange}
                checked={isChecked}
                />
            <label htmlFor="theme-toggle">
              {isChecked ? "Dark" : "Light"}
            </label>
              </div>
                <h6><label htmlFor="dropdown-toggle">Menu</label>
                  <input type="checkbox" id="dropdown-toggle"
                  />
                </h6>
                <div className="dropdown">
                  <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#Projects">Projects</a></li>
                    <li><a href="#Contact">Contact</a></li>
                  </ul>
                </div>
            </div>
        </nav>
    );
}
