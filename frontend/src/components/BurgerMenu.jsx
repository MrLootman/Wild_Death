import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function BurgerMenu({ isClicked }) {
  return (
    <ul className={isClicked ? "burger-menu_on" : "burger-menu_on_off"}>
      <Link to="/bestiary">
        <p>Bestiaire</p>
      </Link>
      <Link to="/authors">
        <p>Auteurs</p>
      </Link>
      <Link to="/creation">
        <p>Création</p>
      </Link>
    </ul>
  );
}

export default BurgerMenu;

BurgerMenu.propTypes = {
  isClicked: PropTypes.bool.isRequired,
};
