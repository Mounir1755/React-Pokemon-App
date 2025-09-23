import { useEffect, useState } from "react";

function usePokemondata() { 
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=52")
      .then(res => res.json())
      .then(data => {
        Promise.all(
          data.results.map(p =>
            fetch(p.url).then(res => res.json())
          )
        ).then(fullData => setPokemons(fullData));
      });
  }, []);

  return pokemons;
}

export default usePokemondata;
