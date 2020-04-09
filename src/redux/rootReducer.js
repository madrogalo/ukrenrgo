const initialstate = {
    count: 0
}

export default function rootReducer(state = initialstate, action) {
    switch(action.type) {
        case 'INCREMENT':
            return { count: state.count + action.payload}
        case 'DECREMENT':
            return { count: state.count - action.payload}
        default:
            return state
    }
}