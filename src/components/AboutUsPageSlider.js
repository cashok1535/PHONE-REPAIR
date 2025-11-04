import { TeamsSlider } from "./TeamSlider";
export const AboutUsPageSlider = () => {
  return (
    <section className="about__us__page__slider">
      <div className="orange__title orange__title__bold">TEAM</div>
      <div className="interactive__flex__info__title about__us__page__slider__title about__us__page__title">
        Quick Fixes, Lasting Solutions
        <span className="interactive__flex__info__orange">.</span>
      </div>
      <div className="cta__discount__text about__us__page__slider__text">
        We hire only the best tech experts to ensure the best possible quality
        of our services.
      </div>
      <div className="about__us__page__slider__parrent">
        <TeamsSlider />
      </div>
    </section>
  );
};
