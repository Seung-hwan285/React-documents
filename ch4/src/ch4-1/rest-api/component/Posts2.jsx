import { useState, useEffect, useCallback } from 'react';
import React from 'react';
import {getList} from '../list';
function PostsForm2(){


    //get 용
    const [list,setList]=useState([]);

    // post 용
    const [itemInput, setItemInput]=useState('');

    useEffect(() => {

        getList()
        .then(item => {
            if(mounted) {
             setList(item)
            }
            console.log(item);
        })
        
    }, [])


    const handlerInput=(e)=>{
      console.log(e.target);
      setItemInput(itemInput);
    }

    return(
      // GET
        <div className="wrapper">
        <h1>My Grocery List</h1>
        <ul>
          {list.map(item => <li key={item.id}>{item.title}</li>)}
        </ul>
    


      {/* POST */}
    <form onSubmit={handlerInput}> 
        <label>
          <p>New item</p>
          <input type="text" onChange={e=>setItemInput(e.target.value)} value={itemInput}/>
        </label>

        <button type='submit'>Submit</button>

    </form>

      </div>
    )
}

export default PostsForm2;