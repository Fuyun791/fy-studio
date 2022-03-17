import React, { CSSProperties } from "react";
import { CommonHover } from "../CommonStyle";

// import { ITextSchema } from "./schema";

interface ITextSchema {
  attributes: {
    text: string;
    textAlign: "left";
  };
  event: string;
  extra: { commonStyle: { [key: string]: any } };
  isTpl: boolean;
}

const Button = (props: ITextSchema) => {
  const { attributes, extra, isTpl } = props;
  if (isTpl) {
    return <div>Button Tpl</div>;
  }

  const { text, textAlign } = attributes;

  const { width = 160, height = 40 } = extra.commonStyle;

  const realWidth = width > 160 ? 160 : width;
  const realHeight = height > 40 ? 40 : height;

  return (
    <CommonHover isPreview={true}>
      <button style={{ ...extra, width: realWidth, height: realHeight }}>
        {text}
      </button>
    </CommonHover>
  );
};
export default Button;
