"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.savingData = void 0;
var react_1 = require("react");
var savingData = function (defaultValue, stateKey, setState, state, NewSession) {
    return react_1.useEffect(function () {
        if (NewSession.current) {
            var currentState = localStorage.getItem(stateKey);
            if (currentState) {
                setState(JSON.parse(currentState));
            }
            else {
                setState(defaultValue);
            }
            NewSession.current = false;
            return;
        }
        try {
            localStorage.setItem(stateKey, JSON.stringify(state));
        }
        catch (error) { }
    }, [state, stateKey, defaultValue]);
};
exports.savingData = savingData;
//# sourceMappingURL=SavingData.js.map