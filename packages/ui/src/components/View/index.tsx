import React, { forwardRef, ReactNode } from "react";
import { ICommonAttr } from "@types";
import { ShowTypeEnum } from "../../commonModule";

interface IViewProps extends ICommonAttr {
  children: ReactNode;
}

// function commonHoc(WrappedComponent: ReactNode) {
//   class LogProps extends React.Component {
//     componentDidUpdate(prevProps) {
//       console.log("old props:", prevProps);
//       console.log("new props:", this.props);
//     }

//     render() {
//       return <WrappedComponent {...this.props} />;
//     }
//   }

//   return LogProps;
// }

const View = forwardRef((props: IViewProps, ref) => {
  const {
    extra = { commonStyle: {} },
    children,
    showType,
    id,
    onClick,
  } = props;

  if (showType === ShowTypeEnum.tpl) {
    return <div>View Tpl</div>;
  }

  if (showType === ShowTypeEnum.showDom) {
    return (
      <div
        ref={ref}
        style={{ ...extra.commonStyle }}
        onClick={() => onClick(id)}
      >
        {children}
      </div>
    );
  }

  return <div style={{ ...extra.commonStyle }}>{children}</div>;
});

export default View;
