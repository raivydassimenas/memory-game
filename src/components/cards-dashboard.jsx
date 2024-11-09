import Card from "./card";
import { useEffect, useState } from "react";

export default function CardsDashboard() {

  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.giphy.com/v2/emoji?api_key=bPQ50ksBMMgBJ0b1Tajdn50EH4IbXIMX&limit=10&offset=0");
        const result = await response.json();
        setCards(result.data);
      } catch (error) {
        console.log("Error fetching cards data", error);
      }
    };

    fetchData();
    return () => {
      console.log("CardsDashboard component is unmounted");
    };
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <Card title="Card 1" body="This is card 1" />
        </div>
        <div className="col-md-4">
          <Card title="Card 2" body="This is card 2" />
        </div>
        <div className="col-md-4">
          <Card title="Card 3" body="This is card 3" />
        </div>
      </div>
    </div>
  );
}