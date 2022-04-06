import React from "react";
import FyStudio from "@fy-studio/ui";

const { DynamicEngine } = FyStudio;
/**
 * Primary UI component for user interaction
 */
export const View = ({ children, ...res }) => {
  const item = {
    component: "View",
    attributes: {},
    ...res,
  };

  return (
    <DynamicEngine item={item} category="base" isTpl={false}>
      {children}
    </DynamicEngine>
  );
};
