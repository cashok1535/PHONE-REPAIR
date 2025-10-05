import { useEffect, useState, useRef } from "react";
import img1 from "../img/teamsSlider1.webp";
import img2 from "../img/teamsSlider2.webp";
import img3 from "../img/teamsSlider3.webp";

const slides = [
  {
    id: 1,
    img: img2,
    name: "James Smith",
    text: "With a decade of experience, James specializes in intricate hardware repairs. His attention to detail and passion for technology ensure top-notch results for every device.",
    width: 120,
  },
  {
    id: 2,
    img: img3,
    name: "Dean Elgrad",
    text: "Dean is a seasoned software guru with a knack for troubleshooting complex issues. With 8 years in the industry, he's your go-to for all software-related concerns.",
    width: 190,
  },
  {
    id: 3,
    img: img1,
    name: "Sam Kirth",
    text: "Sam's expertise lies in water damage restoration, honed over 6 years of hands-on experience. His meticulous approach ensures devices are rescued from the depths effectively.",
    width: 120,
  },
  {
    id: 4,
    img: img2,
    name: "James Smith",
    text: "With a decade of experience, James specializes in intricate hardware repairs. His attention to detail and passion for technology ensure top-notch results for every device.",
    width: 120,
  },
  {
    id: 5,
    img: img3,
    name: "Dean Elgrad",
    text: "Dean is a seasoned software guru with a knack for troubleshooting complex issues. With 8 years in the industry, he's your go-to for all software-related concerns.",
    width: 190,
  },
];

export const TeamsSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [sliderTranslate, setSliderTranslate] = useState(0);
  const sliderRef = useRef(null);
  const slideRef = useRef(null);

  const handleNext = () => {
    setActiveSlide((prev) => prev + 1);
  };

  const handlePrev = () => {
    setActiveSlide((prev) => prev - 1);
  };

  useEffect(() => {
    const handleResize = () => {
      setSliderTranslate(activeSlide * slideRef.current.offsetWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [activeSlide]);

  return (
    <>
      <button onClick={handlePrev} className="slider__button left">
        <svg
          width="30px"
          height="30px"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          style={{ transform: "rotate(180deg)" }}
        >
          <path d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z"></path>
        </svg>
      </button>
      <div className="teams__parrent__slider">
        <div
          ref={sliderRef}
          className="teams__slider"
          style={{
            left: `-${sliderTranslate}px`,
            transition: "all .3s",
          }}
        >
          {slides.map((el) => (
            <div
              style={{
                padding: "0 15px",
              }}
              ref={slideRef}
              key={el.id}
            >
              <div className="teams__slider__element">
                <div className="teams__slider__element__img__parrent">
                  <img
                    className="teams__slider__element__img"
                    src={el.img}
                    alt=""
                    style={{
                      width: el.width,
                    }}
                  />
                </div>
                <div className="teams__slider__element__name">{el.name}</div>
                <div className="teams__slider__element__text">{el.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button onClick={handleNext} className="slider__button right">
        <svg
          width="30px"
          height="30px"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z"></path>
        </svg>
      </button>
    </>
  );
};
