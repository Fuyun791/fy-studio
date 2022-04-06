import { ICommonAttr } from "@types";
import React, { CSSProperties, forwardRef } from "react";
import { ShowTypeEnum } from "../../commonModule";
import { StyledButton } from "./styled";
// import { ITextSchema } from "./schema";

interface IButtonSchema extends ICommonAttr {
  attributes: {
    text: string;
    type: "primary" | "text";
    size: "small" | "medium" | "large";
    backgroundColor: string;
  };
}

const Button = (props: IButtonSchema) => {
  const {
    attributes,
    extra = { commonStyle: {} },
    showType,
    id,
    onClick,
  } = props;

  if (showType === ShowTypeEnum.tpl) {
    return <div>Button Tpl</div>;
  }

  const { text, type, size, backgroundColor } = attributes;

  // 在此情况下会存在onclick，其他情况的方法函数在event中
  if (showType === ShowTypeEnum.showDom) {
    return (
      <StyledButton
        customType={type}
        size={size}
        onClick={() => onClick(id)}
        backgroundColor={backgroundColor}
        style={{ ...extra.commonStyle }}
      >
        {text}
      </StyledButton>
    );
  }

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
