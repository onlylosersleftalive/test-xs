import "./Filter.css";

const Filter = (props) => {
  const filtersChangeHandler = (cityFilter, monthFilter) => {
    props.filterChangeHandler(cityFilter, monthFilter);
  };

  const cityChangeHandler = (event) => {
    let cityFilterValue = event.target.value;
    props.sortByCity(cityFilterValue);
    filtersChangeHandler(cityFilterValue, props.month);
  };

  const monthChangeHandler = (event) => {
    let monthFilterValue = event.target.value;
    props.sortByMonth(monthFilterValue);
    filtersChangeHandler(props.city, monthFilterValue);
  };

  return (
    <div className="filters">
      <div className="filter-container">
        <div className="filter">
          <label>City:</label>
          <select value={props.city} onChange={cityChangeHandler}>
            <option value="All">All</option>
            <option value="Amsterdam">Amsterdam</option>
            <option value="Berlin">Berlin</option>
            <option value="Rim">Rome</option>
            <option value="St.Petersburg">St.Petersburg</option>
          </select>
          <span className="custom-arrow">
            <i className="fas fa-chevron-down" />
          </span>
        </div>
        <div className="filter">
          <label className="month-label">Month:</label>
          <select value={props.month} onChange={monthChangeHandler}>
            <option value="All">All</option>
            <option value="january">January</option>
            <option value="february">February</option>
            <option value="march">March</option>
            <option value="april">April</option>
            <option value="may">May</option>
            <option value="june">June</option>
            <option value="july">July</option>
            <option value="august">August</option>
            <option value="september">September</option>
            <option value="october">October</option>
            <option value="november">November</option>
            <option value="december">December</option>{" "}
          </select>
          <span className="custom-arrow">
            <i className="fas fa-chevron-down" />
          </span>
        </div>
      </div>
      <div className="checkbox">
        <input type="checkbox" />
        <p>Liked</p>
      </div>
    </div>
  );
};

export default Filter;
