import React from "react";
const Render=({name,isSpecial})=>{

    return(

        <div>
        { isSpecial ? <b>조건부 랜더링</b> : null }
        안녕하세요 {name}
      </div>
    );
}


export default Render;