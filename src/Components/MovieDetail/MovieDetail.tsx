import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { apikey, apiURL, baseURL, defaultImg } from "../../mocks";
import "./css.css";

interface DetailProps {
  title: string;
  duration: number;
  releaseYear: string;
  description: string;
  genres: string[];
  topCast: object[];
}

const MovieDetail: React.FC = () => {
  const { detailId } = useParams<string>();
  const [data, setData] = useState<DetailProps>(Object);

  console.log(data);
  useEffect(() => {
    const getData = () =>
      fetch(apiURL + detailId, {
        headers: {
          Authorization: apikey,
        },
      })
        .then((response) => response.json())
        .then((data) => setData(data.data));
    getData();
  }, [detailId]);

  return (
    <div className="detail">
      <img
        src={baseURL + `/moviePosterImages/${detailId}.jpeg`}
        onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) =>
          ((e.target as HTMLImageElement).src = baseURL + defaultImg)
        }
        alt="movie-poster"
      />
      <div className="subDetail">
        <h1>
          {data.title} {data.releaseYear}
        </h1>
        <p>{data.description}</p>
        <h2>Movie Cast</h2>
        <div className="cast">
          {data.topCast?.map((o:any) => (
            <span>{o.name}</span>
          ))}
        </div>
        <ul>
          {data.genres?.map((i: string) => (
            <li>{i}</li>
          ))}
        </ul>
        <Link to="/">
          <button>Back To Home</button>
        </Link>
      </div>
    </div>
  );
};

export default MovieDetail;
