import React, { FunctionComponent, SVGProps } from "react";

export type SvgComponentProps = SVGProps<SVGSVGElement>;

const SvgWrapper: FunctionComponent<SvgComponentProps> = ({ children, ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" {...props}>
      {children}
    </svg>
  );
};

export default SvgWrapper;
