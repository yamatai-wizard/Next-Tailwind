import axios from "axios";

import React, { useEffect, useState } from "react";

const POKEMON_LIST_URL =
  "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";

const PokeList = () => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    axios
      .get(POKEMON_LIST_URL)
      .then((res) => {
        setPokemonList(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="w-48 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
      {pokemonList.map((pokemon, index) => {
        return <div key={index}>{pokemon.name}</div>;
      })}
    </div>
  );
};

export default PokeList;
