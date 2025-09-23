import usePokemonData from "./fetch_api_data";
import "./card-style.css";
import PokemonImg from "./pokemon_img";
import PokemonName from "./pokemon_name";
import DetailsButton from "./button_details";
import FavoriteButton from "./button_favorite";

function Card() {
  const pokemons = usePokemonData();

  return (
    <>
      {pokemons.map((p) => (
        <div key={p.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
          <div className="pokemon-card">
            <PokemonName pokemon={p} />
            <PokemonImg pokemon={p} />
            <div className="buttons-pokemon-card">
              <DetailsButton id={p.id} />
              <FavoriteButton pokemon={p} />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Card;
