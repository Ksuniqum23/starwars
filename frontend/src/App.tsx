import './App.css'
import HomePage from "./pages/HomePage.tsx";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import PeoplePage from "./pages/PeoplePage.tsx";

function App() {
  return (
    <BrowserRouter>
        <Link to="/">
            <h1>HELLO STARWARS</h1>
        </Link>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/people" element={<PeoplePage />} />
            <Route path="/people/:id" element={<PeoplePage />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
