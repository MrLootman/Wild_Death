import { Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Bestiary from "./pages/Bestiary";
import Creature from "./pages/Creature";

import "./App.css";

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bestiary" element={<Bestiary />} />
          <Route path="/creature/:id" element={<Creature />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
