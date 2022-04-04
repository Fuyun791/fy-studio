import React from "react";
import FyStudio from "@fy-studio/ui";

const { DynamicEngine } = FyStudio;

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = true,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";

  const type = primary ? "primary" : "text";

  const item = {
    component: "Button",
    attributes: { text: label, type, size, backgroundColor },
    ...props,
  };

  return <DynamicEngine item={item} category="base" showType={1} />;
};
