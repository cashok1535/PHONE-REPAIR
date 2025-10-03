import imgFirst from "../img/AboutUsPageFirst.webp";
import imgSecond from "../img/AboutUsPageSecond.webp";

export const AboutUsPageSection = () => {
  return (
    <>
      <div className="about__us__page__info">
        <div className="interactive__flex__info__title about__us__page__center">
          About Us<span className="interactive__flex__info__orange">.</span>
        </div>
        <div className="page__info__little">
          <div className="page__home">HOME</div>
          <span className="page__home__arrow">→</span>
          <div className="page__current__page">ABOUT US</div>
        </div>
      </div>
      <div className="about__us__page__flex">
        <div className="about__us__page__flex__element">
          <div className="orange__title">ABOUT US</div>
          <div className="what__we__do__title about__us__page__flex__title">
            We Fix Gadgets<span class="interactive__flex__info__orange">.</span>
          </div>
          <div className="about__us__section__text__bold about__us__page__flex__little__title">
            Trust TechPro – Where Tech Meets Pro!
          </div>
          <div className="about__us__section__text">
            At TechPro, we are dedicated to being your go-to destination for all
            things mobile repair in New York. With years of expertise under our
            belt, our team of skilled technicians excels in diagnosing and
            resolving a wide array of issues plaguing your devices.
          </div>
          <img className="about__us__page__img" src={imgFirst} alt="" />
          <div className="about__us__section__text">
            We understand the frustration that comes with a malfunctioning
            device, which is why we strive to provide swift and reliable
            solutions that get you back to enjoying your gadgets in no time.
          </div>
        </div>
        <div className="about__us__page__flex__element">
          <img className="about__us__page__img" src={imgSecond} alt="" />
          <div className="about__us__section__text">
            We're not just another mobile repair service – we're your trusted
            partners in keeping your devices running smoothly. With over 25
            years of experience serving the New York community, our mission is
            simple: to provide top-quality repairs and exceptional customer
            service.
            <br />
            <br />
            Our team of 15 dedicated technicians brings a wealth of expertise to
            every repair job, ensuring that your devices are in capable hands.
            From cracked screens to water damage, battery issues to software
            glitches, we've seen it all and fixed it all.
          </div>
        </div>
      </div>
    </>
  );
};
