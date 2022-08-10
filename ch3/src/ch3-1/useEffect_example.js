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