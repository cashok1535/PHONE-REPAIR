import { createContext, useEffect, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [isPhone, setIsPhone] = useState(false);
  const [formData, setFormData] = useState();
  const handleFormData = (data) => {
    setFormData(data);
  };

  console.log(formData);

  useEffect(() => {
    const handleResize = () => {
      setIsPhone(window.innerWidth < 767);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Context.Provider value={{ isPhone, formData, handleFormData }}>
      {children}
    </Context.Provider>
  );
};
