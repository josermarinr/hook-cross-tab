import { LocalStorageState } from "../index";
import { renderHook } from "@testing-library/react-hooks";
import { act } from 'react-test-renderer';

describe(LocalStorageState, () => {
    test("should return the good state", () => {

        const key = "hello";
        const initialValue = 44;
        const { result } = renderHook(
            () => LocalStorageState(key, initialValue),
            {
                initialProps: {
                    initialValue: initialValue,
                    stateKey: key,
                },
            }
        );

       expect(result.current[0]).toEqual(44);
    });

    it('should return a new state', ()=>{

        const key = "hello";
        const initialValue = 44;
        const { result } = renderHook(
            () => LocalStorageState(key, initialValue),
            {
                initialProps: {
                    initialValue: initialValue,
                    stateKey: key,
                },
            }
        );
        act(() => {
            result.current[1]('hola')
        })

        expect(result.current[0]).toEqual('hola');
    })
});
