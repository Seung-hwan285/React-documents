import React, { useState } from "react";

export default function Parent() {

    const [fName, setfName] = useState("firstName");
    const [lName, setlName] = useState("LastName");
    
    return (
        <>
            <h1>This is a Parent component</h1>
            <br />
            <ChildA fname={fName} lname={lName} />
        </>
    );
}



function ChildA({ fname, lname }) {

    return (
        <>
            <h3>This is ChildA Component.</h3>
            <br />
            <ChildB fname={fname} lname={lname} />
        </>
    );
}





function ChildB({ fname, lname }) {

    return (
        <>
            <h3>This is ChildB Component.</h3>
            <br />
            <ChildC fname={fname} lname={lname} />
        </>
    );
}



function ChildC({ fname, lname }) {

 
    return (
        <>
            <h3>This is ChildC component.</h3>
            <br />
            <h3> Data from Parent component is as follows:</h3>
            <h4>{fname}</h4>
            <h4>{lname}</h4>
        </>
    );
}

