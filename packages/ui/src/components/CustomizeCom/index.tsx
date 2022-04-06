import React, { forwardRef, ReactNode } from "react";
import { ICommonAttr } from "@types";
import DynamicEngine, { ItemProp } from "../../render/DynamicRender";
import { ShowTypeEnum } from "../../commonModule";
// import { ITextSchema } from "./schema";

// const { DynamicEngine } = FyStudio;

interface IViewProps extends ICommonAttr {
  id?: string;
  type?: string;
  component: string;
  attributes: {
    // 总数据
    data: { title: string; value: string }[];
  };
  children: any;
}

const renderDom = (schema: ItemProp) => {
  const { id, children } = schema;
  if (Array.isArray(children)) {
    return (
      <DynamicEngine
        key={id}
        item={schema}
        category="base"
        showType={ShowTypeEnum.trueDom}
      >
        {children.map((childrenSchema) => {
          return renderDom(childrenSchema);
        })}
      </DynamicEngine>
    );
  }

  return (
    <DynamicEngine
      key={id}
      item={schema}
      category="base"
      showType={ShowTypeEnum.trueDom}
    />
  );
};

// 自定义组件
const CustomizeCom = (props: IViewProps) => {
  const {
    extra = { commonStyle: {} },
    attributes: { data = [] },
    showType,
    id,
    onClick,
    children,
  } = props;

  if (showType === ShowTypeEnum.tpl) {
    return <div>ListView Tpl</div>;
  }

  let showDom = {};

  if (showType === ShowTypeEnum.showDom) {
    showDom = { id, onClick: (id: string) => onClick(id) };
  }

  const item = {
    component: "View",
    attributes: {},
    extra: extra,
    // 简单处理的话，data传的不应该是渲染而是数据
    children: data.map((item) => {
      return {
        component: "View",
        attributes: {},
        extra: {
          commonStyle: { backgroundColor: "blue", height: 40, marginTop: 6 },
        },
        children: [
          {
            component: "Text",
            attributes: { text: `mock ${item.title} with ${item.value}` },
          },
        ],
      };
    }),
    ...showDom,
  };

  // const { id, children } = schema;
  if (Array.isArray(item.children)) {
    return (
      <DynamicEngine
        key={id}
        item={item}
        category="base"
        showType={ShowTypeEnum.showDom}
      >
        {item.children.map((childrenSchema) => {
          return renderDom(childrenSchema);
        })}
      </DynamicEngine>
    );
  }
  // 选中的这个改成和其他平台一样的模式
  return (
    <DynamicEngine
      item={item}
      category="base"
      showType={ShowTypeEnum.showDom}
    />
  );
};
export default CustomizeCom;
