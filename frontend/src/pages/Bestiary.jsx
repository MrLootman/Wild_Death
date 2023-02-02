import React, { useState, useEffect } from "react";
import axios from "axios";
import BestiaryCard from "../components/BestiaryCard";

function Bestiary() {
  const [allCreatures, setAllCreatures] = useState([]);
  const [inputChange, setInputChange] = useState("");

  function getAllCreatures() {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/creatures`)
      .then((res) => setAllCreatures(res.data))
      .catch((err) => console.error(err));
  }

  const handleChange = (e) => setInputChange(e.target.value);

  useEffect(() => {
    getAllCreatures();
  }, []);

  return (
    <div className="bestiary-page">
      <h1>Bestiaire</h1>
      <div className="form__group field">
        <input
          type="input"
          className="form__field"
          placeholder="Filter"
          name="name"
          id="name"
          required
          onChange={handleChange}
        />
        <label htmlFor="name" className="form__label">
          Filter by name
        </label>
      </div>
      <ul>
        {allCreatures &&
          allCreatures
            .filter((el) => el.name.includes(inputChange))
            .map((el) => {
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
