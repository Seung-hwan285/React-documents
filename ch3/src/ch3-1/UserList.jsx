import { React } from 'react';

function User({user,onRemove,onToggle}){

    return(
        <div>
            <b
            style={{
                cursor : 'pointer',
                color : user.active ? 'green' : 'black'
            }}
            
            onClick={()=>onToggle(user.id)}
            />
            
        </div>
    )
}



export default User;