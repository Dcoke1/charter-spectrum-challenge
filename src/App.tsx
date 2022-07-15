import React from "react";
import "./App.css";

const apikey: any = process.env.REACT_APP_CUSTOM_KEY;

interface Api {
  genres: string[];
  id: string;
  title: string;
}

const App: React.FC = (): JSX.Element => {
  const [data, setData] = React.useState<Api[]>([]);
  const [id, setId] = React.useState<string>("");

  React.useEffect(() => {
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

  return (
    <div className="App">
      <h1>Container</h1>
    </div>
  );
};

export default App;
