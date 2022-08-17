import React from "react";

import { useState } from "react";
// import PostsForm from "./Posts";

import GetsForm from "./Gets";
import Potss from "./Postss";
function Handler(props){



    const [bool , setBool]= useState(true);



    return(
        <main>
            {/* POST */}
            <selection>
                <div>
                <Potss/>
                </div>
            </selection>


            {/* GET */}
            <section>
                <div>
                    <button onClick={()=>setBool(!bool)}>GET</button>
                    {bool ? <GetsForm/>: null}
                </div>
            </section>

    
        </main>
       
    )

}

export default Handler;