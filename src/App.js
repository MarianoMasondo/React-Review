import logo from './logo.svg';
import './App.css';
// import GreetingFunctionalComponent from './components/pure/greetingFunctional Component';
import TaskListComponent from './components/container/task_list';

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
        <TaskListComponent></TaskListComponent>

      </header>
    </div>
  );
}

export default App;
