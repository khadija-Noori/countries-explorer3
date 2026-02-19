import { useState, useEffect } from "react";
import SearchFilter from "./components/SearchFilter";
//  first make our states that are the brain of our components
//  next we should make our components like search filter
function App() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("all");

  return (
    <div>
      <h1>Countries Explorer</h1>
    </div>,
    // in here i added search filter component
  <SearchFilter
  search={search}
  setSearch={setSearch}
  region={region}
  setRegion={setRegion}
  />
  );
  

}

export default App;
