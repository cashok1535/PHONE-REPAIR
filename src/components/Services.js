import { ServicesSlider } from "./ServicesSlider";
export const Services = () => {
  return (
    <section className="services">
      <div className="orange__title__bold">SERVICES</div>
      <div className="what__we__do__title">
        We Repair Smarthones, That's It
        <span className="interactive__flex__info__orange">.</span>
      </div>
      <div className="about__us__section__text__bold services__text__bold">
        Learn more about our services.
      </div>
      <div className="services__parent__slider">
        <ServicesSlider />
      </div>
    </section>
  );
};
