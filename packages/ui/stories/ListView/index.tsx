import React from "react";
import FyStudio from "@fy-studio/ui";

const { DynamicEngine, Schema } = FyStudio;
/**
 * Primary UI component for user interaction
 */

export const ListView = ({ ...res }) => {
  const { ListView } = Schema;
  const {
    meta: { template },
  } = ListView;
  const {
    attributes: { data = [] },
    id: id2,
    onClick,
  } = res;
  const item = {
    id: "kkk",
    component: "View",
    extra: { commonStyle: { backgroundColor: "red", padding: 8 } },
    onClick: (a: string) => onClick(a),
    children: data.map((item) => {
      return { ...template, id: item, onClick: (a: string) => onClick(a) };
    }),
  };

  const renderDom = (schema) => {
    const { id, children } = schema;
    if (Array.isArray(children)) {
      return (
        <DynamicEngine
          key={id}
          item={{ ...schema }}
          category="base"
          showType={1}
        >
          {children.map((childrenSchema) => {
            return renderDom(childrenSchema);
          })}
        </DynamicEngine>
      );
    }

    return (
      <DynamicEngine key={id2} item={schema} category="base" showType={1} />
    );
  };

  if (Array.isArray(item.children)) {
    return (
      <DynamicEngine key={id2} item={item} category="base" showType={1}>
        {item.children.map((childrenSchema) => {
          return renderDom(childrenSchema);
        })}
      </DynamicEngine>
    );
  }
  // 选中的这个改成和其他平台一样的模式
  return <DynamicEngine key={id2} item={item} category="base" showType={1} />;
  // return <DynamicEngine item={item} category="base" showType={1} />;
};
