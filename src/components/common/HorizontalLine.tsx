import { twMerge as cx } from "tailwind-merge";
import React, { FunctionComponent } from "react";

interface IHozLineProps {
  className?: string;
  height?: number;
  color?: string;
}

const HorizontalLine: FunctionComponent<IHozLineProps> = ({ className }) => {
  return <hr className={cx("bg-[#DDDDDD] h-[1px] m-0 border-0", className)} />;
};

export default HorizontalLine;
