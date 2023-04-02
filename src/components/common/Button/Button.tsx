import { btnRoundness, btnSizes, btnStyles } from "@src/constants/atom-components";
import { twMerge as cx } from "tailwind-merge";
import { motion, MotionProps } from "framer-motion";
import React, { forwardRef, ForwardRefRenderFunction } from "react";

export type ButtonProps = {
  type?: "button" | "submit" | "reset";
  size?: btnSizes;
  styles?: btnStyles;
  roundness?: btnRoundness;
  disabled?: boolean;
  fullWidth?: boolean;
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
} & MotionProps;

const selectRounded: { [key in btnRoundness]: string } = {
  primary: "rounded-[2.5rem]",
  keyboard: "rounded-none",
};

const selectSize: { [keys in btnSizes]: string } = {
  large: "px-16 text-lg h-16",
  medium: "px-10 text-lg h-12",
  small: "px-8 h-8",
  xsmall: "px-6 h-6 text-xs",
  none: "",
};

const selectStyle: { [keys in btnStyles]: string } = {
  primary: "bg-primary-500 hover:bg-primary-700 focus:bg-primary-900",
  secondary: "bg-secondary-500 hover:bg-secondary-700 focus:bg-secondary-900",
  tertiary: "bg-slate-100 hover:bg-slate-200 focus:bg-slate-200",
  link: "bg-link-500 text-white hover:bg-link-700 hover:text-link-400 focus:text-link-300",
  danger: "bg-red-700 text-red-100 hover:bg-red-600 focus:bg-red-600",
  success: "bg-green-700 text-green-100 hover:bg-green-600 focus:bg-green-600",
  warning: "bg-orange-700 text-orange-100 hover:bg-orange-600 focus:bg-orange-600",
  transparent: "bg-transparent text-black",
};

const Button: ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (
  {
    type = "button",
    size = "medium",
    styles = "primary",
    roundness = "primary",
    disabled = false,
    fullWidth = false,
    children,
    className,
    onClick,
    ...props
  },
  ref
) => {
  return (
    <motion.button
      ref={ref}
      type={type}
      disabled={disabled}
      className={cx(
        selectSize[size],
        selectStyle[styles],
        selectRounded[roundness],
        "transition-colors bg-slate focus:shadow-outline duration-150",
        fullWidth ? "w-full" : "",
        className
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default forwardRef(Button);
