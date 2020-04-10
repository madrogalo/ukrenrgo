import { INCREMENT, DECREMENT } from '../../actions/actionTypes';

const initialstate = {
    count: 0
}

export default function count(state = initialstate, action) {
    switch(action.type) {
        case INCREMENT:
            return { count: state.count + action.payload}
        case DECREMENT:
            return { count: state.count - action.payload}
        default:
            return state
    }
}