import React, { useEffect } from "react";

export const savingData = (
    defaultValue: any,
    stateKey: string,
    setState: (element: any) => void,
    state: any,
    NewSession: React.MutableRefObject<boolean>
) =>
    useEffect(() => {
        if (NewSession.current) {
            const currentState = localStorage.getItem(stateKey);
            newState(currentState, setState, defaultValue);
            NewSession.current = false;
            return;
        }
        try {
            saveData(stateKey, state);
        } catch (error) {}
    }, [state, stateKey, defaultValue]);


function newState(currentState: string | null, setState: (element: any) => void, defaultValue: any) {
    if (currentState) {
        setState(JSON.parse(currentState));
    } else {
        setState(defaultValue);
    }
}

export function saveData(stateKey: string, state: any) {
    localStorage.setItem(stateKey, JSON.stringify(state));
}
