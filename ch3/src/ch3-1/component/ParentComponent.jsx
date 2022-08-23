import { useState, useMemo, useEffect, useCallback } from 'react';
function FetchTodo(){


    const [todo,setTodo] = useState({});

    const [isMount ,setMount] =useState(false);

    const [id,setId]= useState(1);

    const getAPI=useCallback(async()=>{

        console.log('h1');
        let api = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

        let data = await api.json();
        setMount(true);
        setTodo(data);


    },[id]);

 
    useEffect(()=>{

        getAPI();
         
        return()=>{
            setTodo(null);
            setMount(false);
        }
    },[getAPI])


    // api 요청 받아올 데이터 뿌려주기
    // 랜더링 버튼 생성
  

    return(

        <div>
            <h2>{todo?.name}</h2>

          
            <input type="number" value={id} onChange={(e)=>setId(e.target.value)}></input>
        </div>
    )


}


export default FetchTodo;