export default function currUser (state = null, action) {
  switch (action.type) {
    case 'UPDATE_CURR_USER':
    return state = action.payload;
  default: return state;
  }
}