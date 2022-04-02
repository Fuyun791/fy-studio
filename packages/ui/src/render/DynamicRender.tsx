import React, { ReactNode } from "react";
import loadable from "@loadable/component";
// import Text from "../components/Text";
// import Editor from "@monaco-editor/react";

export type componentsType = "media" | "base" | "visible";

interface ItemProp {
  component: string;
  attributes?: any;
  extra?: any;
  event?: any[];
  children?: ItemProp[];
}

type DynamicType = {
  isTpl: boolean;
  item: ItemProp;
  category: string;
  children?: ReactNode;
};

const RenderEngine = (props: {
  component: string;
  attributes: any;
  extra: any;
  isTpl: boolean;
  event: any[];
  children?: ReactNode;
}) => {
  const { component, attributes, extra, isTpl, event, children } = props;

  const RealComponent = loadable(() => {
    return import(`../components/${component}`);
  });

  return (
    <RealComponent
      attributes={attributes}
      extra={extra}
      isTpl={isTpl}
      event={event}
      fallback={<div>Loading...</div>}
    >
      {children}
    </RealComponent>
  );
};

const DynamicEngine = (props: DynamicType) => {
  const { item, category, isTpl, children } = props;

  console.log("item", item);
  const {
    attributes,
    extra,
    event,
    component,
    children: schemaChildren,
  } = item;

  if (Array.isArray(schemaChildren)) {
    return (
      <RenderEngine
        component={component}
        attributes={attributes}
        extra={extra}
        isTpl={isTpl}
        event={event}
        // fallback={<div>Loading...</div>}
      >
        {schemaChildren.map((schema, index) => {
          return (
            <DynamicEngine
              key={`${JSON.stringify(schema)}_${index}`}
              item={schema}
              category="base"
              isTpl={false}
            >
              {children}
            </DynamicEngine>
          );
        })}
      </RenderEngine>
    );
  }

  return (
    <RenderEngine
      component={component}
      attributes={attributes}
      extra={extra}
      isTpl={isTpl}
      event={event}
      // fallback={<div>Loading...</div>}
    >
      {children}
    </RenderEngine>
  );
};

export default DynamicEngine;
