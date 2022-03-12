"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Text = {
    editData: [
        {
            key: "text",
            name: "文字",
            type: "Text",
        },
        {
            key: "color",
            name: "标题颜色",
            type: "Color",
        },
        {
            key: "fontSize",
            name: "字体大小",
            type: "Number",
        },
        {
            key: "align",
            name: "对齐方式",
            type: "Select",
            range: [
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
        {
            key: "lineHeight",
            name: "行高",
            type: "Number",
        },
    ],
    config: {
        text: "我是文本",
        color: "rgba(60,60,60,1)",
        fontSize: 18,
        align: "center",
        lineHeight: 2,
    },
    meta: {
        id: "Text",
        title: "文本",
        description: "按钮组件，兼容小程序和H5平台",
        icon: "../icons/button.svg",
        category: "base",
        componentOrder: 1,
    },
};
exports.default = Text;
//# sourceMappingURL=schema.js.map