import { ComponentClass, ReactChild } from "react";
import { CommonEventFunction } from "@tarojs/components/types/common";
import OsComponent from "./base";

interface AnimateProps extends OsComponent {
  type?: "fadeIn" | "fadeOut" | "fadeOutDown" | "fadeOutUp" | "fadeInDown" | "fadeInUp";
  onClick?: CommonEventFunction;
}

declare const Animate: ComponentClass<AnimateProps>;

export { Animate, AnimateProps };
