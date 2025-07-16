import { useEffect, useState, useRef, useCallback } from "react";
import phoneImg from "../img/phone.webp";

export const Phone = () => {
  const [isMouseEnter, setIsMouseEnter] = useState(false);
  const [positionOnPhone, setPositionOnPhone] = useState({ x: 0, y: 0 });
  const phoneRef = useRef(null);

  const handleMouseLeave = useCallback(() => {
    setIsMouseEnter(false);
  }, []);
  const handleMouseEnter = useCallback(() => {
    setIsMouseEnter(true);
  }, []);
  const handleMouseMove = useCallback(
    (e) => {
      const { left, top } = phoneRef.current.getBoundingClientRect();
      setPositionOnPhone({ x: e.clientX - left, y: e.clientY - top });
      console.log(positionOnPhone);
    },
    [positionOnPhone]
  );
  useEffect(() => {
    const phone = phoneRef.current;

    if (phone) {
      phone.addEventListener("mouseenter", handleMouseEnter);
      phone.addEventListener("mouseleave", handleMouseLeave);
    }
    return () => {
      phone.removeEventListener("mouseenter", handleMouseEnter);
      phone.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleMouseLeave, handleMouseEnter]);

  useEffect(() => {
    const phone = phoneRef.current;
    if (isMouseEnter) {
      phone.addEventListener("mousemove", handleMouseMove);
    }
  }, [handleMouseMove, isMouseEnter]);
  return (
    <div className="interactive__flex__interactive">
      <img ref={phoneRef} className="phone" src={phoneImg} alt="" />
    </div>
  );
};
