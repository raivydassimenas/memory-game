/* eslint-disable react/prop-types */
export default function Card({ title, body }) {
  return (
    <div className="card">
      <div className="card-header">{title}</div>
      <div className="card-body">{body}</div>
    </div>
  );
}