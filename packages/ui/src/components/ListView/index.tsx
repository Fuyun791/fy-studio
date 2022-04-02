import React, { ReactNode } from "react";
import { ICommonAttr } from "@types";
import DynamicEngine from "../../render/DynamicRender";
// import { ITextSchema } from "./schema";

// const { DynamicEngine } = FyStudio;

interface IViewProps extends ICommonAttr {
  component: string;
  attributes: {
    // 总数据
    data: IViewProps[];
  };
  children?: any[];
}

// 列表容器
const ListView = (props: IViewProps) => {
  const {
    extra = { commonStyle: {} },
    isTpl,
    attributes: { data = [] },
  } = props;
  if (isTpl) {
    return <div>View Tpl</div>;
  }

  console.log("extra.commonStyle", extra.commonStyle);

  const item = {
    component: "View",
    attributes: {},
    extra: extra,
    children: data.map((item) => {
      return {
        component: item.component,
        attributes: item.attributes,
        extra: item.extra,
        // TODO: 这里的children还没写成嵌套的写法需要修改
        children: item.children,
      };
    }),
  };

  return <DynamicEngine item={item} category="base" isTpl={false} />;
};
export default ListView;
