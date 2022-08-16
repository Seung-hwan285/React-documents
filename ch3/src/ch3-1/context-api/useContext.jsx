import React from "react";
import { useContext } from "react";

export const ThemeContext = React.createContext('');

export const Toolbar=()=>{
  
    return(
        <div>
            <ThemedButton/>
        </div>
    );
}


const ThemedButton=()=>{
    return(
    <div>
        <ThemedButton2/>
    </div>
    );
}


const ThemedButton2=()=>{
    return(
        <div>
            <ThemeRender/>
        </div>
    );
}

const ThemeRender=()=>{



    const theme = useContext(ThemeContext);

    console.log(theme)
    return(

        <div>

            <button style={{
                background:theme.background , 
                color: theme.foreground
            }}
   
            >
                hey button!!!
            </button>
        </div>
    )
}

