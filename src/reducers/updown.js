
const initialState = {
 name:'Ankit',
  counter: 0,
};
// const initialState =0
const changeUserNumber = (state=initialState, action ) => {
  switch(action.type){
    case "INCREMENT": return {counter:state.counter + 1};
    case "DECREMENT": return {counter:state.counter - 1};
    // case "NAME": return state.name;
    default: return state;
  }
}

export default changeUserNumber;