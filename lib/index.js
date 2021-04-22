"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCrossTabState = void 0;
var react_1 = require("react");
var eventListener_1 = require("./eventListener");
var savingData_1 = require("./savingData");
function useCrossTabState(stateKey, defaultValue) {
    var _a = react_1.useState(defaultValue), state = _a[0], setState = _a[1];
    var newSession = react_1.useRef(true);
    savingData_1.savingData(defaultValue, stateKey, setState, state, newSession);
    eventListener_1.eventListener(stateKey, setState);
    return [state, setState];
}
exports.useCrossTabState = useCrossTabState;
//# sourceMappingURL=index.js.map