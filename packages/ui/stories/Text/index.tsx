import React from "react";
import FyStudio from "@fy-studio/ui";

const { DynamicEngine } = FyStudio;

interface TextProps {
  text: string;
  type: "default" | "primary";
}

/**
 * Primary UI component for user interaction
 */
export const Text = ({ text, type = "default", ...props }: TextProps) => {
  const item = {
    component: "Text",
    attributes: { text, type },
  };

  return <DynamicEngine item={item} category="base" isTpl={false} />;
};
