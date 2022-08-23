import { useState, useEffect } from 'react';

function DataFetch(){

    const [data,setData]=useState({});

    const [id,setId]= useState(1);


    const [dataButton,setDataButton] = useState(0);

    // useEffect(()=>{
    //     fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    //     .then((res)=>res.json())
    //     .then((res)=>setData(res));
    // },[id]);


    const handler=async()=>{
        let fetchAPI = await fetch(`https://jsonplaceholder.typicode.com/users/${dataButton}`);
        let res = await fetchAPI.json();
        setData(res);
    }
    

    const handlerButton=()=>{
        setDataButton(id);
    }


    useEffect(()=>{
        handler();
    },[dataButton]);


    return(
        <div>
            <div>
            <input type="text" value={id} onChange={(e)=>setId(e.target.value)}/>
            <button type="button" onClick={handlerButton}>Fetch button</button>

            </div>
            {/* <ul>
                {data.map(($el, index)=>(

                     <li key={index}>{$el.name}</li>
                ))}
            </ul> */}
                <div><h3>{data.name}</h3></div>
        </div>
        
    )
}

export default DataFetch;