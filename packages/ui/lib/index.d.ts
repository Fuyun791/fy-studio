/// <reference types="react" />
declare const _default: {
    Schema: {
        [key: string]: any;
    };
    DynamicEngine: (props: {
        isTpl: boolean;
        config: Record<string, any>;
        type: string;
        componentsType: import("./render/DynamicRender").componentsType;
        category: string;
    }) => JSX.Element;
};
export default _default;
