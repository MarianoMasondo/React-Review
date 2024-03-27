// Ejemplo de uso del método componentWillUnmount para componente clase y ejemplo de uso de hooks para componente funcional.
// (cuando el componente vaa desaparecer)

import React, { Component, useEffect } from 'react';

export class WillUnmount extends Component {

    componentWillUnmount(){
        console.log('Comportamiento antes que el componente desaparezca')
    }
    render() {
        return (
            <div>
                <h1>WillUnmount</h1>                
            </div>
        );
    }
}

export const WillUnmount = () => {
    useEffect(()=> {
        //aqui no poenmos nada
        return() => {
            console.log('Comportamiento antes de que el componente desaparezca')
        }
    })
    return (
        <div>
            <h1>WillUnmount</h1>            
        </div>
    );
}

export default WillUnmount;

