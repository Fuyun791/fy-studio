import React, { forwardRef } from "react";
import { ICommonAttr } from "@types";
import { ShowTypeEnum } from "../../commonModule";
import { StyledText } from "./styled";

export interface ITextAttr {
  text: string;
  type: "default";
}

export interface ITextProps extends ICommonAttr {
  attributes: ITextAttr;
}

const Text = (props: ITextProps) => {
  const {
    attributes,
    extra = { commonStyle: {} },
    showType,
    id,
    onClick,
  } = props;

  if (showType === ShowTypeEnum.tpl) {
    return <div>Text Tpl</div>;
  }

  const { text, type } = attributes;

  if (showType === ShowTypeEnum.showDom) {
    return (
      <StyledText
        type={type}
        onClick={(event) => onClick(id, event)}
        style={{ ...extra.commonStyle }}
      >
        {text}
      </StyledText>
    );
  }

  return (
    <StyledText type={type} style={{ ...extra.commonStyle }}>
      {text}
    </StyledText>
  );
};
export default Text;
