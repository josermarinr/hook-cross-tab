"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onReceiveMessage = exports.readMessage = exports.EventListener = void 0;
var react_1 = require("react");
var EventListener = function (stateKey, setState) {
    return react_1.useEffect(function () {
        return readMessage(stateKey, setState);
    }, [stateKey, setState]);
};
exports.EventListener = EventListener;
function readMessage(stateKey, setState) {
    window.addEventListener("storage", onReceiveMessage(stateKey, setState));
    return function () { return window.removeEventListener("storage", onReceiveMessage(stateKey, setState)); };
}
exports.readMessage = readMessage;
function onReceiveMessage(stateKey, setState) {
    return function (e) {
        var key = e.key, newValue = e.newValue;
        if (key === stateKey) {
            setState(JSON.parse(newValue));
        }
    };
}
exports.onReceiveMessage = onReceiveMessage;
//# sourceMappingURL=EventListener.js.map