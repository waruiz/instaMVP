import {combineReducers} from 'redux';
import UserReducer from './reducer-user';

const allReducers = combineReducers({

  timelineState: (state = [], action) => {
    switch(action.type){
      case 'UPDATE_TIMELINE':
      return state = state.slice(0,0).concat(action.payload);
    default: return state;
    }
  },

  userPostsState: (state = [], action) => {
    switch (action.type) {
      case 'UPDATE_USER_POSTS':
      return state = action.payload;
    default: return state;
    }
  },

  addState: (state = {}, action) => {
    switch (action.type) {
      case 'UPDATE_ADD_STATE':
      return state = action.payload;
    default: return state;
    }
  },

  followersState: (state = [], action) => {
    switch(action.type){
      case 'UPDATE_FOLLOWERS':
      return state = action.payload;
      default: return state;
    }
  },

  followingState: (state = [], action) => {
    switch(action.type){
      case 'UPDATE_FOLLOWING':
      return state = action.payload;
      default: return state;
    }
  },

  // userInfoState: (state = null, action) => {
  //   switch (action.type) {
  //     case 'UPDATE_USER_INFO':
  //     return state = action.payload;
  //   default: return state;
  //   }
  // },

  addRequestState: (state = {}, action) => {
    switch (action.type) {
      case 'UPDATE_ADD_REQUEST_STATE':
        return state = action.payload;
      default: return state;
    }
  },

  currUser: (state = null, action) => {
    switch (action.type) {
      case 'UPDATE_CURR_USER':
      return state = action.payload;
    default: return state;
    }
  },
  
  postCommentState: (state = [], action) => {
    switch (action.type) {
      case 'UPDATE_POST_COMMENTS':
        if (action.payload.data) {
          state.push(action.payload.data)
          return state;
        } else if (action.payload === "initialize") {
            state = [];
            return state;
        } else {
          return state = state.concat(action.payload);
        }
      default:
        return state;
    }
  },
  
  addLikeState: (state = null, action) => {
    switch (action.payload) {
      case undefined:
        return state;
    }
    switch (action.type) {
      case 'UPDATE_ADD_LIKE_STATE':
        return state = action.payload;
      default: return state;
    }
  },

  currUserInfo: (state = null, action) => {
    switch (action.type) {
      case 'UPDATE_CURR_USER_INFO':
      return state = action.payload;
      default: return state;
    }
  },

  currClickedUser: (state = null, action) => {
    switch (action.type) {
      case 'UPDATE_CURR_CLICKED_USER':
      return state = action.payload;
      default: return state;
    }
  },
  
  profilePicState: (state = null, action) => {
    switch (action.type) {
      case 'UPATE_PROFILE_PIC_STATE':
        return state = action.payload;
      default: return state;
    }
  },

  nameState: (state = null, action) => {
    switch (action.payload) {
      case undefined:
        return state;
    }
    switch (action.type) {
      case 'UPDATE_NAME_STATE':
        return state = action.payload;
      default: return state;
    }
  }

});

export default allReducers;
