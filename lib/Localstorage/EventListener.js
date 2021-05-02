"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventListener = void 0;
var react_1 = require("react");
var EventListener = function (stateKey, setState) {
    return react_1.useEffect(function () {
        return readMessage(stateKey, setState);
    }, [stateKey, setState]);
};
exports.EventListener = EventListener;
function readMessage(stateKey, setState) {
    var onReceiveMessage = function (e) {
        var key = e.key, newValue = e.newValue;
        if (key === stateKey) {
            setState(JSON.parse(newValue));
        }
    };
    window.addEventListener("storage", onReceiveMessage);
    return function () { return window.removeEventListener("storage", onReceiveMessage); };
}
//# sourceMappingURL=EventListener.js.map