import { useState } from "react";



export default function Parent3(){



    const [fName, setfName]= useState('firstName');

    const [lName,setlName] = useState('lastName');

    return(

            <>
              <ParentComponent>
                        <ChildA>
                                <ChildB>
                                        <ChildC data1={fName} data2={lName}/>
                                </ChildB>
                        </ChildA>
              </ParentComponent>
            </>
    );
}

const ParentComponent=(props)=>{

        return  (
                <div>{props.children}</div>
        );

}



const ChildA =({children})=>{
        return(

                <>
                        <h3>This is ChildA Component.</h3>
                        <br/>
                        {children}
                </>
        )
}



const ChildB=({children})=>{

        return(

                <>
                        <h3>This is ChildB Component.</h3>
                        <br/>
                        {children}
                </>
        )
}


const ChildC=({data1,data2})=>{

        return(
                <>
                        <h3>This is ChildC Component.</h3>
                        <br/>
                        <h4>{data1}</h4>
                        <h4>{data2}</h4>
                </>
                
        );
}