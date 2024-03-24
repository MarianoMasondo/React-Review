//Ejemplo de uso del Hook de useState
//Idea: Crearun componente de tipo función y acceder a suestado privado através de un hook y, además, poder modificarlo
import React, {useState} from 'react';

const Ejemplo1 = () => {

    //valor inicial para un contador
    const valorInicial = 0;
    //valor inicial para una persona
    const personaInicial = {
        nombre: "Martín",
        email: "martin@email.com"
    }

    //Queremos que el VALOR INICIAL y PERSONA INICIAL sean parte del estado del componente para así poder gestionar su cabio y que este se vea reflejado en la vista del componente. Estructura: const[nombreVariable, funcionParaCAmbiar] = useState(valorInicial)

    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);

    //Función para actualizar el estado privado que contiene el contador
    function incrementarContador() {
        //función para cambiar(nuevoValor)
    setContador(contador + 1)                
    }

    //función para actualizar el estado de persona en el componente
    function actualizrPersona() {
        setPersona(
            {
                nombre:"Pepe",
                email: "pepe@email.com"                
            }
        )        
    }
    return (
        <div>
            <h1>*** Ejemplo de useState() ***</h1>
            <h2>Contador: {contador}</h2>
            <h2>Datos de la Persona:</h2>
            <h3>Nombre: {persona.nombre}</h3>
            <h4>Email: {persona.email}</h4>
            {/* Bloque de botones para actualizar el estado del componente */}
            <button onClick={incrementarContador} >Incrementar Contador</button>
            <button onClick={actualizrPersona} >Actualizar Persona</button>
        </div>
    );
}

export default Ejemplo1;
