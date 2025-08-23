import svg from "../img/footerContact.svg";
import { Form } from "./Form";

export const ContactForm = () => {
  return (
    <section className="contact__form">
      <div className="contact__form__info">
        <div className="orange__title__bold">CONTACTS</div>
        <div className="how__we__work__title contact__form__title">
          Contact Us Now for Swift Repairs
          <span className="how__we__work__title__orange">.</span>
        </div>
        <div className="cta__discount__text contact__form__little__title">
          Ready to experience the TechPro difference?
        </div>
        <div className="step__text contact__form__text">
          Don't let tech troubles hold you back – reach out to us today and let
          our expert team restore your devices to their full potential. Schedule
          our appointment with our experts!
        </div>
        <div className="contact__form__address">
          <div className="contact__form__address__element">
            <div className="orange_title">Support Team</div>
            <div className="contact__form__address__element__text">
              <div className="contact__form__space">
                <a className="contact__form__a" href="tel:+1 (234) 567 89 00">
                  +1 (234) 567 89 00
                </a>
              </div>
              <div className="contact__form__space">
                <a className="contact__form__a" href="mailto:techpro@email.com">
                  techpro@email.com
                </a>
              </div>
            </div>
          </div>
          <div className="contact__form__address__element">
            <div className="orange_title">Visit Us</div>
            <div className="contact__form__address__element__text">
              <div className="contact__form__space">
                194 MacDonough St, Brooklyn, NY 11216{" "}
              </div>
              <div className="contact__form__space">Mon - Fri : 8AM - 6PM</div>
            </div>
          </div>
        </div>
        <div className="contact__form__question">
          <img src={svg} alt="" />
          <div className="contact__form__question__info">
            <span className="contact__form__question__title">
              Want to Revive Your Device?
            </span>
            <span className="contact__form__question__text">
              Fill out the form on the right.
            </span>
          </div>
        </div>
      </div>
      <div className="contact__form__input">
        <Form />
      </div>
    </section>
  );
};
