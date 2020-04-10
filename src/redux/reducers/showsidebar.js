import { SHOWSIDEBAR } from '../../actions/actionTypes';

const initialstate = {
  showsidebar: false
}

export default function showsidebar(state = initialstate, action) {
    switch(action.type) {
        case SHOWSIDEBAR:
            return { showsidebar: action.payload}
        default:
            return state
    }
}