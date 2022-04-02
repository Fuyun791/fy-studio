import React from "react";
import FyStudio from "@fy-studio/ui";

const { DynamicEngine } = FyStudio;
/**
 * Primary UI component for user interaction
 */
export const ListView = ({ ...res }) => {
  const item = {
    component: "ListView",
    ...res,
  };

  return <DynamicEngine item={item} category="base" isTpl={false} />;
};
