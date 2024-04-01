import logo from "./logo.svg";
import "./App.css";
// import GreetingFunctionalComponent from './components/pure/greetingFunctional Component';
import TaskListComponent from "./components/container/task_list";
import Ejemplo1 from "./hooks/Ejemplo1";
import Ejemplo2 from "./hooks/Ejemplo2";
import MiComponenteConContexto from "./hooks/Ejemplo3";
import Ejemplo4 from "./hooks/Ejemplo4";
import GreetingStyled from "./components/pure/greetingStyled";
import Father from "./components/container/father";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> */}
        {/*componente propio Greeting.jsx*/}
        {/* <Greeting name="Mariano"></Greeting> */}
        {/*Componente de ejemplo funcional*/}
        {/*<GreetingFunctionalComponent name="Mariano"></GreetingFunctionalComponent>*/}
        {/*Componente de listado de tareas*/}
        {/* <TaskListComponent></TaskListComponent> */}
        {/*Ejemplo de susu de hooks*/}
        {/* <Ejemplo1></Ejemplo1> */}
        {/* <Ejemplo2></Ejemplo2> */}
        {/* <MiComponenteConContexto></MiComponenteConContexto> */}
        {/* Todo lo que hay aquí dentro es tratado como props.children */}
        {/* <Ejemplo4 nombre="Martín">
          <h3>
            Contenido de props.children
          </h3>
        </Ejemplo4> */}
        {/* <GreetingStyled name='Marian'></GreetingStyled> */}
      {/* </header> */}
      {/* Gestión de eventos */}
      <Father></Father>
      {/* <TaskListComponent></TaskListComponent> */}
      
    </div>
  );
}

export default App;
