import details from './assets/details-pokemon.svg';
function DetailsButton() {
  return (
    <a className="pokemon_details_button" href="details">
      <img src={details} className="card_icon" alt="info_icon" />
    </a>
  );
};

export default DetailsButton;
