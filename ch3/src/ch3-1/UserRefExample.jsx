import React, { useState, useRef } from 'react';


// useRef 함수는 current 속성을 가지고 있는 객체를 반환하는데 , 인자로 넘어온 초기값을
// current 속성에 할당합니다. 
// current 속성은 값을 변경해도 상태를 변경 할때 처럼 React 컴포넌트가 
// 다시 랜더링 되지 않습니다.


function ManualCounter(){

    const [count, setCount] = useState(0);

    const interValId = useRef(null);

    console.log(`랜더링...count ${count}`);

    
    const stratCounter =()=>{
        interValId.current=setInterval(()=>{
            setCount((count)=> count+1);
        },500);
        
        console.log(`시작...intervaild  : ${interValId.current}`);
    }


    const clearCounter=()=>{
        clearInterval(interValId.current,1000);
    }
    return(

        <main>
            <p>자동 카운트 : {count}</p>
        
            <button onClick={stratCounter}>시작</button>
            <button onClick={clearCounter}>멈춤</button>
            
        </main>
    );
}

export default ManualCounter;


// function InputSample() {
//   const [inputs, setInputs] = useState({
//     name: '',
//     nickname: ''
//   });
//   const nameInput = useRef();

//   const { name, nickname } = inputs; // 비구조화 할당을 통해 값 추출


//   const onReset = () => {
//     setInputs({
//       name: '',
//       nickname: ''
//     });
//     nameInput.current.focus();
//   };

//   return (
//     <div>
//       <input
//         name="name"
//         placeholder="이름"
//         onChange={onChange}
//         value={name}
//         ref={nameInput}
//       />
//       <input
//         name="nickname"
//         placeholder="닉네임"
//         onChange={onChange}
//         value={nickname}
//       />
//       <button onClick={onReset}>초기화</button>
//       <div>
//         <b>값: </b>
//         {name} ({nickname})
//       </div>
//     </div>
//   );
// }

// export default InputSample;