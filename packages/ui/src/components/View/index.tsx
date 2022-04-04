import React, { ReactNode } from "react";
import { ICommonAttr } from "@types";
import { ShowTypeEnum } from "../../commonModule";

interface IViewProps extends ICommonAttr {
  children: ReactNode;
}

const View = (props: IViewProps) => {
  const {
    extra = { commonStyle: {} },
    children,
    showType,
    id,
    onClick,
  } = props;

  if (showType === ShowTypeEnum.tpl) {
    return <div>View Tpl</div>;
  }

  if (showType === ShowTypeEnum.showDom) {
    return (
      <div style={{ ...extra.commonStyle }} onClick={() => onClick(id)}>
        {children}
      </div>
    );
  }

  return <div style={{ ...extra.commonStyle }}>{children}</div>;
};
export default View;
