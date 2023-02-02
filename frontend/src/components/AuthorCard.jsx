import React, { useEffect } from "react";
import propTypes from "prop-types";
import AOS from "aos";
import "aos/dist/aos.css";

function AuthorCard({ name, biography, portrait }) {
  useEffect(() => {
    AOS.init({ duration: 2500 });
  }, []);

  return (
    <ul className="author-card">
      <li>
        <img src={portrait} alt={`Portrait of the author ${name}`} />
      </li>
      <li>
        <h2>
          <span>{name}</span>
        </h2>
      </li>
      <li>
        <h3>{biography}</h3>
      </li>
    </ul>
  );
}

export default AuthorCard;

AuthorCard.propTypes = {
  name: propTypes.string.isRequired,
  biography: propTypes.string.isRequired,
  portrait: propTypes.string.isRequired,
};
