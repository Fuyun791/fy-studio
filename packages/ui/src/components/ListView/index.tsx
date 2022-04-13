import React, { forwardRef, ReactNode } from "react";
import { ICommonAttr } from "@types";
import { ShowTypeEnum } from "../../commonModule";

export interface IViewProps extends ICommonAttr {
  children: ReactNode;
}

const ListView = forwardRef((props: IViewProps, ref) => {
  const { showType } = props;

  if (showType === ShowTypeEnum.tpl) {
    return <div>ListView Tpl</div>;
  }

  return <div>抱歉，出现了错误，请反馈</div>;
});
export default ListView;
