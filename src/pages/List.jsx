import Card from "../components/card-components/card";
import './list-page.css'
function List() {

  return (
    <>
      <div className="container">
        <div className="row">
            <h1>Welcome! Here you can browse all Pokémon.</h1>
            <Card />
        </div>
      </div>
    </>
  );
}

export default List;
