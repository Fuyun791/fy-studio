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
  const [first, setfirst] = useState(123555);
  if (isTpl) {
    return <div>Text Tpl</div>;
  }

  const { text, textAlign } = attributes;

  const { commonStyle } = extra;

  const Temp = styled.button`
    color: "gray";
  `;

  return <p style={{ ...commonStyle, textAlign }}>{text}</p>;
};
export default Text;
