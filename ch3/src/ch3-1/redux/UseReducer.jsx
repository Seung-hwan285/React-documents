import { useReducer } from "react";

const initialState = {count: 0};

const reduce1=(state, action)=> {
  switch (action.type) {
    case 'increment':
      increase(count);
    case 'decrement':
      return {count: state.count - 1};
    case 'divsion':
        return {count: state.count / 2};
    default:
      throw new Error();
  }

}


function Counter() {
  const [state, dispatch] = useReducer(reduce1, initialState);
  
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch ({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch ({type: 'increment'})}>+</button>
        <button onClick={()=> dispatch ({type : 'divsion'})}>/</button>
    </>
  );
}
export default Counter;