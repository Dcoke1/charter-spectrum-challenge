import React, { useState, useEffect } from "react";
import { apikey, apiURL } from "../../mocks";
import "./css.css";

import MovieItem from "../MovieItem/MovieItem";
import NoResults from "../NoResults/NoResults";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

const Home: React.FC = (): JSX.Element => {
  const [data, setData] = useState([]);
  const [searchInput, setInput] = useState<string>("");
  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(() => {
    const getData = () =>
      fetch(apiURL, {
        headers: {
          Authorization: apikey,
        },
      })
        .then((response) => response.json())
        .then((data) => setData(data.data));
    getData();
  }, []);

  const searchItem = (value: React.SetStateAction<string>) => {
    setInput(value);

    if (searchInput !== "") {
      const filteredData = data.filter((item) => {
        return Object.values(item)
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
    <div className="home">
      <input
        placeholder="Search..."
        onChange={(e) => searchItem(e.target.value)}
      />
      <div></div>

      {data.length === 0 ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="results">
          {searchInput.length > 1 && filteredResults.length === 0 ? (
            <NoResults />
          ) : searchInput.length > 1 ? (
            filteredResults.map((a) => <MovieItem movie={a} />)
          ) : (
            data.map((b) => <MovieItem movie={b} />)
          )}
        </div>
      )}
      <ScrollToTop />
    </div>
  );
};

export default Home;
