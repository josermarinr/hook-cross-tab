import { useEffect, useState, useRef } from "react";
import { eventListener } from "./eventListener";
import { savingData } from "./SavingData";


export function useCrossTabState(stateKey: string, defaultValue: any) {
  const [state, setState] = useState(defaultValue);
  const newSession = useRef(true);

  savingData(defaultValue, stateKey, setState, state, newSession)
  
  eventListener(stateKey, setState)

  return [state, setState];
}
