"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Text = function (props) {
    var attributes = props.attributes, extra = props.extra, isTpl = props.isTpl;
    if (isTpl) {
        return react_1.default.createElement("div", null, "Text Tpl");
    }
    var text = attributes.text, textAlign = attributes.textAlign;
    var _a = extra.commonStyle, _b = _a.width, width = _b === void 0 ? 375 : _b, _c = _a.height, height = _c === void 0 ? 40 : _c;
    return (react_1.default.createElement("span", { style: __assign(__assign({}, extra), { width: width, height: height, textAlign: textAlign, display: "block" }) }, text));
};
exports.default = Text;
//# sourceMappingURL=index.js.map