// Ejemplo de uso demétodo componenteDidUpdate en componete clase y uso de Hook en componente funcional.
import React, { Component, useEffect } from 'react';
export class DidUpdate extends Component {
    componentDidUpdate(){
        console.log('Comportamiento cuando el componente recibenuevos props o cambios en su estado privado')
    }
    render() {
        return (
            <div>
                <h1>DidUpdate</h1>                
            </div>
        );
    }
}

export const DidUpdateHook = () => {
    useEffect(() => {
        console.log('Comportamiento cuando el componente recibenuevos props o cambios en su estado privado')
    });
    return (
        <div>
            <h1>DidUpdate</h1>            
        </div>
    );
}
