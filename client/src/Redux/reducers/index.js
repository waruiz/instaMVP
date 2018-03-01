import {combineReducers} from 'redux';
import UserReducer from './reducer-user';
import timelineState from './timeline';
import userPostsState from './userPostsState';
import addState from './add-reducer';

const allReducers = combineReducers({
  timelineState,
  userPostsState,
  addState
});

export default allReducers;