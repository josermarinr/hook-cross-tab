"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniversalState = void 0;
var Broadcast_1 = require("./Broadcast");
var Localstorage_1 = require("./Localstorage");
var UniversalState = function (_a) {
    var key = _a.key, initialState = _a.initialState, _b = _a.option, option = _b === void 0 ? "broadcast" : _b;
    return option === "local"
        ? Localstorage_1.LocalStorageState(key, initialState)
        : Broadcast_1.BroadcastState({ stateKey: key, initialValue: initialState });
};
exports.UniversalState = UniversalState;
//# sourceMappingURL=index.js.map