/* eslint-disable react/prop-types */
import React from "react";
import { Text } from "../../components";
import "./style.css";

const Button = (props) => {
  const { haveIcon, Icon, onClick } = props;

  return (
    <button
      className={haveIcon ? "Button-icon-container" : "Button-container"}
      onClick={onClick}
      type="button"
    >
      {haveIcon && Icon}
      <div className="Label">
        <Text
          color={haveIcon ? "black" : "white"}
          fontWeight={haveIcon ? 400 : 600}
          size={haveIcon ? 14 : 17.5}
          cursor={"pointer"}
        >
          {props.children}
        </Text>
      </div>
    </button>
  );
};

export default Button;
