/// <reference types="jest" />
export declare const localStorageMock: {
    getItem: jest.Mock<any, any>;
    setItem: jest.Mock<any, any>;
    clear: jest.Mock<any, any>;
    removeItem: jest.Mock<any, any>;
};
export declare function saveToStorage(key: string, value: string): void;
//# sourceMappingURL=EventListener.test.d.ts.map