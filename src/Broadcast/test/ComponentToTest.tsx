import { BroadcastState } from "../index";
import React from "react";


export const ComponentToTest = ( {data}:{data: any}) => {
    const[ state, setState] = BroadcastState({
        initialValue: data,
        stateKey: "test",
    });

    return <>
        {state.data}
        </>
        ;
};
