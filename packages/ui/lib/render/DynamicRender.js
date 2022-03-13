"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var component_1 = __importDefault(require("@loadable/component"));
var DynamicEngine = function (props) {
    var item = props.item, category = props.category, isTpl = props.isTpl;
    // console.log("item", item);
    var attributes = item.attributes, extra = item.extra;
    var OtherComponent = component_1.default(function () {
        if (item.component === "Text") {
            return Promise.resolve().then(function () { return __importStar(require("../components/Text")); });
        }
    });
    // const OtherComponent = loadable(() => import("@/components/Text"));
    return (react_1.default.createElement(OtherComponent, { attributes: attributes, extra: extra, isTpl: isTpl, fallback: react_1.default.createElement("div", null, "Loading...") }));
};
exports.default = DynamicEngine;
//# sourceMappingURL=DynamicRender.js.map