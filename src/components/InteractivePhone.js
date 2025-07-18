import { Phone } from "./Phone";

export const InteractivePhone = () => {
  return (
    <section className="interactive__flex">
      <div className="interactive__flex__info">
        <div className="orange__title">welcome to TechPro</div>
        <div className="interactive__flex__info__title">
          Don't Delay, Repair Today.
        </div>
        <div className="interactive__flex__info__big__text">
          Trust TechPro – Where Tech Meets Pro!
        </div>
        <div className="interactive__flex__info__text">
          Don't let technical troubles slow you down. At TechPro, we're here to
          breathe new life into your devices, swiftly & seamlessly
          <span className="interactive__flex__info__orange">.</span>
        </div>
        <div className="info__flex">
          <div className="info__flex__element">Warranty Policy</div>
          <div className="info__flex__element">Service Terms</div>
          <div className="info__flex__element">Support</div>
        </div>
      </div>
      <Phone />
      <div className="interactive__flex__about">
        <div className="interactive__flex__info__title">
          34.5k <span className="interactive__flex__info__orange">+</span>
        </div>
        <div className="interactive__flex__about__title">Clients in NY.</div>
        <img className="interactive__flex__about__img" alt="" />
        <div className="interactive__flex__about__text">
          Our experts are ready to diagnose your device for completely free.
          <span className="interactive__flex__about__text__bold">
            Write us!
          </span>
        </div>
        <div className="interactive__flex__about__repair">
          Get <a href="#123">repair</a> services
          <span className="interactive__flex__info__orange">→</span>
        </div>
      </div>
    </section>
  );
};
