import React, { useEffect } from 'react'

export const savingData = (
  defaultValue: any, 
  stateKey: string, 
  setState: (element: any)=>void,
  state: any,
  NewSession: React.MutableRefObject<boolean>, 
  ) => 
  useEffect( () => {
    if (NewSession.current) {
      const currentState = localStorage.getItem(stateKey);
      if (currentState) {
        setState(JSON.parse(currentState));
      } else {
        setState(defaultValue);
      }
      NewSession.current = false;
      return;
    }
    try {
      localStorage.setItem(stateKey, JSON.stringify(state));
    } catch (error) {}
  }, [state, stateKey, defaultValue]);

