"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveToStorage = exports.localStorageMock = void 0;
var EventListener_1 = require("../EventListener");
var react_1 = __importDefault(require("react"));
jest.mock('react', function () { return (__assign(__assign({}, jest.requireActual('react')), { useState: jest.fn() })); });
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
function saveToStorage(key, value) {
    window.localStorage.setItem(key, value);
}
exports.saveToStorage = saveToStorage;
describe(EventListener_1.EventListener, function () {
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
        // Define the addEventListener method with a Jest mock function
        document.addEventListener = jest.fn(function (event, callback) {
            events[event] = callback;
        });
        events.storage;
    });
    afterEach(function () {
        jest.clearAllMocks();
    });
    it('testing mock function of localhost should save and find the key to the storage', function () {
        saveToStorage("epale", "n'importe quoi");
        expect(window.localStorage.getItem('epale')).toEqual("n'importe quoi");
    });
    // hace el mock de state porque creo que este no funciona;
    it('testing the good behavior of readMessage function', function () {
        jest.spyOn(react_1.default, 'useState').mockImplementation(useStateMock);
        saveToStorage("otherKey", "hola a todo el mundo");
        events.storage = { key: "otherKey", value: "hola a todo el mundo" };
        var useStateSpy = jest.spyOn(react_1.default, 'useState');
        var readingMessage = EventListener_1.readMessage("otherKey", useStateSpy());
        expect(window.localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(window.localStorage.setItem).toHaveBeenCalledWith("otherKey", "hola a todo el mundo");
    });
    it('should have a good behavior in onReceiveMessage function', function () {
        jest.spyOn(window, 'addEventListener').mockImplementationOnce(function (event) {
            if (event === "storage") {
                return { key: 'otherKey', data: 'hola' };
            }
        });
        var stateKey = "otherKey";
        window.addEventListener('storage', EventListener_1.onReceiveMessage(stateKey, setState));
        expect(window.addEventListener).toBeCalledWith('storage', expect.any(Function));
    });
});
//# sourceMappingURL=EventListener.test.js.map