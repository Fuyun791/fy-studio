import { ItemProp } from "../src/render/DynamicRender";
import { ShowTypeEnum } from "../src/commonModule";

export interface ICommonSchema {
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
    category: "base" | "other" | "customize";
    componentOrder: number;
    template?: ItemProp;
  };
}

export interface ICommonAttr {
  attributes: any;
  event: string;
  extra: { commonStyle: { [key: string]: any } };
  showType: ShowTypeEnum;
  id?: string;
  onClick?: (id: string) => null;
  // children?: ICommonAttr
}
