import { useState, useEffect } from "react";
import { ButtonBase } from "./ButtonBase";
import { CardFull } from "./Cards";

export const Hero = () => {
  let isDark = JSON.parse(localStorage.getItem("data-theme"));
  const [transparent, setTransparent] = useState(!isDark);



  useEffect(() => {
    let thisTheme = JSON.parse(localStorage.getItem("data-theme"));
  console.log(thisTheme);
    setTransparent(!thisTheme)
  }, [transparent])

  return (
    <main style={{
      width: "100%",
      height: "500px",
      display: "flex",
      flexDirection: "column",
      padding: "55px 13px",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--lg-color)",
    }}>
      <CardFull
        transparent={false}
      >
        <h1>Hi, I'm <span>Andres Zapata</span></h1>
        <h3> A <span>Full-Stack Software Developer</span></h3>
        <p>I'm passionate to build solutions with modern Web technologies, to bring to reality solutions</p>
        <ButtonBase
          className="warning"
        >
          <a href="#Projects">View my work</a>
        </ButtonBase>
      </CardFull>
    </main>
  );
}
