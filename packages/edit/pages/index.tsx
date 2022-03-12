import React from "react";
import type { NextPage } from "next";
import FyStudio from "@fy-studio-ui";

import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import LeftBox from "components/LeftBox";

// import styles from "../styles/Home.module.css";

// import styles from "./index.less";
const styles = {};

// 指定画布的id
let canvasId = "js_canvas";

const { Schema, DynamicEngine } = FyStudio;

// const { TextSchema } = Schema;

const Home: NextPage = (props) => {
  const renderLeftSchema = () => {
    return Object.values(Schema).map((item) => {
      const { meta } = item;
      return (
        <LeftBox item={meta} key={meta.id} canvasId={canvasId}>
          <DynamicEngine
            // {...value}
            type={meta.id}
            config={Schema[meta.id].config}
            category="base"
            isTpl={true}
            componentsType="base"
          />
        </LeftBox>
      );
    });
  };
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
          header
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
            {/* TODO: 把组件内容渲染在这里 */}
            {/* <Text text="test 1" /> */}
            {renderLeftSchema()}
          </div>
          <div id="context" style={{ flex: 1 }}>
            context
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
            right
          </div>
        </div>
      </DndProvider>
    </div>
  );
};

export default Home;
