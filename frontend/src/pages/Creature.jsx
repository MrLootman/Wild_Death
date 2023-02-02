import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function Creature() {
  const [creatureId, setCreatureId] = useState(undefined);
  const navigate = useNavigate();

  const { id } = useParams();

  const getCreatureInfos = () => {
    axios(`${import.meta.env.VITE_BACKEND_URL}/creatures/${id}`)
      .then((res) => setCreatureId(res.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getCreatureInfos();
  }, []);

  return (
    <ul className="creature-description">
      {/* {creatureId && console.warn(creatureId)} */}
      {creatureId && (
        <>
          <li>
            <img src={creatureId.image} alt={creatureId} />
          </li>
          <li>
            <h2>
              <span>Auteur :</span> {creatureId.name}
            </h2>
          </li>
          <li>
            <h2>
              <span>Ouvrage :</span> {creatureId.book_name}
            </h2>
          </li>
          <li>
            <h3>
              <span>Description :</span> {creatureId.description}
            </h3>
          </li>
          <li>
            <h3>
              <span>Illustré par :</span> {creatureId.illustrator}
            </h3>
          </li>
          <button
            type="button"
            className="button-49"
            onClick={() => navigate("/bestiary")}
          >
            Revenir
          </button>
        </>
      )}
    </ul>
  );
}

export default Creature;
