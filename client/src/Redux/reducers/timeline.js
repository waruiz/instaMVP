export default function timelineState (state = [], action){
  switch(action.type){
    case 'UPDATE_TIMELINE':
    return state = state.slice(0,0).concat(action.payload);
  default: return state;
  }
}