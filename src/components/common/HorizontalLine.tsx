import classNames from "classnames";
import React, { FunctionComponent } from "react";

interface IHozLineProps {
  className?: string;
  height?: number;
  color?: string;
  margin?: number;
}

const HorizontalLine: FunctionComponent<IHozLineProps> = ({ className }) => {
  return <hr className={classNames("bg-[#DDDDDD] h-[1px] m-0 border-0", className)} />;
};

export default HorizontalLine;
