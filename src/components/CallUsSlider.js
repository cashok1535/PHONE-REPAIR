import welsh from "../img/welsh.webp";
import peterson from "../img/peterson..webp";
import tovoli from "../img/tovoli.webp";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const slides = [
  {
    id: 1,
    subId: 3,
    title: '"Five Stars Without a Doubt!"',
    text: `“I can't thank TechPro enough for their exceptional service! When my phone started acting up, I was worried about the potential costs of repairs. However, the free diagnostics put my mind at ease. They quickly identified the issue and provided a transparent breakdown of the repair process and costs involved."`,
    name: "SUSAN TIVOLI",
    img: tovoli,
  },
  {
    id: 2,
    subId: 1,
    title: '"TechPro Saved My Day!"',
    text: '“TechPro is nothing short of amazing! My phone suffered water damage, and I was worried it was beyond repair. However, the professional team at TechPro worked their magic and restored my device to its former glory. They were efficient, communicative, and provided top-notch service."',
    name: "AMANDA WELSH",
    img: welsh,
  },
  {
    id: 3,
    subId: 2,
    title: '"Amazing Service!"',
    text: '“I was in a rush with a cracked screen, and TechPro truly saved me! Their quick repair service had my phone looking brand new in no time. The staff was incredibly friendly and knowledgeable, answering all my questions with patience. I highly recommend their services to anyone in need of reliable mobile repairs."',
    name: "JACK PETERSON",
    img: peterson,
  },
  {
    id: 4,
    subId: 3,
    title: '"Five Stars Without a Doubt!"',
    text: `“I can't thank TechPro enough for their exceptional service! When my phone started acting up, I was worried about the potential costs of repairs. However, the free diagnostics put my mind at ease. They quickly identified the issue and provided a transparent breakdown of the repair process and costs involved."`,
    name: "SUSAN TIVOLI",
    img: tovoli,
  },
  {
    id: 5,
    subId: 1,
    title: '"TechPro Saved My Day!"',
    text: '“TechPro is nothing short of amazing! My phone suffered water damage, and I was worried it was beyond repair. However, the professional team at TechPro worked their magic and restored my device to its former glory. They were efficient, communicative, and provided top-notch service."',
    name: "AMANDA WELSH",
    img: welsh,
  },
  {
    id: 6,
    subId: 2,
    title: '"Amazing Service!"',
    text: '“I was in a rush with a cracked screen, and TechPro truly saved me! Their quick repair service had my phone looking brand new in no time. The staff was incredibly friendly and knowledgeable, answering all my questions with patience. I highly recommend their services to anyone in need of reliable mobile repairs."',
    name: "JACK PETERSON",
    img: peterson,
  },
];

export const CallUsSlider = () => {
  const [activeSlide, setActiveSlide] = useState(1);
  const [isDragSlider, setIsDragSlider] = useState(false);
  const [isTransition, setIsTransition] = useState(false);
  const [sliderTranslate, setSliderTranslate] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(0);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const sliderPositionOnWindow = useRef({});
  const sliderRef = useRef(null);
  const mousePosition = useRef({ x: null });
  const countSlides = useMemo(() => {
    return slides.length - 1;
  }, []);

  const handleMouseDown = (e) => {
    if (sliderRef.current) {
      sliderPositionOnWindow.current = {
        top: sliderRef.current.getBoundingClientRect().top,
        bottom: sliderRef.current.getBoundingClientRect().bottom,
        left: sliderRef.current.getBoundingClientRect().left,
        right: sliderRef.current.getBoundingClientRect().right,
      };
    }

    setIsDragSlider(true);
    e.preventDefault();
    setIsTransition(false);
    mousePosition.current = { x: e.clientX };
  };

  const handleMouseMove = useCallback(
    (e) => {
      setIsTransition(false);
      let dx = e.clientX - mousePosition.current.x;
      if (
        !(
          isDragSlider &&
          e.clientX > sliderPositionOnWindow.current.left &&
          e.clientY > sliderPositionOnWindow.current.top &&
          e.clientX < sliderPositionOnWindow.current.right &&
          e.clientY < sliderPositionOnWindow.current.bottom
        )
      ) {
        dx = 0;
        setIsTransition(true);
      }
      setSliderPosition(sliderTranslate - dx);
    },
    [sliderTranslate, isDragSlider, sliderPositionOnWindow]
  );

  const handleMouseUp = useCallback(
    (e) => {
      setIsDragSlider(false);
      setIsTransition(true);
      setSliderPosition(sliderTranslate);
      if (activeSlide < countSlides) {
        setActiveSlide((prev) => {
          if (
            e.clientX - mousePosition.current.x >
              sliderRef.current.offsetWidth / 3 &&
            prev > 0
          ) {
            return prev - 1;
          } else if (
            e.clientX - mousePosition.current.x <
            -sliderRef.current.offsetWidth / 3
          ) {
            return prev + 1;
          } else return prev;
        });
      }
    },
    [sliderTranslate, activeSlide, countSlides]
  );

  useEffect(() => {
    if (activeSlide === countSlides) {
      setTimeout(() => {
        setIsTransition(false);
        setActiveSlide(2);
      }, 500);
    } else if (activeSlide === 1) {
      setTimeout(() => {
        setIsTransition(false);
        setActiveSlide(countSlides - 1);
      }, 500);
    }
  }, [activeSlide, countSlides]);

  const buttonDisabled = () => {
    setIsTransition(true);
    setIsButtonDisabled(true);
    setTimeout(() => {
      setIsButtonDisabled(false);
    }, 700);
  };

  const handleNext = () => {
    buttonDisabled();
    if (activeSlide < countSlides) {
      setActiveSlide((prev) => prev + 1);
    } else {
      setIsTransition(false);
      setActiveSlide(0);
      setTimeout(() => {
        setIsTransition(true);
        setActiveSlide((prev) => prev + 1);
      }, 50);
    }
  };

  const handlePrev = () => {
    buttonDisabled();
    if (activeSlide > 0) {
      setActiveSlide((prev) => prev - 1);
    } else {
      setIsTransition(false);
      setActiveSlide(countSlides);
      setTimeout(() => {
        setIsTransition(true);
        setActiveSlide((prev) => prev - 1);
      }, 50);
    }
  };

  useEffect(() => {
    setSliderPosition(sliderTranslate);
  }, [sliderTranslate]);

  useEffect(() => {
    if (sliderRef.current && isDragSlider) {
      document.body.addEventListener("mousemove", handleMouseMove);
      document.body.addEventListener("mouseup", handleMouseUp);
    } else {
      document.body.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseup", handleMouseUp);
    }
    return () => {
      document.body.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseup", handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp, isDragSlider]);

  useEffect(() => {
    const handleResize = () => {
      if (sliderRef.current) {
        setSliderTranslate(activeSlide * sliderRef.current.offsetWidth);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [activeSlide]);

  return (
    <div className="CallUsSlider">
      <button
        disabled={isButtonDisabled}
        className="services__slider__button left"
        onClick={handlePrev}
      >
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
      <div
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        className="call__us__slider__parrent"
      >
        <div
          style={{
            position: "relative",
            left: "-" + sliderPosition + "px",
            transition: isTransition ? "all .5s" : "none",
          }}
          className="call__us__slider"
        >
          {slides.map((el) => (
            <div className="call__us__slider__flex" key={el.id}>
              <div className="call__us__slider__flex__element call__us__slider__text">
                <div className="quotes">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 512 512"
                    enableBackground="new 0 0 512 512"
                    width="50px"
                    height="50px"
                  >
                    <g fill="#ff6534">
                      <path
                        d="M420.586,346.029c0,27.717-6,54.371-17.093,79.371c64.561-43.279,105.525-105.061,107.213-173.808l1.25-1.406V85.381   H299.279v213.306h115.338C418.523,314.029,420.586,329.842,420.586,346.029z"
                        fill="#ff6534"
                      ></path>
                      <path
                        d="M116.258,298.688c4.125,15.717,6.281,31.938,6.281,48.527c0,27.719-6.031,54.404-17.124,79.404   c65.402-43.842,106.588-106.621,107.275-176.432h0.031v-0.844c0-0.344,0-0.656,0-1c0-0.344,0-0.688,0-1.031V85.381H0.044v213.306   H116.258z"
                        fill="#ff6534"
                      ></path>
                    </g>
                  </svg>
                </div>
                <div className="call__us__slider__flex__element__title">
                  {el.title}
                </div>
                <div className="call__us__slider__flex__element__text">
                  {el.text}
                </div>
                <div className="call__us__slider__flex__element__name">
                  {el.name}
                </div>
              </div>
              <div className="call__us__slider__flex__element__img">
                <img src={el.img} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        disabled={isButtonDisabled}
        className="services__slider__button right"
        onClick={handleNext}
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
