import { useState, useEffect } from "react";
import { ButtonBase } from "./ButtonBase";
import { CardFull, CardProfile } from "./Cards";

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
        <div className="Hero-hook" style={{ color: "#dadada"}}>
          <h1>Hi, I'm <span>Andres Zapata</span></h1>
          <h3> A <span>Full-Stack Software Developer</span> focused on bring, matain, and improve solutions throught the Web</h3>
        </div>
      </CardFull>
    </main>
  );
}
