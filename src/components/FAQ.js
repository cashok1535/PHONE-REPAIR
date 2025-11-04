import { useState } from "react";
import img from "../img/FAQ.webp";

const questions = [
  {
    id: 1,
    question: "How Long Does a Typical Phone Repair Take?",
    answer:
      "Repair times vary depending on the issue. Our technicians strive to complete repairs swiftly while maintaining quality, typically within 1-2 days.",
  },
  {
    id: 2,
    question: "Do You Provide Warranty for Your Services?",
    answer:
      "Yes, we offer a warranty on all our repair services. Contact us for more details about our warranty coverage.",
  },
  {
    id: 3,
    question: "Is There a Fee for Diagnostics?",
    answer:
      "No, diagnostics are complimentary at TechPro. Our technicians will assess your device and provide a diagnosis free of charge.",
  },
  {
    id: 4,
    question: "Do You Repair All Phone Brands and Models?",
    answer:
      "Yes, we specialize in repairing a wide range of phone brands and models, including the latest releases from Apple, Samsung, Google, and more.",
  },
  {
    id: 5,
    question: "What Payment Methods Do You Accept?",
    answer:
      "We accept various payment methods, including cash, credit/debit cards, and digital payment platforms for your convenience.",
  },
];

export const FAQ = () => {
  const [activeQuestion, setActiveQuestion] = useState();

  const handleActiveSlide = (el) => {
    setActiveQuestion((prev) => (prev === el.id ? "" : el.id));
  };
  return (
    <section className="faq">
      <div className="faq__flex__element">
        <img src={img} alt="" />
      </div>
      <div className="faq__flex__element faq__flex__element__text">
        <div className="orange__title__bold">FAQ</div>
        <div className="how__we__work__title">
          Bringing Your Gadgets Back from the Brink
          <span className="how__we__work__title__orange">.</span>
        </div>
        <div className="cta__discount__text faq__title">
          Questions? Check the section below.
        </div>
        <div className="faq__questions__flex">
          {questions.map((el) => (
            <div key={el.id} className="faq__question">
              <div className="faq_interactive">
                <div className="faq__question__text">{el.question}</div>
                <button
                  onClick={() => {
                    handleActiveSlide(el);
                  }}
                  className={`faq__question__button ${
                    activeQuestion === el.id ? "" : "active"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                  >
                    <path
                      fillRule="nonzero"
                      d="M7.5 9.066L2.12 4.284a1.12 1.12 0 0 0-1.49 0c-.44.39-.44.997 0 1.388l6.125 5.444c.198.176.5.284.745.284.301 0 .526-.089.745-.284l6.125-5.444c.225-.2.33-.41.33-.694s-.105-.495-.33-.694a1.12 1.12 0 0 0-1.49 0L7.5 9.066z"
                    ></path>
                  </svg>
                </button>
              </div>
              <div
                className={`faq__answer ${
                  activeQuestion === el.id ? "active" : ""
                }`}
              >
                {el.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
