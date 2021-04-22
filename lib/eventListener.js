"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventListener = void 0;
var react_1 = require("react");
var eventListener = function (stateKey, setState) {
    return react_1.useEffect(function () {
        var onReceieveMessage = function (e) {
            var key = e.key, newValue = e.newValue;
            if (key === stateKey) {
                setState(JSON.parse(newValue));
            }
        };
        window.addEventListener("storage", onReceieveMessage);
        return function () { return window.removeEventListener("storage", onReceieveMessage); };
    }, [stateKey, setState]);
};
exports.eventListener = eventListener;
//# sourceMappingURL=eventListener.js.map