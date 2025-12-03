import { ContactForm } from "./ContactForm";
import { FooterLinks } from "./FooterLinks.";

export const Footer = () => {
  return (
    <footer id="contactUs" className="footer">
      <ContactForm />
      <div className="footer__line">
        <svg
          style={{ width: "100%" }}
          xmlns="http://www.w3.org/2000/svg"
          height="31"
        >
          <path
            d="M0 15.5 L3000 15.5"
            style={{
              fill: "none",
              stroke: "rgba(255, 255, 255, 0.16)",
              strokeWidth: "1px",
            }}
          ></path>
        </svg>
      </div>
      <FooterLinks />
      <div className="footer__line">
        <svg
          style={{ width: "100%" }}
          xmlns="http://www.w3.org/2000/svg"
          height="31"
        >
          <path
            d="M0 15.5 L3000 15.5"
            style={{
              fill: "none",
              stroke: "rgba(255, 255, 255, 0.16)",
              strokeWidth: "1px",
            }}
          ></path>
        </svg>
      </div>
      <div className="footer__bottom">
        <div className="footer__bottom__left">© Created by</div>
        <div className="footer__bottom__right">All rights Reserved</div>
      </div>
    </footer>
  );
};
