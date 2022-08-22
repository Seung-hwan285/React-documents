
import './App.css';

import React from 'react';
import { useState } from 'react';
import DataFetch from './ch3-1/component/DataFetch';

function App() {
 

  const [name,setName]= useState(
    { firstName : '', lastName :'' }
  
  )




  return (
    // <ThemeContext.Provider value={theme.red}>
    //     <Toolbar/>
    // </ThemeContext.Provider>
    // <Counter/>
    <div className='container'>

    <h2>Title</h2>
    <form>

      <input type="text" value ={name.firstName} onChange={(e)=>setName({...name,firstName : e.target.value})}/>

      <h4>{name.firstName}</h4>

      <input type="text" onChange={(e)=>setName({...name,lastName : e.target.value})}/>

      <h4>{name.lastName}</h4>
    </form>
    

    <DataFetch/>
    
    </div>
  );
    
}



export default App;
