import { BroadcastState } from "./Broadcast"
import { LocalStorageState } from "./Localstorage"

interface UniversalStatePorps {
    key: string,
    initialState: any,
    option?: "local" | "broadcast"
}
export const UniversalState = ({key, initialState, option = "broadcast"}: UniversalStatePorps) => {
    return option==="local"?LocalStorageState(key, initialState):BroadcastState({ stateKey: key, initialValue: initialState })
}
