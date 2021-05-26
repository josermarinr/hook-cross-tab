var store: any = {};

export const localStorageMock = {
    getItem: jest.fn().mockImplementation(key => store[key] || null),
    setItem: jest.fn().mockImplementation((key, value) => {
        store[key] = value;
    }),
    clear: jest.fn().mockImplementation(() => {
        store = {};
    }),
    removeItem: jest.fn().mockImplementation((key) => {
        store[key] = undefined;
    }),
  };

  export function saveToStorage(key:string, value: string) {
    window.localStorage.setItem(key, value);
  }
