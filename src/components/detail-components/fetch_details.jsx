// import useEffect to fetch data from the API
// import useState to say that pokemon is empty until data has been set
import { useEffect, useState } from "react";
// import useParams to retrieve the id from the URL to fetch the correct API data
import { useParams } from "react-router-dom";

function usePokemonDetails() {
  // create a state variable pokemon and a function setPokemon to store the fetched data
  const [pokemon, setPokemon] = useState(null);
  // get the dynamic id from the current URL
  const { id } = useParams();

  // run this effect whenever the id changes
  useEffect(() => {
    // fetch the Pokemon data from the API using the id
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      // convert the response to JSON
      .then(res => res.json())
      // update the pokemon state with the fetched data
      .then(data => setPokemon(data));
  }, [id]);
  
  // return the fetched Pokemon data so it can be used by a component
  return pokemon;
}

export default usePokemonDetails;
