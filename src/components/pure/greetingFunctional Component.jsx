import React, {useState} from "react";
import PropTypes from "prop-types";

const GreetingFunctionalComponent = (props) => {

    //Breve introducción a useState
    //const [variable, método para actualizarlo] = useState(valor inicial)

    const [age, setage] = useState(29);

    const birthday = () => {
        //actualizamos el state
        setage(age + 1)
    }


  return (
    <div>
      <h1>Hola {props.name} desde Componente Funcional!</h1>
      <h2>Tu edad es de: {age}</h2>
      <div>
        <button onClick={birthday}>cumplir años</button>
      </div>
    </div>
  );
};

GreetingFunctionalComponent.propTypes = {
    name: PropTypes.string
};

export default GreetingFunctionalComponent;
