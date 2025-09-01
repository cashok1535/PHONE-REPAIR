import { ServicesSlider } from "./ServicesSlider";
import company1 from "../img/company1.svg";
import company2 from "../img/company2.svg";
import company3 from "../img/company3.svg";
import company4 from "../img/company4.svg";
import company5 from "../img/company5.svg";
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
      <div
        style={{
          maxWidth: "1200px",
          width: "100%",
        }}
      >
        <svg
          style={{
            marginTop: "55px",
          }}
          xmlns="http://www.w3.org/2000/svg"
          width="1005"
          height="31"
        >
          <path
            d="M0 15.5 L3000 15.5"
            style={{
              fill: "none",
              stroke: "#f6f6f6",
              strokeWidth: "1px",
            }}
          ></path>
        </svg>
      </div>
      <div className="companies">
        <div className="companies__element__background">
          <img className="companies__element" src={company1} alt="" />
        </div>
        <div className="companies__element__background">
          <img className="companies__element" src={company2} alt="" />
        </div>
        <div className="companies__element__background">
          <img className="companies__element" src={company3} alt="" />
        </div>
        <div className="companies__element__background">
          <img className="companies__element" src={company4} alt="" />
        </div>
        <div className="companies__element__background">
          <img className="companies__element" src={company5} alt="" />
        </div>
      </div>
    </section>
  );
};
