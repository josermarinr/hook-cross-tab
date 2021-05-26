"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
var react_hooks_1 = require("@testing-library/react-hooks");
var react_test_renderer_1 = require("react-test-renderer");
describe(index_1.LocalStorageState, function () {
    test("should return the good state", function () {
        var key = "hello";
        var initialValue = 44;
        var result = react_hooks_1.renderHook(function () { return index_1.LocalStorageState(key, initialValue); }, {
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
        var result = react_hooks_1.renderHook(function () { return index_1.LocalStorageState(key, initialValue); }, {
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
});
//# sourceMappingURL=LocalStorageState.test.js.map