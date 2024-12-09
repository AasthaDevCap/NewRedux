export const ChildReducer=(state,action)=>{
    console.log(state.count)
    if(action.type=="Inc"){
        return {count: state.count + 1} ;
    }
    if(action.type=="Dec"){
        return {count: state.count - 1};
    }
    if(action.type=="flagdata"){
        return {flag: true};
    }
   return state;
}