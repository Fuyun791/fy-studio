import { primaryColor } from "../../commonStyle";
import { ICommonSchema } from "@types";

type IButtonSchema = ICommonSchema;
const Button: IButtonSchema = {
  properties: {
    text: {
      title: "文本内容",
      type: "string",
      default: "文本",
    },
    type: {
      title: "按钮类型",
      type: "string",
      default: "primary",
      xComponent: "radio",
      enum: [
        {
          key: "primary",
          text: "默认",
        },
        {
          key: "text",
          text: "文本",
        },
      ],
    },
    size: {
      title: "按钮大小",
      type: "string",
      default: "medium",
      xComponent: "radio",
      enum: [
        {
          key: "small",
          text: "小",
        },
        {
          key: "medium",
          text: "中",
        },
        {
          key: "large",
          text: "高",
        },
      ],
    },
    backgroundColor: {
      title: "背景颜色",
      type: "string",
      default: primaryColor,
      xComponent: "color",
    },
  },
  events: [],
  meta: {
    id: "Button",
    title: "按钮",
    description: "按钮组件，兼容小程序和H5平台",
    icon: "../icons/button.svg",
    category: "base",
    componentOrder: 1,
  },
};

export default Button;
