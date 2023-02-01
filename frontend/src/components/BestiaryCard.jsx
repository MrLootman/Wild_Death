import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

function BestiaryCard({ name, image, illustrator, id }) {
  return (
    <NavLink to={`/creature/${id}`}>
      <li className="bestiary-card">
        <img src={image} alt="Monster" />
        <h2 className="_name">{name}</h2>
        <h3 className="_illustrator">
          <span>Artiste(s):</span> {illustrator}
        </h3>
      </li>
    </NavLink>
  );
}

export default BestiaryCard;

BestiaryCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  illustrator: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
