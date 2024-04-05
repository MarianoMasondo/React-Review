// Ejemplo de uso del método de ciclo de vida en componente de clase y el hook de ciclo de vida encomponente funcional.
import React, { Component } from 'react';
import { useEffect } from 'react';
export class DidMount extends Component {
    componenteDidMount(){
        console.log('Comportamiento antes de que el componente sea añadido al DOM(renderice')
    }

    render() {
        return (
            <div>
                <h1>DidMount</h1>                
            </div>
        );
    }
}

export const DidMountHook = () => {
    useEffect(() => {
        console.log('Comportamiento antes de que el componente sea añadido al DOM (renderice)')
    }, [])
    return (
        <div>
            <h1>DidMount</h1>            
        </div>
    );
}
