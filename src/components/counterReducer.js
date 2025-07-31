const initialState = {
  count: 0,
};


export const counterReducer = (state= initialState, action) => {
    if(action.type == "counter/increment"){
        return { ...state, count: state.count + 1}
    }else if(action.type == "counter/decrement"){
        return { ...state, count: state.count - 1}
    }
    return state;
}
