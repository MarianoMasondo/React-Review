import React, { useEffect } from 'react';

const AllCicles = () => {
    useEffect(() => {
        
        console.log('compoentecreado')

        const intervalID = setInterval(() => {
            document.title = `${new Date()}`
            console.log('Actualización del componente')
        }, 1000);

        return () => {
            console.log('componente va a desaparecer');
            document.title = "Tiempo detenido";
            clearInterval(intervalID)
        }
       
    }, []);
    return (
        <div>            
        </div>
    );
}

export default AllCicles;
