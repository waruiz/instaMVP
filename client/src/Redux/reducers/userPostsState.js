export default function userPostsState (state = [], action) {
  switch (action.type) {
    case 'UPDATE_USER_POSTS':
    return state = action.payload;
  default: return state;
  }
}