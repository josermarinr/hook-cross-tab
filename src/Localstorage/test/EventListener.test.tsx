import { EventListener, onReceiveMessage, readMessage } from "../EventListener";
import { saveToStorage, localStorageMock} from "./setupTest"
import React from "react";

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

describe(EventListener, () => {
    let events: any = {};
    const setState = jest.fn();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const useStateMock: any = (initState: any) => [initState, setState];

    beforeAll(() => {
        Object.defineProperty(window, 'localStorage', {
          value: localStorageMock,
        });
        Object.defineProperty(window, 'storage', {
            value: localStorageMock,
          });
        events = {};

        global.StorageEvent = jest.fn().mockImplementation(() => {
            return {key: "otherKey", value: "hola a todo el mundo"}
        })
		// Define the addEventListener method with a Jest mock function
		document.addEventListener = jest.fn((event, callback) => {
      		events[event] = callback;
    	});

        events.storage

      });

      afterEach(() => {
        jest.clearAllMocks();
      });

      it('testing mock function of localhost should save and find the key to the storage', () => {
        saveToStorage("epale", "n'importe quoi");
        expect(window.localStorage.getItem('epale')).toEqual("n'importe quoi");
      });
      // hace el mock de state porque creo que este no funciona;

      it('testing the good behavior of readMessage function', () => {
        jest.spyOn(React, 'useState').mockImplementation(useStateMock);
        saveToStorage("otherKey","hola a todo el mundo");

        events.storage = {key: "otherKey", value: "hola a todo el mundo"}
        const useStateSpy : any = jest.spyOn(React, 'useState')

        const readingMessage = readMessage("otherKey", useStateSpy())

       expect(window.localStorage.setItem).toHaveBeenCalledTimes(1)

       expect(window.localStorage.setItem).toHaveBeenCalledWith("otherKey", "hola a todo el mundo")

      });

      it('should have a good behavior in onReceiveMessage function', () => {

        jest.spyOn(window, 'addEventListener').mockImplementationOnce((event, handler:any, options) => {
          if(event === "storage"){
              return {key: 'otherKey', data: 'hola'}
          }
        });

        let stateKey= "otherKey"
        window.addEventListener('storage', onReceiveMessage(stateKey, setState))

        expect(window.addEventListener).toBeCalledWith('storage', expect.any(Function));

      })

});
