"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Text = function (props) {
    var align = props.align, text = props.text, fontSize = props.fontSize, color = props.color, lineHeight = props.lineHeight, isTpl = props.isTpl;
    return isTpl ? (react_1.default.createElement("div", null, "Text Tpl")) : (react_1.default.createElement("div", { style: { color: color, textAlign: align, fontSize: fontSize, lineHeight: lineHeight } }, text));
};
exports.default = Text;
//# sourceMappingURL=index.js.map