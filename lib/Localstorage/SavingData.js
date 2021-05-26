"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveData = exports.SavingData = void 0;
var react_1 = require("react");
var SavingData = function (defaultValue, stateKey, setState, state, NewSession) {
    return react_1.useEffect(function () {
        if (NewSession.current) {
            var currentState = localStorage.getItem(stateKey);
            newState(currentState, setState, defaultValue);
            NewSession.current = false;
            return;
        }
        try {
            saveData(stateKey, state);
        }
        catch (error) { }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state, stateKey, defaultValue]);
};
exports.SavingData = SavingData;
function newState(currentState, setState, defaultValue) {
    if (currentState) {
        setState(JSON.parse(currentState));
    }
    else {
        setState(defaultValue);
    }
}
function saveData(stateKey, state) {
    localStorage.setItem(stateKey, JSON.stringify(state));
}
exports.saveData = saveData;
//# sourceMappingURL=SavingData.js.map