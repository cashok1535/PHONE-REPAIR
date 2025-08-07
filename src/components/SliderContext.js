import { createContext, useEffect, useRef, useState } from "react";

export const SliderContext = createContext();

export const SliderProvider = ({ children }) => {
  const [sliderPositionOnWindow, setSliderPositionOnWindow] = useState({});
  const sliderRect = useRef(null);
  const sliderRef = useRef(null);

  const handleRef = (ref) => {
    sliderRef.current = ref;
  };

  useEffect(() => {
    sliderRect.current = sliderRef.current.getBoundingClientRect();
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      if (sliderRef.current) {
        setSliderPositionOnWindow({
          top: sliderRef.current.getBoundingClientRect().top,
          left: sliderRef.current.getBoundingClientRect().left,
          bottom: sliderRef.current.getBoundingClientRect().bottom,
          right: sliderRef.current.getBoundingClientRect().right,
        });
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <SliderProvider value={(sliderPositionOnWindow, handleRef)}>
      {children}
    </SliderProvider>
  );
};
