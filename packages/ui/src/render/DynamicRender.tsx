import React from "react";
import loadable from "@loadable/component";
import Editor from "@monaco-editor/react";

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
  // const OtherComponent = loadable(() => import("@/components/Text"));

  return (
    <>
      <OtherComponent
        attributes={attributes}
        extra={extra}
        isTpl={isTpl}
        event={event}
        fallback={<div>Loading...</div>}
      />
      {/* <Editor
        width="280px"
        height="280px"
        defaultLanguage="javascript"
        defaultValue="// some comment"
        // onChange={handleEditorChange}
        theme="vs-dark"
      /> */}
    </>
  );
};

export default DynamicEngine;
