import { useState, useContext } from "react";
import { Context } from "./Context";

export const Form = () => {
  const { handleFormData } = useContext(Context);
  const [formData, setFormData] = useState(null);
  const [isFormRight, setIsFormRight] = useState({
    name: true,
    email: true,
    phoneNumber: true,
  });
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [massage, setMassage] = useState("");
  const handleChangeForm = (e) => {
    e.preventDefault();
    setIsFormRight({
      name: name.length !== 0 && name.charAt(0) !== " ",
      email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email),
      phone: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(
        phoneNumber
      ),
    });
    if (!Object.values(isFormRight).includes(false)) {
      setFormData({
        name: name,
        phoneNumber: phoneNumber,
        email: email,
        massage: massage,
      });
      handleFormData(formData);
    }
  };

  return (
    <form
      onSubmit={(e) => {
        handleChangeForm(e);
      }}
      className="form"
      noValidate
    >
      <input
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={name}
        className={`form__input ${!isFormRight.name && "wrongName"}`}
        required
        placeholder="Your Name*"
      />
      <input
        onChange={(e) => {
          setPhoneNumber(e.target.value);
        }}
        value={phoneNumber}
        className={`form__input ${
          !isFormRight.phoneNumber && "wrongPhoneNumber"
        }`}
        required
        placeholder="Phone Number*"
      />
      <input
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        value={email}
        className={`form__input ${!isFormRight.email && "wrongEmail"}`}
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
