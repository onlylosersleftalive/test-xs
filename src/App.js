import "./App.css";
import Filter from "./components/Filter";
import Results from "./components/Results";

function App() {
  return (
    <div className="app">
      <h1 className="title">Event Listing</h1>
      <Filter />
      <Results />
    </div>
  );
}

export default App;
