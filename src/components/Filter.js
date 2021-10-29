import "./Filter.css";

const Filter = () => {
  return (
    <div className="filter-container">
      <div className="filter">
        <label>City:</label>
        <select>
          <option value="amsterdam">Amsterdam</option>
        </select>
        <span className="custom-arrow">
          <i className="fas fa-chevron-down" />
        </span>
      </div>
      <div className="filter">
        <label className="month-label">Month:</label>
        <select>
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
  );
};

export default Filter;
