export default function postCommentState(state = [], action) {
  console.log("up in the reducer", state, action.type)
  switch (action.type) {
    case 'UPDATE_POST_COMMENTS':
      if (action.payload.data) {
          state.push(action.payload.data)
        return state;
      } else {
        return state = state.concat(action.payload);
      }
    default:
      return state;
  }
}
