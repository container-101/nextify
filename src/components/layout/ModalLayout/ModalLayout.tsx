import React, { FC, ReactNode } from "react";

import ModalBaseDesign from "./ModalBase/ModalBaseDesign";
import ModalBaseLayout from "./ModalBase/ModalBaseLayout";
import ModalBaseOverLay from "./ModalBase/ModalBaseOverLay";

export type ModalBaseShape = {
  fullScreen: boolean;
  children?: ReactNode;
  onClose: () => void;
};

const ModalLayout: FC<ModalBaseShape> = ({ fullScreen, children, onClose }) => {
  return (
    <ModalBaseLayout>
      <ModalBaseOverLay onClose={onClose} />
      <ModalBaseDesign fullScreen={fullScreen}>{children}</ModalBaseDesign>
    </ModalBaseLayout>
  );
};

export default ModalLayout;
