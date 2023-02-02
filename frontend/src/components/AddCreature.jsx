import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";

function AddCreature() {
  const [isCreatureCreated, setIsCreatureCreated] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 2500 });
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    // watch,
  } = useForm({
    defaultValues: {
      creatureName: "",
      illustratorName: "",
      creatureIllustration: "",
    },
    mode: "onChange",
  });

  const postNewCreature = (data) => {
    console.warn(data.creatureName);
    console.warn(data.illustratorName);
    console.warn(data.creatureIllustration);
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/creatures`, {
        creatureName: data.creatureName,
      })
      .then((res) => {
        console.warn(res.data);
        axios
          .post(`${import.meta.env.VITE_BACKEND_URL}/illustration`, {
            illustratorName: data.illustratorName,
            creatureIllustration: data.creatureIllustration,
            idCreature: res.data.insertId,
          })
          .then(() => {
            setIsCreatureCreated(true);
          })
          .catch((err) => {
            console.error(err);
          });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <form
      className="add_creature_form"
      onSubmit={handleSubmit((data) => {
        postNewCreature(data);
        reset();
        return console.warn("submitted :", data);
      })}
    >
      <h1 data-aos="fade-down">Ajoute une nouvelle créature</h1>s
      {!isCreatureCreated ? (
        <div>
          <div className="form__group field">
            <input
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...register("creatureName", {
                required: "with a minimum of 4 characters",
                minLength: {
                  value: 4,
                },
              })}
              className="form__field"
              placeholder="Filter"
            />
            <label htmlFor="creature-name" className="form__label">
              Nom de la créature
            </label>
          </div>
          <div className="form__group field">
            <input
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...register("illustratorName", {
                required: "with a minimum of 4 characters",
                minLength: {
                  value: 4,
                },
              })}
              placeholder="Filter2"
              className="form__field"
            />
            <label htmlFor="artist-name" className="form__label">
              Nom de l'artiste
            </label>
          </div>

          <div className="form__group field">
            <input
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...register("creatureIllustration", {
                required: "with a minimum of 4 characters",
                minLength: {
                  value: 4,
                },
              })}
              placeholder="Filter2"
              className="form__field"
            />
            <label htmlFor="artist-name" className="form__label">
              URL de l'image
            </label>
          </div>
        </div>
      ) : (
        <div className="form__group success">
          <h1>
            Bravo, vous avez contribué à nourrir les abysses de sombres
            présages...
          </h1>
        </div>
      )}
      <button className="button-49" type="submit">
        Valider
      </button>
    </form>
  );
}

export default AddCreature;
