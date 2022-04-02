import React from "react";
import { ICommonAttr } from "@types";
import { StyledText } from "./styled";

export interface ITextAttr {
  text: string;
  type: "default";
}

interface ITextProps extends ICommonAttr {
  attributes: ITextAttr;
}

const Text = (props: ITextProps) => {
  const { attributes, extra = { commonStyle: {} }, isTpl } = props;

  if (isTpl) {
    return <div>Text Tpl</div>;
  }

  const { text, type } = attributes;

  return (
    <StyledText type={type} style={{ ...extra.commonStyle }}>
      {text}
    </StyledText>
  );
};
export default Text;
