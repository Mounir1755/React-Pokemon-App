function PokemonImg({ pokemon }) {
  return (
    <img
      src={pokemon.sprites.front_default}
      alt={pokemon.name}
      width={100}
      height={100}
    />
  );
}

export default PokemonImg;
