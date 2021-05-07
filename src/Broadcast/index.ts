import { useState } from "react";
import { BroadcastChannel,  createLeaderElection } from "broadcast-channel";
import { v4 as uuidv4 } from "uuid";
import { EventListener } from "./EventListener";

export interface BroadcastStateProps {
    stateKey: string,
    initialValue: any
}
export function BroadcastState({ stateKey, initialValue }: BroadcastStateProps) {
  const [state, setState] = useState(initialValue);
  const myTabID = uuidv4();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const channel = new BroadcastChannel(stateKey);
  const elector = createLeaderElection(channel);
  elector.onduplicate = () => {
    console.error('have duplicate leaders!');
  }

  channel.postMessage({ currentTab: myTabID, data: state });

  EventListener(channel, setState, state);

  return [state, setState];
}



