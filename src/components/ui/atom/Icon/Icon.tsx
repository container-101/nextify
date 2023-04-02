import React, { FunctionComponent } from "react";

import GoogleLogo from "./assets/GoogleLogo";
import KakaoLogo from "./assets/KakaoLogo";
import { SvgComponentProps } from "./assets/SvgWrapper";

export type IconTypes = "google" | "kakao";

export type IconProps = {
  name: IconTypes;
  size?: number;
  className?: string;
};

const selector: Record<IconTypes, FunctionComponent<SvgComponentProps>> = {
  google: GoogleLogo,
  kakao: KakaoLogo,
};

const Icon: FunctionComponent<IconProps> = ({ name, ...props }) => {
  const IconComponent = selector[name];
  return <IconComponent className="pointer-events-none" name={name} {...props} />;
};

export default Icon;
