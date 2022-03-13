/// <reference types="react" />
export declare type componentsType = "media" | "base" | "visible";
declare type DynamicType = {
    isTpl: boolean;
    item: Record<string, any>;
    category: string;
};
declare const DynamicEngine: (props: DynamicType) => JSX.Element;
export default DynamicEngine;
