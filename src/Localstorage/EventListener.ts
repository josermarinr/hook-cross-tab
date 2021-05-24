import React, { useEffect } from "react";

export const EventListener = (
    stateKey: string,
    setState: (element: any) => void
) =>
    useEffect(() => {
        return readMessage(stateKey, setState);
    }, [stateKey, setState]);


export function readMessage(stateKey: string, setState: (element: any) => void) {
    window.addEventListener("storage", onReceiveMessage(stateKey, setState));
    return () => window.removeEventListener("storage", onReceiveMessage(stateKey, setState));
}

export function onReceiveMessage(stateKey: string, setState: (element: any) => void) {
    return (e: any) => {
        const { key, newValue } = e;
        if (key === stateKey) {
            setState(JSON.parse(newValue));
        }
    };
}

