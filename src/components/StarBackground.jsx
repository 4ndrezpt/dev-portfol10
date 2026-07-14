import { useState, useEffect } from "react";
import "../styles/StarsBackground.css";

export const StarBackground = () => {
  const [stars, setStars] = useState([]);


  const generateStars = () => {
    const numberOfStars = Math.floor(window.innerWidth * window.innerHeight / 10000)
    let counter = 0;
    const newStars = Array.from({ length: numberOfStars }, () =>
      ({
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2
      })
    );
    setStars(newStars);
    //console.log(newStars);

  };
  useEffect(() => {
    generateStars();
  },[])
  return (
    <div className="stars-container">
      {stars?.map((star, index) =>
        <div key={index} className="star"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x+ "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration,
          }}
        >

        </div>)
    }
    </div>
  );
}
