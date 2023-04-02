import React, { FC, useEffect, useState } from "react";
import { createPortal } from "react-dom";

export type PortalType = "modal" | "floating" | "sheet";
export const portalType: string[] = ["modal", "floating", "sheet"];

const Portal: FC<{
  selectorId: PortalType;
  children: React.ReactNode;
}> = ({ selectorId, children }) => {
  const [mounted, setMounted] = useState(false);

  // prevent the portal from rendering on the server
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  return mounted
    ? createPortal(children, document.getElementById(selectorId) as HTMLElement)
    : null;
};

export default Portal;
