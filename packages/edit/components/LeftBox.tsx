import { useMemo, memo, ReactNode, CSSProperties } from "react";
import { useDrag } from "react-dnd";
import FyStudio from "@fy-studio-ui";
import styles from "./LeftBox.module.css";

interface TargetBoxProps {
  // 这里接入描述类型
  item: { id: string; h: number; x: number; category: string; title: string };
  children: ReactNode;
  canvasId: string;
}
const { Schema } = FyStudio;

const SourceBox = memo((props: TargetBoxProps) => {
  const { item } = props;
  //   const [] = useDrag({
  //     item: { type: item.type },
  //   });
  const [{ isDragging }, drag] = useDrag({
    type: "box",
    item: {
      // type: item.type,
      id: item.id,
      config: Schema[item.id].config,
      h: item.h,
      editableEl: Schema[item.id].editData,
      category: item.category,
      x: item.x || 0,
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
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
        <div
          style={{
            height: "30px",
            lineHeight: "30px",
            textAlign: "center",
            backgroundColor: "rgba(245, 245, 245, 1)",
            color: "rgba(118, 118, 118, 1)",
          }}
        >
          {props.item.title}
        </div>
      </div>
    </div>
  );
});

export default SourceBox;
