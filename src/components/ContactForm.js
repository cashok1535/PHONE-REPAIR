import svg from "../img/footerContact.svg";
import { Form } from "./Form";

export const ContactForm = () => {
  return (
    <section className="contact__form">
      <div className="contact__form__info">
        <div className="orange__title__bold ">CONTACTS</div>
        <div className="how__we__work__title">
          Contact Us Now for Swift Repairs
          <span className="how__we__work__title__orange">.</span>
        </div>
        <div className="cta__discount__text">
          Ready to experience the TechPro difference?
        </div>
        <div className="step__text">
          Don't let tech troubles hold you back – reach out to us today and let
          our expert team restore your devices to their full potential. Schedule
          our appointment with our experts!
        </div>
        <div className="contact__form__address">
          <div className="contact__form__address__element">
            <div className="orange_title">Support Team</div>
            <div className="contact__form__address__element__text">
              +1 (234) 567 89 00 <br />
              techpro@email.com
            </div>
          </div>
          <div className="contact__form__address__element">
            <div className="orange_title">Visit Us</div>
            <div className="contact__form__address__element__text">
              194 MacDonough St, Brooklyn, NY 11216 <br />
              Mon - Fri : 8AM - 6PM
            </div>
          </div>
        </div>
        <div className="contact__form__question">
          <img src={svg} alt="" />
          Want to Revive Your Device?
          <br />
          <span className="contact__form__question__text">
            Fill out the form on the right.
          </span>
        </div>
      </div>
      <div className="contact__form__input">
        <Form />
      </div>
    </section>
  );
};
