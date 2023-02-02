import React, { useEffect, useState } from "react";
import axios from "axios";
import AuthorCard from "../components/AuthorCard";

function Author() {
  const [authors, setAuthors] = useState([]);

  const getAllAuthors = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/author`)
      .then((res) => {
        setAuthors(res.data);
        console.warn(res.data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getAllAuthors();
  }, []);

  return (
    <ul className="author-page">
      <h1>Auteurs</h1>
      {authors.length > 0 &&
        authors.map((el) => {
          return (
            <AuthorCard
              name={el.name}
              biography={el.biography}
              portrait={el.portrait}
            />
          );
        })}
    </ul>
  );
}

export default Author;
