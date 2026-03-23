import './App.css'
import Counter from "./features/counter/Counter.tsx";
import ToDoList from "./features/toDoList/toDoList.tsx";
import People from "./pages/people.tsx";

function App() {
  return (
    <>
      <h1> HELLO STARWARS</h1>
        <Counter />
        <ToDoList />
        <People />
    </>
  )
}

export default App
