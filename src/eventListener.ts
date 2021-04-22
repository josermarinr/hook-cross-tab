import React, { useEffect } from 'react'

export const eventListener = (stateKey: string, setState: (element: any) => void) => 
  useEffect(() => {
    const onReceieveMessage = (e: any) => {
      const { key, newValue } = e;
      if (key === stateKey) {
        setState(JSON.parse(newValue));
      }
    };
    window.addEventListener("storage", onReceieveMessage);
    return () => window.removeEventListener("storage", onReceieveMessage);
  }, [stateKey, setState]);