import { ItemProp } from "../src/render/DynamicRender";
import { ShowTypeEnum } from "../src/commonModule";
import { EventHandler } from "react";

export interface ICommonSchema {
  properties: {
    [key: string]: {
      title: string;
      default: any;
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
    category: "base" | "other" | "customize" | "layout" | "template";
    componentOrder: number;
    template?: ItemProp;
  };
}

export interface ICommonAttr {
  attributes: any;
  events: { [key: string]: any };
  params?: { [key: string]: any };
  extra: { commonStyle: { [key: string]: any } };
  showType: ShowTypeEnum;
  id?: string;
  onClick?: (id: string, event?: MouseEvent) => void;
  // children?: ICommonAttr
}

// listeners?: {
//   id: string;
//   eventName: string;
//   type: "platform" | "customize";
//   handler: {
//     name: string;
//     module: string;
//     params: {
//       [key: string]: any;
//     };
//   };
// }[];
