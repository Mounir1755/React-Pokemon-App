// pages/FavoritesPage.jsx
import { useEffect, useState } from "react";
import DetailsButton from "../components/card-components/button_details";
import FavoriteButton from "../components/card-components/button_favorite";
import '../components/card-components/card-style.css';

export default function FavoritesPage() {
  const [favoritePokemon, setFavoritePokemon] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFavorites = async () => {
      const savedFavorites = JSON.parse(localStorage.getItem("PokemonIds")) || [];
      const pokemons = [];

      for (const id of savedFavorites) {
        try {
          const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
          const data = await res.json();
          pokemons.push(data);
        } catch (err) {
          console.error("Fout bij ophalen van id:", id, err);
        }
      }

      setFavoritePokemon(pokemons);
      setLoading(false);
    };

    fetchFavorites();
  }, []);

  if (loading) return <p>Laden...</p>;

  if (favoritePokemon.length === 0) return <p>Geen favorieten gevonden.</p>;

  return (
    <div className="container">
      <div className="row">
        {favoritePokemon.map((p) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={p.id}>
            <div className="pokemon-card">
              <h2>{p.name}</h2>
              <img src={p.sprites.front_default} alt={p.name}/>
              <div className="buttons-pokemon-card">
                <DetailsButton id={p.id}/>
                <FavoriteButton id={p.id}/>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
