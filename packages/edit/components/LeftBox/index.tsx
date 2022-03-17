import { useMemo, memo, ReactNode, CSSProperties } from "react";
import { useDrag } from "react-dnd";
import FyStudio from "@fy-studio-ui";
import styles from "./LeftBox.module.css";

interface TargetBoxProps {
  // 这里接入描述类型
  item: { meta: { [key: string]: any }; properties: { [key: string]: any } };
  children: ReactNode;
  canvasId: string;
}
const { Schema } = FyStudio;

const SourceBox = memo((props: TargetBoxProps) => {
  const { item } = props;
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
  const [{ isDragging }, drag] = useDrag({
    type: "box",
    item: {
      component: meta.id,
      attributes,
      extra: {
        commonStyle: {},
      },
      category: "base",
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const containerStyle: CSSProperties = useMemo(
    () => ({
      opacity: isDragging ? 0.4 : 1,
      cursor: "move",
      height: "140px",
    }),
    [isDragging]
  );

  return (
    <div className={styles.listWrap}>
      <div className={styles.module} style={{ ...containerStyle }} ref={drag}>
        <div
          style={{
            height: "110px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          {props.children}
        </div>
        {/* <div
          style={{
            height: "30px",
            lineHeight: "30px",
            textAlign: "center",
            backgroundColor: "rgba(245, 245, 245, 1)",
            color: "rgba(118, 118, 118, 1)",
          }}
        >
          {meta.title}
        </div> */}
      </div>
    </div>
  );
});

export default SourceBox;
