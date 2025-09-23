import details from './assets/details-pokemon.svg';
import {Link} from "react-router-dom";

// id meegeven als prop
function DetailsButton({ id }) {
  return (
    // " `` " zorgt ervoor dat ik variabele en tekst samen kan voegen
    <Link to={`/details/${id}`} className="pokemon_details_button">
      <img src={details} className="card_icon" alt="info_icon" />
    </Link>
  );
};

export default DetailsButton;
