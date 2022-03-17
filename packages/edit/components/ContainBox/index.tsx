import React, {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useDrop } from "react-dnd";
import { ResizableBox } from "react-resizable";
import "react-resizable/css/styles.css";
import _ from "lodash";
import FyStudio from "@fy-studio-ui";
import Draggable, { DraggableData, DraggableEvent } from "react-draggable";
// import { ItemCallback } from "react-grid-layout";
// import { connect } from "dva";
import styles from "./index.module.css";
import { uuid } from "@utils/tool";
// import { Dispatch } from "umi";
// import { StateWithHistory } from "redux-undo";
// import { Menu, Item, MenuProvider } from "react-contexify";
// import "react-contexify/dist/ReactContexify.min.css";
interface SourceBoxProps {
  treeSchema: { [key: string]: any }[];
  setTreeSchema: React.Dispatch<
    React.SetStateAction<
      {
        [key: string]: any;
      }[]
    >
  >;
  setCurSchema: React.Dispatch<
    React.SetStateAction<{
      [key: string]: any;
    } | null>
  >;
  canvasId: string;
  //   allType: string[];
  //   dispatch: Dispatch;
  //   dispatch: () => null;
  dragState: { x: number; y: number };
  setDragState: React.Dispatch<
    React.SetStateAction<{
      x: number;
      y: number;
    }>
  >;
}
// const ViewRender = React.lazy(() => import("dooringUI/viewRender"));
const { Schema, DynamicEngine } = FyStudio;
const ContainBox = memo((props: SourceBoxProps) => {
  const {
    canvasId,
    treeSchema,
    setTreeSchema,
    setCurSchema,
    // allType,
    // dispatch,
    dragState,
    setDragState,
  } = props;

  const [canvasRect, setCanvasRect] = useState<number[]>([]);
  const [isShowTip, setIsShowTip] = useState(true);

  // TODO: 那就先写个简单点的，放进去就直接往后加
  const [{ isOver }, drop] = useDrop({
    accept: "box",
    drop: (item: { h: number; type: string; x: number }, monitor) => {
      console.log("drop", item);
      let parentDiv = document.getElementById(canvasId),
        pointRect = parentDiv!.getBoundingClientRect(),
        top = pointRect.top,
        pointEnd = monitor.getSourceClientOffset(),
        y = pointEnd!.y < top ? 0 : pointEnd!.y - top,
        col = 24, // 网格列数
        cellHeight = 2,
        w = item.type === "Icon" ? 3 : col;
      // 转换成网格规则的坐标和大小
      let gridY = Math.ceil(y / cellHeight);
      setTreeSchema([...treeSchema, item]);
      setCurSchema(item);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
      item: !!monitor.getItem(),
    }),
  });

  const opacity = isOver ? 0.7 : 1;

  const nodeRef = useRef(null);

  const render = useMemo(() => {
    return (
      <Draggable nodeRef={nodeRef} onStart={() => false}>
        <div
          style={{ width: 375, height: 675 }}
          ref={nodeRef}
          className={styles.canvasBox}
        >
          <div
            style={{
              //   transform: `scale(${scaleNum})`,
              position: "relative",
              width: "100%",
              height: "100%",
              border: 1,
              borderStyle: "solid",
            }}
          >
            <div
              id={canvasId}
              className={styles.canvas}
              style={{
                width: "100%",
                height: "100%",
                opacity,
              }}
              ref={drop}
            >
              {treeSchema.map((item, index) => {
                // TODO: 需要多一个宽度,
                //  然后实现右边栏,然后处理schema结构,再然后接入amis
                const { extra } = item;
                const { commonStyle } = extra;
                return (
                  <ResizableBox
                    key={uuid(6, 10)}
                    width={commonStyle.width || 375}
                    height={commonStyle.height || 40}
                    className={`${styles["hover-handles"]}`}
                    draggableOpts={{}}
                    onResizeStop={(_e, data) => {
                      const {
                        size: { width, height },
                      } = data;
                      const temp = _.cloneDeep(treeSchema);
                      const oldCommonStyle = temp[index].extra.commonStyle;
                      const cur = {
                        ...temp[index],
                        extra: {
                          commonStyle: { ...oldCommonStyle, width, height },
                        },
                      };
                      temp[index] = cur;
                      setTreeSchema(temp);
                      setCurSchema(cur);
                    }}
                  >
                    <div
                      onClick={() => {
                        setCurSchema(item);
                      }}
                    >
                      <DynamicEngine
                        item={item}
                        category="base"
                        isTpl={false}
                      />
                    </div>
                  </ResizableBox>
                );
              })}
            </div>
          </div>
        </div>
      </Draggable>
    );
  }, [
    canvasId,
    canvasRect,
    dragState,
    // dragStop,
    drop,
    isShowTip,
    treeSchema,
    // onDragStart,
    // onResizeStop,
    opacity,
    setDragState,
  ]);

  return (
    <>
      {render}
      {/* <MyAwesomeMenu /> */}
    </>
  );
});

// export default connect((state: StateWithHistory<any>) => ({
//   pstate: state.present.editorModal,
//   cstate: state.present.editorPcModal,
// }))(TargetBox);
export default ContainBox;
