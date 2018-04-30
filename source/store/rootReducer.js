import { combineReducers } from 'redux';

import orderReducer from './orderReducer';
import applicationsReducer from './applicationsReducer';

export default combineReducers({
    orderReducer,
    applicationsReducer
});
