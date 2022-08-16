import { useState, useEffect, useMemo, useCallback } from 'react';

function UseCallbackExample(params) {

    
    const [value,setValue]= useState(0);



    const handlerCallback=useCallback(()=>{


        console.log(`${value}`);

        return;
    },[value]);

    // useMemo(()=>{


    //     console.log('의존성 배열이 변경되었습니다');
    // },[handlerCallback]);


    // useEffect(()=>{
    //     console.log('의존성 배열이 변경되었습니다');
    // },[handlerCallback]);



    


    const handlerClick=(e)=>{
        setValue(e.target.value);
    }



    return(
        <div>
            <input
                in="input"
                type="number"
                value={value}

                onChange={handlerClick}
            />
    
        <button onClick={handlerCallback}>확인</button>
 
        </div>
    );
        
}
export default UseCallbackExample;