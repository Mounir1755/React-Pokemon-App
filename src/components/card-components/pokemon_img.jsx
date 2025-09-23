function PokemonImg({ pokemon }) {
  return (
    <img
      src={image}
      alt={pokemon.name}
      width={100}
      height={100}
    />
  );
}

export default PokemonImg;
