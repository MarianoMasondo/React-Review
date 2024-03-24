import logo from "./logo.svg";
import "./App.css";
// import GreetingFunctionalComponent from './components/pure/greetingFunctional Component';
import TaskListComponent from "./components/container/task_list";
import Ejemplo1 from "./hooks/Ejemplo1";
import Ejemplo2 from "./hooks/Ejemplo2";
import MiComponenteConContexto from "./hooks/Ejemplo3";
import Ejemplo4 from "./hooks/Ejemplo4";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
        <Ejemplo4 nombre="Martín">
        {/* Todo lo que hay aquí dentro es tratado como props.children */}
          <h3>
            Contenido de props.children
          </h3>
        </Ejemplo4>
      </header>
    </div>
  );
}

export default App;
