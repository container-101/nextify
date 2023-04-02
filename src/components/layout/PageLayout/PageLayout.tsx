import React, { FunctionComponent } from "react";
import { twMerge as cx } from "tailwind-merge";

interface Props {
  fullWidth?: boolean;
  fixedHeight?: boolean;
  headerFixed?: boolean;
  children: React.ReactNode;
}

const PageLayout: FunctionComponent<Props> = ({
  fullWidth,
  fixedHeight,
  headerFixed,
  children,
}) => {
  return (
    <div>
      <main
        className={cx(
          "z-0 flex flex-col w-full min-h-screen mx-auto h-screen",
          `${headerFixed && "mt-appheaderHeight"}`,
          `${!fullWidth && "max-w-appMaxWidth"}`,
          `${fixedHeight && "overflow-hidden min-h-appheight"}`
        )}
      >
        {children}
      </main>
    </div>
  );
};

export default PageLayout;
