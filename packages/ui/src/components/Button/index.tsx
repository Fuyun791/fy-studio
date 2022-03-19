import React, { CSSProperties } from "react";

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

  const { width = 180, height = 40 } = extra.commonStyle;

  return <button style={{ ...extra, width, height }}>{text}</button>;
};
export default Button;
