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
      color: "azure"
    }}>
      <CardFull
        transparent={false}
      >
        <div style={{ color: "#dadada"}}>
        <h1>Hi, I'm <span>Andres Zapata</span></h1>
        <h3> A <span>Software Developer</span> focused on Web development</h3>
          <p>I'm passionate to bring <strong>solutions</strong> that transform your
            business presence with modern Web <strong>technologies</strong>,
            by designing, building and maintaining <strong>applications</strong> with quality testing and
            modern deployment techniques and methodologies.You can check out some of my projects down below.
          </p>
        </div>
      </CardFull>
    </main>
  );
}
