import type { FC } from "react";
import React, { Suspense } from "react";
import loadable from "@loadable/component";

export type componentsType = "media" | "base" | "visible";

type DynamicType = {
  isTpl: boolean;
  item: Record<string, any>;
  category: string;
};

const DynamicEngine = (props: DynamicType) => {
  const { item, category, isTpl } = props;

  // console.log("item", item);
  const { attributes, extra } = item;

  const OtherComponent = loadable(() => {
    if (item.component === "Text") {
      return import("../components/Text");
    }
  });
  // const OtherComponent = loadable(() => import("@/components/Text"));

  return (
    <OtherComponent
      attributes={attributes}
      extra={extra}
      isTpl={isTpl}
      fallback={<div>Loading...</div>}
    />
  );
};

export default DynamicEngine;
