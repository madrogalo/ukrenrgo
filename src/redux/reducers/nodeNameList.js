import { NODELIST } from '../../actions/actionTypes';

const initialState = {
  nodeListName: {}
}

export default function nodeNameList(state = initialState, action) {

  switch(action.type) {
    case NODELIST:
      return {
        nodeListName: action.payload
      }
    default:
      return state
  }

}