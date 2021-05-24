import { EventListener, readMessage, setValue } from "../EventListener";
import { renderHook } from "@testing-library/react-hooks";
import { act } from 'react-test-renderer';
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
    // it('testing setupTest, should work', () => {
    //     // Storage.prototype.setItem = jest.fn(()=> "hola")
    //     // Storage.prototype.getItem = jest.fn(() => 'token');

    //     localStorage.setItem("hola", "como estas")
    //     localStorage.getItem.mockReturnValue
    //     //localStorage["[[Target]]"]["Symbol(impl)"]._items["[[Entries]]"][0]

    //     //expect(localStorage.setItem).toHaveBeenCalled();
    //    // expect().toBe("como estas")
    // })
    // test("should return the good state", () => {

    //     const key = "hello";
    //     const setState = (element : any) => { return element };
    //     const { result } = renderHook(
    //         () => EventListener(key, setState),
    //     );

    //   // expect(result).toEqual("hello");
    // });

    // it('should return a new state', ()=>{

    //     const key = "hello";
    //     const setState = (element : any) => { return element };
    //     const { result } = renderHook(
    //         () => EventListener(key, setState)
    //     );
    //     // act(() => {
    //     //     result.current[1]('hola')
    //     // })

    //     // expect(result.current[0]).toEqual('hola');
    // })
});
