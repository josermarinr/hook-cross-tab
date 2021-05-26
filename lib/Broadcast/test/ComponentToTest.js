"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentToTest = void 0;
var index_1 = require("../index");
var react_1 = __importDefault(require("react"));
var ComponentToTest = function (_a) {
    var data = _a.data;
    var _b = index_1.BroadcastState({
        initialValue: data,
        stateKey: "test",
    }), state = _b[0], setState = _b[1];
    return react_1.default.createElement(react_1.default.Fragment, null, state.data);
};
exports.ComponentToTest = ComponentToTest;
//# sourceMappingURL=ComponentToTest.js.map