/* eslint-disable react/prop-types */
import React, { useState } from "react";
import ReactModal from "react-modal";
import "./style.css";
import { Text, Input, Button } from "..";
import { CloseIcon } from "../../assets";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "50%",
    bottom: "auto",
    marginRight: "-50%",
    padding: "0px",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#f8f9fa",
    borderRadius: "6px",
  },
};

const SignUp = ({ signUpIsOpen, closeSignUp }) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    confirm_password: "",
  });

  const [isError, setIsError] = useState({
    invalidEmail: false,
    emptyEmail: false,
    emptyPassword: false,
    emptyConfirmPassword: false,
  });

  const handleEmailInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      email: event.target.value,
    }));

    setIsError((values) => ({
      ...values,
      invalidEmail: false,
      emptyEmail: false,
    }));
  };

  const handlePasswordInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      password: event.target.value,
    }));

    setIsError((values) => ({
      ...values,
      emptyPassword: false,
    }));
  };

  const handleNameInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      name: event.target.value,
    }));

    setIsError((values) => ({
      ...values,
      emptyConfirmPassword: false,
    }));
  };

  return (
    <ReactModal
      isOpen={signUpIsOpen}
      onRequestClose={closeSignUp}
      contentLabel="Sign Up Modal"
      ariaHideApp={false}
      shouldCloseOnOverlayClick={false}
      style={customStyles}
    >
      <div className="Modal-container">
        <div className="Modal-Header">
          <Text size={17.5} color={"#343A40"} fontWeight={700}>
            Đăng ký
          </Text>
          <div className="Modal-Icon" onClick={() => closeSignUp()}>
            <CloseIcon />
          </div>
        </div>

        <div className="SignUp-container">
          <Input value={values} isError={isError} onChangeEmail={handleEmailInputChange} />
          <Input
            isPassword={true}
            value={values}
            isError={isError}
            OnchangePassword={handlePasswordInputChange}
          />
          <Input
            label= "Confirm password"
            value={values}
            isError={isError}
            OnchangeConfirmPassword={handlePasswordInputChange}
            isConfirmPassword={true}
          />
        </div>

        <div style={{ padding: "7px" }}>
          <Button>Đăng ký</Button>
        </div>
      </div>
    </ReactModal>
  );
};

export default SignUp;

