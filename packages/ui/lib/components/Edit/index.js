"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var amis_1 = require("amis");
// import { env, TimerContext } from "../App";
var Edit = function () {
    var editSchema = {
        type: "page",
        body: {
            type: "form",
            api: "/amis/api/mock2/form/saveForm",
            body: [
                {
                    type: "editor",
                    name: "editor",
                    label: "编辑器",
                },
            ],
        },
    };
    var renderAmisComponent = function (scheme) {
        return amis_1.render(
        // 这里是 amis 的 Json 配置。
        scheme, {
        // props...
        }
        //   env
        );
    };
    //   {amisComponentArray.map((scheme) => renderAmisComponent(scheme))}
    //   return <div>{renderAmisComponent(editSchema)}</div>;
    return react_1.default.createElement("span", null, "sss");
};
exports.default = Edit;
//# sourceMappingURL=index.js.map