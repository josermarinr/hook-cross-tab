import { BroadcastState } from "../index"
import {renderHook, act} from '@testing-library/react-hooks'

test('should return the good state', () => {
    const key = 'hello'
    const initialValue = 44
     const {result}  = renderHook(
         ()=>BroadcastState({initialValue: initialValue, stateKey:key}),
         {
             initialProps: {
                initialValue: initialValue,
                stateKey: key
             }
         }
     )

    expect(result.current[0]).toEqual(44)
})
