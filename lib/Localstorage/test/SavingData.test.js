"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.localStorageMock = void 0;
var react_hooks_1 = require("@testing-library/react-hooks");
var react_1 = __importDefault(require("react"));
var SavingData_1 = require("../SavingData");
var store = {};
exports.localStorageMock = {
    getItem: jest.fn().mockImplementation(function (key) { return store[key] || null; }),
    setItem: jest.fn().mockImplementation(function (key, value) {
        store[key] = value;
    }),
    clear: jest.fn().mockImplementation(function () {
        store = {};
    }),
    removeItem: jest.fn().mockImplementation(function (key) {
        store[key] = undefined;
    }),
};
describe(SavingData_1.SavingData, function () {
    var events = {};
    var setState = jest.fn();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var useStateMock = function (initState) { return [initState, setState]; };
    beforeAll(function () {
        Object.defineProperty(window, 'localStorage', {
            value: exports.localStorageMock,
        });
        Object.defineProperty(window, 'storage', {
            value: exports.localStorageMock,
        });
        events = {};
        global.StorageEvent = jest.fn().mockImplementation(function () {
            return { key: "otherKey", value: "hola a todo el mundo" };
        });
        document.addEventListener = jest.fn(function (event, callback) {
            events[event] = callback;
        });
        events.storage;
    });
    afterEach(function () {
        jest.clearAllMocks();
    });
    it('should save data in local storage', function () {
        jest.spyOn(react_1.default, 'useState').mockImplementation(useStateMock);
        SavingData_1.saveData("foo", "Hola");
        expect(window.localStorage.setItem).toHaveBeenCalledTimes(1);
    });
    it('should return undefined in useEffect', function () {
        var defaultValue = "hola", stateKey = "foo", setState = function (a) { return a; }, state = "hola", NewSession = { current: true }, newState = "good";
        var result = react_hooks_1.renderHook(function () { return SavingData_1.SavingData(defaultValue, stateKey, setState, state, NewSession); }, {
            initialProps: {
                stateKey: stateKey,
                state: newState,
                defaultValue: defaultValue
            },
        }).result;
        expect(result.current).toEqual(undefined);
    });
});
//# sourceMappingURL=SavingData.test.js.map