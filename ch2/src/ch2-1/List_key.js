import React from "react";
/// key 
const users = [
    {
        id : 1,
        name : 'a',
    },

    {
        id : 2,
        name : 'b',
    },
];


function User({user}){

    return(
        <div>
                {user.name}
        </div>
    );
}


export default function UserList(){
    return(
        <div>
            {users.map(($el)=>(
                <User user={$el} key={$el.id}/>
           ))}
        </div>
    );
}


// not key
// const users=[

//     'a',
//     'b',
//     'z',
//     'c',
//     'd',
// ];


//  function User({user}){
    
//      return(
//          <div>
//                  {user}
//          </div>
//      );
//  }

// function UserList(){
//     return (

//         <div>
//         {
            
//             users.map(($el)=>(

                
//                              <User user={$el} key={$el.id}/>
            
//                          ))}

//         </div>
//     )
    
// }
  
//   export default UserList;