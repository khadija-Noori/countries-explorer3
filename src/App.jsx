import { useState, useEffect } from "react";
import SearchFilter from "./components/SearchFilter";
import CountryList from "./components/CountryList";
import CountryCard from "./components/CountryCard";

//  first make our states that are the brain of our components
//  next we should make our components like search filter

function App() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("all");
// in this stage i write my useEffect for fatching data
  
useEffect(() => {
  const fetchCountries = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await fetch
    ("https://restcountries.com/v3.1/all?fields=name,flags,region,population");      
      if (!res.ok) throw new Error("Failed to fetch countries");

      const data = await res.json();
      setCountries(data);
    } catch (err) {
      setError(err.message);
      setCountries([]);
    } finally {
      setLoading(false);
    }
  };

  fetchCountries();
}, []);

//  make a new use effet for filtering our data
useEffect(() => {
  const fetchCountries = async () => {
    try {
      setLoading(true);
      setError(null);

      let url = "";

      if (search.length >= 2) {
        url = `https://restcountries.com/v3.1/name/${encodeURIComponent(search)}?fields=name,flags,region,population`;
      } else if (region !== "all") {
        url = `https://restcountries.com/v3.1/region/${encodeURIComponent(region)}?fields=name,flags,region,population`;
      } else {
        url = "https://restcountries.com/v3.1/all?fields=name,flags,region,population";
      }

      const res = await fetch(url);
      if (!res.ok) {
        throw new Error("Failed to fetch countries");
      }

      const data = await res.json();
      setCountries(data);
    } catch (err) {
      setError(err.message);
      setCountries([]);
    } finally {
      setLoading(false);
    }
  };

  fetchCountries();
}, [search, region]);


 return (
  <div>
    <h1>Countries Explorer</h1>

    {/* Show Loading */}
    {loading && <p>Loading countries...</p>}

    {/* Show Error and Retry button */}
    {error && (
      <div>
        <p>Error: {error}</p>
        <button
          onClick={() => {
            setSearch(""); 
            setRegion("all"); 
            setCountries([]);
          }}
        >
          Retry
        </button>
      </div>
    )}

    {/* Search and Region filter controls */}
    <SearchFilter
      search={search}
      setSearch={setSearch}
      region={region}
      setRegion={setRegion}
    />

    {/* Show "No results found" when countries array is empty */}
    {!loading && !error && countries.length === 0 && <p>No results found</p>}

    {/* Show the list of countries */}
    {!loading && !error && countries.length > 0 && (
      <CountryList countries={countries} />
    )}
  </div>
);

}
export default App;
