import { useState, useEffect } from "react";
import { Loading } from "../utils/Loading";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import "../styles/ImageSlider.css";

export const SliderCards = ({ slides }) => {
  //implement a placeholder
  //setImages(children);
  const [images, setImages] = useState(slides);
  const [curSlide, setCurSlide] = useState(0);

  const handlePrev = ()=> {
    setCurSlide(
      curSlide >  0 ? curSlide - 1 : 0
    )
  }

  const handleNext = ()=> {
    setCurSlide(
      curSlide + 1 < images.length ?  curSlide + 1 : images.length - 1
    )
  }
  return (
    <div className="ImageSlider-container">
      <div className="ImageSlider-layout">
            <FaArrowAltCircleLeft className="arrow-left"
            onClick={handlePrev}
            />
      {
        images.map((image, index)=>
            <div
            key={`${image.id}-${index}-Slidercard`}
              className={ curSlide === index ? "current-image" : "hide-image"}
          >{
              image
            }</div>
        )
      }
      <FaArrowAltCircleRight className="arrow-right"
      onClick={handleNext}
      />
      </div>
      <div className="circle-indexes">
        { images && images.length ?
          images.map((image,index) =>
            <button
              key={`${image.id}-${index}-button`}
              className={ curSlide === index ? "index-indicator" : "index-indicator index-inactive"}
              onClick={()=> setCurSlide(index)}
            ></button>
          )
          : null}
      </div>
    </div>
  );
}

export const ImageSlider = ({url, limit}) => {
  return (<div></div>)
}
export const ImageSliderUrl = ( { url, limit }) => {
  const [images, setImages] = useState([]);
  const [ error, setError ] = useState(null);
  const [loading, setLoading] = useState(false);
  const [curSlide, setCurSlide] = useState(0);

async function fetchImages(getUrl){
  try {
    const response = await fetch(`${getUrl}?page=1&limit=${limit}`);
    const data = await response.json();

    if(data){
      setImages(data);
      console.log(data)
      setLoading(false);
    }

  }catch(error){
    setError(error);
  }finally{
    setLoading(false);
  }
}
const handlePrev = ()=> {
  setCurSlide(
    curSlide >  0 ? curSlide - 1 : 0
  )
}

const handleNext = ()=> {
  setCurSlide(
    curSlide + 1 < images.length ?  curSlide + 1 : images.length - 1
  )
}
  useEffect(()=>{
    if(url !== "") fetchImages(url);

  },[url])

  return (
    <div className="ImageSlider-container">
      <div className="ImageSlider-layout">
            <FaArrowAltCircleLeft className="arrow-left"
            onClick={handlePrev}
            />
      {
        loading ?
        <div>loading</div>
        :
        error ?
        <div>
         <p>Something went wrong retrieving the images ...</p>
        </div>
        :
        images.map((image, index)=>
            <img
              key={image.id}
              className={ curSlide === index ? "current-image" : "hide-image"}
              src={image.download_url} alt=""
            />
        )
      }
      <FaArrowAltCircleRight className="arrow-right"
      onClick={handleNext}
      />
      </div>
      <div className="circle-indexes">
        { images && images.length ?
          images.map((_,index) =>
            <button
              key={index}
              className={ curSlide === index ? "index-indicator" : "index-indicator index-inactive"}
              onClick={()=> setCurSlide(index)}
            ></button>
          )
          : null}
      </div>
    </div>
  );
}
