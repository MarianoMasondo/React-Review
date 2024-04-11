import React, {useState} from 'react';

let red = 0;
let green = 200;
let blue = 150;

// ? Estilo para usuario logueado
const loggedStyle = {
    backgroundColor: `rgb(${red}, ${green}, ${blue})`,
    color: "white",
    fontWeight: "bold"
}
// ? Estilo para usuario no logueado
const unloggedStyle = {
    backgroundColor: "tomato",
    color: "white",
    fontWeight: "bold"
}
//Login / Logout buttons
const LoginButton = ({loginAction, propStyle}) => {
    return(
        <button style={loggedStyle} onClick={loginAction}>Login</button>
    )
}


const LogoutButton = ({logoutAction, propStyle}) => {
    return(
        <button style={unloggedStyle} onClick={logoutAction}>Logout</button>
    )
}

// ? (Expresión true) && expresión => se renderiza la expresión
// ? (Expresión false) && expresión => no se renderiza la expresión


const OptionalRender = () => {

    const [access, setaccess] = useState(false);
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
        optionalButton = <LogoutButton propStyle={unloggedStyle} logoutAction={logoutAction}></LogoutButton>
    }else{
        optionalButton = <LoginButton propStyle={loggedStyle} loginAction={loginAction}></LoginButton>
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
            {access ? (
                <div>
                { nMessages > 0 ? <p>You have {nMessages} new message{nMessages > 1 ? "s" : null}...</p> : <p>There are no new messages</p>}            
            <button onClick={addMessages}>{nMessages === 0 ? "Add your first message" : "Add new message"}</button>

            </div>) : null}
            
        </div>
    );
}

export default OptionalRender;
