import React, { CSSProperties, useState } from "react";
import styled from "styled-components";

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

  const { width = 375, height = 40 } = extra.commonStyle;

  const Temp = styled.button`
    color: "gray";
  `;

  return (
    <>
      <span style={{ ...extra, width, height, textAlign, display: "block" }}>
        {first}
      </span>
      <Temp />
    </>
  );
};
export default Text;
