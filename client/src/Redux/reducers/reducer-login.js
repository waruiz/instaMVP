export default function currUser (state = '', action) {
  switch (action.type) {
    case 'UPDATE_CURR_USER':
    return state = action.payload;
  default: return state;
  }
}