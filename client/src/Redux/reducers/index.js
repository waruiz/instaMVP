import {combineReducers} from 'redux';
import UserReducer from './reducer-user';
import timelineState from './timeline';

const allReducers = combineReducers({
  timelineState,
});

export default allReducers;