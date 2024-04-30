import { combineReducers } from 'redux';

import recordReducer from './reducers/recordReducer';

const rootReducer = combineReducers({
 
  record: recordReducer,
});

export default (rootReducer);
