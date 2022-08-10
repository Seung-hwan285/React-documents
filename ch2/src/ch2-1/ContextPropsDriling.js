import React, { useContext } from "react";
import {useState} from "react";
let context = React.createContext(null);



export default function Parent2(){

        const [fName, setfName] = useState('fristName');
        const [lName, setlName] = useState('lastName');


        return(

            <context.Provider value={{fName, lName}}>

                    <div>
                        This is a Parent component
                        <br/>
                        <ChildA/>
                    </div>

            </context.Provider>
        );
}

function ChildA() {
    return (
        <>
            <h3>This is ChildA Component.</h3>
            <br />
            <ChildB />
        </>
    );
}



function ChildB() {
    return (
        <>
            <h3>This is ChildB Component.</h3>
            <br />
            <ChildC />
        </>
    );
}

function ChildC() {
    const {fName,lName} = useContext(context);
    return (
        <>
            <h3>This is ChildC component.</h3>
            <br />
            <h3> Data from Parent component is as follows:</h3>
            <h4>{fName}</h4>
            <h4>{lName}</h4>
        </>
    );
}

