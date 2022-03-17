import React, { useState } from "react";
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

const Text = (props: ITextSchema) => {
  const { attributes, extra, isTpl } = props;
  const [first, setfirst] = useState(123);
  if (isTpl) {
    return <div>Text Tpl</div>;
  }

  const { text, textAlign } = attributes;

  const { width = 160, height = 40 } = extra.commonStyle;

  return (
    <CommonHover style={{}} isPreview={true}>
      <span style={{ ...extra, width, height, textAlign, display: "block" }}>
        {text}
      </span>
    </CommonHover>
  );
};
export default Text;
