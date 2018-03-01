export default function addRequestState (state = {}, action) {
  switch (action.type) {
    case 'UPDATE_ADD_REQUEST_STATE':
      return state = action.payload;
    default: return state;
  }
}