import { twMerge as cx } from "tailwind-merge";
import React, { ButtonHTMLAttributes, FC } from "react";

import Icon, { IconProps } from "./Icon";

export type IconButtonProps = IconProps & ButtonHTMLAttributes<HTMLButtonElement>;

const IconButton: FC<IconButtonProps> = ({ className, name, size, ...props }) => {
  return (
    <button className={cx("flex justify-center items-center", className)} {...props}>
      <Icon name={name} size={size} />
    </button>
  );
};

export default IconButton;
