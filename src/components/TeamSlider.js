import { useEffect, useState, useRef, useMemo, useCallback } from "react";
import img1 from "../img/teamsSlider1.webp";
import img2 from "../img/teamsSlider2.webp";
import img3 from "../img/teamsSlider3.webp";

const slides = [
  {
    subId: 3,
    id: 0,
    img: img1,
    name: "Sam Kirth",
    text: "Sam's expertise lies in water damage restoration, honed over 6 years of hands-on experience. His meticulous approach ensures devices are rescued from the depths effectively.",
    width: 120,
  },
  {
    subId: 1,
    id: 1,
    img: img2,
    name: "James Smith",
    text: "With a decade of experience, James specializes in intricate hardware repairs. His attention to detail and passion for technology ensure top-notch results for every device.",
    width: 120,
  },
  {
    subId: 2,
    id: 2,
    img: img3,
    name: "Dean Elgrad",
    text: "Dean is a seasoned software guru with a knack for troubleshooting complex issues. With 8 years in the industry, he's your go-to for all software-related concerns.",
    width: 190,
  },
  {
    subId: 3,
    id: 3,
    img: img1,
    name: "Sam Kirth",
    text: "Sam's expertise lies in water damage restoration, honed over 6 years of hands-on experience. His meticulous approach ensures devices are rescued from the depths effectively.",
    width: 120,
  },
  {
    subId: 1,
    id: 4,
    img: img2,
    name: "James Smith",
    text: "With a decade of experience, James specializes in intricate hardware repairs. His attention to detail and passion for technology ensure top-notch results for every device.",
    width: 120,
  },
  {
    subId: 2,
    id: 5,
    img: img3,
    name: "Dean Elgrad",
    text: "Dean is a seasoned software guru with a knack for troubleshooting complex issues. With 8 years in the industry, he's your go-to for all software-related concerns.",
    width: 190,
  },
];

export const TeamsSlider = () => {
  const [activeSlide, setActiveSlide] = useState(1);
  const [sliderTranslate, setSliderTranslate] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isTransition, setIsTransition] = useState(true);
  const [isDrag, setIsDrag] = useState(false);
  const [sliderPosition, setSliderPosition] = useState();
  const sliderRef = useRef(null);
  const slideRef = useRef(null);
  const sliderDragX = useRef(null);

  const countSlides = useMemo(() => {
    return slides.length - 2;
  }, []);

  const handleDown = (e) => {
    e.preventDefault();
    sliderDragX.current = e.clientX;
    setIsTransition(true);
    setIsDrag(true);
  };

  const handleMove = useCallback(
    (e) => {
      let dx = sliderDragX.current;
      if (isDrag) {
        dx = e.clientX - sliderDragX.current;
        setSliderPosition(sliderTranslate - dx);
      }
    },
    [isDrag, sliderTranslate]
  );
  const handleUp = useCallback(() => {
    setIsDrag(false);
    setIsTransition(false);
    setSliderPosition(sliderTranslate);
  }, [sliderTranslate]);

  useEffect(() => {
    if (sliderRef.current) {
      document.body.addEventListener("mousemove", handleMove);
      document.body.addEventListener("mouseup", handleUp);
    }
    return () => {
      document.body.removeEventListener("mousemove", handleMove);
      document.body.removeEventListener("mouseup", handleUp);
    };
  }, [handleMove, handleUp]);

  const handleDelay = () => {
    setIsTransition(false);
    setIsDisabled(true);
    setTimeout(() => {
      setIsDisabled(false);
    }, 700);
  };

  const handleNext = () => {
    handleDelay();
    if (activeSlide < countSlides) {
      setActiveSlide((prev) => prev + 1);
    } else {
      setIsTransition(true);
      setActiveSlide(1);
      setTimeout(() => {
        setIsTransition(false);
        setActiveSlide((prev) => prev + 1);
      }, 50);
    }
  };

  const handlePrev = () => {
    handleDelay();
    if (activeSlide > 0) {
      setActiveSlide((prev) => prev - 1);
    } else {
      setIsTransition(true);
      setActiveSlide(countSlides - 1);
      setTimeout(() => {
        setIsTransition(false);
        setActiveSlide((prev) => prev - 1);
      }, 50);
    }
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
      <button
        disabled={isDisabled}
        onClick={handlePrev}
        className="slider__button left"
      >
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
          onMouseDown={handleDown}
          style={{
            left: `-${sliderPosition}px`,
            transition: isTransition ? "none" : "all .3s",
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
      <button
        disabled={isDisabled}
        onClick={handleNext}
        className="slider__button right"
      >
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
