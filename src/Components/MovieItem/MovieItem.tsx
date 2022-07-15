import React from "react";
import "./css.css";

interface Api {
  movie: {
    genres: string[];
    id: string;
    title: string;
  };
}

const defaultImg = "/movieHeroImages/defaultImage.jpeg";

const MovieItem: React.FC<Api> = ({ movie }) => {
  return (
    <div
      className="movieItem"
      key={movie.id}
      onClick={() => console.log(movie.id)}
    >
      <h1>{movie.title}</h1>
      <img
        className="image"
        src={process.env.PUBLIC_URL + `/movieHeroImages/${movie.id}.jpeg`}
        onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) =>
          ((e.target as HTMLImageElement).src =
            process.env.PUBLIC_URL + defaultImg)
        }
        alt="movie-hero"
      />
    </div>
  );
};

export default MovieItem;
