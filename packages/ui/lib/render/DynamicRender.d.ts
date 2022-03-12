/// <reference types="react" />
export declare type componentsType = "media" | "base" | "visible";
declare type DynamicType = {
    isTpl: boolean;
    config: Record<string, any>;
    type: string;
    componentsType: componentsType;
    category: string;
};
declare const DynamicEngine: (props: DynamicType) => JSX.Element;
export default DynamicEngine;
