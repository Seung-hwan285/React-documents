import React from 'react';


import { useState } from 'react';

import { useRef } from 'react';
// useRef 함수는 current 속성을 가지고 있는 객체를 반환하는데 , 인자로 넘어온 초기값을
// current 속성에 할당합니다. 
// current 속성은 값을 변경해도 상태를 변경 할때 처럼 React 컴포넌트가 
// 다시 랜더링 되지 않습니다.



function RefRender() {
    const [render, setRender] = useState(false);
    const countRef = useRef(0);
    let countVar = 0;
  
    
    console.log('***** 렌더링 후 Ref:', countRef.current);
    console.log('***** 렌더링 후 Var:', countVar);
    
    const increaseRef = () => {
      countRef.current = countRef.current + 1;
      console.log('Ref Up! --->', countRef.current);
    }
  
    const increaseVar = () => {
      countVar = countVar + 1;
      console.log('Var Up! --->', countVar);
    }
  
    const doRender = () => {
      setRender(!render);
    }
  
    return (
      <div className="App">
        <header className="App-header">
          <p>Ref: {countRef.current}</p>
          <p>Var: {countVar}</p>
          
          <div>
            <button onClick={increaseRef}>Ref Up!</button>
            <button onClick={increaseVar}>Var Up!</button>
            <button onClick={doRender}>Render!</button>
          </div>
        </header>
    </div>
    );
  }
export default RefRender;
