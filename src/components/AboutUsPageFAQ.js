import { useState } from "react";

const faq = [
  [
    {
      id: 1,
      maxHeightClose: 102,
      maxHeightOpen: 200,
      question:
        "Do You Offer Mail-in Repair Services for Customers Outside of New York?",
      answer:
        "Yes, we provide convenient mail-in repair services for customers located outside of New York. Contact us for more information and instructions on how to proceed.",
    },
    {
      id: 2,
      maxHeightClose: 71,
      maxHeightOpen: 142,
      question: "How Much Does a Typical Phone Repair Cost?",
      answer:
        "Repair costs vary depending on the issue and the model of your phone. We offer competitive pricing and transparent quotes before starting any repair.",
    },
    {
      id: 3,
      maxHeightClose: 71,
      maxHeightOpen: 169,
      question: "Can I Track the Status of My Repair?",
      answer:
        "Yes, we provide updates on the status of your repair throughout the process. You can also contact us for real-time updates on your device's status.",
    },
    {
      id: 4,
      maxHeightClose: 71,
      maxHeightOpen: 169,
      question: "Do You Provide Any Post-repair Support?",
      answer:
        "Yes, we offer post-repair support and warranties on our services. If you encounter any issues after your repair, don't hesitate to reach out, and we'll ensure your device is functioning correctly.",
    },
  ],
  [
    {
      id: 5,
      maxHeightClose: 102,
      maxHeightOpen: 200,
      question:
        "What Should I Do if I'm Not Satisfied with the Repair Service?",
      answer:
        "Your satisfaction is our top priority. If you have any concerns about the repair service, please contact us immediately, and we will do our best to address and resolve any issues promptly.",
    },
    {
      id: 6,
      maxHeightClose: 71,
      maxHeightOpen: 169,
      question: "Is it Safe to Leave My Data on the Device?",
      answer:
        "We take data privacy seriously and ensure your personal information remains secure during repairs. However, we recommend backing up your data before bringing in your device for added peace of mind.",
    },
    {
      id: 7,
      maxHeightClose: 71,
      maxHeightOpen: 142,
      question: "What payment options do you provide?",
      answer:
        "We offer a variety of payment methods. We accept cash, checks, and the majority of credit cards such as Visa, MasterCard, and American Express.",
    },
    {
      id: 8,
      maxHeightClose: 71,
      maxHeightOpen: 169,
      question: "Do You Have Same-day Repairs?",
      answer:
        "Yes, we understand the urgency of certain repairs. Depending on the issue and technician availability, we strive to offer same-day repairs whenever possible.",
    },
  ],
];

export const AboutUsPageFAQ = () => {
  const [numberActiveQuestion, setNumberActiveQuestion] = useState();

  const handleActiveQuestion = (el) => {
    setNumberActiveQuestion((prev) => (prev === el.id ? "" : el.id));
  };

  console.log(numberActiveQuestion);

  return (
    <section className="about__us__page__FAQ">
      <div className="orange__title">FAQ</div>
      <div className="what__we__do__title">
        Where Technology Meets Expertise
        <span className="interactive__flex__info__orange">.</span>
      </div>
      <div className="about__us__section__text__bold about__us__page__process__text">
        Browse the section below if you have any questions.
      </div>
      <div className="about__us__page__FAQ__flex">
        <div className="about__us__page__FAQ__flex__element">
          {faq[0].map((el) => (
            <div className="faq__page" key={el.id}>
              <div className="faq__page__question__parrent">
                <div className="faq__page__question">{el.question}</div>
                <button
                  onClick={() => handleActiveQuestion(el)}
                  className="faq__page__button"
                >
                  <div className="faq__page__button__line"></div>
                </button>
              </div>
              <div className="faq__page__answer">{el.answer}</div>
            </div>
          ))}
        </div>
        <div className="about__us__page__FAQ__flex__element">
          {faq[1].map((el) => (
            <div className="faq__page" key={el.id}>
              <div className="faq__page__question__parrent">
                <div className="faq__page__question">{el.question}</div>
                <button
                  onClick={() => handleActiveQuestion(el)}
                  className="faq__page__button"
                >
                  <div className="faq__page__button__line"></div>
                </button>
              </div>
              <div className="faq__page__answer">{el.answer}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
