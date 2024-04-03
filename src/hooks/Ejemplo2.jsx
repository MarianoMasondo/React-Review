import React, {useState, useRef, useEffect} from 'react';

const Ejemplo2 = () => {
    //vamos a crear 2 contadores distintos
    //cada uno enun estado diferente
    
    const [contador1, setcontador1] = useState(0);
    const [contador2, setcontador2] = useState(0);

    //vamos acrear una referencia con useRef() para asociar una variable conun elemento del DOM del componente (vista HTML)
    const miRef = useRef();

    function incrementar1(){
        setcontador1(contador1 + 1)
    }

    function incrementar2(){
        setcontador2(contador2 + 1)
    }

    //Trabajando con UseEffect
    //Caso 1: Ejecutar siempre un snippet de código
    //Cada vez que haya un cambio en el estado del componente se ejecuta aquello que esté dentro del useEffect()
    // useEffect(() => {
    //     console.log("CAMIO EN EL ESTADO DEL COMPONENTE")
    //     console.log("Mostrando referencia a elemnto DOM");
    //     console.log(miRef)
    //     });

    //Caso 2: Ejecutar solo cuando cambie el contador 1
    //Cada vez que haya un cambio en el contador 1, se ejecuta lo que diga el useEffect(). En caso que cambie el contador 2, no habrá ejecución.
    useEffect(() => {
        console.log("CAMIO EN EL ESTADO DEL COMPONENTE")
        console.log("Mostrando referencia a elemnto DOM");
        console.log(miRef)
    }, [contador1]);

    //Caso 2: Ejecutar solo cuando cambie el contador 1 ocontador 2
    //Cada vez que haya un cambio en el contador 1, se ejecuta lo que diga el useEffect(). 
    //Cada vez que haya un cambio en el contador 2, se ejecuta lo que diga el useEffect(). 
    useEffect(() => {
        console.log("CAMIO EN EL ESTADO DEL COMPONENTE")
        console.log("Mostrando referencia a elemnto DOM");
        console.log(miRef)
    }, [contador1, contador2]);

    
    return (
        <div>
        <h1>*** Ejemplo de useState(). useRef(), useEffect() ***</h1>
        <h2>Contador 1: {contador1}</h2>
        <h2>Contador 2: {contador2}</h2>
        {/* Elemento referenciado */}
        <h4 ref={miRef}>
            Ejemplo de elemento referenciado
        </h4>
        {/* Botones para cambiar los contadores */}
            <div>
                <button onClick={incrementar1}>Incrementar contador 1</button>
                <button onClick={incrementar2}>Incrementar contador 2</button>
            </div>
        </div>
    );
}

export default Ejemplo2;
