/* eslint-disable react/prop-types */
import React from "react";
import { ReactComponent as Hide } from "./eye_hide.svg";
import { ReactComponent as Show } from "./eye_show.svg";

export const HideIcon = ({ width = 20, height = 20 }) => {
  return <Hide width={width} height={height} />;
};

export const ShowIcon = ({ width = 20, height = 20 }) => {
  return <Show width={width} height={height} />;
};