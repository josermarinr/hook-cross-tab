"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BroadcastState = void 0;
var react_1 = require("react");
var broadcast_channel_1 = require("broadcast-channel");
var uuid_1 = require("uuid");
var EventListener_1 = require("./EventListener");
function BroadcastState(stateKey, initialValue) {
    var _a = react_1.useState(initialValue), state = _a[0], setState = _a[1];
    var myTabID = uuid_1.v4();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    var channel = new broadcast_channel_1.BroadcastChannel(stateKey);
    var elector = broadcast_channel_1.createLeaderElection(channel);
    elector.onduplicate = function () {
        console.error('have duplicate leaders!');
    };
    channel.postMessage({ currentTab: myTabID, data: state });
    EventListener_1.EventListener(channel, setState, state);
    return [state, setState];
}
exports.BroadcastState = BroadcastState;
//# sourceMappingURL=index.js.map