import React from "react"

export default function Composition(){

    return(
        <>
            <Sidebar >
                <Content/>
                <Content/>
            </Sidebar>
        </>
    );
}


const Sidebar=(props)=>{

    return(
        <div className="sidebar">

           {/* {props.children} */}

        </div>

    );
}


const Content=()=>{

    return(
        <div>
                <h1>Sidebar data 1</h1>
                <h1>Sidebar data 2</h1>
                <h1>Sidebar data 3</h1>
                <h1>Sidebar data 4</h1>
        </div>
    );
}