import React from "react";
import { useReducer } from "react";
import { ChildReducer } from "./CommanFunction/ReducerChild";
import RenderList from "./ChildA";
import { Mycontext } from "./App";
import { useContext } from "react";

const ChildB = () => {
    const btnValue=useContext(Mycontext);
    const [state, dispatch] = useReducer(ChildReducer, { count: 0, flag: false });
    console.log(state.count)
    return (
        <>
       {!state.flag &&  <div>
            <button onClick={() => dispatch({ type: "Inc" })}>Increment</button>
            <h1>Counter: {state.count}</h1>
            <button onClick={() => dispatch({ type: "Dec" })}>Decrement</button>
            <div>
                <button onClick={() => dispatch({ type: "flagdata" })}>{btnValue}</button>
            </div>
            </div>}
            {state.flag && <RenderList />}    
            </>
    )
};

export default ChildB;