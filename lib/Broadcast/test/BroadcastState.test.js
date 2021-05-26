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
var index_1 = require("../index");
var react_hooks_1 = require("@testing-library/react-hooks");
var react_test_renderer_1 = __importStar(require("react-test-renderer"));
var react_1 = __importDefault(require("react"));
var ComponentToTest_1 = require("./ComponentToTest");
/// testing with jest
describe(index_1.BroadcastState, function () {
    test("should return the good state", function () {
        var key = "hello";
        var initialValue = 44;
        var result = react_hooks_1.renderHook(function () { return index_1.BroadcastState({ initialValue: initialValue, stateKey: key }); }, {
            initialProps: {
                initialValue: initialValue,
                stateKey: key,
            },
        }).result;
        expect(result.current[0]).toEqual(44);
    });
    it('should return a new state', function () {
        var key = "hello";
        var initialValue = 44;
        var result = react_hooks_1.renderHook(function () { return index_1.BroadcastState({ initialValue: initialValue, stateKey: key }); }, {
            initialProps: {
                initialValue: initialValue,
                stateKey: key,
            },
        }).result;
        react_test_renderer_1.act(function () {
            result.current[1]('hola');
        });
        expect(result.current[0]).toEqual('hola');
    });
    test("should return the good state in two time", function () {
        var successResult = "Some data";
        var getSuccess = jest.fn(function () { return Promise.resolve(successResult); });
        var getFail = jest.fn(function () { return Promise.reject(new Error()); });
        var component = react_test_renderer_1.default.create(react_1.default.createElement(ComponentToTest_1.ComponentToTest, { data: { id: 'this1s4n1d:h3x4d3c1m4l:1', data: 'anyData' } }));
        var jsonTree = component.toJSON();
        expect(jsonTree).toMatchSnapshot();
    });
});
//# sourceMappingURL=BroadcastState.test.js.map