# React Rest API
리액트에서 API를 사용하는 것은 Javascipt에서 사용하는 방법괄 매우 다릅니다.
2가지 주요 `React.Hook`을 사용합니다.


useEffect() 훅은 API 요청을 수행합니다. 앱이 마운트될때 즉시 랜더링 됩니다.

useState 는 데이터가 요청되거나 , 데이터가 반환될 때 상태를 관리할 훅이 됩니다.

<br>

```js
useEffect(()=>{

},[]);
```

```js

const [post,setPost] = useState('');
```


본격적으로 리액트 Rest API를 알아보기전에 `Fetch()` , `Axios`에 대해 간단하게 짚고 넘어가겠습니다.

<br>

일반적인 자바스크립트에서 API를 연동하기 위해서는 `Fetch API`를 사용하곤 했습니다.
리액트 또한 자바스크립에 Fetch를 지원하는데요 하지만  많은 사람들은 `axios`를 사용하는걸 선호하고 있습니다.

<br>

- Fetch API : Fetch() 메서드를 제공합니다. 그리고 가져오는 방법에는 
URL인 하나의 필수 매개변수가 있습니다. 이 메서드는 요청 응답을 검색하는 데 사용할 수 있는 Promise를 반환합니다.

<br>

```js

fetch('url')
  .then((response) => {
 
    response.json();
  })
  .then((response)=>{

  })
  .catch((error) => {
 
    // Code for handling the error
  });
```


- Axios : Axios는 응답을  JSON으로 자동 변환하므로 Axios를 사용할 때 응답을 JSON 으로 변환해야 하는 Fetch()와 달리 불필요한 과정을 생략합니다.

<br>
<br>

## Fetch vs Axios

 1. Fetch()가 크롬 , 파이어폭스 , 엣지 , 사파리에서만 지원되는 것과 달리 Axios는 모든 브라우저에서 지원을 합니다.

 2. Axios를 사용하면 개발자가 http 요청을 가로챌 수 있습니다.



```js

axios.get('url')
  .then((response) => {
 
    // Code for handling the response
  })
  .catch((error) => {
 
    // Code for handling the error
  })
```

<br>
<br>

# Fetch api (GET) 

리액트에서 fetch 를 통해서 api를 통해서 GET을 어떻게 사용하는지 알아보겠습니다.
먼저 작업이 `useEffect()` 상태에서 발생하여 애플리케이션이 로드 되는 즉시 데이터를 가져와줍니다.


```js
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
function Posts() {
 

   // 
   // const [get,set] =useState([]);



    const API = 'https://jsonplaceholder.typicode.com/posts?_limit=10';
    



  // 
    const fetchPost=()=>{
        

        fetch(API)
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res);
        
        });
    }


    useEffect(()=>{

        fetchPost();
    },[]);

    return(

        <div>

                <h2>React Rest api</h2>


            <ul>
                {post.map((item,index)=>(
                    <li key={index}>{item.title}</li>
                ))}

            </ul>

        </div>

    )
    
}



export default Posts;
```