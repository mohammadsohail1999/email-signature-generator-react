import React, { useReducer } from "react";
import { DataContext } from "./ContextStore";
import ContextReducer from "./ContextReducer";

const ContextState = ({ children }) => {
  const initialState = {
    name: "",
    email: "",
    companyName: "",
    address: "",
    phoneNumber: "",
    officeNumber: "",
    facebook: "",
    instagram: "",
    linkdin: "",
    profileURL: "",

    twitterURL: "",
    profession: "",
    domain: "",
  };

  const [state, disptach] = useReducer(ContextReducer, initialState);

  const onChange = (name, value) => {
    disptach({ type: "CHANGE_DATA", payload: { [name]: value } });
  };

  const clearFields = () => {
    disptach({
      type: "CLEAR_FIELDS",
      payload: {
        name: "",
        email: "",
        companyName: "",
        address: "",
        phoneNumber: "",
        officeNumber: "",
        facebook: "",
        instagram: "",
        linkdin: "",
        profileURL: "",
        twitterURL: "",
        profession: "",
        domain: "",
      },
    });
  };

  return (
    <DataContext.Provider value={{ state, onChange, clearFields }}>
      {children}
    </DataContext.Provider>
  );
};

export default ContextState;
