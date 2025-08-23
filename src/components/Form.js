export const Form = () => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="form"
    >
      <input className="form__input" required placeholder="Your Name*" />
      <input className="form__input" required placeholder="Phone Number*" />
      <input className="form__input" required placeholder="Email*" />
      <input className="form__input" required placeholder="Your Message" />
      <button className="about__us__section__button form__button">
        Request a quote
      </button>
    </form>
  );
};
