export default function addState (state = {}, action) {
  switch (action.type) {
    case 'UPDATE_ADD_STATE':
    return state = action.payload;
  default: return state;
  }
}