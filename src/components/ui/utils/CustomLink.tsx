import { allowedRouter } from "@src/constants/allowed-router";
import Link from "next/link";
import { FunctionComponent, RefAttributes } from "react";

export interface CustomLinkProps extends RefAttributes<HTMLAnchorElement> {
  href: allowedRouter;
}

const CustomLink: FunctionComponent<CustomLinkProps> = ({ href, ...props }) => (
  <Link href={href} {...props} />
);

export default CustomLink;
