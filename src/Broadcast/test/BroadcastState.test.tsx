import { BroadcastState } from "../index";
import { renderHook } from "@testing-library/react-hooks";
import renderer, { act } from 'react-test-renderer';
import React from "react";
import { ComponentToTest } from "./ComponentToTest";


/// testing with jest

describe(BroadcastState, () => {
    test("should return the good state", () => {

        const key = "hello";
        const initialValue = 44;
        const { result } = renderHook(
            () => BroadcastState({ initialValue: initialValue, stateKey: key }),
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
            () => BroadcastState({ initialValue: initialValue, stateKey: key }),
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

    test("should return the good state in two time", () => {

        const successResult = "Some data";

        const getSuccess = jest.fn(() => Promise.resolve(successResult));
        const getFail = jest.fn(() => Promise.reject(new Error()));


        const component = renderer.create(<ComponentToTest data={{id: 'this1s4n1d:h3x4d3c1m4l:1', data: 'anyData'}} />,);
        const jsonTree = component.toJSON()
        expect(jsonTree).toMatchSnapshot()
    });
});
