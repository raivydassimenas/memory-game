/* eslint-disable react/prop-types */
export default function Card({ title, image }) {
  return (
    <div className="card">
      <div className="card-header">{title}</div>
      <div className="card-body"><img src={image} /></div>
    </div>
  );
}