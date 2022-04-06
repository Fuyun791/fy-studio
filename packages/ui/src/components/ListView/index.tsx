import React, { forwardRef, ReactNode } from "react";
import { ICommonAttr } from "@types";
import { ShowTypeEnum } from "../../commonModule";

interface IViewProps extends ICommonAttr {
  children: ReactNode;
}

const ListView = forwardRef((props: IViewProps, ref) => {
  const { showType } = props;

  if (showType === ShowTypeEnum.tpl) {
    return <div>ListView Tpl</div>;
  }

  return <div>如果出现这个说明存在问题</div>;
});
export default ListView;
