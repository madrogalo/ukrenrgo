import { NODELIST } from '../../actions/actionTypes';

const initialState = {

}

export default function nodeNameList(state = initialState, action) {

  switch(action.type) {
    case NODELIST:
      return Object.defineProperty(state, action.payload, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: { posX: 23, posY: 45 }
      });
      
    default:
      return state
  }

}