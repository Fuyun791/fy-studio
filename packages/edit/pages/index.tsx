import React, { useState } from "react";
import type { NextPage } from "next";
import FyStudio from "@fy-studio-ui";

import { HTML5Backend } from "react-dnd-html5-backend";
import Draggable, { DraggableData, DraggableEvent } from "react-draggable";
import { DndProvider } from "react-dnd";
import classNames from "classnames";
// import Editor from "@monaco-editor/react";
import LeftBox from "components/LeftBox";
import ContainBox from "components/ContainBox";

import styles from "../styles/Home.module.css";

// 指定画布的id
let canvasId = "js_canvas";

const { Schema, DynamicEngine } = FyStudio;

// const { TextSchema } = Schema;

const Home: NextPage = (props) => {
  const [dragState, setDragState] = useState({ x: 0, y: 0 });

  // TODO: 暂时先写成数组,其实应该是已对象的模式向下渲染的
  const [treeSchema, setTreeSchema] = useState<{ [key: string]: any }[]>([]);
  const [curSchema, setCurSchema] = useState<{ [key: string]: any } | null>(
    null
  );

  console.log("curSchema", curSchema, curSchema?.attributes);

  const renderLeftSchema = () => {
    return Object.values(Schema).map((item) => {
      const { meta, properties } = item;

      const attributes: { [key: string]: any } = {};
      Object.keys(properties).forEach((key) => {
        const { type, default: defaultValue } = properties[key];
        switch (type) {
          case "string":
            attributes[key] = `${defaultValue}`;
            break;
          case "number":
            attributes[key] = Number(defaultValue);
            break;
          default:
            break;
        }
      });
      return (
        <LeftBox item={item} key={meta.id} canvasId={canvasId}>
          <DynamicEngine
            item={{ component: meta.id }}
            category="base"
            isTpl={true}
          />
        </LeftBox>
      );
    });
  };
  function handleEditorChange(value, event) {
    console.log("here is the current model value:", value);
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        minHeight: "100%",
      }}
    >
      <DndProvider backend={HTML5Backend}>
        {/* <Container {...props} /> */}
        <div
          id="header"
          style={{
            height: 56,
            width: "100%",
            borderBottom: 1,
            borderBottomColor: "#000",
            borderBottomStyle: "solid",
            display: "flex",
            alignItems: "center",
            padding: 12,
          }}
        >
          <span style={{ width: 100, textAlign: "center" }}>header</span>
        </div>
        <div
          id="container"
          style={{ display: "flex", flexDirection: "row", flex: 1 }}
        >
          <div
            id="left-component"
            style={{
              width: 200,
              borderRight: 1,
              borderRightColor: "#000",
              borderRightStyle: "solid",
            }}
          >
            {renderLeftSchema()}
          </div>
          <div
            id="context"
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <ContainBox
              dragState={dragState}
              setDragState={setDragState}
              treeSchema={treeSchema}
              setTreeSchema={setTreeSchema}
              setCurSchema={setCurSchema}
              canvasId={canvasId}
            />
          </div>
          <div
            id="right-component"
            style={{
              width: 280,
              borderLeft: 1,
              borderLeftColor: "#000",
              borderLeftStyle: "solid",
            }}
          >
            {/* TODO: 实现右边栏和可复数加入容器 */}
            {curSchema && (
              <div>
                <div className={classNames(styles.common)}>
                  <span>组件名称：</span>
                  <span>{curSchema.component}</span>
                </div>
                <div className={classNames(styles.common)}>
                  <span>可配置属性</span>
                  {Object.keys(curSchema.attributes).map((key) => {
                    return (
                      <div key={key} className={classNames(styles.common)}>
                        <span>{key} :</span>
                        <span>{curSchema.attributes[key]}</span>
                      </div>
                    );
                  })}
                </div>
                <div className={classNames(styles.common)}>
                  <span>公共属性</span>
                  {Object.keys(curSchema.extra.commonStyle).map((key) => {
                    const { commonStyle } = curSchema.extra;
                    return (
                      <div key={key} className={classNames(styles.common)}>
                        <span>{key} :</span>
                        <span>{commonStyle[key]}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
            {/* <Editor
              width="280px"
              height="280px"
              defaultLanguage="javascript"
              defaultValue="// some comment"
              onChange={handleEditorChange}
              theme="vs-dark"
            /> */}
          </div>
        </div>
      </DndProvider>
    </div>
  );
};

export default Home;
