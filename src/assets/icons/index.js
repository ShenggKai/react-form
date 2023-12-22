/* eslint-disable react/prop-types */
import React from "react";
import { ReactComponent as Hide } from "./eye_hide.svg";
import { ReactComponent as Show } from "./eye_show.svg";
import { ReactComponent as Check } from "./check.svg";
import { ReactComponent as Google } from "./google.svg";
import { ReactComponent as User } from "./user.svg";
import { ReactComponent as Close } from "./close.svg";

export const HideIcon = ({ width = 20, height = 20 }) => {
  return <Hide width={width} height={height} />;
};

export const ShowIcon = ({ width = 20, height = 20 }) => {
  return <Show width={width} height={height} />;
};

export const CheckIcon = ({ width = 14, height = 14 }) => {
  return <Check width={width} height={height} />;
};

export const GoogleIcon = ({ width = 20, height = 20 }) => {
  return <Google width={width} height={height} />;
};

export const UserIcon = ({ width = 20, height = 20 }) => {
  return <User width={width} height={height} />;
};

export const CloseIcon = ({ width = 14, height = 14 }) => {
  return <Close width={width} height={height} />;
};