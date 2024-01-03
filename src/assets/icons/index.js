/* eslint-disable react/prop-types */
import React from "react";
import { ReactComponent as Hide } from "./eye_hide.svg";
import { ReactComponent as Show } from "./eye_show.svg";
import { ReactComponent as Check } from "./check.svg";
import { ReactComponent as Google } from "./google.svg";
import { ReactComponent as Close } from "./close.svg";
import { ReactComponent as Home } from "./home.svg";
import { ReactComponent as User } from "./user.svg";
import { ReactComponent as About } from "./about.svg";
import { ReactComponent as Blog } from "./blog.svg";
import { ReactComponent as Add } from "./add.svg";
import { ReactComponent as Paragraph } from "./paragraph.svg";
import { ReactComponent as Radio } from "./radio.svg";
import { ReactComponent as Checkbox } from "./checkbox.svg";
import { ReactComponent as Dropdown } from "./dropdown.svg";

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

export const CloseIcon = ({ width = 14, height = 14 }) => {
  return <Close width={width} height={height} />;
};

export const HomeIcon = ({ width = 18, height = 18 }) => {
  return <Home width={width} height={height} />;
};

export const UserIcon = ({ width = 18, height = 18 }) => {
  return <User width={width} height={height} />;
};

export const AboutIcon = ({ width = 18, height = 18 }) => {
  return <About width={width} height={height} />;
};

export const BlogIcon = ({ width = 18, height = 18 }) => {
  return <Blog width={width} height={height} />;
};

export const AddIcon = ({ width = 35, height = 35 }) => {
  return <Add width={width} height={height} />;
};

export const ParagraphIcon = ({ width = 25, height = 25 }) => {
  return <Paragraph width={width} height={height} />;
};

export const RadioIcon = ({ width = 25, height = 25 }) => {
  return <Radio width={width} height={height} />;
};

export const CheckboxIcon = ({ width = 25, height = 25 }) => {
  return <CheckboxIcon width={width} height={height} />;
};

export const DropdownIcon = ({ width = 25, height = 25 }) => {
  return <Dropdown width={width} height={height} />;
};