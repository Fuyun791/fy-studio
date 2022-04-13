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
  listeners?: {
    id: string;
    eventName: string;
    type: "platform" | "customize";
    handler: {
      name: string;
      module: string;
      func?: string;
      params: {
        [key: string]: any;
      };
    };
  }[];
  children?: ItemProp[];
  id?: string; // id似乎并不一定就需要
  onClick?: (id: string, event?: MouseEvent) => void;
}

type DynamicType = {
  showType: ShowTypeEnum;
  item: ItemProp;
  category: string;
  children?: ReactNode;
  env?: string;
};

const DynamicEngine = forwardRef((props: DynamicType, ref) => {
  const { item, category, showType, children, env = "web" } = props;

  const {
    attributes,
    extra,
    listeners,
    component,
    id,
    onClick,
    // children: schemaChildren,
  } = item;

  const RealComponent = loadable(({ component }) => {
    return import(`../components/${component}/${env}`);
  });

  const events: { [key: string]: Function } = {};
  const params: { [key: string]: any } = {};
  if (listeners) {
    listeners.forEach((item) => {
      events[item.eventName] = Function(
        `"use strict";return (${item.handler.func})`
      )();
      params[item.eventName] = item.handler.params;
    });
  }
  return (
    <RealComponent
      component={component}
      attributes={attributes}
      extra={extra}
      showType={showType}
      events={events}
      params={params}
      id={id}
      ref={ref}
      onClick={onClick}
      fallback={<div>Loading...</div>}
    >
      {children}
    </RealComponent>
  );
});

export default DynamicEngine;
