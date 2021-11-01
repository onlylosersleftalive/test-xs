import React, { useState } from "react";
import "./App.css";
import Filter from "./components/Filter";
import Results from "./components/Results";

function App() {
  const [userFilters, setUserFilters] = useState({
    selectedCity: "All",
    selectedMonth: "All",
  });
  const [selectedEventsData, setSelectedEventsData] = useState([]);

  const getMonth = (date) => {
    let month = date.substr(3, 2);
    switch (month) {
      case "01":
        return "january";
        break;
      case "02":
        return "february";
        break;
      case "03":
        return "march";
        break;
      case "04":
        return "april";
        break;
      case "05":
        return "may";
        break;
      case "06":
        return "june";
        break;
      case "07":
        return "july";
        break;
      case "08":
        return "august";
        break;
      case "09":
        return "september";
        break;
      case "10":
        return "october";
        break;
      case "11":
        return "november";
        break;
      case "12":
        return "december";
        break;
      case "All":
        return "All";
        break;
      default:
        return "january";
        break;
    }
  };

  const filterChangeHandler = (cityFilter, monthFilter) => {
    fetch(
      "https://raw.githubusercontent.com/xsolla/xsolla-frontend-school-2021/main/events.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (cityFilter === "All" && monthFilter === "All") {
          setSelectedEventsData(data);
        } else {
          setSelectedEventsData(
            data.filter((element) => {
              let month = getMonth(element.date);
              if (element.city === cityFilter && month === monthFilter) {
                return element;
              } else if (element.city === cityFilter && monthFilter === "All") {
                return element;
              } else if (cityFilter === "All" && month === monthFilter) {
                return element;
              }
            })
          );
        }
      });
  };

  const cityChangeHandler = (city) => {
    setUserFilters((prevState) => {
      return { ...prevState, selectedCity: city };
    });
  };

  const monthChangeHandler = (month) => {
    setUserFilters((prevState) => {
      return { ...prevState, selectedMonth: month };
    });
  };

  return (
    <div className="app">
      <h1 className="title">Event Listing</h1>
      <Filter
        city={userFilters.selectedCity}
        month={userFilters.selectedMonth}
        sortByCity={cityChangeHandler}
        sortByMonth={monthChangeHandler}
        filterChangeHandler={filterChangeHandler}
      />
      <Results data={selectedEventsData} />
    </div>
  );
}

export default App;
