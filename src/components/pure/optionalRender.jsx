import React, {useState} from 'react';

const OptionalRender = () => {

    const [access, setaccess] = useState(true);

    const updateAccess = () => {
        setaccess(!access);
    }

    let optionalButton;

    if(access){
        optionalButton = <button onClick={updateAccess}>Logout</button>
    }else{
        optionalButton = <button onClick={updateAccess}>Login</button>

    }
    return (
        <div>
            { optionalButton }
        </div>
    );
}

export default OptionalRender;
