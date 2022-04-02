import { ICommonSchema } from "@types";

type ITextSchema = ICommonSchema;

const Text: ITextSchema = {
  properties: {
    text: {
      title: "文本内容",
      type: "string",
      default: "文本",
    },
    type: {
      title: "类型",
      type: "string",
      default: "left",
      xComponent: "radio",
      enum: [
        {
          key: "primary",
          text: "默认",
        },
        {
          key: "success",
          text: "成功",
        },
        {
          key: "warning",
          text: "警告",
        },
        {
          key: "error",
          text: "错误",
        },
      ],
    },
  },
  // 这个不应该是一个设置值,应该是一个传入使用的值
  // extra: {
  //   commonStyle: {
  //      self: {}
  //   },
  // },
  events: [],
  // 描述,用于左侧栏
  meta: {
    id: "Text",
    title: "文本",
    description: "按钮组件，兼容小程序和H5平台",
    icon: "../icons/button.svg",
    category: "base",
    componentOrder: 1,
  },
};

export default Text;
