import { Phone } from "./Phone";
import man from "../img/man.webp";
import { useEffect, useState } from "react";

export const InteractivePhone = () => {
  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    let start = 0.5;
    const end = 34.5;
    const increment = 1;

    if (start === end) return;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCurrentNumber(start);
    }, 10);
    setCurrentNumber(34.5);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="interactive__flex">
      <div className="interactive__flex__element">
        <div className="interactive__flex__info">
          <div className="orange__title">WELCOME TO TECHPRO</div>
          <div className="interactive__flex__info__title">
            Don't Delay, Repair Today
            <span className="interactive__flex__info__orange">.</span>
          </div>
          <div className="interactive__flex__info__big__text">
            Trust TechPro –
            <span className="interactive__flex__info__big__text__bold">
              Where Tech Meets Pro!
            </span>
          </div>
          <div className="interactive__flex__info__text">
            Don't let technical troubles slow you down. At TechPro, we're here
            to breathe new life into your devices, swiftly & seamlessly .
          </div>
          <div className="info__flex">
            <div className="info__flex__element">WARRANTY POLICITY</div>
            <div className="info__flex__element">SERVICE TERMS</div>
            <div className="info__flex__element">SUPPORT</div>
          </div>
        </div>
      </div>
      <div className="interactive__flex__element">
        <Phone />
      </div>
      <div className="interactive__flex__element">
        <div className="interactive__flex__about">
          <div className="interactive__flex__info__title number__title">
            {currentNumber}k
            <span className="interactive__flex__info__orange">+</span>
          </div>
          <div className="interactive__flex__about__title">CLIENTS IN NY.</div>
          <img className="interactive__flex__about__img" src={man} alt="" />
          <div className="interactive__flex__about__text">
            Our experts are ready to diagnose your device for completely free.
            <span className="interactive__flex__about__text__bold">
              Write us!
            </span>
          </div>
          <div className="interactive__flex__about__repair">
            Get <a href="#123">repair</a> services
            <span className="interactive__flex__info__orange interactive__arrow">
              →
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
