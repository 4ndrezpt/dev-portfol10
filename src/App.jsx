import { useState, useEffect } from 'react'
import { Routes, Route } from "react-router-dom";
import { ToastProvider } from "./context/ToastProvider"
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Breadcrumbs } from "./utils/Breadcrumbs";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { Projects } from "./pages/Projects";
import { About } from "./pages/About";
import { NotFound } from "./pages/NotFound";
import { StarBackground } from './components/StarBackground';

export const App = () => {
  let localValue = window.matchMedia('(prefers-color-scheme: dark}').matches;
  const [isDark, setIsDark] = useState(() => {
    console.log(typeof(localStorage.getItem("data-theme")))
    return localStorage.getItem("data-theme") ? JSON.parse(localStorage.getItem("data-theme")) : localValue;
  });


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
    <Navbar title={"pagination"} subheading={"options"}
        isChecked={isDark}
        handleChange={() => setIsDark(!isDark)}
    ></Navbar>
    <ToastProvider>
    <Breadcrumbs></Breadcrumbs>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/*" element={<NotFound></NotFound>}></Route>
      </Routes>

    </ToastProvider>
    <Footer></Footer>
  </div>);
}
