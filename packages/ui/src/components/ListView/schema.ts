import { ICommonSchema } from "@types";

const ListView: ICommonSchema = {
  properties: {},
  events: [],
  meta: {
    id: "ListView",
    title: "列表容器",
    description: "容器组件，兼容小程序和H5平台",
    icon: "../icons/button.svg",
    category: "base",
    componentOrder: 1,
    template: {
      component: "View",
      attributes: {},
      extra: {
        commonStyle: { backgroundColor: "blue", height: 40, marginTop: 6 },
      },
      children: [
        {
          component: "Text",
          attributes: { text: `mock text` },
        },
      ],
    },
  },
};

export default ListView;
