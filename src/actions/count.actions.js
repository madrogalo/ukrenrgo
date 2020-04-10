import { INCREMENT, DECREMENT } from '../actions/actionTypes';


export function countIncrement(number) {
    return {
        type: INCREMENT,
        payload: number
    }
}
export function countDecrement(number) {
    return {
        type: DECREMENT,
        payload: number
    }
}