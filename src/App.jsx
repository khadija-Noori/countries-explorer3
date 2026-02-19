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
// in this stage i write my useEffect for fatching data
  useEffect(()=>{
    const fetchCountries=async()=>{
      try{
        setLoading(true);
        setError(null);

        const response = await fetch(
          "https://restcountries.com/v3.1/all"
        );
        if(!response.ok){
          throw new Error ("Failed to fetch countries");
        }
        const data = await response.json();
        setCountries(data);
      }
      catch (err){
        setError(err.message);
       setCountries([]);
      }
      finally {
        setLoading(false);
      }
    };
    fetchCountries();
  },
[]);

  return (
    <div>
      <h1>Countries Explorer</h1>
       {loading && <p>Loading countries...</p>}
      {error && <p>Error: {error}</p>}
    // in here i added search filter component
  <SearchFilter
  search={search}
  setSearch={setSearch}
  region={region}
  setRegion={setRegion}
  />
  </div>
  );
  }

export default App;
