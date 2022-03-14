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

export default Text;
