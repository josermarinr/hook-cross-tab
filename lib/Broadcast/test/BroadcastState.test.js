"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
var react_hooks_1 = require("@testing-library/react-hooks");
test('should return the good state', function () {
    var key = 'hello';
    var initialValue = 44;
    var result = react_hooks_1.renderHook(function () { return index_1.BroadcastState({ initialValue: initialValue, stateKey: key }); }, {
        initialProps: {
            initialValue: initialValue,
            stateKey: key
        }
    }).result;
    expect(result.current[0]).toEqual(44);
});
//# sourceMappingURL=BroadcastState.test.js.map