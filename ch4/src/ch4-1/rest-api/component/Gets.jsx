import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

function GetsForm() {

    const [data,setData] =useState([]);

    const API = "https://jsonplaceholder.typicode.com/posts";
    
    const fetchGet=()=>{
        fetch(API)
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res);
            setData(res);
        });
    }

    useEffect(()=>{
        fetchGet();
    },[]);

    
    return(

        <div>
                <h2>React Rest api</h2>

            <ul>
                {data.map((item,index)=>(
                    <li key={index}>{item.title}</li>
                ))}

            </ul>

        </div>

    )
    
}




export default GetsForm;