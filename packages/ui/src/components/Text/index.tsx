import React, { CSSProperties } from "react";
// import styled from "styled-components";

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
  if (isTpl) {
    return <div>Text Tpl</div>;
  }

  const { text, textAlign } = attributes;

  const { width = 375, height = 40 } = extra.commonStyle;

  return (
    <span style={{ ...extra, width, height, textAlign, display: "block" }}>
      {text}
    </span>
  );
};
export default Text;
