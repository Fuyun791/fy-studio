import React, { forwardRef, ReactNode } from "react";
import loadable from "@loadable/component";
import { ShowTypeEnum } from "../commonModule";
// import Editor from "@monaco-editor/react";

export type componentsType = "media" | "base" | "visible";

export interface ItemProp {
  component: string;
  type?: string;
  attributes?: any;
  extra?: any;
  event?: any[];
  children?: ItemProp[];
  id?: string; // id似乎并不一定就需要
  // FIXME: 这个得改下需要事件阻止冒泡
  onClick?: (id: string) => void;
}

type DynamicType = {
  showType: ShowTypeEnum;
  item: ItemProp;
  category: string;
  children?: ReactNode;
};

const DynamicEngine = (props: DynamicType) => {
  const { item, category, showType, children } = props;

  const {
    attributes,
    extra,
    event,
    component,
    id,
    onClick,
    // children: schemaChildren,
  } = item;

  const RealComponent = loadable(() => {
    return import(`../components/${component}`);
  });

  return (
    <RealComponent
      component={component}
      attributes={attributes}
      extra={extra}
      showType={showType}
      event={event}
      id={id}
      onClick={onClick}
      fallback={<div>Loading...</div>}
    >
      {children}
    </RealComponent>
  );
};

export default DynamicEngine;
