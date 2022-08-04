# JSX
jsx는 리액트에서 사용하는 문법 입니다.
얼핏보면 html과 흡사하지만 실제로는 Javascript 문법과 비슷합니다.

jsx가 Javascript로 제대로 변환이 되려면 지켜주어야 하는 규칙이 있습니다.



## 1. 두 가지 이상의 태그는 무조건 하나의 태그로 감싸져야한다.

```js

// 정상 코드
functional App(){

    return (
        <main>
            <Hello>
            <div></div>
            <p>></p>
        </main>
    )
}


```


```js

functional App(){

// 잘못된 코드
    return(

        <div></div>
        <div></div>
    )
}

```





## 2. JSX 내부에서 자바스크립트 변수를 보여줘야 할 때는 {} 사용 한다.

```js

function App(){

    const name ="react";
    const style ={color : 'red'};

    return(

        <div style={style}>
            {name}
        </div>
    )
}

```


# Props
React가 컴포넌트로 작성한 Element를 발견하면 해당 컴포넌트에 단일 객체로 JSX를 전달합니다.

props는 "properties" 의 줄임말이고 쉽게 말해서 부모 컴포넌트에 자식 컴포넌트로 전달해주는 객체입니다.


그리고 props는 읽기전용이라서 직접적으로 props를 수정해서는 안됩니다.

<br>
<br>



# Props Flow

```js

import './App.css';

import Welocome from './ch2-1/Welcome';


// 1
function App() {
  return (
    <div className="App">
  
    <Welocome name={"react"}/>

    </div>
  );
}




const root = ReactDOM.createRoot(document.getElementById('root'));

// 4
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


export default App;


```

```js
import React from 'react';



const Welocome =(props)=>{

    // 3
    return(
        <div>
            <h1>Hello {props.name}</h1>
        </div>
    );
}

export default Welocome; 


// 출력 결과
hello react
```


위의 예시는 다음과 같은 일들이 일어납니다.

1. App.js 에서 `<Welcome name ={"hwan"} />` 엘리먼트로 ReactDom.render()를 호출합니다.

2. React는 {name : 'react'}를 props로 하여 Welcome 컴포넌트를 호출합니다.

3. `Welcome 컴포넌트는` 결과적으로 `<h1>Hello react</h1>` 엘리먼트를 반환합니다.

4. ReactDOM은 `<h1>Hello react</h1>` 엘리먼트와 일치하도록 DOM을 효율적으로 업데이트 합니다.


# Props Drilling
프로퍼티 내리꽂기

- 프로퍼티 내리꽂기는 흔히 나사 구멍 내기라고 부르고 리액트의 컴포넌트 트리에서 데이터를 전달하기 위해서 필요한 과정을 의미합니다.

다음 간단한 상태 컴포넌트 예제로 살펴보도록 합시다.
