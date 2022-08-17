import React from "react";
import { useState , useEffect } from "react";


function Potss(){

  
  const [lists,setList] = useState([]);

  const [itemInput , setItemInput] = useState('');

  // submit 할때 보내줘야함 

  const handlerSubmit=(e)=>{

    e.preventDefault();

    const post={

      item : itemInput
    }

    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/posts',{
          method :"POST",
          headers:{
            'content-type':'application/json'
          },

    
          body:JSON.stringify(post)
        })

        .then(res=>res.json())
        .then(data=>console.log(data));
    },[]);
  }




  return(

    <div className="wrapper">
      

      <form onSubmit={handlerSubmit}>

        <label>
          <p>New Item</p>
          <input type="text" onChange={event => setItemInput(event.target.value)} value={itemInput} />
        </label>
        <button type="submit">Submit</button>
      </form>

    </div>
  )
  
}

export default Potss;