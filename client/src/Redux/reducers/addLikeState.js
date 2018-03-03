export default function addLikeState (state = null, action) {
  switch (action.type) {
    case 'UPDATE_ADD_LIKE_STATE':
      return state = action.payload;
    default: return state;
  }
}