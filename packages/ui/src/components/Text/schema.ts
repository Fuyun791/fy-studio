export interface ITextSchema {
  properties: {
    [key: string]: {
      title: string;
      default: string;
      type: string;
      [key: string]: any;
    };
  };
  events: { name: string; title: string; function: string }[];
  meta: {
    id: string;
    title: string;
    description: string;
    icon: string;
    category: "base" | "other";
    componentOrder: number;
  };
}
const Text: ITextSchema = {
  properties: {
    text: {
      title: "文本内容",
      type: "string",
      default: "文本",
    },
    textAlign: {
      title: "对齐方式",
      type: "string",
      default: "left",
      xComponent: "radio",
      enum: [
        {
          key: "left",
          text: "左对齐",
        },
        {
          key: "center",
          text: "居中对齐",
        },
        {
          key: "right",
          text: "右对齐",
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
  // 描述,用于左侧栏
  events: [],
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
