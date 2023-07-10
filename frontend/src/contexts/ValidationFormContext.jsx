import { createContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

const ValidationFormContext = createContext();

export default ValidationFormContext;

export function ValidationFormContextProvider({ children }) {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    company_name: "",
    siret: "",
    email: "",
    password: "",
    confirmed_password: "",
  });
  const [errors, setErrors] = useState({});
  const ValidationFormContextValue = useMemo(() => {
    return { values, setValues, errors, setErrors };
  });
  return (
    <ValidationFormContext.Provider value={ValidationFormContextValue}>
      {children}
    </ValidationFormContext.Provider>
  );
}

ValidationFormContextProvider.propTypes = {
  children: PropTypes.shape({}).isRequired,
};
