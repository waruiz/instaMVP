import {combineReducers} from 'redux';
import UserPageReducer from './reducer-userPage';

const allReducers = combineReducers({
  page: UserPageReducer
})
