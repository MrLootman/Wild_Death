import { Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Bestiary from "./pages/Bestiary";
import Author from "./pages/Author";
import Creature from "./pages/Creature";
import Creation from "./pages/Creation";

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
          <Route path="/author" element={<Author />} />
          <Route path="/creation" element={<Creation />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
