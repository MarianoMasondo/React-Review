import React, {useState} from 'react';

//Login / Logout buttons
const LoginButton = ({loginAction}) => {
    return(
        <button onClick={loginAction}>Login</button>
    )
}

const LogoutButton = ({logoutAction}) => {
    return(
        <button onClick={logoutAction}>Logout</button>
    )
}

const OptionalRender = () => {

    const [access, setaccess] = useState(true);
    const [nMessages, setnMessages] = useState(0);

    const updateAccess = () => {
        setaccess(!access);
    }

    const loginAction = () => {
        setaccess(true)
    }
    const logoutAction = () => {
        setaccess(false)
    }

    let optionalButton;

    // if(access){
    //     optionalButton = <button onClick={updateAccess}>Logout</button>
    // }else{
    //     optionalButton = <button onClick={updateAccess}>Login</button>

    // }

    if(access){
        optionalButton = <LogoutButton logoutAction={logoutAction}></LogoutButton>
    }else{
        optionalButton = <LoginButton loginAction={loginAction}></LoginButton>
    }

    //unread messages
    let addMessages = () => {
        setnMessages(nMessages + 1)
    }

    return (
        <div>
            {/* Optional button */}
            { optionalButton }
            {/* N Messages Unread */}
            {/* { nMessages > 0 && nMessages === 1 &&<p>You have {nMessages} new messages...</p>}
            { nMessages > 1 && <p>You have {nMessages} new messages...</p>}
            { nMessages === 0 && <p>There are no new messasges</p>} */}
            {/* Ternary operator */}
            { nMessages > 0 ? <p>You have {nMessages} new message{nMessages > 1 ? "s" : null}...</p> : <p>There are no new messages</p>}            
            <button onClick={addMessages}>{nMessages === 0 ? "Add your first message" : "Add new message"}</button>
        </div>
    );
}

export default OptionalRender;
