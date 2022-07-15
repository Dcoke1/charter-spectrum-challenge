import React, { useState, useEffect } from "react";
import "./App.css";

import MovieItem from "./Components/MovieItem/MovieItem";
import NoResults from "./Components/NoResults/NoResults";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";

const apikey: string | undefined = process.env.REACT_APP_CUSTOM_KEY!;

const App: React.FC = (): JSX.Element => {
  const [data, setData] = useState([]);
  const [id, setId] = useState<string>("");
  const [searchInput, setSearchInput] = useState<string>("");
  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(() => {
    const getData = () =>
      fetch(`https://code-challenge.spectrumtoolbox.com/api/movies/${id}`, {
        headers: {
          Authorization: apikey,
        },
      })
        .then((response) => response.json())
        .then((data) => setData(data.data));
    getData();
  }, [id]);

  const searchItems = (searchValue: React.SetStateAction<string>) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = data.filter((item) => {
        return Object.values(item["title"])
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(data);
    }
  };

  return (
    <div className="App">
      <input
        placeholder="Search..."
        onChange={(e) => searchItems(e.target.value)}
      />
      <div className="results">
        {searchInput.length > 1 && filteredResults.length === 0 ? (
          <NoResults />
        ) : searchInput.length > 1 ? (
          filteredResults.map((a) => <MovieItem movie={a} />)
        ) : (
          data.map((b) => <MovieItem movie={b} />)
        )}
      </div>
      <ScrollToTop />
    </div>
  );
};

export default App;
