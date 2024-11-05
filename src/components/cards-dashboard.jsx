import { Card } from "./card";

export default function CardsDashboard() {
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