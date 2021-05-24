import { useState, useRef } from "react";
import {SavingData} from "./SavingData"
import {EventListener} from "./EventListener"


export function LocalStorageState(stateKey: string, defaultValue: any) {
    const [state, setState] = useState(defaultValue);
    const newSession = useRef(true);

    if (!state && !defaultValue) {
        throw Error("do you have set a key and default value");
    }


    SavingData(defaultValue, stateKey, setState, state, newSession);

    EventListener(stateKey, setState);

    return [state, setState];
}
