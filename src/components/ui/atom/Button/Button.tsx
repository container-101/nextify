import { btnRoundness, btnSizes, btnStyles } from "@src/constants/atom-components";
import { twMerge as cx } from "tailwind-merge";
import { motion, MotionProps } from "framer-motion";
import React, { forwardRef, ForwardRefRenderFunction } from "react";

export type ButtonProps = {
  type?: "button" | "submit" | "reset";
  size?: btnSizes;
  styles?: btnStyles;
  roundness?: btnRoundness;
  activeHover?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
};

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
  primary: "bg-primary-500",
  secondary: "bg-secondary-500",
  tertiary: "bg-slate-100",
  link: "bg-link-500 text-white",
  danger: "bg-red-700 text-red-100",
  success: "bg-green-700 text-green-100",
  warning: "bg-orange-700 text-orange-100",
  transparent: "bg-transparent text-black",
};

const Button: ForwardRefRenderFunction<HTMLButtonElement, ButtonProps & MotionProps> = (
  {
    size = "medium",
    styles = "primary",
    roundness = "primary",
    fullWidth = false,
    children,
    className,
    ...props
  },
  ref
) => {
  return (
    <motion.button
      ref={ref}
      className={cx(
        selectSize[size],
        selectStyle[styles],
        selectRounded[roundness],
        "transition-colors focus:shadow-outline duration-150",
        "hover:bg-opacity-80 focus:bg-opacity-80 active:bg-opacity-80",
        fullWidth ? "w-full" : "",
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default forwardRef(Button);
