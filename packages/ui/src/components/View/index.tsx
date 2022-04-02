import React, { ReactNode } from "react";
import { ICommonAttr } from "@types";
// import { ITextSchema } from "./schema";

interface IViewProps extends ICommonAttr {
  children: ReactNode;
}

const View = (props: IViewProps) => {
  const { extra = { commonStyle: {} }, isTpl, children } = props;
  if (isTpl) {
    return <div>View Tpl</div>;
  }

  return <div style={{ ...extra.commonStyle }}>{children}</div>;
};
export default View;
