import React from "react";
import { baseURL } from "./mocks";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

import Home from "./Components/Home/Home";
import MovieDetail from "./Components/MovieDetail/MovieDetail";

const App: React.FC = (): JSX.Element => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to={`${baseURL}/`} />} />
        <Route path={`${baseURL}/`} element={<Home />} />
        <Route path={`${baseURL}/detail/:detailId`} element={<MovieDetail />} />
      </Routes>
    </div>
  );
};

export default App;
