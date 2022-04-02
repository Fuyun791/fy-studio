import React, { CSSProperties } from "react";
import { StyledButton } from "./styled";
// import { ITextSchema } from "./schema";

interface IButtonSchema {
  attributes: {
    text: string;
    type: "primary" | "text";
    size: "small" | "medium" | "large";
    backgroundColor: string;
  };
  event: string;
  extra: { commonStyle: { [key: string]: any } };
  isTpl: boolean;
}

const Button = (props: IButtonSchema) => {
  const { attributes, extra = { commonStyle: {} }, isTpl } = props;
  if (isTpl) {
    return <div>Button Tpl</div>;
  }

  const { text, type, size, backgroundColor } = attributes;

  return (
    <StyledButton
      customType={type}
      size={size}
      backgroundColor={backgroundColor}
      style={{ ...extra.commonStyle }}
    >
      {text}
    </StyledButton>
  );
};
export default Button;
