import type { FC } from "react";
import React, { Suspense } from "react";
import loadable from "@loadable/component";

export type componentsType = "media" | "base" | "visible";

type DynamicType = {
  isTpl: boolean;
  config: Record<string, any>;
  type: string;
  componentsType: componentsType;
  category: string;
};

const DynamicEngine = (props: DynamicType) => {
  const { type, config, category, isTpl } = props;

  const temp = {
    text: "@/components/Text",
  };

  const OtherComponent = loadable(() => import("../components/Text"));
  // const OtherComponent = loadable(() => import("@/components/Text"));

  return (
    <div>
      <OtherComponent
        {...config}
        isTpl={isTpl}
        fallback={<div>Loading...</div>}
      />
    </div>
  );
};

export default DynamicEngine;
