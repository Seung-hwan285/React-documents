import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
function Posts(params) {
 

    const [post,getPost] =useState([]);




    const API = 'https://jsonplaceholder.typicode.com/posts?_limit=10'
    


    const fetchPost=()=>{
        

        fetch(API)
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res);
            getPost(res);
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