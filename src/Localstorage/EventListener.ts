import React, { useEffect } from "react";

export const EventListener = (
    stateKey: string,
    setState: (element: any) => void
) =>
    useEffect(() => {
        return readMessage(stateKey, setState);
    }, [stateKey, setState]);


function readMessage(stateKey: string, setState: (element: any) => void) {
    const onReceiveMessage = (e: any) => {
        const { key, newValue } = e;
        if (key === stateKey) {
            setState(JSON.parse(newValue));
        }
    };
    window.addEventListener("storage", onReceiveMessage);
    return () => window.removeEventListener("storage", onReceiveMessage);
}

