import Card from "./card";
import { useEffect, useState } from "react";
import { GiphyFetch } from "@giphy/js-fetch-api";
import "./../styles/cards-dashboard.css";

export default function CardsDashboard() {
  const gf = new GiphyFetch(process.env.REACT_APP_GIPHY_API_KEY);
  const [gifs, setGifs] = useState([]);
  const [visited, setVisited] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  function shuffleArray(array) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  }

  useEffect(() => {
    const fetchGifs = async () => {
      try {
        const { data } = await gf.trending({ limit: 10 });
        setGifs(data);
      } catch (error) {
        console.error("Error fetching GIF:", error);
      }
    };

    fetchGifs();
  }, []);

  function resetGame() {
    setScore(0);
    setVisited([]);
  }

  function clickCard(cardTitle) {
    console.log("card clicked");
    if (!visited.includes(cardTitle)) {
      const newScore = score + 1;
      setScore(newScore);
      if (newScore > highScore) {
        setHighScore(newScore);
      }
      if (newScore === 10) {
        alert("You won!");
        resetGame();
      } else {
        setVisited([...visited, cardTitle]);
        setGifs(shuffleArray(gifs));
      }
    } else {
      setScore(0);
      setVisited([]);
    }
  }

  return (
    <div className="dashboard">
      <div className="container">
        <div className="cards-container">
          {gifs.map((gif) => (
            <Card
              onClick={() => clickCard(gif.title)}
              key={gif.id}
              title={gif.title}
              image={gif.images.fixed_height.url}
            />
          ))}
        </div>
        <div className="button-container">
          <button className="button" onClick={resetGame}>
            Reset game
          </button>
          <p className="score">Score: {score}</p>
          <p className="score">High score: {highScore}</p>
        </div>
      </div>
    </div>
  );
}
