import './App.css'
import Counter from "./features/counter/Counter.tsx";
import ToDoList from "./features/toDoList/toDoList.tsx";

function App() {
  return (
    <>
      <h1> HELLO STARWARS</h1>
        <Counter />
        <ToDoList />
    </>
  )
}

export default App
