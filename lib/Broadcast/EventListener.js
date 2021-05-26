"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventListener = void 0;
var react_1 = require("react");
var EventListener = function (channel, setState, state) {
    return react_1.useEffect(function () {
        channel.onmessage = function (ev) {
            setState(ev.data);
        };
        return function () {
            channel.close();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [channel, state]);
};
exports.EventListener = EventListener;
//# sourceMappingURL=EventListener.js.map