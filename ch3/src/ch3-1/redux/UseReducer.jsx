import { useReducer,useState } from "react";
import React from "react";

const initialState = {
  count: 0,

};

const reducer=(state, action)=> {
  switch (action.type) {
    case 'increment':
    return {count : state.count +1};
    case 'decrement':
      return {count: state.count - 1};
    case 'divsion':
        return {count: state.count / 2};
    default:
      throw new Error();
  }
}


function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [name,  setName]= useState('하이');


  return (
    <>
      Count: {state.count} <br/>


      <br/>
      Name : {name}

      <br/>
      <button onClick={() => dispatch ({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch ({type: 'increment'})}>+</button>
      <button onClick={()=> dispatch ({type : 'divsion'})}>/</button>
      <button onClick={()=>setName('이름 변환')} >change</button>
    </>
  );
}
export default Counter;