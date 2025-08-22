import { useEffect, useState, useRef, useMemo, useCallback } from "react";
import sliderImg1 from "../img/servicesSlider1.webp";
import sliderImg2 from "../img/servicesSlider2.webp";
import sliderImg3 from "../img/servicesSlider3.webp";
import sliderImg4 from "../img/servicesSlider4.webp";
import sliderImg5 from "../img/servicesSlider5.webp";

const sliderElements = [
  {
    subId: 3,
    id: 1,
    img: sliderImg3,
    title: "Water Damage Restoration",
    text: "Trust our specialists to restore water-damaged devices to their optimal functionality, saving your gadgets from irreversible harm.",
  },
  {
    subId: 4,
    id: 2,
    img: sliderImg4,
    title: "Charging Port Repairs",
    text: "Ensure seamless charging capabilities with our professional charging port repair service, resolving issues to keep your device powered up.",
  },
  {
    subId: 5,
    id: 3,
    img: sliderImg5,
    title: "Software Issues",
    text: "Resolve frustrating software glitches and malfunctions with our comprehensive software issue diagnostics and repair.",
  },
  {
    subId: 1,
    id: 4,
    img: sliderImg1,
    title: "Screen Replacement",
    text: "Restore your device's visual clarity with our expert screen replacement service, ensuring a pristine display for uninterrupted usage.",
  },
  {
    subId: 2,
    id: 5,
    img: sliderImg2,
    title: "Battery Replacement",
    text: "Say goodbye to dwindling battery life with our swift and efficient battery replacement service, rejuvenating your device's power.",
  },
  {
    subId: 3,
    id: 6,
    img: sliderImg3,
    title: "Water Damage Restoration",
    text: "Trust our specialists to restore water-damaged devices to their optimal functionality, saving your gadgets from irreversible harm.",
  },
  {
    subId: 4,
    id: 7,
    img: sliderImg4,
    title: "Charging Port Repairs",
    text: "Ensure seamless charging capabilities with our professional charging port repair service, resolving issues to keep your device powered up.",
  },
  {
    subId: 5,
    id: 8,
    img: sliderImg5,
    title: "Software Issues",
    text: "Resolve frustrating software glitches and malfunctions with our comprehensive software issue diagnostics and repair.",
  },
  {
    subId: 1,
    id: 9,
    img: sliderImg1,
    title: "Screen Replacement",
    text: "Restore your device's visual clarity with our expert screen replacement service, ensuring a pristine display for uninterrupted usage.",
  },
  {
    subId: 2,
    id: 10,
    img: sliderImg2,
    title: "Battery Replacement",
    text: "Say goodbye to dwindling battery life with our swift and efficient battery replacement service, rejuvenating your device's power.",
  },
  {
    subId: 3,
    id: 11,
    img: sliderImg3,
    title: "Water Damage Restoration",
    text: "Trust our specialists to restore water-damaged devices to their optimal functionality, saving your gadgets from irreversible harm.",
  },
];

export const ServicesSlider = () => {
  const [activeSlide, setActiveSlide] = useState(3);
  const [isDelay, setIsDelay] = useState(false);
  const [sliderTranslate, setSliderTranslate] = useState(0);
  const [isTransition, setIsTransition] = useState(false);
  const [isDragSlider, setIsDragSlider] = useState(false);
  const [sliderPosition, setSliderPosition] = useState({ x: 0 });
  const sliderPositionOnWindow = useRef({});
  const slide = useRef(null);
  const overflowSliderRef = useRef(null);
  const mouseRef = useRef({ x: null });

  const countSlides = useMemo(() => {
    return sliderElements.length - 3;
  }, []);

  const handleMouseDown = (e) => {
    if (overflowSliderRef.current) {
      sliderPositionOnWindow.current = {
        top: overflowSliderRef.current.getBoundingClientRect().top,
        left: overflowSliderRef.current.getBoundingClientRect().left,
        bottom: overflowSliderRef.current.getBoundingClientRect().bottom,
        right: overflowSliderRef.current.getBoundingClientRect().right,
      };
    }
    setIsDragSlider(true);
    e.preventDefault();
    setIsTransition(false);
    mouseRef.current = { x: e.clientX };
  };
  const handleMouseUp = useCallback(
    (e) => {
      setIsDragSlider(false);
      setIsTransition(true);
      setSliderPosition(sliderTranslate);
      if (isDragSlider) {
        setActiveSlide((prev) => {
          if (e.clientX - mouseRef.current.x > 50) {
            return prev - 1;
          } else if (e.clientX - mouseRef.current.x < 50) {
            return prev + 1;
          } else return prev;
        });
        if (countSlides - 2 < activeSlide) {
          setTimeout(() => {
            setIsTransition(false);
            setActiveSlide(3);
          }, 300);
        } else if (activeSlide < 3) {
          setTimeout(() => {
            setIsTransition(false);
            setActiveSlide(countSlides - 2);
          }, 300);
        }
      }
    },
    [sliderTranslate, isDragSlider, activeSlide, countSlides]
  );
  const handleMouseMove = useCallback(
    (e) => {
      let dx = e.clientX - mouseRef.current.x;
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
        setIsDragSlider(false);
        setIsTransition(true);
      }
      setSliderPosition(sliderTranslate - dx);
    },
    [sliderTranslate, isDragSlider, sliderPositionOnWindow]
  );
  useEffect(() => {
    if (slide.current && isDragSlider) {
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
  }, [slide, isDragSlider, handleMouseMove, handleMouseUp]);

  useEffect(() => {
    const handleResize = () => {
      setSliderTranslate(slide.current.offsetWidth * activeSlide);
    };
    handleResize();
    document.addEventListener("resize", handleResize);
    return () => {
      document.removeEventListener("resize", handleResize);
    };
  });

  const handleDelay = () => {
    setIsDelay(true);
    setIsTransition(true);
    setTimeout(() => {
      setIsDelay(false);
    }, 400);
  };

  const handleNextSlide = () => {
    handleDelay();
    if (countSlides - 2 > activeSlide) {
      setActiveSlide((prev) => prev + 1);
    } else {
      setIsTransition(false);
      setActiveSlide(1);
      setTimeout(() => {
        setIsTransition(true);
        setActiveSlide((prev) => prev + 1);
      }, 100);
    }
  };

  const handlePrevSlide = () => {
    handleDelay();
    if (activeSlide > 3) {
      setActiveSlide((prev) => prev - 1);
    } else {
      setIsTransition(false);
      setActiveSlide(countSlides);
      setTimeout(() => {
        setIsTransition(true);
        setActiveSlide((prev) => prev - 1);
      }, 100);
    }
  };

  useEffect(() => {
    setSliderPosition(sliderTranslate);
  }, [sliderTranslate]);

  return (
    <div className="services__slider">
      <button
        disabled={isDelay}
        onClick={handlePrevSlide}
        className="services__slider__button left"
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
      <div ref={overflowSliderRef} className="services__slider__overflow">
        <div
          className="slider"
          onMouseDown={handleMouseDown}
          style={{
            position: "relative",
            left: "-" + sliderPosition + "px",
            transition: isTransition ? "all .3s" : "none",
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
        onClick={handleNextSlide}
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
