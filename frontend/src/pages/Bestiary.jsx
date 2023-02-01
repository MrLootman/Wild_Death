import React, { useState, useEffect } from "react";
import axios from "axios";
import BestiaryCard from "../components/BestiaryCard";

function Bestiary() {
  const [allCreatures, setAllCreatures] = useState([]);

  function getAllCreatures() {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/creatures`)
      .then((res) => setAllCreatures(res.data))
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    getAllCreatures();
  }, []);

  return (
    <div className="bestiary-page">
      <h1>Bestiaire</h1>
      <ul>
        {allCreatures &&
          allCreatures.map((el) => {
            return (
              <BestiaryCard
                key={el.id_creature}
                id={el.id_creature}
                name={el.name}
                image={el.image}
                illustrator={el.illustrator}
              />
            );
          })}
      </ul>
    </div>
  );
}

export default Bestiary;
