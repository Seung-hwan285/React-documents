import React from "react";

import { useState } from "react";


const funSet = new Set();

const Counter = () => {
    const [count, setCount] = useState(0)
    const [otherCounter, setOtherCounter] = useState(0)



    const increase=()=>{
        setCount(count+1);
    }

    const decrease=()=>{
        setCount(count-1);
    }


    const incrementOtherCounter=()=>{
        setOtherCounter(otherCounter+1);
    }


    funSet.add(increase);
    funSet.add(decrease);
    funSet.add(incrementOtherCounter);


    console.log(funSet)
    return(

        <div>

            {count}
            <button onClick={increase}>증가</button>
            <button onClick={decrease}>감소</button>

            <button onClick={incrementOtherCounter}>incrementOtherCounter</button>
        </div>
    )
}

export default Counter;
