import cta1 from "../img/cta1.svg";
import cta2 from "../img/cta2.svg";
import cta3 from "../img/cta3.svg";
import cta4 from "../img/cta4.svg";

export const CTA = () => {
  return (
    <section className="cta">
      <div className="cta__top__flex">
        <div className="cta__top__flex__element">
          <div className="orange__title__bold cta__title">CTA</div>
          <span className="how__we__work__title">Contact Us and Get </span>
          <span className="how__we__work__title__orange">20% </span>
          <span className="how__we__work__title"> Off Your Order</span>
          <span className="how__we__work__title__orange">.</span>
        </div>
        <div className="cta__discount">
          <div className="cta__discount__text">
            The discount is applied on the first order of repair services at
            TechPro.
          </div>
          <button className="about__us__section__button">Contact Us</button>
        </div>
      </div>
      <div className="cta__bottom__flex">
        <div className="cta__bottom__flex__element">
          <img src={cta1} alt="" />
          <div className="cta__bottom__flex__element__title">
            Warranty Service
          </div>
          <div className="cta__bottom__flex__element__line"></div>
          <div className="cta__bottom__flex__element__text">
            Enjoy peace of mind with our warranty service.
          </div>
        </div>
        <div className="cta__bottom__flex__element">
          <img src={cta2} alt="" />
          <div className="cta__bottom__flex__element__title">Quick Repairs</div>
          <div className="cta__bottom__flex__element__line"></div>
          <div className="cta__bottom__flex__element__text">
            Swift turnaround times for efficient repairs.
          </div>
        </div>
        <div className="cta__bottom__flex__element">
          <img src={cta3} alt="" />
          <div className="cta__bottom__flex__element__title">
            Free Diagnostics
          </div>
          <div className="cta__bottom__flex__element__line"></div>
          <div className="cta__bottom__flex__element__text">
            We offer omplimentary device assessments.
          </div>
        </div>
        <div className="cta__bottom__flex__element">
          <img src={cta4} alt="" />
          <div className="cta__bottom__flex__element__title">
            Customer Service
          </div>
          <div className="cta__bottom__flex__element__line"></div>
          <div className="cta__bottom__flex__element__text">
            Experience exceptional support and assistance.
          </div>
        </div>
      </div>
    </section>
  );
};
