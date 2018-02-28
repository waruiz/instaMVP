import {combineReducers} from 'redux';
import UserReducer from './reducer-user';
import timelineState from './timeline';
import userPostsState from './userPostsState';

const allReducers = combineReducers({
  timelineState,
  userPostsState
});

export default allReducers;