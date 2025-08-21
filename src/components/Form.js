export const Form = () => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="form"
    >
      <input className="form__input" placeholder="Your Name*" />
      <input className="form__input" placeholder="Phone Number*" />
      <input className="form__input" placeholder="Email*" />
      <input className="form__input" placeholder="Your Message" />
      <button className="about__us__section__button">Request a quote</button>
    </form>
  );
};
