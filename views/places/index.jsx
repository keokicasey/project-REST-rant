const React = require("react");
const Def = require("../default");

function index(data) {
  let placesFormatted = data.places.map((place) => {
    return (
      <div className="col-sm-6">
        <h2>
          <a href={`/places/${place.id}`}>
            {place.name}
          </a>
        </h2>
        <img src={place.pic} alt={place.name} />
        <h3>
          Located in {place.city}, {place.state}
        </h3>
      </div>
    )
  })
  return (
    <Def>
      <main>
        <h1>PLACES INDEX PAGE</h1>
        <div className='row'>{placesFormatted}</div>
      </main>
    </Def>
  );
}

module.exports = index;