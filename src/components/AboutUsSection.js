import img from "../img/AboutUsSection.webp";

export const AboutUsSection = () => {
  return (
    <section className="about__us__section">
      <img className="about__us__section__img" src={img} alt="" />
      <div className="about__us__section__element">
        <div className="orange__title orange__title__bold">ABOUT US</div>
        <div className="what__we__do__title">
          Bringing Life Back to Your Gadgets
          <span className="interactive__flex__info__orange">.</span>
        </div>
        <div className="about__us__section__text__bold">
          Schedule your repair with TechPro today and experience the ultimate in
          convenience and expertise.
        </div>
        <div className="about__us__section__text">
          At TechPro, we are dedicated to being your go-to destination for all
          things mobile repair in New York. With years of expertise under our
          belt, our team of skilled technicians excels in diagnosing and
          resolving a wide array of issues plaguing your devices.
        </div>
        <br />
        <div className="about__us__section__text">
          We understand the frustration that comes with a malfunctioning device,
          which is why we strive to provide swift and reliable solutions that
          get you back to enjoying your gadgets in no time.
        </div>
        <button className="about__us__section__button">
          Learn More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            x="0px"
            y="0px"
            viewBox="0 0 100 100"
            enableBackground="new 0 0 100 100"
            style={{ maxWidth: "100%" }}
            height="100%"
          >
            <path
              d="M59.999,55.001v15l20-20c0,0-10-10-20-20v15h-40v10H59.999z"
              fill="currentColor"
            ></path>
          </svg>
        </button>
      </div>
    </section>
  );
};
