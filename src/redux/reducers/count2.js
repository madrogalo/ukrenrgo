import { INCREMENT2, DECREMENT2 } from '../../actions/actionTypes';

const initialstate = {
    count: 0
}

export default function count(state = initialstate, action) {
    switch(action.type) {
        case INCREMENT2:
            return { count: state.count + action.payload}
        case DECREMENT2:
            return { count: state.count - action.payload}
        default:
            return state
    }
}