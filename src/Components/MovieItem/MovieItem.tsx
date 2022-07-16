import React from "react";
import { Link } from "react-router-dom";
import { baseURL, defaultImg } from "../../mocks";
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
    <Link to={`${baseURL}/detail/${movie.id}`}>
      <div className="movieItem" key={movie.id}>
        <h1>{movie.title}</h1>
        <img
          className="image"
          src={baseURL + `/movieHeroImages/${movie.id}.jpeg`}
          onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) =>
            ((e.target as HTMLImageElement).src = baseURL + defaultImg)
          }
          alt="movie-hero"
        />
      </div>
    </Link>
  );
};

export default MovieItem;
