import React, { useMemo } from 'react';
import { useState } from 'react';
const Average=()=>{


    const [list, setList]=useState([]);

    const [number, setNumber]=  useState('');



    const getAvergae= useMemo(()=>{
        console.log('평균값 계산중');
        
        if(list.length ===0) return 0;


        

        const sum = list.reduce((a,b)=>a+b);


        return sum / list.length;
    },[list]);

        


    const onChange=(e)=>{
        setNumber(e.target.value);
    }

    const onInsert=(e)=>{
        const nextList = list.concat(Number(number));

    
        setList(nextList);

        setNumber('');
    };

    return(
        <div>
            <input value={number} onChange={onChange}/>
            <button onClick={onInsert}>등록</button>
            <ul>
                {
                list.map((value,index)=>(

                            
                    <li key={index}>{value}</li>
                    
                ))}                
            </ul>

            <div>
                <b>평균값;</b> {getAvergae()}

            </div>
        </div>
    )
}

export default Average;