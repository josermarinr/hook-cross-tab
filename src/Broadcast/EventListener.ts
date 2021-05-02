import { useEffect } from "react";
import { BroadcastChannel } from "broadcast-channel";

export const EventListener = (channel: BroadcastChannel<any>, setState: (event: any) => void, state: any) => useEffect(() => {
    channel.onmessage = (ev: any) => {
        setState(ev.data);
    };

    return () => {
        channel.close();
    };
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [channel, state]);
