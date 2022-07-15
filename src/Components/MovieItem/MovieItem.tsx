import React from "react";
import "./css.css";

interface Api {
  movie: {
    genres: string[];
    id: string;
    title: string;
  };
}


const MovieItem: React.FC<Api> = ({ movie }) => {
  return (
    <div
      className="movieItem"
      key={movie.id}
      onClick={() => console.log(movie.id)}
    >
      <h1>{movie.title}</h1>
    </div>
  );
};

export default MovieItem;
