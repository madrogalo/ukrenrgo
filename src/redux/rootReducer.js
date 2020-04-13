import { combineReducers } from 'redux';

import count from './reducers/count';
import count2 from './reducers/count2';
import showsidebar from './reducers/showsidebar';
import nodeNameList from './reducers/nodeNameList';

export default combineReducers({
    count, count2, showsidebar, nodeNameList
})