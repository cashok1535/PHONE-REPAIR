import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const news = [
  {
    id: 1,
    subId: 4,
    date: "22 FEBRUARY 2024 | NEWS",
    title: "Cracked Screen Chronicles: The Importance of Timely Repairs",
    text: "Ignoring that cracked screen? Think again. Explore the risks of delaying screen repairs and the potential consequences for your device.",
  },
  {
    id: 2,
    subId: 1,
    date: "03 MARH 2024 | NEWS",
    title: "Navigating Software Snags & Troubleshooting Phone Issues",
    text: "Unravel the mysteries of common phone software issues and discover effective troubleshooting techniques.",
  },
  {
    id: 3,
    subId: 2,
    date: "12 JANUARY 2024 | NEWS",
    title: "Our Guide to Prolonging Your Phone's Battery Life",
    text: "Tired of constantly charging your phone? Discover tips and tricks to extend your device's battery life and maximize its performance.",
  },
  {
    id: 4,
    subId: 3,
    date: "02 FEBRUARY 2024 | NEWS",
    title: "Water Damage: What to Do When Your Phone Takes a Dip",
    text: "Has your phone suffered a watery mishap? Learn the essential steps to take when dealing with water damage.",
  },
  {
    id: 5,
    subId: 4,
    date: "22 FEBRUARY 2024 | NEWS",
    title: "Cracked Screen Chronicles: The Importance of Timely Repairs",
    text: "Ignoring that cracked screen? Think again. Explore the risks of delaying screen repairs and the potential consequences for your device.",
  },
  {
    id: 6,
    subId: 1,
    date: "03 MARH 2024 | NEWS",
    title: "Navigating Software Snags & Troubleshooting Phone Issues",
    text: "Unravel the mysteries of common phone software issues and discover effective troubleshooting techniques.",
  },
  {
    id: 8,
    subId: 2,
    date: "12 JANUARY 2024 | NEWS",
    title: "Our Guide to Prolonging Your Phone's Battery Life",
    text: "Tired of constantly charging your phone? Discover tips and tricks to extend your device's battery life and maximize its performance.",
  },
  {
    id: 9,
    subId: 3,
    date: "02 FEBRUARY 2024 | NEWS",
    title: "Water Damage: What to Do When Your Phone Takes a Dip",
    text: "Has your phone suffered a watery mishap? Learn the essential steps to take when dealing with water damage.",
  },
];

export const NewsSlider = () => {
  const [activeSlide, setActiveSlide] = useState(1);
  const [sliderTranslate, setSliderTranslate] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(0);
  const [isDelay, setIsDelay] = useState(false);
  const [isTransition, setIsTransition] = useState(false);
  const [isDragSlider, setIsDragSlider] = useState(false);
  const mousePositionRef = useRef({ x: 0 });
  const sliderRef = useRef(null);
  const slideWidthRef = useRef(null);
  const slidesCount = useMemo(() => {
    return news.length - 3;
  }, []);

  useEffect(() => {
    setSliderTranslate(activeSlide * slideWidthRef.current.offsetWidth);
  }, [activeSlide]);

  useEffect(() => {
    setSliderPosition(sliderTranslate);
  }, [sliderTranslate]);

  const handleDelay = () => {
    setIsTransition(true);
    setIsDelay(true);
    setTimeout(() => {
      setIsDelay(false);
    }, 400);
  };

  const handleNext = () => {
    handleDelay();
    if (activeSlide < slidesCount) {
      setActiveSlide((prev) => prev + 1);
    } else {
      setIsTransition(false);
      setActiveSlide(1);
      setTimeout(() => {
        setIsTransition(true);
        setActiveSlide((prev) => prev + 1);
      }, 20);
    }
  };

  const handlePrev = () => {
    handleDelay();
    if (activeSlide > 1) {
      setActiveSlide((prev) => prev - 1);
    } else {
      setIsTransition(false);
      setActiveSlide(slidesCount);
      setTimeout(() => {
        setIsTransition(true);
        setActiveSlide((prev) => prev - 1);
      }, 20);
    }
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragSlider(true);
    mousePositionRef.current.x = e.clientX;
    setIsTransition(false);
  };

  const handleMouseMove = useCallback(
    (e) => {
      let dx = e.clientX - mousePositionRef.current.x;
      if (!isDragSlider) {
        dx = 0;
      }
      setSliderPosition(sliderTranslate - dx);
    },
    [isDragSlider, sliderTranslate]
  );
  const handleMouseUp = useCallback(() => {
    setIsTransition(true);
    setSliderPosition(sliderTranslate);
    setIsDragSlider(false);
  }, [sliderTranslate]);

  useEffect(() => {
    if (isDragSlider && sliderRef) {
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
  }, [isDragSlider, handleMouseMove, handleMouseUp]);
  return (
    <section className="news__parrent__slider">
      <button
        onClick={handlePrev}
        disabled={isDelay}
        className="services__slider__button news__button left"
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
          <path d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z" />
        </svg>
      </button>
      <div ref={sliderRef} className="news__slider">
        <div
          onMouseDown={handleMouseDown}
          style={{
            position: "relative",
            display: "flex",
            left: "-" + sliderPosition + "px",
            transition: isTransition ? "all .3s" : "none",
          }}
        >
          {news.map((el) => (
            <div
              ref={slideWidthRef}
              key={el.id}
              className="news__slider__element"
            >
              <div className="news__slider__element__date">{el.date}</div>
              <div className="news__slider__element__title">{el.title}</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="31"
                style={{ width: "100%" }}
              >
                <path
                  d="M0 15.5 L3000 15.5"
                  style={{
                    fill: "none",
                    stroke: "rgba(255, 255, 255, 0.4)",
                    strokeWidth: "1px",
                  }}
                ></path>
              </svg>
              <div className="news__slider__element__text">{el.text}</div>
              <div className="news__slider__element__link">
                <a href="#123">Read More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        disabled={isDelay}
        onClick={handleNext}
        className="services__slider__button news__button right"
      >
        <svg
          width="30px"
          height="30px"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z" />
        </svg>
      </button>
    </section>
  );
};
