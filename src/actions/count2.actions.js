import { INCREMENT2, DECREMENT2 } from './actionTypes';


export function countIncrement2(number) {
    return {
        type: INCREMENT2,
        payload: number
    }
}
export function countDecrement2(number) {
    return {
        type: DECREMENT2,
        payload: number
    }
}