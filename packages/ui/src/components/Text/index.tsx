import React from "react";

const Text = (props) => {
  const { align, text, fontSize, color, lineHeight, isTpl } = props;
  return isTpl ? (
    <div>Text Tpl</div>
  ) : (
    <div style={{ color, textAlign: align, fontSize, lineHeight }}>{text}</div>
  );
};
export default Text;
