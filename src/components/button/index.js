/* eslint-disable react/prop-types */
import React from "react";
import { Text } from "../../components";
import { GoogleIcon } from "../../assets/icons";
import "./style.css";

const Button = (props) => {
  const { haveIcon, onClick } = props;

  return (
    <button
      className={haveIcon ? "Button-icon-container" : "Button-container"}
      onClick={onClick}
    >
      {haveIcon && <GoogleIcon />}
      <div className="Label-icon">
        <Text
          color={haveIcon ? "black" : "white"}
          fontWeight={haveIcon ? 400 : 600}
          size={haveIcon ? 14 : 17.5}
        >
          {props.children}
        </Text>
      </div>
    </button>
  );
};

export default Button;
