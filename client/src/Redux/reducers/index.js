import {combineReducers} from 'redux';
import UserReducer from './reducer-user';
import timelineState from './timeline';
import userPostsState from './userPostsState';
import addState from './add-reducer';
import followersState from './reducer-followers';
import followingState from './reducer-following';
import userInfoState from './userInfoState';
import addRequestState from './addRequestState';
import currUser from './reducer-login'

const allReducers = combineReducers({
  timelineState,
  userPostsState,
  addState,
  followersState,
  followingState,
  userInfoState,
  addRequestState,
  currUser
});

export default allReducers;