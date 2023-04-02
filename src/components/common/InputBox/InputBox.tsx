import { twMerge as cx } from "tailwind-merge";
import React, { FunctionComponent, ChangeEventHandler, MouseEventHandler } from "react";
import HorizontalLine from "../HorizontalLine";

interface InputBoxShape {
  type: "id" | "email" | "password";
  name: string;
  value: string | number;
  label: string;
  error?: boolean;
  placeholder?: string;
  readOnly?: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onClick?: MouseEventHandler<HTMLInputElement>;
}

const InputBox: FunctionComponent<InputBoxShape> = ({ name, label, error = true, ...props }) => {
  return (
    <div>
      <label htmlFor={name} className="block m-0 p-0 font-bold">
        {label}
      </label>
      <input
        className={cx(
          `w-full h-10 pl-0 pr-4 py-2 rounded-md`,
          "bg-transparent border-none outline-none shadow-none text-black text-base"
        )}
        name={name}
        {...props}
      />
      <HorizontalLine className={cx(error && `border-red-500`)} />
    </div>
  );
};

export default InputBox;
