import { useEffect, useState, useRef, useCallback } from "react";
import phoneImg from "../img/phone.webp";

export const Phone = () => {
  const [isMouseEnter, setIsMouseEnter] = useState(false);
  const [positionOnPhone, setPositionOnPhone] = useState({ x: 0, y: 0 });
  const phoneRef = useRef(null);
  console.log(positionOnPhone);

  const handleMouseLeave = useCallback(() => {
    setIsMouseEnter(false);
  }, []);
  const handleMouseEnter = useCallback(() => {
    setIsMouseEnter(true);
  }, []);
  const handleMouseMove = useCallback((e) => {
    const { left, top, height, width } =
      phoneRef.current.getBoundingClientRect();
    setPositionOnPhone({
      x: e.clientX - left - width / 2,
      y: e.clientY - top - height / 2,
    });
  }, []);
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
    <div ref={phoneRef} className="interactive__flex__interactive">
      <img
        style={{
          transform: isMouseEnter
            ? `rotateY(${positionOnPhone.x / 10}deg) rotateX(${
                positionOnPhone.y / 10
              }deg)`
            : "rotateY(0deg) rotateX(0deg)",
          transition: "transform .2s",
        }}
        className="phone"
        src={phoneImg}
        alt=""
      />
    </div>
  );
};
