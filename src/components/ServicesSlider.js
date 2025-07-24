import { useEffect, useState, useRef, useMemo } from "react";
import sliderImg1 from "../img/servicesSlider1.webp";
import sliderImg2 from "../img/servicesSlider2.webp";
import sliderImg3 from "../img/servicesSlider3.webp";
import sliderImg4 from "../img/servicesSlider4.webp";
import sliderImg5 from "../img/servicesSlider5.webp";

const sliderElements = [
  {
    id: 1,
    img: sliderImg1,
    title: "Screen Replacement",
    text: "Restore your device's visual clarity with our expert screen replacement service, ensuring a pristine display for uninterrupted usage.",
  },
  {
    id: 2,
    img: sliderImg2,
    title: "Battery Replacement",
    text: "Say goodbye to dwindling battery life with our swift and efficient battery replacement service, rejuvenating your device's power.",
  },
  {
    id: 3,
    img: sliderImg3,
    title: "Water Damage Restoration",
    text: "Trust our specialists to restore water-damaged devices to their optimal functionality, saving your gadgets from irreversible harm.",
  },
  {
    id: 4,
    img: sliderImg4,
    title: "Charging Port Repairs",
    text: "Ensure seamless charging capabilities with our professional charging port repair service, resolving issues to keep your device powered up.",
  },
  {
    id: 5,
    img: sliderImg5,
    title: "Software Issues",
    text: "Resolve frustrating software glitches and malfunctions with our comprehensive software issue diagnostics and repair.",
  },
];

export const ServicesSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isDelay, setIsDelay] = useState(false);
  const [slideTranslate, setSlideTranslate] = useState(null);
  const slide = useRef(null);
  const countSlides = useMemo(() => {
    return sliderElements.length;
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setSlideTranslate(slide.current.offsetWidth * activeSlide);
      console.log(slideTranslate);
    };
    handleResize();
    document.addEventListener("resize", handleResize);
    return () => {
      document.removeEventListener("resize", handleResize);
    };
  });

  const handleDelay = () => {
    setIsDelay(true);
    setTimeout(() => {
      setIsDelay(false);
    }, 1000);
  };
  const handleNextSlider = () => {
    handleDelay();
    setActiveSlide((prev) => prev + 1);
  };
  return (
    <div className="services__slider">
      <button className="services__slider__button left">
        <svg
          width="30px"
          height="30px"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            transform: "rotate(180deg)",
          }}
        >
          <path
            d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z"
            fill="#000000"
          />
        </svg>
      </button>
      <div className="services__slider__overflow">
        <div
          className="slider"
          style={{
            position: "relative",
            left: "-" + slideTranslate + "px",
          }}
        >
          {sliderElements.map((el) => (
            <div ref={slide} key={el.id} className="services__slider__element">
              <img
                className="services__slider__element__img"
                src={el.img}
                alt=""
              />
              <div className="services__slider__element__title">{el.title}</div>
              <div className="services__slider__element__text">{el.text}</div>
              <button className="about__us__section__button">
                Learn the Price
              </button>
            </div>
          ))}
        </div>
      </div>
      <button
        disabled={isDelay}
        onClick={handleNextSlider}
        className="services__slider__button right"
      >
        <svg
          width="30px"
          height="30px"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z"
            fill="#000000"
          />
        </svg>
      </button>
    </div>
  );
};
