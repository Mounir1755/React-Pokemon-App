//import the icons
import fav from './assets/fav-pokemon.svg';
import notfav from './assets/not-fav-pokemon.svg';
// import useState to say it can say that favstatus is false
import { useState } from 'react';
function FavoriteButton({ id }) { 
  // sets favStatus on true based on what's been found in localstorage
  const [favStatus, setFavStatus] = useState(() => {
    // put retreived items from local storage in "const savedFavorites" as a array, or if its empty give an empty array
    const savedFavorites = JSON.parse(localStorage.getItem("PokemonIds")) || [];
    // turns status to true if id has been found in localstorage else its false
    return savedFavorites.includes(id);
  });

  
  // funcionality for the onClick
  const favorite = (e) => {
    e.preventDefault();
    const savedFavorites = JSON.parse(localStorage.getItem("PokemonIds")) || [];
    let updatedFavorites;

    // sets favstatus to true so src changes to fav
    if(favStatus === true ) {
      updatedFavorites = savedFavorites.filter(FavpokemonId => FavpokemonId !== id);
      setFavStatus(false);  
    } else {
      updatedFavorites = [...savedFavorites, id];
      setFavStatus(true);
    }

    localStorage.setItem("PokemonIds", JSON.stringify(updatedFavorites));
  }

  return (
                                                    //onClick start the function
    <a className="pokemon_favorite_button" href="#" onClick={favorite}> 
           {/* checks if favStatus is true then it changes to fav else its notfav */}
      <img src={favStatus ? fav : notfav} className="card_icon" alt="heart_icon" />
    </a> 
  ); 

}; export default FavoriteButton;