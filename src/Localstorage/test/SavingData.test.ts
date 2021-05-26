import { act, renderHook } from "@testing-library/react-hooks";
import react from "react";
import { saveData, SavingData } from "../SavingData";
import { localStorageMock } from "./setupTest";



describe(SavingData, () => {
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
		document.addEventListener = jest.fn((event, callback) => {
      		events[event] = callback;
    	});
        events.storage
      });

      afterEach(() => {
        jest.clearAllMocks();
      });

      it('should save data in local storage', () => {
        jest.spyOn(react, 'useState').mockImplementation(useStateMock);

        saveData("foo", "Hola")

        expect(window.localStorage.setItem).toHaveBeenCalledTimes(1)
      })


    it('should return undefined in useEffect', ()=>{

        const
        defaultValue= "hola",
        stateKey= "foo",
        setState= (a: any) => a,
        state= "hola",
        NewSession: React.MutableRefObject<boolean> = {current: true},
        newState = "good";

        const { result } = renderHook(
            () => SavingData(defaultValue, stateKey, setState, state, NewSession),
            {
                initialProps: {
                    stateKey: stateKey,
                    state: newState,
                    defaultValue: defaultValue
                },
            }
        );

        expect(result.current).toEqual(undefined);
    })
})
