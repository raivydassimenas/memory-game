import Card from "./card";
import { useEffect, useState } from "react";
import { GiphyFetch } from '@giphy/js-fetch-api';
import "./../styles/cards-dashboard.css";

export default function CardsDashboard() {

  const gf = new GiphyFetch(process.env.REACT_APP_GIPHY_API_KEY);
  const [gifs, setGifs] = useState([]);
  const [score, setScore] = useState(0);
  const [targetCard, setTargetCard] = useState(null);
  const [started, setStarted] = useState(false);


  useEffect(() => {
    const fetchGifs = async () => {
      try {
        const { data } = await gf.trending({ limit: 10 });
        setGifs(data);
      } catch (error) {
        console.error('Error fetching GIF:', error);
      }
    };

    fetchGifs();
  }, []);

  return (
    <div className="container">
    <div className="cards-container">
      {gifs.map((gif) => (
        <Card key={gif.id} title={gif.title} image={gif.images.fixed_height.url} />
      ))}
    </div>
    <div className="button-container">
      {started ? <button className="button" onClick={newGame}>New game</button> : <button className="button" onClick={resetGame}>Reset game</button>}
    </div>
    </div>
  );
}