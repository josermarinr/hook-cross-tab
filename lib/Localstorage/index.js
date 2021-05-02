"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalStorageState = void 0;
var react_1 = require("react");
var SavingData_1 = require("./SavingData");
var EventListener_1 = require("./EventListener");
function LocalStorageState(stateKey, defaultValue) {
    var _a = react_1.useState(defaultValue), state = _a[0], setState = _a[1];
    var newSession = react_1.useRef(true);
    if (state && defaultValue) {
        SavingData_1.SavingData(defaultValue, stateKey, setState, state, newSession);
    }
    else {
        throw Error("do you have set a key and default value");
    }
    EventListener_1.EventListener(stateKey, setState);
    return [state, setState];
}
exports.LocalStorageState = LocalStorageState;
//# sourceMappingURL=index.js.map