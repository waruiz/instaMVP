export default function userInfoState (state = null, action) {
  switch (action.type) {
    case 'UPDATE_USER_INFO':
    return state = action.payload;
  default: return state;
  }
}