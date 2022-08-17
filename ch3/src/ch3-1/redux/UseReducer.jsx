import { useReducer,useState } from "react";
import React from "react";



const reducer=(state, action)=> {
  switch (action.type) {
    case 'increment':
    return state +1;
    case 'decrement':
      return state - 1;
    case 'divsion':
        return state / 2;
    default:
      throw new Error();
  }
}


function Counter() {
  const [number, dispatch] = useReducer(reducer, 0);
  const [name,  setName]= useState('하이');


  return (
    <>
      Count: {number} <br/>


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