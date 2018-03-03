export default function postCommentState(state = [], action) {
  switch (action.type) {
    case 'UPDATE_POST_COMMENTS':
      if (action.payload.data) {
        state.push(action.payload.data)
        return state;
      } else if (action.payload === "initialize") {
          state = [];
          return state;
      } else {
        return state = state.concat(action.payload);
      }
    default:
      return state;
  }
}
