import { useState } from "react";
import { Link } from "react-router-dom";
import BurgerMenu from "./BurgerMenu";

function NavBar() {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked(!isClicked);
  }

  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Wild Death
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={() => handleClick()}
      >
        <span className="navbar-toggler-icon" />
      </button>
      <BurgerMenu isClicked={isClicked} />
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-item nav-link" to="/bestiary">
            Bestiary
          </Link>
          <Link className="nav-item nav-link" to="/">
            Authors
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
