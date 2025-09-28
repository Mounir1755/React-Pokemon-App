// layout will be more pretty in the next update

// import data fetched from the API
import usePokemonDetails from "./fetch_details";
import './details.css';

function Details() {
  const pokemon = usePokemonDetails();
  // checks if pokemon is empty if it is it returns loading...
  if (!pokemon) return <p>Loading...</p>;

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6">
            {/* display name retreived from the API */}
            <h1>{pokemon.name}</h1>
            {/* display pictures retreived from the API */}
            <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img className="d-block w-100" src={pokemon.sprites.front_default} alt={pokemon.name} />
                </div>
                <div class="carousel-item">
                  <img className="d-block w-100" src={pokemon.sprites.back_default} alt={pokemon.name} />
                </div>
                <div class="carousel-item">
                  <img className="d-block w-100" src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
                </div>
                <div class="carousel-item">
                  <img className="d-block w-100" src={pokemon.sprites.other.home.front_default} alt={pokemon.name} />
                </div>
                <div class="carousel-item">
                  <img className="d-block w-100" src={pokemon.sprites.other["official-artwork"].front_default} alt={pokemon.name} />
                </div>
                <div class="carousel-item">
                  <img className="d-block w-100" src={pokemon.sprites.other.showdown.front_default} alt={pokemon.name} />
                </div>
                <div class="carousel-item">
                  <img className="d-block w-100" src={pokemon.sprites.other.showdown.back_default} alt={pokemon.name} />
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>

          </div>
          <div className="col-6">
            <h3>height</h3>
            <p>{pokemon.height}</p>
            <h3>weight</h3>
            <p>{pokemon.weight}</p>

            <h3>STATS</h3>
              <h6>HP</h6>
                <p>{pokemon.stats.find(s => s.stat.name === "hp").base_stat}</p>
              <h6>attack</h6>
                <p>{pokemon.stats.find(s => s.stat.name === "attack").base_stat}</p>
              <h6>defense</h6>
                <p>{pokemon.stats.find(s => s.stat.name === "defense").base_stat}</p>
              <h6>special attack</h6>
                <p>{pokemon.stats.find(s => s.stat.name === "special-attack").base_stat}</p>
              <h6>special defense</h6>
                <p>{pokemon.stats.find(s => s.stat.name === "special-defense").base_stat}</p>
              <h6>speed</h6>
                <p>{pokemon.stats.find(s => s.stat.name === "speed").base_stat}</p>
              <h3>MISC</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;