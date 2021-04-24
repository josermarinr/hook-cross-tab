import { useState, useRef } from "react";
import { eventListener } from "./eventListener";
import { savingData } from "./savingData";

export function useCrossTabState(stateKey: string, defaultValue: any) {
    const [state, setState] = useState(defaultValue);
    const newSession = useRef(true);

    if (state && defaultValue) {
        savingData(defaultValue, stateKey, setState, state, newSession);
    } else {
        throw Error("do you have set a key and default value");
    }

    eventListener(stateKey, setState);

    return [state, setState];
}
