import { SHOWSIDEBAR } from './actionTypes';


export function showSidebar(state) {
    return {
        type: SHOWSIDEBAR,
        payload: state
    }
}