import logo from "./logo.svg";
import "./App.css";
// import GreetingFunctionalComponent from './components/pure/greetingFunctional Component';
import TaskListComponent from "./components/container/task_list";
import Ejemplo1 from "./hooks/Ejemplo1";

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
        <Ejemplo1></Ejemplo1>
      </header>
    </div>
  );
}

export default App;
