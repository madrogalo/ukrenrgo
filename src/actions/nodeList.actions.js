import { NODELIST } from './actionTypes';

export function setNodeName(nodeName) {
  return {
    type: NODELIST,
    payload: nodeName
  }
}