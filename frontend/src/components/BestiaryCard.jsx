import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function BestiaryCard({ name, image, illustrator, id }) {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <NavLink to={`/creature/${id}`}>
      <li className="bestiary-card">
        <img src={image} alt="Monster" />
        <h2 className="_name" data-aos="fade">
          {name}
        </h2>
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
