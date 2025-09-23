import fav from './assets/fav-pokemon.svg';
import notfav from './assets/not-fav-pokemon.svg';

function FavoriteButton() {
  return (
    <a className="pokemon_favorite_button" href="favorite">
      <img src={notfav} className="card_icon" alt="heart_icon" />
    </a>
  );
};

export default FavoriteButton;
