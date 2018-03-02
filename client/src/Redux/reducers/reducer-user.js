export default function currUserLocal (state = null, action) {
  switch (action.type) {
    case 'UPDATE_CURR_USER_LOCAL':
    return state = action.payload;
  default: return state;
  }
}