import { useState, useContext } from "react";
import { Context } from "./Context";

export const Form = () => {
  const { handleFormData } = useContext(Context);
  const [formData, setFormData] = useState({
    name: null,
    phoneNumber: null,
    email: null,
    massage: null,
  });
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [massage, setMassage] = useState("");
  const handleChangeForm = (e) => {
    e.preventDefault();
    setFormData({
      name: name,
      phoneNumber: phoneNumber,
      email: email,
      massage: massage,
    });
    handleFormData(formData);
  };
  return (
    <form
      onSubmit={(e) => {
        handleChangeForm(e);
      }}
      className="form"
    >
      <input
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={name}
        className="form__input"
        required
        placeholder="Your Name*"
      />
      <input
        onChange={(e) => {
          setPhoneNumber(e.target.value);
        }}
        value={phoneNumber}
        className="form__input"
        required
        placeholder="Phone Number*"
      />
      <input
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        value={email}
        className="form__input"
        required
        placeholder="Email*"
      />
      <input
        onChange={(e) => {
          setMassage(e.target.value);
        }}
        value={massage}
        className="form__input form__message"
        required
        placeholder="Your Message"
      />
      <button className="about__us__section__button form__button">
        Request a quote
      </button>
    </form>
  );
};
