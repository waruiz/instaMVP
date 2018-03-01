export default function postComments (state = [], action) {
  switch (action.type) {
    case 'UPDATE_POST_COMMENTS':
    return state = action.payload;
  default: return state;
  }
}
