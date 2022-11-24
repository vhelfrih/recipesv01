import React, { useEffect, useState } from "react";
import axios from "axios";
import { FiBookOpen } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";

export default function Homepage() {
  const [error, setError] = useState(null);
  const [recipe, setRecipe] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [favourites, setFavourites] = useState(false);

  useEffect(() => {
    axios
      .get(
        `${
          process.env.REACT_APP_BACKEND || "http://localhost:1337/"
        }api/recepts`
      )
      // .get(`${process.env.REACT_APP_BACKEND}api/recepts`)
      // .get("http://localhost:1337/api/recepts")
      .then(({ data }) => setRecipe(data.data))
      .catch((error) => setError(error));
  }, [showAll]);

  const filterType = (category) => {
    setRecipe(
      recipe.filter((el) => {
        return el.attributes.category === category;
      })
    );
  };

  const filterFavourites = (category) => {
    setFavourites(
      recipe.filter((el) => {
        return el.attributes.category === category;
      })
    );
  };

  if (error) {
    return <div>An error occured: {error.message}</div>;
  }

  return (
    <div className="pl-8 pr-8 flex items-center flex-wrap">
      <button onClick={() => setShowAll(!showAll)}>Mind</button>
      <button onClick={() => filterType("leves")}>Leves</button>
      <button onClick={() => filterType("főzelék")}>Főzelék</button>
      <button onClick={() => filterType("tészta")}>Tészta</button>
      <button onClick={() => filterType("indiai")}>Indiai</button>
      <button onClick={() => filterType("desszert")}>Desszert</button>
      <button onClick={() => filterFavourites(!favourites)}>Kedvencek</button>
      <button>
        <a href="http://localhost:1337/admin" target="_blank" rel="noreferrer">
          New
        </a>
      </button>

      {
        <ul>
          {Array.isArray(recipe) &&
            recipe.map((el) => (
              <div
                key={el.id}
                className="border px-4 py-2 my-4 rounded-xl bg-slate-100 relative"
              >
                <li className="text-xl font-bold tracking-wide">
                  {el.attributes.title}
                </li>
                <FiBookOpen
                  className="text-orange-600 cursor-pointer absolute right-4 top-4"
                  size={25}
                />
                <FaHeart
                  className="text-orange-600 cursor-pointer absolute right-14 top-4"
                  size={25}
                />
                <li className="italic">{el.attributes.category}</li>
                <li className="border-b-2 pb-2">{el.attributes.ingredients}</li>
                <li className="pt-2">{el.attributes.description}</li>
              </div>
            ))}
        </ul>
      }
    </div>
  );
}
