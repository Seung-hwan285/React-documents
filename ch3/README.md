# React Hooks Life Cycle
React Hook은 함수형 컴포넌트에서 클래스형 컴포넌트의 기능을 구현한 개념입니다.

예를 들어 클래형 state를 훅(Hook)을 이용해서 함수형 Component에서도 
useState를 이용해서 상태 변수를 선언 할 수 있습니다.

또한 `useEffect()` 를 통해 리액트 클래스의 componentDidMount , componentDidUpdate , componentWillUnmount와 같은 라이프 사이클을 관리할 수 있습니다.



<br>
<br>



# useEffect
useEffect 함수는 리액트 컴포넌트가 랜더링 될 때마다 특정 작업을 실행할 수 있도록 하는 Hook입니다.

컴포넌트가 마운트 됐을때(처음 나타날때) , 언마운트 됐을때 (사라질 때)
업데이트 됐을때(특정 props) 바뀔 때 특정 작업을 처리할때 주로 사용합니다.

<br>
<br>

## 기본 형태
```js
useEffect( function , deps)
```

- function : 수행하고자 하는 작업
- deps : 배열 형태이며 , 배열 안에는 검사하고자 하는 특정 값 or 빈 배열



<br>



## 1. Component가 mount 됐을 때 ( 처음 나타남 )

- 컴포넌트가 화면에 가장 처음 랜더링 될 때 한 번만 실행하고 싶을 때는 deps 위치에 빈 배열을 넣는다.


<br>

```js
useEffect(()=>{

    console.log('랜더링 될 때마다 실행된다');
});

```

<br>


랜더링 될 때마다 실행되는 예제입니다.<br>
Click  ,  Change Name 버튼이 생성이 되고 각 버튼이 클릭이 되면서 랜더링이 진행되고 ,
Hello가 출력이 되는 것 입니다.

![](2022-08-10-14-04-35.png)

```js
const NumberRender=()=>{


    const [number,setNumber] = useState(0);
    const [name,setName]= useState('Jeno Seung Hwan');


    useEffect(()=>{
        console.log('Hello');
    });



    const counter = ()=>{
        setNumber(number+1);
    }

    const nameChange =()=>{
        setName('Mike');
    }
    return(
        <div>
                    <button onClick={counter}>Click</button>
                    <button onClick={nameChange}>Change Name</button>


                    <div>{number}</div>
                    <div>{name}</div>
        </div>
    )

}
export default NumberRender;
```

<br>
<br>


## 2 Component가 단 한번만 실행하고 싶을 때 
- useEffect를 랜더링 후 단 한번만 실행하고 싶을 때 사용하는 방법입니다.

```js
useEffect(()=>{
    console.log('랜더링 후 한번만 실행된다.');
},[]);
```


<br>
<br>



이번에는 위와 동일한 예제에서 deps에 [] 을 넣어주어서 랜더링이 되고 나서 한번만 실행되게 만들어주는 예제 입니다.

이렇게 되면 첫 화면이 랜더링이 되고 `Hello가` 나오게 됩니다.
```js
import React, { useEffect } from 'react';
import { useState } from 'react';


const NumberRender=()=>{


    const [number,setNumber] = useState(0);
    const [name,setName]= useState('Jeno Seung Hwan');


    useEffect(()=>{
        console.log('Hello');
    },[number]);



    const counter = ()=>{
        setNumber(number+1);
    }

    const nameChange =()=>{
        setName('Mike');
    }
    return(
        <div>
                    <button onClick={counter}>Click</button>
                    <button onClick={nameChange}>Change Name</button>


                    <div>{number}</div>
                    <div>{name}</div>
        </div>
    )

}
export default NumberRender;
```


<br>
<br>



## 3. Component가 update 될 때 ( 특정 props , state가 바뀔 때)
- `특정값이 (name)` 업데이트 될 때 실행하고 싶을 때는 deps 위치의 배열 안에 검사하고 싶은 값을 넣어준다.

```js

useEffect(()=>{

    console.log('name값이 업데이트 될 때 실행된다');

},[name]);

```



마지막으로 deps에 name값을 넣어줌으로써 name값이 변경될때만 Hello가 출력되게 만들어줍니다.

```js

import React, { useEffect } from 'react';
import { useState } from 'react';


const NumberRender=()=>{


    const [number,setNumber] = useState(0);
    const [name,setName]= useState('Jeno Seung Hwan');


    useEffect(()=>{
        console.log('Hello');
    },[name]);



    const counter = ()=>{
        setNumber(number+1);
    }

    const nameChange =()=>{
        setName('Mike');
    }



    return(
        <div>
                    <button onClick={counter}>Click</button>
                    <button onClick={nameChange}>Change Name</button>


                    <div>{number}</div>
                    <div>{name}</div>
        </div>
    )

}
export default NumberRender;
```

<br>

# useMemo
useMemo를 알아보기전에 알고리즘에 `Memoization`에 대해서 알아보겠습니다.
`Memoization` 이라는 것은 기존에 수행한 연산의 결과값을 어딘가에 저장해두고 동일한 입력이 들어오면 재활용하는 기법입니다. 

중복 연산을 피할 수 있기 때문에 메모리를 조금 더 쓰더라도 애플리케이션의 성능을 최적화 할 수 있습니다.


<br>

즉 useMemo는 이 메모제이션 방식을 사용해서 메모리에 담아두었다가 특정 값이 바뀌었을 때 연산을 동작하게 하는 방식입니다.


<br>

```js

const avg = useMemo(() =>{
	//내용
},[값]);

```

<br>


글자 입력 시에도 getAvergae 함수가 동작하기 때문에 콘솔창에 '평균값 계산중' 이라고 나오게 됩니다.
그리고 버튼 입력 시에도 `getAverage` 함수가 동작 하기 때문에 콘솔창에 '평균값 계산중' 이 나오게 되는데
종합적으로 , `getAverage` 함수가 필요하지 않는 곳에서 작동이 되는 현상이 발생합니다.

<br>
<br>


## useMemo 사용하기 전 
```js
import React from 'react';
import { useState } from 'react';
const Average=()=>{


    const [list, setList]=useState([]);

    const [number, setNumber]=  useState('');



    const getAvergae=()=>{

        console.log('평균값 계산중');
        
        if(list.length ===0) return 0;



        const sum = list.reduce((a,b)=>a+b);


        return sum / list.length;
    };


    const onChange=(e)=>{
        setNumber(e.target.value);
    }

    const onInsert=(e)=>{
        const nextList = list.concat(Number(number));

        
        setList(nextList);

        setNumber('');
    };

    return(
        <div>
            <input value={number} onChange={onChange}/>
            <button onClick={onInsert}>등록</button>
            <ul>
                {
                list.map((value,index)=>(

                            
                    <li key={index}>{value}</li>
                    
                ))}                
            </ul>

            <div>
                <b>평균값;</b> {getAvergae()}

            </div>
        </div>
    )
}

export default Average;
```





## useMemo 사용 후
```js
import React, { useMemo } from 'react';
import { useState } from 'react';
const Average=()=>{


    const [list, setList]=useState([]);

    const [number, setNumber]=  useState('');



    const getAvergae= useMemo(()=>{
        console.log('평균값 계산중');
        
        if(list.length ===0) return 0;


        const sum = list.reduce((a,b)=>a+b);


        return sum / list.length;
    },[list]);

        
    


    const onChange=(e)=>{
        setNumber(e.target.value);
    }

    const onInsert=(e)=>{
        const nextList = list.concat(Number(number));

        
        setList(nextList);

        setNumber('');
    };

    return(
        <div>
            <input value={number} onChange={onChange}/>
            <button onClick={onInsert}>등록</button>
            <ul>
                {
                list.map((value,index)=>(

                            
                    <li key={index}>{value}</li>
                    
                ))}                
            </ul>

            <div>
                <b>평균값;</b> {getAvergae()}

            </div>
        </div>
    )
}

export default Average;
```



# useMemo vs useState 

둘다 deps를 사용해서 값을 업데이트 한다는 공통점이 있습니다.<br>
그럼 2개의 차이점은 무엇일까요?

<br>

useMemo는 메모제이션 방식을 사용해서 값을 업데이트를 합니다.
즉 , useEffect로 값을 업데이트 하는 동시에 성능을 향상 시키고 싶다면 useMemo를 사용해서 이를 개선할 수 있습니다.

<br>

- `useEffect` : deps 배열의 요소가 변경되거나 배열이 생략된 경우 각 `렌더링 후`에 호출이 됩니다. 즉 랜더링을 한번더 하기 때문에  랜더링 성능을 효율적으로 하기가 힘듭니다. 

<br>

- `useMemo` : deps 배열의 요소가 변경되거나 베열이 생략된 경우 랜더링 전에 호출이 됩니다. 즉 `랜더링을 이전`에 하기 때문에 성능을 효율적으로 사용 할 수 있습니다.