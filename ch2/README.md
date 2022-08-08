# JSX
jsx는 리액트에서 사용하는 문법 입니다.
얼핏보면 html과 흡사하지만 실제로는 Javascript 문법과 비슷합니다.

jsx가 Javascript로 제대로 변환이 되려면 지켜주어야 하는 규칙이 있습니다.


<br>
<br>


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



<br>


```js

functional App(){

// 잘못된 코드
    return(

        <div></div>
        <div></div>
    )
}

```



<br>
<br>


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


<br>
<br>

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


<br>


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


<br>
<br>


# Props Drilling (프로퍼티 내리꽂기)

![](img2.png)







props를 오로지 하위 컴포넌트로 전달하는 용도로만 쓰이는 컴포넌트들을 거치면서 React Component 트리의 한 부분에서 다른 부분으로 데이터를 전달하는 과정입니다.

prop drilling이 보통 3~5개 컴포넌트를 거치는 정도이면 , 괜찮을 수 있으나 , 10개 이상을 거친다면 중간 컴포넌트들은 불필요하게 props를 받게 되어 가독성이 떨어져 유지보수가 어려워집니다.



이를 해결하기 위해서 전역 상태 관리 라이브러리인 `Context api`와 컴포넌트 합성이라 부르는 `Composition`을 사용할 수 있습니다.

다음 먼저  간단한  프로퍼티 드릴링 예제를 살펴보도록 합시다.


<br>
<br>

```js

export default function Parent(){
  const [fName , setfName] = useState('fName');
  const [lName , setlName] = userState('lName');



  return(
    <div>
        <div>
              This is a Parent component
        </div>

        <br/>
        <ChildA fname={fName} lname={lName}/>
    <div/>
  );
} 


```


<br>


```js

function ChildA({fname,lname}){


  return (
    <div>

      <div>
          This is ChildB Component.
      </div>

      <br/>

      <ChildB fname ={fName} lname ={lName}/>

    <div/>
  );
}

```


<br>


```js

function ChildB({fname,lname}){
    return(

      <div>

          <div>
              This is ChildB Component.
          </div>

          <br/>

          <ChildC fname={fname} lname={lName}>
      </div>
    )
}

```

<br>

```js

function ChildC({fname, lname}){
  return(

      <div>

          <div>
               This is ChildC Component.
          </div>

          <br/>

          {fname}
          {lname}

      </div>

  )

}

```


<br>


굉장히 비효율적으로 동일한 데이터가 내려가는 것을 확인 할 수 있습니다.
이렇게 컴포넌트가 대략 100개라고 가정하면 웹 속도가 굉장히 느려지게 되고 props의 이름이 전달중에 변경되어서 데이터를 추적하기가 어려워 집니다.


<br>
<br>

# Context API
context는 전역적 `(global)`이라고 볼 수 있는 데이터를 공유할 수 있도록 고안된 방법입니다.
context 사용함으로 모든 컴포넌트를 일일이 통하지 않고도 원하는 값을 `컴포넌트 트리 깊은 곳` 까지 보낼 수 있습니다. 

<br>
<br>

## React.createContext

```js
let context = React.createContext(null);
```
Context 객체를 만듭니다.

<br>
<br>


## Context.Provider

```js
<MyContext.Provider value={`test`}>  
```

Context에 포함된 React 컴포넌트인 Provider는  컴포넌트들에게 context 변화를 알리는 역할을 합니다.

`Provider 컴포넌트`는 `value prop`을 받아서 이 값을 하위에 있는 컴포넌트에게 전달합니다. 값을 전달받을 수 있는 컴포넌트의 수에 제한은 없습니다.


<br>
<br>


```js

import React, { useContext } from "react";
import {useState} from "react";
let context = React.createContext(null);


export default function Parent2(){

        const [fName, setfName] = useState('fristName');
        const [lName, setlName] = useState('lastName');

        return(

            <context.Provider value={{fName, lName}}>

                    <div>
                        This is a Parent component
                        <br/>
                        <ChildA/>
                    </div>

            </context.Provider>
        );
}


function ChildA() {

    return (
        <>
            <h3>This is ChildA Component.</h3>
            <br />
            <ChildB />
        </>
    );
}


function ChildB() {

    return (
        <>
            <h3>This is ChildB Component.</h3>
            <br />
            <ChildC />
        </>
    );
}


function ChildC() {


    const {fName,lName} = useContext(context);
 
    return (
        <>
            <h3>This is ChildC component.</h3>
            <br />
            <h3> Data from Parent component is as follows:</h3>
            <h4>{fName}</h4>
            <h4>{lName}</h4>
        </>
    );
}


```


<br>
<br>



# Composition ( 합성 )
리액트는 훌륭한 컴포지션 모델을 가지고 있고 상속을 사용하기보다 컴포지션 형태로 사용하여 컴포넌트 재사용을 권하고 있습니다.

![](2022-08-05-15-33-46.png)


위 사진은 아래 코드를 빌드하고 props를 console.log 했을때 출력되는 사진입니다.

Content() 컴포넌트 2개가 출력되는걸 확인 할 수 있습니다.



<br>
<br>


## Compositon Example

```js

import React from "react"

export default function compostion(){

    return(
        <>
            <Sidebar >
                 <Content/>
                 <Content/>
            </Sidebar>
        </>
    );
}


const Sidebar=(props)=>{

    return(
        <div className="sidebar">

            {props.children}

        </div>

    );
}

const Content=()=>{

    return(
        <div>
                <h1>Sidebar data 1</h1>
                <h1>Sidebar data 2</h1>
                <h1>Sidebar data 3</h1>
                <h1>Sidebar data 4</h1>
        </div>
    );
}

```

<br>
<br>


이 컴포지션 방법으로 위에서 했던 Context API 예제를 바꿔봅니다.


```js

import { useState } from "react";



export default function Parent3(){



    const [fName, setfName]= useState('firstName');

    const [lName,setlName] = useState('lastName');

    return(

            <>
              <ParentComponent>
                        <ChildA>
                                <ChildB>
                                        <ChildC data1={fName} data2={lName}/>
                                </ChildB>
                        </ChildA>
              </ParentComponent>
            </>
    );
}

const ParentComponent=(props)=>{

        return  (
                <div>{props.children}</div>
        );

}



const ChildA =({children})=>{
        return(

                <>
                        <h3>This is ChildA Component.</h3>
                        <br/>
                        {children}
                </>
        )
}



const ChildB=({children})=>{

        return(

                <>
                        <h3>This is ChildB Component.</h3>
                        <br/>
                        {children}
                </>
        )
}


const ChildC=({data1,data2})=>{

        return(
                <>
                        <h3>This is ChildC Component.</h3>
                        <br/>
                        <h4>{data1}</h4>
                        <h4>{data2}</h4>
                </>
                
        );
}
```

<br>
<br>

컴포지션을 통해 요소를 둘러쌀 때 마다 `상위 구성 요소`가 됩니다.<br> 
그런 다음 `자식 구성 요소`들을 랜더링하는
역할을 하는 `ParentComponent`를 만들어서 부모 구성 요소내에서 자식 구성 요소들을 받아서 출력 할 수 있습니다.