import { useState, useEffect, useRef } from 'react'
import { PrimaryButton, ButtonBase } from "./components/ButtonBase";
import { Routes, Route } from "react-router-dom";
import { ToastProvider } from "./context/ToastProvider"
import { Footer } from "./components/Footer";
import { NavbarScroll } from "./components/Navbar";
import { Breadcrumbs } from "./utils/Breadcrumbs";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";


export const App = () => {
  let localValue = window.matchMedia('(prefers-color-scheme: dark}').matches;
  const [isDark, setIsDark] = useState(() => {
    console.log(typeof(localStorage.getItem("data-theme")))
    return localStorage.getItem("data-theme") ? JSON.parse(localStorage.getItem("data-theme")) : localValue;
  });
  const itemsRef = useRef({});


  const scrollToSection = (sectionName) => {
    const element = itemsRef.current[sectionName];
    if (element) {
      element.scrollIntoView({
        behaviour: "smooth",
        block: "center",
      })
    }
  }

  useEffect(() => {
    if (isDark) {
      localStorage.setItem("data-theme", true)
    } else {
      localStorage.setItem("data-theme", false)
    }
  }, [isDark])

  return (<div className="App"
    data-theme={isDark ? "dark" : "light"}
    style={{ backgroundColor: isDark ? "transparent" : "var(--mdg-color)"}}
  >
    <NavbarScroll title={"pagination"} subheading={"options"}
      style={{ position: "sticky"}}
      isChecked={isDark}
      elements={["HOME", "About", "Skills", "Projects", "Contact"]}
      handleScroll={(el) => { scrollToSection(el) }}
        handleChange={() => setIsDark(!isDark)}
    ></NavbarScroll>
    <ToastProvider>
    <Breadcrumbs></Breadcrumbs>
      <Routes>
        <Route path="/" element={<Home
          refs={itemsRef}
          elements={["HOME", "About", "Skills", "Projects", "Contact"]}></Home>}></Route>
        <Route path="/*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </ToastProvider>
    <button key={`nav-${"Sky"}`}
      style={{
        position: "fixed", zIndex: "99", right: "21px",
        bottom: "13%", padding: "8px 21px",
        borderRadius: "8px", border: "none",
        color: "azure",
        fontWeight: "bolder",
        backgroundColor: "fuchsia"
      }}
      onClick={()=> scrollToSection("HOME")}
    >{"GO to Top"}</button>
    <Footer></Footer>
  </div>);
}
