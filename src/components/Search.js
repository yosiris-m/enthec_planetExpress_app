import "../styles/search.scss";

function Search() {
  return (
    <>
      <div className="searchCar">
        <input
          type="text"
          className="searchCar_search"
          placeholder="Camisetas de invierno"
        />
        <div>
          <i className="searchCar_cart fas fa-shopping-cart fa-2x"></i>
          <i className="searchCar_heart fas fa-heart fa-2x"></i>
        </div>
      </div>
    </>
  );
}

export default Search;
