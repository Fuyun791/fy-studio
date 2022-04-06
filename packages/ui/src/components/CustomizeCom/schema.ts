import { ICommonSchema } from "@types";

const CustomizeCom: ICommonSchema = {
  properties: {
    data: {
      title: "数据",
      type: "array",
      default: [{ title: "标题", value: "内容" }],
    },
  },
  events: [],
  meta: {
    id: "CustomizeCom",
    title: "容器",
    description: "容器组件，兼容小程序和H5平台",
    icon: "../icons/button.svg",
    category: "customize",
    componentOrder: 1,
  },
};

export default CustomizeCom;
