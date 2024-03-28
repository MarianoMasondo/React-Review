import React, { useState } from 'react';

//Definiendo estilos en constantes:
//Estilo para usuario logueado
const loggedStyle = {
    color: 'blue'
}
//Estilo para usuario no logueado
const unloggedStyle = {
    color: 'tomato',
    fontWeight: 'bold'
}

const GreetingStyled = (props) => {
    //Generamos un estado para el componente y así controlar si el usuario está o no logueado
    const [logged, setLogged] = useState(false);

    return (
        <div style={logged ? loggedStyle : unloggedStyle}>
        {logged ? (<p>Hola, {props.name}</p>) : (<p>Please login</p>)}
            
            <button onClick={() => {
                console.log('Boton pulsado')
                setLogged(!logged)
            }}>
                { logged ? 'Logount' : 'Login'}
            </button>            
        </div>
    );
}

export default GreetingStyled;
