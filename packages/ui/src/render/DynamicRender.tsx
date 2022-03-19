import React from "react";
import loadable from "@loadable/component";
import Text from "../components/Text";
// import Editor from "@monaco-editor/react";

export type componentsType = "media" | "base" | "visible";

type DynamicType = {
  isTpl: boolean;
  item: Record<string, any>;
  category: string;
};

const DynamicEngine = (props: DynamicType) => {
  const { item, category, isTpl } = props;

  // console.log("item", item);
  const { attributes, extra, event } = item;

  const OtherComponent = loadable(() => {
    // if (item.component === "Text") {
    //   return import("../components/Text");
    // } else if (item.component === "Button") {
    //   return import("../components/Button");
    // }
    return import(`../components/${item.component}`);
  });

  return (
    <OtherComponent
      attributes={attributes}
      extra={extra}
      isTpl={isTpl}
      event={event}
      fallback={<div>Loading...</div>}
    />
  );
};

export default DynamicEngine;
