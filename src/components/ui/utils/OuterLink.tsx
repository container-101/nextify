import { AnchorHTMLAttributes, DetailedHTMLProps } from "react";

const OuterLink = ({
  href,
  ...rest
}: DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>) => {
  return <a target="_blank" rel="noopener noreferrer" href={href} {...rest} />;
};

export default OuterLink;
