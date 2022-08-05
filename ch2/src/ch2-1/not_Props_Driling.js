import React from "react";
let context = React.createContext(null);


export default function Parent2(){

        const [fName, setfName] = userState('fristName');
        const [lName, setlName] = userState('lastName');

}

function ChildA(){

    return(

        <>
            This is ChildA Component.

            <br/>

            <ChildB/>
        </>
    );
}

function ChildB(){

    return(
        <>
            This is ChildB Component.
            <br/>

            <ChildC/>
        </>
    );
}


function ChildC(){
    return(

        <>
            <h3>This is ChildC component.</h3>
            <br />
            <h3> Data from Parent component is as follows:</h3>
            <h4>{fname}</h4>
            <h4>{lname}</h4>
        </>
    );
}